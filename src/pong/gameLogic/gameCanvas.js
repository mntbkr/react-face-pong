class GameCanvas {
  constructor(canvas) {
    this.width = canvas.width
    this.height = canvas.height
    this.context = canvas.getContext('2d')
  }

  refresh() {
    this.context.fillStyle = '#000'
    this.context.fillRect(0, 0, this.width, this.height)
  }
}

export default GameCanvas
