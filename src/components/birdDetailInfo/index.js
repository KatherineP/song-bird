import React from 'react';
import Audio from '../audio';
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

const BirdDetailInfo = ({ selectedBird }) => {
  const { name, species, description, image, audio } = selectedBird;
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

export default BirdDetailInfo;
