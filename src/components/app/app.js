import React, { useReducer } from 'react'
import './app.css'
import Header from '../header'
import Question from '../question'
import AnswersList from '../answersList'
import Details from '../bird-details'
import Play from '../play-button'
import birdsData from '../../config'
import FinalPopUp from '../final-popup'
import reducer from '../../reducer'

const App = () => {
  const randomNum = Math.floor(Math.random() * 6) + 1

  const[state, dispatch] = useReducer(reducer, {
    gameLevel: 0,
    nextLevel: false,
    birdCategory: 0,
    selectedBird: {},
    randomBirdId: randomNum,
    correctAnswer: false,
    totalScore: 0,
    scorePerRound: 5,
    correctBirdId: null,
    inCorrectBirdId: [],
    birdConfig: birdsData
  })
  console.log(state)

  const { gameLevel,  nextLevel, selectedBird, randomBirdId, correctAnswer, totalScore,
          correctBirdId, inCorrectBirdId, birdCategory, birdConfig} = state

  const randomBird = birdConfig[birdCategory].find((bird) => bird.id === randomBirdId)

  console.log(randomBird.name)

  const onBirdSelected = id => dispatch({type: 'onBirdSelected', payload: id, randomBird: randomBird})

  const onNextLevel = () => dispatch({type: 'onNextLevel'})

  const onPlayAgain = () => dispatch({type: 'onPlayAgain'})

  if(gameLevel === birdsData.length){
    return <FinalPopUp onPlayAgain={onPlayAgain} totalScore={totalScore}/>
  }

  return (
  <div className = "container">
      <Header gameLevel={gameLevel} totalScore={totalScore}/>
      <Question randomBird={randomBird} correctAnswer={correctAnswer}/>

    <div className="row mb2">
      <div className="col-md-6">
        <AnswersList onAnswer={onBirdSelected} birdCategory={birdConfig[birdCategory]}
        correctBirdId={correctBirdId} inCorrectBirdId={inCorrectBirdId}/>
      </div>
      <div className="col-md-6">
        <Details birdInfo={selectedBird}/>
      </div>
    </div>

    <Play nextLevel={nextLevel} onNextLevel={onNextLevel}/>
    </div>
  )

  }
export default App