import React from 'react';
import { connect } from 'react-redux';
import BirdDetailInfo from '../../birdDetailInfo';
import EmptyBirdDetail from '../../emptyBirdDetail';

const DetailsContainerGame = ({ selectedBird }) => {
  return !Object.entries(selectedBird).length ? (
    <EmptyBirdDetail selectedBird={selectedBird} />
  ) : (
    <BirdDetailInfo selectedBird={selectedBird} />
  );
};

const mapStateToProps = ({ game: { selectedBird } }) => {
  return { selectedBird };
};

export default connect(mapStateToProps)(DetailsContainerGame);
