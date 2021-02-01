import React from 'react';
import { Wrapper, StyledRow, Column } from '../components/styled';
import { withRouter } from 'react-router-dom';
import { BirdList, DetailsContainerCatalog } from '../components/index';
const BirdCatalog = ({ history, match }) => {
  return (
    <Wrapper>
      <h1>Bird Catalog</h1>
      <StyledRow>
        <Column md={6}>{<BirdList history={history} match={match} />}</Column>
        <Column md={6}>
          <DetailsContainerCatalog match={match} />
        </Column>
      </StyledRow>
    </Wrapper>
  );
};

export default withRouter(BirdCatalog);
