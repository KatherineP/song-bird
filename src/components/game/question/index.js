import React, { useEffect } from 'react';
import img from '../../../assets/bird.jpg';
import Audio from '../../audio';
import styled from 'styled-components';
import { Image, Card } from '../../styled';
import { connect } from 'react-redux';
import {
  loadBirdsFromCategory,
  selectRandomBird,
} from '../../../actions/actions';
import Spinner from '../spinner';

const QuestionCard = styled(Card)`
  margin: 2rem auto;
  display: flex;
  justify-content: space-between;
`;

const Wrapper = styled.div`
  flex-grow: 1;
`;

const Separator = styled.hr`
  margin-bottom: 1.5rem;
`;

const BirdName = styled.p`
  font-size: 1.6rem;
`;

const Question = ({
  randomBird,
  correctAnswer,
  categories,
  gameLevel,
  birdsFromCategory,
  loadBirdsFromCategory,
  selectRandomBird,
  loading,
}) => {
  const hasBirdsFromCategories = !!birdsFromCategory.length;
  const hasCategories = !!categories.length;

  useEffect(() => {
    if (hasCategories) {
      const birdCategoryId = categories[gameLevel];
      loadBirdsFromCategory(birdCategoryId);
    }
  }, [loadBirdsFromCategory, hasCategories, categories, gameLevel]);

  useEffect(() => {
    if (hasBirdsFromCategories) {
      selectRandomBird(birdsFromCategory);
    }
  }, [hasBirdsFromCategories, selectRandomBird, birdsFromCategory]);

  const questionInfo =
    Object.keys(randomBird).length > 0 ? (
      <QuestionInfo randomBird={randomBird} correctAnswer={correctAnswer} />
    ) : (
      <Spinner />
    );

  return <QuestionCard>{questionInfo}</QuestionCard>;
};

const QuestionInfo = ({ randomBird, correctAnswer }) => {
  const { name, audio, image } = randomBird;
  return (
    <>
      <Image src={correctAnswer ? image : img} alt="unknown bird" />
      <Wrapper>
        <BirdName>
          {correctAnswer ? name : '\u2217'.repeat(name.length)}
        </BirdName>
        <Separator />
        <Audio audio={audio} />
      </Wrapper>
    </>
  );
};

const mapStateToProps = ({
  game: {
    randomBird,
    correctAnswer,
    categories,
    gameLevel,
    birdsFromCategory,
    loading,
  },
}) => {
  return {
    randomBird,
    correctAnswer,
    categories,
    gameLevel,
    birdsFromCategory,
    loading,
  };
};

const mapDispatchToProps = {
  loadBirdsFromCategory,
  selectRandomBird,
};

export default connect(mapStateToProps, mapDispatchToProps)(Question);
