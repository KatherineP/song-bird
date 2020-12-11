import React, { useState, useEffect } from 'react'
import './app.css'
import Header from '../header'
import Question from '../question'
import AnswersList from '../answersList'
import Details from '../bird-details'
import Play from '../play-button'
import birdsData from '../../config'
import FinalPopUp from '../final-popup'

const App = () => {
  const randomNum = Math.floor(Math.random() * 6) + 1

  const [ gameLevel, setGameLevel ] = useState(0)
  const [ nextLevel, setNextLevel ] = useState(false)
  const [ birdCategory, setBirdCategory ] = useState(0)
  const [ selectedBird, setBird ] = useState({})
  const [ randomBird, setRandomBird ] = useState(birdsData[birdCategory].find((bird) => bird.id === randomNum))
  const [ correctAnswer, setCorrectAnswer ] = useState(false)
  const [ totalScore, setTotalScore ] = useState(0)
  const [ scorePerRound, setScorePerRound ] = useState(5)
  const [ correctBirdId, setCorrectBirdId ] = useState()
  const [ inCorrectBirdId, setInCorrectBirdId ] = useState([])
  
  const getDetailInfo = (id) => {
    const bird = birdsData[birdCategory].find((bird) => bird.id === id)
    if(bird.id === randomBird.id){
      setCorrectBirdId(bird.id)
      setCorrectAnswer(prevCorrectAnswer => (!prevCorrectAnswer) ? !prevCorrectAnswer : prevCorrectAnswer)
      setNextLevel(true)
      setTotalScore(prevTotalScore => prevTotalScore + scorePerRound)
    } else {
      setInCorrectBirdId([...inCorrectBirdId, bird.id])
      setScorePerRound(prevScorePerRound => prevScorePerRound - 1)
    }
    setBird(bird);
  }

  const onNextLevel = () => {
    if(birdCategory !== birdsData.length - 1) {
      setBirdCategory(prevValue => prevValue + 1)
    } 
      setNextLevel(false)
      setCorrectBirdId()
      setInCorrectBirdId([])
      setCorrectAnswer(false)
      setGameLevel(prevValue => prevValue + 1)
      setBird({})
      setScorePerRound(5)
  }

 useEffect(() =>{
   if(birdCategory < birdsData.length + 1){
    setRandomBird(birdsData[birdCategory].find((bird) => bird.id === randomNum))
   }
 }, [birdCategory])

 const onPlayAgain = () => {
   setGameLevel(0)
   setBirdCategory(0)
   setTotalScore(0)
 }

  console.log(randomBird.name)

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