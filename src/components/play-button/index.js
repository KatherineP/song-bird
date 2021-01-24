import React from 'react';
import { StyledButton } from '../styled';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { onNextLevel } from '../../actions/actions';

const PlayButton = styled(StyledButton)`
  width: 100%;
  margin-top: 1rem;
`;

const Play = ({ correctAnswer, onNextLevel }) => {
  return (
    <PlayButton
      color="success"
      size="lg"
      mt={3}
      type="button"
      onClick={() => (correctAnswer ? onNextLevel() : null)}
      disabled={!correctAnswer}
    >
      Next Level!
    </PlayButton>
  );
};

const mapStateToProps = ({ correctAnswer }) => {
  return { correctAnswer };
};

const mapDispatchToProps = {
  onNextLevel,
};

export default connect(mapStateToProps, mapDispatchToProps)(Play);
