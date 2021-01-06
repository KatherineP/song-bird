const onBirdSelected = (state, id, randomBird) => {

  const { birdConfig, birdCategory, totalScore, inCorrectBirdId, scorePerRound } = state

  const bird = birdConfig[birdCategory].find((bird) => bird.id === id)

  if(bird.id === randomBird.id){
    const total = totalScore + scorePerRound;
    return {
      ...state,
      correctBirdId : bird.id,
      nextLevel: true,
      selectedBird: bird,
      totalScore: total,
      correctAnswer: true
    }
  } 
    const roundScore = scorePerRound - 1;
    const incorrectBirds = [...inCorrectBirdId, bird.id];
    return {
      ...state,
      selectedBird: bird,
      inCorrectBirdId: incorrectBirds,
      scorePerRound: roundScore
    }
}

const onNextLevel = (state) => {
  
  const { birdCategory, gameLevel, birdConfig } = state

  const updatedGameLevel = gameLevel + 1
  const updatedBirdCategory = birdCategory + 1
  const initState = {
    ...state,
      nextLevel: false,
      correctBirdId: null,
      inCorrectBirdId: [],
      correctAnswer: false,
      scorePerRound: 5,
      selectedBird: {},
      gameLevel: updatedGameLevel
  }
  if (birdCategory !== birdConfig.length - 1) {
    return {
      ...initState,
      birdCategory: updatedBirdCategory,
    }
  }
    return initState
}

const onPlayAgain = (state) => {
  return {
    ...state,
    gameLevel: 0,
    birdCategory: 0,
    totalScore: 0,
    randomBirdId: Math.floor(Math.random() * 6) + 1
  }
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'onBirdSelected':
      return onBirdSelected(state, action.payload, action.randomBird);
    case 'onNextLevel':
      return onNextLevel(state);
    case 'onPlayAgain':
      return onPlayAgain(state);
    default:
      return state;
  }
}

export default reducer;
