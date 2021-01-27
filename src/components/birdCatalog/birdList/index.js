import React, { useEffect } from 'react';
import { List } from '../../styled';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { loadAllBirds, selectBirdFromCatalog } from '../../../actions/actions';
import Bird from '../bird';

const StyledList = styled(List)`
  max-height: 23rem;
  overflow-y: scroll;
`;

const BirdList = ({ birds, loadAllBirds, selectBirdFromCatalog }) => {
  const hasBirds = !!birds.length;

  useEffect(() => {
    loadAllBirds();
  }, [loadAllBirds]);

  if (hasBirds) {
    return (
      <StyledList>
        {birds.map((category) => {
          return category.map((bird) => {
            return (
              <Bird
                key={bird.id}
                bird={bird}
                selectBirdFromCatalog={selectBirdFromCatalog}
              />
            );
          });
        })}
      </StyledList>
    );
  } else {
    return <div>information wasn't loaded</div>;
  }
};

const mapStateToProps = ({ birdCatalog: { birds } }) => {
  console.log(birds);
  return { birds };
};

const mapDispatchToProps = {
  loadAllBirds,
  selectBirdFromCatalog,
};

export default connect(mapStateToProps, mapDispatchToProps)(BirdList);
