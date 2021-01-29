import React from 'react';
import { ListItem } from '../../styled';
import styled from 'styled-components';
import { selectBirdFromCatalog } from '../../../actions/actions';
import { useDispatch } from 'react-redux';

const StyledListItem = styled(ListItem)`
  overflow-y: scroll;
`;

const Bird = ({ bird }) => {
  const dispatch = useDispatch();
  const { name: BirdName } = bird;
  return (
    <StyledListItem onClick={() => dispatch(selectBirdFromCatalog(bird))}>
      {BirdName}
    </StyledListItem>
  );
};

export default Bird;
