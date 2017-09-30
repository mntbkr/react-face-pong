class Ball {
  constructor(gameCanvas) {
    this.gameCanvas = gameCanvas
    this.x = gameCanvas.width / 2
    this.y = gameCanvas.height / 2
    this.x_speed = 1
    this.y_speed = 3
  }

  render() {
    this.gameCanvas.context.beginPath()
    this.gameCanvas.context.arc(this.x, this.y, 5, 2 * Math.PI, 0)
    this.gameCanvas.context.fillStyle = '#f00008'
    this.gameCanvas.context.fill()
  }

  update(paddle1, paddle2) {
    this.x += this.x_speed
    this.y += this.y_speed

    let top_x = this.x - 5
    let top_y = this.y - 5
    let bottom_x = this.x + 5
    let bottom_y = this.y + 5
    let width = this.gameCanvas.width
    let height = this.gameCanvas.height

    if (this.x - 5 < 0) {
      this.x = 5
      this.x_speed = -this.x_speed
    } else if (this.x + 5 > width) {
      this.x = 395
      this.x_speed = -this.x_speed
    }

    //ball went out of bounds
    if (this.y < 0 || this.y > height) {
      this.x_speed = 0
      this.y_speed = 3
      this.x = 200
      this.y = 300
    }

    //bottom or player paddle
    if (top_y > paddle1.y - paddle1.height) {
      if (
        top_y < paddle1.y + paddle1.height &&
        bottom_y > paddle1.y &&
        top_x < paddle1.x + paddle1.width &&
        bottom_x > paddle1.x
      ) {
        this.y_speed = -3
        this.x_speed += paddle1.x_speed / 2
        this.y += this.y_speed
      }
    }

    //top or computer paddle
    //TODO figure out how to check if paddle is range
    //like we do for paddle1
    if (bottom_y < 40) {
      if (
        top_y < paddle2.y + paddle2.height &&
        bottom_y > paddle2.y &&
        top_x < paddle2.x + paddle2.width &&
        bottom_x > paddle2.x
      ) {
        this.y_speed = 3
        this.x_speed += paddle2.x_speed / 2
        this.y += this.y_speed
      }
    }

    //speed controls
    if (this.x_speed > 3) {
      this.x_speed = 3
    }

    if (this.y_speed > 3) {
      this.y_speed = 3
    }
  }
}

export default Ball
