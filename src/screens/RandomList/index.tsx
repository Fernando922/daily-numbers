import React, { useState, useEffect } from 'react';
import * as S from './styles';

type Position = {
  value: string;
  isWrong: boolean;
};

type ListBySize = {
  [key: number]: string[];
};

type Orientation = 'vertical' | 'horizontal';

type ListOrientation = { horizontal: Orientation; vertical: Orientation };

export const RandomList = () => {
  const [numbersList, setNumbersList] = useState<Position[]>([]);
  const [answers, setAnswers] = useState<number[]>([]);
  const [verticalTips, setVerticalTips] = useState<ListBySize>(
    {} as ListBySize,
  );
  const [horizontalTips, setHorizontalTips] = useState<ListBySize>(
    {} as ListBySize,
  );

  const rowsAndCollumnsQuantity = 6;
  const totalNumbers = Math.pow(rowsAndCollumnsQuantity, 2);

  const numbersOrientation: ListOrientation = {
    horizontal: 'horizontal',
    vertical: 'vertical',
  };

  const indentifyNumbersBySize = (
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
      list[i].map((number, index) => {
        if (number < 10) {
          acc += number.toString();
        }

        if (
          acc.length &&
          (index === rowsAndCollumnsQuantity - 1 || number > 9)
        ) {
          numbersBySize[acc.length].push(acc);
          acc = '';
        }
      });
    }

    if (orientation === numbersOrientation.horizontal) {
      return setHorizontalTips({ ...numbersBySize });
    }
    return setVerticalTips({ ...numbersBySize });
  };

  const mapHorizontalNumbers = (numbersList: number[]) => {
    let result = [];
    for (let i = rowsAndCollumnsQuantity; i > 0; i--) {
      result.push(numbersList.splice(0, Math.ceil(numbersList.length / i)));
    }

    indentifyNumbersBySize(result, numbersOrientation.horizontal);
  };

  const mapVerticalNumbers = (numbersList: number[]) => {
    let result = [];
    debugger;

    for (let i = 0; i < rowsAndCollumnsQuantity; i++) {
      let accArray = [];
      for (let j = i; j < totalNumbers; j += rowsAndCollumnsQuantity) {
        accArray.push(numbersList[j]);
      }
      result.push(accArray);
    }

    indentifyNumbersBySize(result, numbersOrientation.vertical);
  };

  const generateRandomNumbers = () => {
    let newList: number[] = [];
    for (let i = 0; i < Math.pow(rowsAndCollumnsQuantity, 2); i++) {
      newList.push(Math.round(Math.random() * 12));
    }

    setAnswers(newList);

    mapVerticalNumbers([...newList]);
    mapHorizontalNumbers([...newList]);
  };

  useEffect(() => {
    generateRandomNumbers();
  }, []);

  const handleChangeValue = (text: string, index: number) => {
    const newList: Position[] = [];
    newList[index] = { value: text, isWrong: true };

    if (answers[index] === Number(text)) {
      newList[index].isWrong = false;
    }

    setNumbersList(newList);
  };

  useEffect(() => {
    console.log('horizontal', horizontalTips);
  }, [horizontalTips]);

  useEffect(() => {
    console.log('vertical', verticalTips);
  }, [verticalTips]);

  return (
    <S.Container>
      <S.Board>
        {answers.map((position, index) => (
          <S.Input
            key={index}
            keyboardType="numeric"
            value={position.toString()}
            editable={position < 10}
            maxLength={1}
            onChangeText={text => handleChangeValue(text, index)}
            wrongNumber={numbersList[index]?.isWrong}
          />
        ))}
      </S.Board>

      <S.Button onPress={generateRandomNumbers}>
        <S.ButtonText>Reiniciar</S.ButtonText>
      </S.Button>
    </S.Container>
  );
};
