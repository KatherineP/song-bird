import React from 'react';
import { Audio } from '../index';
import styled from 'styled-components';
import { Image, Card, FlexWrapper, Text } from '../styled';

const Description = styled.p`
  margin-top: 10px;
`;

const Separator = styled.hr`
  margin-bottom: 0.25rem;
`;

const DetailInfo = styled.div`
  flex-grow: 1;
`;

const Details = ({ birdInfo }) => {
  return !Object.entries(birdInfo).length ? (
    <EmptyBirdDetail birdInfo={birdInfo} />
  ) : (
    <BirdDetailInfo birdInfo={birdInfo} />
  );
};

const BirdDetailInfo = ({ birdInfo }) => {
  const { name, species, description, image, audio } = birdInfo;
  return (
    <Card>
      <FlexWrapper>
        <Image src={image} alt="unknown bird" />
        <DetailInfo>
          <Text>{name}</Text>
          <p>{species}</p>
          <Separator />
          <Audio audio={audio} />
        </DetailInfo>
      </FlexWrapper>
      <Description>{description}</Description>
    </Card>
  );
};

const EmptyBirdDetail = ({ birdInfo }) => {
  if (!Object.entries(birdInfo).length) {
    return (
      <>
        <p>Послушайте плеер.</p>
        <p>Выберите птицу из списка</p>
      </>
    );
  }
};

export { Details };
