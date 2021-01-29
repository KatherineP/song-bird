import React, { useEffect } from 'react';
import img from '../../../assets/bird.jpg';
import styled from 'styled-components';
import { Image, Card } from '../../styled';
import { useSelector, useDispatch } from 'react-redux';
import {
  loadBirdsFromCategory,
  selectRandomBird,
} from '../../../actions/actions';
import { Spinner, Audio } from '../../index';

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

const Question = () => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.game.categories);
  const gameLevel = useSelector((state) => state.game.gameLevel);
  const correctAnswer = useSelector((state) => state.game.correctAnswer);
  const randomBird = useSelector((state) => state.game.randomBird);
  const birdsFromCategory = useSelector(
    (state) => state.game.birdsFromCategory
  );
  const hasBirdsFromCategories = !!birdsFromCategory.length;
  const hasCategories = !!categories.length;

  useEffect(() => {
    if (hasCategories) {
      const birdCategoryId = categories[gameLevel];
      dispatch(loadBirdsFromCategory(birdCategoryId));
    }
  }, [hasCategories, categories, gameLevel, dispatch]);

  useEffect(() => {
    if (hasBirdsFromCategories) {
      dispatch(selectRandomBird(birdsFromCategory));
    }
  }, [birdsFromCategory, dispatch, hasBirdsFromCategories]);

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
export { Question };
