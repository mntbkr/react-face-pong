import Paddle from './paddle'
import GameInput from './gameInput'
import vars from './vars'

class Player {
  constructor(gameCanvas, easy = false) {
    let width = vars.paddles.player.width
    let height = vars.paddles.player.height

    if (easy) {
      width = 150
    }

    let x = vars.canvasWidth / 2 + width
    let y = vars.canvasHeight - 20

    //x, y, width, height, GameCanvas
    this.Paddle = new Paddle(x, y, width, height, gameCanvas)
  }

  render() {
    this.Paddle.render()
  }

  update() {
    switch (GameInput.getMovePaddle()) {
      case 'left':
        this.Paddle.move(-4)
        break

      case 'right':
        this.Paddle.move(4)
        break

      default:
        this.Paddle.move(0)
    }
  }
}

export default Player
