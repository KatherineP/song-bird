import React from 'react';
import { StyledButton } from '../../styled';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { onNextLevel } from '../../../store/game/actionCreators';

const PlayButton = styled(StyledButton)`
  width: 100%;
  margin-top: 1rem;
`;

const Play = () => {
  const dispatch = useDispatch();
  const correctAnswer = useSelector((state) => state.game.correctAnswer);
  return (
    <PlayButton
      color="success"
      size="lg"
      mt={3}
      type="button"
      onClick={() => (correctAnswer ? dispatch(onNextLevel()) : null)}
      disabled={!correctAnswer}
    >
      Next Level!
    </PlayButton>
  );
};

export { Play };
