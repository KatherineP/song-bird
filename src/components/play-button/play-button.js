import React from 'react'
import './play-button.css'

const Play = ({ nextLevel, onNextLevel }) => {
  if(nextLevel){
    return (
      <button type="button" className="btn btn-lg btn-success btn-block mt-3" 
      onClick={onNextLevel}>Next Level!</button>
    )
  }
  return (
    <button type="button" className="btn btn-lg btn-success btn-block mt-3 disabled">Next Level!</button>
  )
}

export default Play