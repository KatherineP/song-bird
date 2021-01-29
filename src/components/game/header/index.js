import React, { useEffect } from 'react';
import styled from 'styled-components';
import { MenuWrapper, Navigation, FlexWrapper } from '../../styled';
import { useSelector, useDispatch } from 'react-redux';
import { loadBirdCategories } from '../../../actions/actions';
import Spinner from '../spinner';

const Score = styled.h5`
  align-self: center;
`;

const Header = () => {
  const dispatch = useDispatch();
  const totalScore = useSelector((state) => state.game.totalScore);
  const categories = useSelector((state) => state.game.categories);
  const gameLevel = useSelector((state) => state.game.gameLevel);
  const loading = useSelector((state) => state.game.loading);
  const hasCategories = !!categories.length;

  useEffect(() => {
    dispatch(loadBirdCategories());
  }, [hasCategories, dispatch]);

  return (
    <div>
      <FlexWrapper>
        <h1>SongBird</h1>
        <Score>Score: {totalScore}</Score>
      </FlexWrapper>
      <HeaderMenu
        gameLevel={gameLevel}
        categories={categories}
        loading={loading}
      />
    </div>
  );
};

const HeaderMenu = ({ gameLevel, categories, loading }) => {
  const spinner = loading ? <Spinner /> : null;
  return (
    <MenuWrapper>
      {spinner}
      <HeaderItems gameLevel={gameLevel} categories={categories} />
    </MenuWrapper>
  );
};

const HeaderItems = ({ gameLevel, categories }) => {
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

export default Header;
