import React from 'react';
import { ListItem } from '../../styled';
import styled from 'styled-components';

const StyledListItem = styled(ListItem)`
  overflow-y: scroll;
`;

const Bird = ({ birdName, history }) => {
  return (
    <StyledListItem
      onClick={() => {
        history.push('/birdCatalog/' + birdName.toLowerCase());
      }}
    >
      {birdName}
    </StyledListItem>
  );
};

export { Bird };
