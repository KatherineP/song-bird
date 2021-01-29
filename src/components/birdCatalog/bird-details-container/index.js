import React from 'react';
import BirdDetailInfo from '../../birdDetailInfo';
import EmptyBirdDetail from '../../emptyBirdDetail';
import { useSelector } from 'react-redux';

const DetailsContainerCatalog = () => {
  const selectedBird = useSelector((state) => state.birdCatalog.selectedBird);
  return !Object.entries(selectedBird).length ? (
    <EmptyBirdDetail selectedBird={selectedBird} />
  ) : (
    <BirdDetailInfo selectedBird={selectedBird} />
  );
};
export default DetailsContainerCatalog;
