import React from 'react'
import './question.css'
import img from '../../assets/bird.jpg'
import Audio from '../audio'

const Question = ({ randomBird, correctAnswer }) => {

  const {name, audio, image } = randomBird;

  return (
    <div className="jumbotron d-flex justify-content-between">
      <img className ="bird-image" src={(correctAnswer) ? image : img} alt="unknown bird"/>
      <div className="flex-grow-1">
      <h4>{(correctAnswer) ? name : '*'.repeat(name.length)}</h4>
        <hr className="my-4"/>
        <Audio audio={audio}/>
      </div>
    </div>
  )
}

export default Question