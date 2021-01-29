import React from 'react';
import { Wrapper, StyledRow, Column } from '../components/styled';
import { BirdList, DetailsContainerCatalog } from '../components/index';
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
