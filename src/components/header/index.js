import React, { useEffect } from 'react';
import styled from 'styled-components';
import { MenuWrapper, Navigation, FlexWrapper } from '../styled';
import { connect } from 'react-redux';
import { loadBirdCategories } from '../../actions/actions';
import Spinner from '../spinner';

const Score = styled.h5`
  align-self: center;
`;

const Header = ({
  gameLevel,
  totalScore,
  categories,
  loadBirdCategories,
  loading,
}) => {
  const hasCategories = !!categories.length;

  useEffect(() => {
    loadBirdCategories();
  }, [loadBirdCategories, hasCategories]);

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

const mapStateToProps = ({
  game: { gameLevel, totalScore, categories, loading },
}) => {
  return { gameLevel, totalScore, categories, loading };
};

const mapDispatchToProps = {
  loadBirdCategories,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
