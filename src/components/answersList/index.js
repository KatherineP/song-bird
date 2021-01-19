import React from 'react';
import { Answer } from '../index';
import { List } from '../styled';

const AnswersList = ({
  onAnswer,
  birdCategory,
  correctBirdId,
  inCorrectBirdIds,
}) => {
  return (
    <List>
      {birdCategory.map((bird) => {
        return (
          <Answer
            onAnswer={onAnswer}
            bird={bird}
            key={bird.id}
            correctBirdId={correctBirdId}
            inCorrectBirdIds={inCorrectBirdIds}
          />
        );
      })}
    </List>
  );
};

export { AnswersList };
