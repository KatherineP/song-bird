import React, { useEffect } from 'react';
import { Wrapper, StyledRow, Column, ListItem, List } from '../styled';
import { connect } from 'react-redux';
import { loadAllBirds } from '../../actions/actions';

const BirdCatalog = ({ birds, loadAllBirds }) => {
  const hasBirds = !!birds.length;

  useEffect(() => {
    console.log('useEffect');
    loadAllBirds();
  }, [loadAllBirds]);

  console.log(birds);
  return (
    <Wrapper>
      <h1>Bird Catalog</h1>
      <StyledRow>
        <Column md={6}>
          {hasBirds ? <ListOfBirds birds={birds} /> : <div>test</div>}
        </Column>
        <Column md={6}>{/* <Details /> */}</Column>
      </StyledRow>
    </Wrapper>
  );
};

const ListOfBirds = ({ birds }) => {
  return (
    <List>
      {birds.map((category) => {
        return category.map((bird) => {
          return <Answer key={bird.id} bird={bird} />;
        });
      })}
    </List>
  );
};
const Answer = ({ bird }) => {
  const { name: BirdName } = bird;
  return <ListItem>{BirdName}</ListItem>;
};

const mapStateToProps = ({ birdCatalog: { birds } }) => {
  console.log('birds >>>', birds);
  return { birds };
};

const mapDispatchToProps = {
  loadAllBirds,
};

export default connect(mapStateToProps, mapDispatchToProps)(BirdCatalog);
