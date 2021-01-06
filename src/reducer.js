const getDetailInfo = (state, id) => {

  const { birdsData, birdCategory, totalScore, randomBird, inCorrectBirdId, scorePerRound } = state
  const bird = birdsData[birdCategory].find((bird) => bird.id === id)

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
  } else {
    const roundScore = scorePerRound - 1;
    const incorrectBirds = [...inCorrectBirdId, bird.id];
    return {
      ...state,
      selectedBird: bird,
      inCorrectBirdId: incorrectBirds,
      scorePerRound: roundScore
    }
  }
}

const onNextLevel = (state) => {
  
  const { birdCategory, gameLevel, birdsData } = state

  const updatedGameLevel = gameLevel + 1
  const updatedBirdCategory = birdCategory + 1
  if (birdCategory !== birdsData.length - 1) {
    return {
      ...state,
      birdCategory: updatedBirdCategory,
      nextLevel: false,
      correctBirdId: null,
      inCorrectBirdId: [],
      correctAnswer: false,
      scorePerRound: 5,
      selectedBird: {},
      gameLevel: updatedGameLevel
    }

  }
   else {
    return {
      ...state,
      nextLevel: false,
      correctBirdId: null,
      inCorrectBirdId: [],
      correctAnswer: false,
      scorePerRound: 5,
      selectedBird: {},
      gameLevel: updatedGameLevel
    }
  }
}

const onPlayAgain = (state) => {
  return {
    ...state,
    gameLevel: 0,
    birdCategory: 0,
    totalScore: 0
  }
}

const updateRandomBird = (state, randomNum) => {

  const { birdsData, birdCategory } = state

  return {
    ...state,
    randomBird: birdsData[birdCategory].find((bird) => bird.id === randomNum),
  }
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'getDetailInfo':
      return getDetailInfo(state, action.payload);
    case 'onNextLevel':
      return onNextLevel(state);
      case 'onPlayAgain':
      return onPlayAgain(state);
      case 'updateRandomBird':
        return updateRandomBird(state, action.payload);
    default:
      return state;
  }
}



export default reducer;
