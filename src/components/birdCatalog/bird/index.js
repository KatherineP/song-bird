import React from 'react';
import { ListItem } from '../../styled';
import styled from 'styled-components';

const StyledListItem = styled(ListItem)`
  overflow-y: scroll;
`;

const Bird = ({ bird, selectBirdFromCatalog }) => {
  const { name: BirdName } = bird;
  return (
    <StyledListItem onClick={() => selectBirdFromCatalog(bird)}>
      {BirdName}
    </StyledListItem>
  );
};

export default Bird;
