import React from 'react';
import Answer from '../answer';
import { List } from '../styled';
import { connect } from 'react-redux';
import Spinner from '../spinner';
import { onSelectAnswer } from '../../actions/actions';

const AnswersList = ({
  birdsFromCategory,
  randomBird,
  correctBirdId,
  inCorrectBirdIds,
  onSelectAnswer,
}) => {
  const list =
    Object.keys(randomBird).length > 0 ? (
      <List>
        {birdsFromCategory.map((bird) => {
          return (
            <Answer
              key={bird.id}
              bird={bird}
              correctBirdId={correctBirdId}
              inCorrectBirdIds={inCorrectBirdIds}
              onSelectAnswer={onSelectAnswer}
            />
          );
        })}
      </List>
    ) : (
      <Spinner />
    );

  return <div>{list}</div>;
};

const mapStateToProps = ({
  game: { birdsFromCategory, randomBird, correctBirdId, inCorrectBirdIds },
}) => {
  return {
    birdsFromCategory,
    randomBird,
    correctBirdId,
    inCorrectBirdIds,
  };
};

const mapDispatchToProps = {
  onSelectAnswer,
};

export default connect(mapStateToProps, mapDispatchToProps)(AnswersList);
