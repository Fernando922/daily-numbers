import { Loading } from '@components/Loading';
import { TipsModal } from '@components/TipsModal';
import React, { useState, useEffect } from 'react';
import * as S from './styles';

type Position = {
  value: string;
  isWrong: boolean;
};

type Tip = {
  value: string;
  isChecked: boolean;
  numberIndexes: number[];
};

export type ListBySize = {
  [key: number]: Tip[];
};

type Orientation = 'vertical' | 'horizontal';

type ListOrientation = { horizontal: Orientation; vertical: Orientation };

export const RandomList = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [numbersList, setNumbersList] = useState<Position[]>([]);
  const [answers, setAnswers] = useState<number[]>([]);
  const [verticalTips, setVerticalTips] = useState<ListBySize>(
    {} as ListBySize,
  );
  const [horizontalTips, setHorizontalTips] = useState<ListBySize>(
    {} as ListBySize,
  );
  const [isTipsModalVisible, setIsTipsModalVisible] = useState<boolean>(false);
  const [isUserList, setIsUserList] = useState<boolean>(false);

  const [userVerticalNumbers, setUserVerticalNumbers] = useState<ListBySize>(
    {} as ListBySize,
  );
  const [userHorizontalNumbers, setUserHorizontalNumbers] =
    useState<ListBySize>({} as ListBySize);

  const rowsAndCollumnsQuantity = 6;
  const totalNumbers = Math.pow(rowsAndCollumnsQuantity, 2);

  const numbersOrientation: ListOrientation = {
    horizontal: 'horizontal',
    vertical: 'vertical',
  };

  const setTips = (orientation: Orientation, numbersBySize: ListBySize) => {
    if (orientation === numbersOrientation.horizontal) {
      return setHorizontalTips({ ...numbersBySize });
    }
    return setVerticalTips({ ...numbersBySize });
  };

  const identifyNumbersBySize = (
    list: number[][],
    orientation: Orientation,
  ) => {
    const numbersBySize: ListBySize = {
      1: [],
      2: [],
      3: [],
      4: [],
      5: [],
      6: [],
    };

    for (let i = 0; i < list.length; i++) {
      let acc = '';
      let numberIndexes = [];
      list[i].map((number, index) => {
        if (number.value < 10) {
          acc += number.value.toString();
          numberIndexes.push(number.index);
        }

        if (
          acc.length &&
          (index === rowsAndCollumnsQuantity - 1 || number.value > 9)
        ) {
          numbersBySize[acc.length].push({
            value: acc,
            isChecked: false,
            numberIndexes: JSON.stringify(numberIndexes),
          });
          acc = '';
          numberIndexes.length = 0;
        }
      });
    }

    console.log(orientation, numbersBySize);

    setTips(orientation, numbersBySize);
  };

  const mapHorizontalNumbers = (numbersList: number[]) => {
    let result = [];
    for (let i = rowsAndCollumnsQuantity; i > 0; i--) {
      result.push(numbersList.splice(0, Math.ceil(numbersList.length / i)));
    }

    identifyNumbersBySize(result, numbersOrientation.horizontal);
  };

  const mapVerticalNumbers = (numbersList: number[]) => {
    let result = [];

    for (let i = 0; i < rowsAndCollumnsQuantity; i++) {
      let accArray = [];
      for (let j = i; j < totalNumbers; j += rowsAndCollumnsQuantity) {
        accArray.push(numbersList[j]);
      }
      result.push(accArray);
    }

    identifyNumbersBySize(result, numbersOrientation.vertical);
  };

  const mapAllNumbersPositions = (list: number[]) => {
    mapVerticalNumbers([...list]);
    mapHorizontalNumbers([...list]);
  };

  const generateRandomNumbers = () => {
    let newList = [];
    for (let i = 0; i < Math.pow(rowsAndCollumnsQuantity, 2); i++) {
      newList.push({
        value: Math.round(Math.random() * 12),
        index: i,
      });
    }

    setAnswers(newList);

    mapAllNumbersPositions([...newList]);
  };

  useEffect(() => {
    generateRandomNumbers();
  }, []);

  const handleChangeValue = (text: string, index: number) => {
    const listinha = [];
    listinha.length = 36;

    listinha[14] = '22';

    const newList = [...numbersList];
    newList[index] = text;

    setNumbersList(newList);
  };

  const handleReset = () => {
    generateRandomNumbers();
    setNumbersList([]);
  };

  const toggleModal = () => {
    setIsTipsModalVisible(!isTipsModalVisible);
  };

  useEffect(() => {
    if (
      Object.keys(verticalTips).length &&
      Object.keys(horizontalTips).length
    ) {
      setIsLoading(false);
    }
  }, [verticalTips, horizontalTips]);

  useEffect(() => {
    // console.log(numbersList);
  }, [numbersList]);

  return (
    <Loading isActive={isLoading}>
      <S.Container>
        <S.Board>
          {answers.map((position, index) => (
            <S.Input
              key={position.index}
              keyboardType="numeric"
              value={numbersList[index]}
              // placeholder={position.value.toString()}
              editable={position.value < 10}
              maxLength={1}
              onChangeText={text => handleChangeValue(text, index)}
              wrongNumber={numbersList[index]?.isWrong}
            />
          ))}
        </S.Board>

        <S.Footer>
          <S.Button onPress={handleReset}>
            <S.ButtonText>Reiniciar</S.ButtonText>
          </S.Button>
          <S.Button onPress={toggleModal}>
            <S.ButtonText>Dicas</S.ButtonText>
          </S.Button>
        </S.Footer>
        <TipsModal
          handleDismiss={toggleModal}
          horizontalTips={horizontalTips}
          verticalTips={verticalTips}
          isVisible={isTipsModalVisible}
        />
      </S.Container>
    </Loading>
  );
};
