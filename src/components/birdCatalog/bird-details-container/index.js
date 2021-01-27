import React from 'react';
import { connect } from 'react-redux';
import BirdDetailInfo from '../../birdDetailInfo';
import EmptyBirdDetail from '../../emptyBirdDetail';

const DetailsContainerCatalog = ({ selectedBird }) => {
  return !Object.entries(selectedBird).length ? (
    <EmptyBirdDetail selectedBird={selectedBird} />
  ) : (
    <BirdDetailInfo selectedBird={selectedBird} />
  );
};

const mapStateToProps = ({ birdCatalog: { selectedBird } }) => {
  return { selectedBird };
};

export default connect(mapStateToProps)(DetailsContainerCatalog);
