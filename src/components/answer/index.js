import React from 'react';
import { SuccessAnimation } from '../index';
import './answer.css';
import classNames from 'classnames';

const Answer = ({ onAnswer, bird, correctBirdId, inCorrectBirdIds }) => {
  const { id: BirdId, name: BirdName } = bird;
  const classes = classNames('list-group-item', {
    'list-group-item-success': correctBirdId === BirdId,
    'list-group-item-danger': inCorrectBirdIds.find((id) => id === BirdId),
  });

  return (
    <li className={classes} onClick={() => onAnswer(BirdId)}>
      {BirdName} {correctBirdId === BirdId && <SuccessAnimation />}
    </li>
  );
};

export { Answer };
