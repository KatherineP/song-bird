import React from 'react';
import { SuccessAnimation } from '../../index';
import { ListItem } from '../../styled';
import { useDispatch, useSelector } from 'react-redux';
import { onSelectAnswer } from '../../../actions/actions';

const Answer = ({ bird }) => {
  const correctBirdId = useSelector((state) => state.game.correctBirdId);
  const inCorrectBirdIds = useSelector((state) => state.game.inCorrectBirdIds);
  const dispatch = useDispatch();

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
      onClick={() => dispatch(onSelectAnswer(bird))}
    >
      {BirdName} {correctBirdId === BirdId && <SuccessAnimation />}
    </ListItem>
  );
};

export default Answer;
