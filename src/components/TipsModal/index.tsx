import { ListBySize } from '@screens/RandomList';
import React from 'react';
import ReactNativeModal from 'react-native-modal';
import * as S from './styles';

type Props = {
  verticalTips: ListBySize;
  horizontalTips: ListBySize;
  isVisible: boolean;
  handleDismiss: () => void;
};

export const TipsModal = ({
  verticalTips,
  horizontalTips,
  isVisible,
  handleDismiss,
}: Props) => {
  return (
    <ReactNativeModal isVisible={isVisible} onBackdropPress={handleDismiss}>
      <S.Container>
        <S.Content>
          <S.Column>
            <S.Title>Horizontais</S.Title>
            {Object.keys(horizontalTips).map(key =>
              horizontalTips[Number(key)].map((number, index) => (
                <S.Value isChecked={number.isChecked} key={index}>
                  {number.value}
                </S.Value>
              )),
            )}
          </S.Column>
          <S.Column>
            <S.Title>Verticais</S.Title>
            {Object.keys(verticalTips).map(key =>
              verticalTips[Number(key)].map((number, index) => (
                <S.Value isChecked={number.isChecked} key={index}>
                  {number.value}
                </S.Value>
              )),
            )}
          </S.Column>
        </S.Content>

        <S.Footer>
          <S.CloseButton onPress={handleDismiss}>
            <S.CloseButtonText>Fechar</S.CloseButtonText>
          </S.CloseButton>
        </S.Footer>
      </S.Container>
    </ReactNativeModal>
  );
};
