import React, { useState, useEffect, useReducer } from 'react'
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
  const [ birdCategory, setBirdCategory ] = useState(0);

  const[state, dispatch] = useReducer(reducer, {
    gameLevel: 0,
    nextLevel: false,
    birdCategory,
    selectedBird: {},
    randomBird: birdsData[birdCategory].find((bird) => bird.id === randomNum),
    correctAnswer: false,
    totalScore: 0,
    scorePerRound: 5,
    correctBirdId: null,
    inCorrectBirdId: [],
    birdsData 
  })
  console.log(state)

  const getDetailInfo = id => dispatch({type: 'getDetailInfo', payload: id})

  const onNextLevel = () => dispatch({type: 'onNextLevel'})

  const onPlayAgain = () => dispatch({type: 'onPlayAgain'})

 useEffect(() =>{
  const updateRandomBird = () => dispatch({type: 'updateRandomBird', payload: randomNum})
  console.log('useEffect')
   if(state.birdCategory > birdCategory && birdCategory < birdsData.length + 1){
    setBirdCategory(prevCategory => prevCategory + 1)
    updateRandomBird();
   } else if(state.birdCategory === 0) {
    setBirdCategory(0)
    updateRandomBird();
   }
 }, [state.birdCategory])


  console.log(state.randomBird.name)

  const { gameLevel,  nextLevel, selectedBird, randomBird, correctAnswer, totalScore, correctBirdId, inCorrectBirdId} = state

  if(gameLevel === birdsData.length){
    return <FinalPopUp onPlayAgain={onPlayAgain} totalScore={totalScore}/>
  }

  return (
  <div className = "container">
      <Header gameLevel={gameLevel} totalScore={totalScore}/>
      <Question randomBird={randomBird} correctAnswer={correctAnswer}/>

    <div className="row mb2">
      <div className="col-md-6">
        <AnswersList onAnswer={getDetailInfo} birdCategory={birdsData[birdCategory]}
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