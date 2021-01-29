import React from 'react';
import Answer from '../answer';
import { List } from '../../styled';
import { useSelector } from 'react-redux';
import Spinner from '../spinner';

const AnswersList = () => {
  const birdsFromCategory = useSelector(
    (state) => state.game.birdsFromCategory
  );
  const randomBird = useSelector((state) => state.game.randomBird);
  // const dispatch = useDispatch();
  //dispatch(onSelectAnswer());

  const list = Object.keys(randomBird).length ? (
    <List>
      {birdsFromCategory.map((bird) => {
        return <Answer key={bird.id} bird={bird} />;
      })}
    </List>
  ) : (
    <Spinner />
  );

  return <div>{list}</div>;
};

export default AnswersList;
