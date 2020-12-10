import React from 'react';
import SuccessAnimation from '../success-animation'
import './answer.css';

const Answer = ({ onAnswer, bird, correctBirdId, inCorrectBirdId }) => {
  let classes = ['list-group-item']

  if(correctBirdId === bird.id){
    classes.push('list-group-item-success')
  } else if(inCorrectBirdId.find(id => id === bird.id)) {
    classes.push('list-group-item-danger')
  }

  return (
    <li className={classes.join(' ')}
      onClick={() => onAnswer(bird.id)}>
      {bird.name} {(correctBirdId === bird.id) && <SuccessAnimation/>}
    </li>
  )
}

export default Answer;