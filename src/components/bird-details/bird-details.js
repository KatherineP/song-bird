import React from 'react'
import './bird-details.css'
import Audio from '../audio'


const Details = ({ birdInfo } ) => {
  if(Object.entries(birdInfo).length === 0){
    return (
      <div className="instruction">
        <p>Послушайте плеер.</p>
        <p>Выберите птицу из списка</p>
      </div>
    )
  }
  const { name, species, description, image, audio} = birdInfo;
  return (
      <div className="jumbotron bird-details">
        <div className="d-flex justify-content-between">
          <img className ="bird-image" src={image} alt="unknown bird"/>
          <div className="flex-grow-1">
            <h4>{name}</h4>
            <h6>{species}</h6>
            <hr className="my-1"/>
            <Audio audio={audio}/>
          </div>
        </div>
        <p className="bird-description">{description}</p>
      </div>
  )
}

export default Details