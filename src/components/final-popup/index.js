import React from 'react';
import styled from 'styled-components';
import { StyledButton, Text, ContainerPopUp, PopUp } from '../styled';
import { connect } from 'react-redux';
import { onPlayAgain } from '../../actions/actions';
import { Link } from 'react-router-dom';

const Title = styled(Text)`
  font-size: 3rem;
`;

const Button = styled(StyledButton)`
  margin-top: 5rem;
  display: block;
  margin-bottom: 1rem;
  font-size: xx-large;
`;

const FinalPopUp = ({ onPlayAgain, totalScore }) => {
  return (
    <ContainerPopUp>
      <PopUp>
        <Title>Игра окончена!</Title>
        <Text>Вы набрали {totalScore} баллов из 30!</Text>
        <Button
          to="/game"
          as={Link}
          color="primary"
          size="lg"
          href="/#"
          type="button"
          onClick={() => onPlayAgain()}
        >
          {' '}
          Играть еще раз
        </Button>
      </PopUp>
    </ContainerPopUp>
  );
};

const mapStateToProps = ({ game: { totalScore } }) => {
  return { totalScore };
};

const mapDispatchToProps = {
  onPlayAgain,
};

export default connect(mapStateToProps, mapDispatchToProps)(FinalPopUp);
