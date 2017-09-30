import Paddle from './paddle'
import vars from './vars'

class Computer {
  constructor(GameCanvas, easy = false) {
    let width = vars.paddles.computer.width
    let height = vars.paddles.computer.height

    if (easy) {
      width = 20
    }

    let x = vars.canvasWidth / 2 + width
    let y = 20

    //x, y, width, height, GameCanvas
    this.Paddle = new Paddle(x, y, width, height, GameCanvas)

    this.GameCanvas = GameCanvas
  }

  render() {
    this.Paddle.render()
  }

  update(Ball) {
    let canvasWidth = this.GameCanvas.width
    let x_pos = Ball.x
    let diff = -(this.Paddle.x + this.Paddle.width / 2 - x_pos)
    if (diff < 0 && diff < -4) {
      diff = -5
    } else if (diff > 0 && diff > 4) {
      diff = 5
    }
    this.Paddle.move(diff, 0)
    if (this.Paddle.x < 0) {
      this.Paddle.x = 0
    } else if (this.Paddle.x + this.Paddle.width > canvasWidth) {
      this.Paddle.x = canvasWidth - this.Paddle.width
    }
  }
}

export default Computer
