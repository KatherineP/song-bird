import React from 'react';
import { categories } from '../../config';
import { FlexWrapper } from '../styled';
import styled from 'styled-components';
import { MenuWrapper, Navigation } from '../styled';

const Score = styled.h5`
  align-self: center;
`;

const Header = ({ gameLevel, totalScore }) => {
  return (
    <div>
      <FlexWrapper>
        <h1>SongBird</h1>
        <Score>Score: {totalScore}</Score>
      </FlexWrapper>
      <HeaderMenu gameLevel={gameLevel} />
    </div>
  );
};

const HeaderMenu = ({ gameLevel }) => {
  return (
    <MenuWrapper>
      <Navigation variant="pills">
        {categories.map((category, idx) => {
          return (
            <Navigation.Item key={category}>
              <Navigation.Link active={idx === gameLevel}>
                {category}
              </Navigation.Link>
            </Navigation.Item>
          );
        })}
      </Navigation>
    </MenuWrapper>
  );
};

export { Header };
