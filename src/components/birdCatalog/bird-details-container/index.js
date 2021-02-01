import React, { useEffect } from 'react';
import { BirdDetailInfo, EmptyBirdDetail } from '../../index';
import { useSelector, useDispatch } from 'react-redux';
import { loadSelectedBird } from '../../../store/birdCatalog/middleware';

const DetailsContainerCatalog = ({ match }) => {
  const { name } = match.params;
  const dispatch = useDispatch();
  const selectedBird = useSelector((state) => state.birdCatalog.selectedBird);

  useEffect(() => {
    dispatch(loadSelectedBird(name));
  }, [dispatch, name]);

  return !selectedBird ? (
    <EmptyBirdDetail selectedBird={selectedBird} />
  ) : (
    <BirdDetailInfo selectedBird={selectedBird} />
  );
};
export { DetailsContainerCatalog };
