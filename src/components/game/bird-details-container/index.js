import React from 'react';
import { useSelector } from 'react-redux';
import { BirdDetailInfo, EmptyBirdDetail } from '../../index';

const DetailsContainerGame = () => {
  const selectedBird = useSelector((state) => state.game.selectedBird);
  return !Object.entries(selectedBird).length ? (
    <EmptyBirdDetail selectedBird={selectedBird} />
  ) : (
    <BirdDetailInfo selectedBird={selectedBird} />
  );
};

export { DetailsContainerGame };
