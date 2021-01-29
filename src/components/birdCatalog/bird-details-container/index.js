import React from 'react';
import { BirdDetailInfo, EmptyBirdDetail } from '../../index';
import { useSelector } from 'react-redux';

const DetailsContainerCatalog = () => {
  const selectedBird = useSelector((state) => state.birdCatalog.selectedBird);
  return !Object.entries(selectedBird).length ? (
    <EmptyBirdDetail selectedBird={selectedBird} />
  ) : (
    <BirdDetailInfo selectedBird={selectedBird} />
  );
};
export { DetailsContainerCatalog };
