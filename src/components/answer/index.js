import React from 'react';
import { SuccessAnimation } from '../index';
import { ListItem } from '../styled';
import { connect } from 'react-redux';
import { onSelectAnswer } from '../../actions/actions';

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

const mapStateToProps = ({ correctBirdId, inCorrectBirdIds }) => {
  return { correctBirdId, inCorrectBirdIds };
};

const mapDispatchToProps = {
  onSelectAnswer,
};

export default connect(mapStateToProps, mapDispatchToProps)(Answer);
