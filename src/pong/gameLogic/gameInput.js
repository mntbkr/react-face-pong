let movePaddle = 'still'

const setMovePaddle = value => {
  movePaddle = value
}

const getMovePaddle = () => {
  return movePaddle
}

export default {
  setMovePaddle,
  getMovePaddle
}
