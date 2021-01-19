import React from 'react';
import img from '../../assets/bird.jpg';
import { Audio } from '../index';
import styled from 'styled-components';
import { Image, Card } from '../styled';

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

const Question = ({ randomBird, correctAnswer }) => {
  const { name, audio, image } = randomBird;

  return (
    <QuestionCard>
      <Image src={correctAnswer ? image : img} alt="unknown bird" />
      <Wrapper>
        <BirdName>
          {correctAnswer ? name : '\u2217'.repeat(name.length)}
        </BirdName>
        <Separator />
        <Audio audio={audio} />
      </Wrapper>
    </QuestionCard>
  );
};

export { Question };
