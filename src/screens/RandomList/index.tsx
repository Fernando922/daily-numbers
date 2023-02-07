import React, { useState, useEffect } from 'react';
import * as S from './styles';

type Position = {
  value: string;
  isWrong: boolean;
};

type ListBySize = {
  1: number[];
  2: number[];
  3: number[];
  4: number[];
  5: number[];
  6: number[];
};

export const RandomList = () => {
  const [numbersList, setNumbersList] = useState<Position[]>([]);
  const [answers, setAnswers] = useState<number[]>([]);

  const rowsAndCollumnsQuantity = 6;

  const removeDisabledNumbers = (list: number[][]) => {
    const numbersBySize: ListBySize = {
      1: [],
      2: [],
      3: [],
      4: [],
      5: [],
      6: [],
    };

    debugger;

    for (let i = 0; i < list.length; i++) {
      console.log(list[i]);

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
    console.log(numbersBySize);
  };

  const mapHorizontalNumbers = (numbersList: number[]) => {
    let result = [];
    for (let i = rowsAndCollumnsQuantity; i > 0; i--) {
      result.push(numbersList.splice(0, Math.ceil(numbersList.length / i)));
    }

    removeDisabledNumbers(result);
  };

  const generateRandomNumbers = () => {
    let newList: number[] = [];
    for (let i = 0; i < Math.pow(rowsAndCollumnsQuantity, 2); i++) {
      newList.push(Math.round(Math.random() * 12));
    }

    setAnswers(newList);

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
      console.log('acertou!');
    }

    console.log(newList);

    setNumbersList(newList);
  };

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
