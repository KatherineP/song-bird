import React, { useEffect } from 'react';
import { List } from '../../styled';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { loadAllBirds } from '../../../actions/actions';
import Bird from '../bird';

const StyledList = styled(List)`
  max-height: 23rem;
  overflow-y: scroll;
`;

const BirdList = () => {
  const birds = useSelector((state) => state.birdCatalog.birds);
  const dispatch = useDispatch();
  const hasBirds = !!birds.length;

  useEffect(() => {
    dispatch(loadAllBirds());
  }, [dispatch]);

  if (hasBirds) {
    return (
      <StyledList>
        {birds.map((category) => {
          return category.map((bird) => {
            return <Bird key={bird.id} bird={bird} />;
          });
        })}
      </StyledList>
    );
  } else {
    return <div>information wasn't loaded</div>;
  }
};

export default BirdList;
