import React from 'react';
import { SuccessAnimation } from '../../index';
import { ListItem } from '../../styled';

const Answer = ({ bird, correctBirdId, inCorrectBirdIds, onSelectAnswer }) => {
  const { id: BirdId, name: BirdName } = bird;
  return (
    <ListItem
      color={
        inCorrectBirdIds.find((id) => id === BirdId)
          ? 'danger'
          : correctBirdId === BirdId
          ? 'success'
          : null
      }
      onClick={() => onSelectAnswer(bird)}
    >
      {BirdName} {correctBirdId === BirdId && <SuccessAnimation />}
    </ListItem>
  );
};

export default Answer;
