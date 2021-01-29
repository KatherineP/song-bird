import React from 'react';
import { Wrapper, StyledRow, Column } from '../components/styled';
import BirdList from '../components/birdCatalog/birdList';
import DetailsContainerCatalog from '../components/birdCatalog/bird-details-container';

const BirdCatalog = () => {
  return (
    <Wrapper>
      <h1>Bird Catalog</h1>
      <StyledRow>
        <Column md={6}>{<BirdList />}</Column>
        <Column md={6}>
          <DetailsContainerCatalog />
        </Column>
      </StyledRow>
    </Wrapper>
  );
};

export default BirdCatalog;
