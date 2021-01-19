import React from 'react';
import { StyledButton } from '../styled';
import styled from 'styled-components';

const PlayButton = styled(StyledButton)`
  width: 100%;
  margin-top: 1rem;
`;

const Play = ({ onNextLevel, nextLevel }) => {
  return (
    <PlayButton
      color="success"
      size="lg"
      mt={3}
      type="button"
      onClick={nextLevel ? onNextLevel : null}
      disabled={!nextLevel}
    >
      Next Level!
    </PlayButton>
  );
};

export { Play };
