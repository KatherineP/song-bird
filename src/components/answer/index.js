import React from 'react';
import { SuccessAnimation } from '../index';
import { ListItem } from '../styled';

const Answer = ({ onAnswer, bird, correctBirdId, inCorrectBirdIds }) => {
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
      onClick={() => onAnswer(BirdId)}
    >
      {BirdName} {correctBirdId === BirdId && <SuccessAnimation />}
    </ListItem>
  );
};

export { Answer };
