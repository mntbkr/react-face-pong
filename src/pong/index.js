import React from 'react'
import GameInput from '../pong/gameLogic/gameInput'
import Pong from '../pong/game'

const HandleKeyDown = event => {
  switch (event.key) {
    case 'ArrowLeft':
      GameInput.setMovePaddle('left')
      break

    case 'ArrowRight':
      GameInput.setMovePaddle('right')
      break

    default:
  }
}

const HandleKeyUp = event => {
  switch (event.key) {
    case 'ArrowLeft':
      GameInput.setMovePaddle('still')
      break

    case 'ArrowRight':
      GameInput.setMovePaddle('still')
      break

    default:
  }
}

class Index extends React.Component {
  componentWillMount() {
    window.addEventListener('keydown', HandleKeyDown)
    window.addEventListener('keyup', HandleKeyUp)
  }

  componentWillUnmount() {
    window.removeEventListener('keyup', HandleKeyUp)
    window.removeEventListener('keydown', HandleKeyDown)
  }

  render() {
    return (
      <div>
        <Pong />
      </div>
    )
  }
}

export default Index
