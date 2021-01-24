import React from 'react';
import Answer from '../answer';
import { List } from '../styled';
import { connect } from 'react-redux';

const AnswersList = ({ birdsFromCategory }) => {
  return (
    <List>
      {birdsFromCategory.map((bird) => {
        return <Answer key={bird.id} bird={bird} />;
      })}
    </List>
  );
};

const mapStateToProps = ({ birdsFromCategory }) => {
  return { birdsFromCategory };
};

export default connect(mapStateToProps)(AnswersList);
