import React from 'react'
import './final-popup.css'

const FinalPopUp = ({ onPlayAgain, totalScore }) => {
  return(
    <div className="container-popup">
        <div className="jumbotron popup">
          <h1 className="display-3">Игра окончена!</h1>
          <p className="lead">Вы набрали {totalScore} баллов из 30!</p>
          <p className="lead">
            <a className="btn btn-primary btn-lg" href="/#" role="button"
            onClick={onPlayAgain}>Играть снова</a>
          </p>
        </div>
      </div>
  )
}

export default FinalPopUp