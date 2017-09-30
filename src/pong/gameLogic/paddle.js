export default class Paddle {
  constructor(x, y, width, height, GameCanvas) {
    this.x = x
    this.y = y
    this.width = width
    this.height = height
    this.x_speed = 0
    this.GameCanvas = GameCanvas
  }

  render() {
    this.GameCanvas.context.fillStyle = '#FFF'
    this.GameCanvas.context.fillRect(this.x, this.y, this.width, this.height)
  }

  move(x) {
    this.x += x
    this.x_speed = x
    if (this.x < 0) {
      this.x = 0
      this.x_speed = 0
    } else if (this.x + this.width > this.GameCanvas.width) {
      this.x = this.GameCanvas.width - this.width
      this.x_speed = 0
    }
  }
}
