import React from 'react'
import './answersList.css'
import Answer from '../answer'

const AnswersList = ({ onAnswer, birdCategory, correctBirdId, inCorrectBirdId }) => {
  const arrayOfBirds = birdCategory.map((bird) => {
      return <Answer onAnswer={onAnswer} bird={bird} key={bird.id}
      correctBirdId={correctBirdId} inCorrectBirdId={inCorrectBirdId}/>
  })
    return (
      <ul className="list-group">
        {arrayOfBirds}
      </ul>
    )
}

export default AnswersList;