import React, { useEffect } from 'react';
import { List } from '../../styled';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { loadAllBirds } from '../../../store/birdCatalog/middleware';
import { Bird } from '../../index';

const StyledList = styled(List)`
  max-height: 23rem;
  overflow-y: scroll;
`;

const BirdList = ({ history, match }) => {
  const birds = useSelector((state) => state.birdCatalog.birds);
  const dispatch = useDispatch();
  const hasBirds = !!birds.length;

  useEffect(() => {
    dispatch(loadAllBirds());
  }, [dispatch]);

  if (hasBirds) {
    return (
      <StyledList>
        {birds.map((bird) => {
          return (
            <Bird key={bird} birdName={bird} history={history} match={match} />
          );
        })}
      </StyledList>
    );
  } else {
    return <div>information wasn't loaded</div>;
  }
};

export { BirdList };
