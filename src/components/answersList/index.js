import React from 'react';
import './answersList.css';
import { Answer } from '../index';

const AnswersList = ({
  onAnswer,
  birdCategory,
  correctBirdId,
  inCorrectBirdIds,
}) => {
  return (
    <ul className="list-group">
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
    </ul>
  );
};

export { AnswersList };
