import React from 'react'
import styled from 'styled-components'
import vars from './gameLogic/vars'
import Player from './gameLogic/player'
import Computer from './gameLogic/computer'
import Ball from './gameLogic/ball'
import GameCanvas from './gameLogic/gameCanvas'

const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: ${vars.canvasWidth + 'px'};
`

class Index extends React.Component {
  static defaultProps = {
    easy: false
  }

  componentDidMount() {
    this.animate = window.requestAnimationFrame.bind(window)
    this.GameCanvas = new GameCanvas(this.canvas)

    this.Player = new Player(this.GameCanvas, this.props.easy)
    this.Computer = new Computer(this.GameCanvas, this.props.easy)
    this.Ball = new Ball(this.GameCanvas)

    this.refresh()
    this.animate(this.step)
  }

  componentWillUnmount() {
    window.cancelAnimationFrame(this.animate)
    // delete this.animate
    // delete this.GameCanvas
    // delete this.Player
    // delete this.Computer
    // delete this.Ball
  }

  refresh = () => {
    this.GameCanvas.refresh()
    this.Player.render()
    this.Computer.render()
    this.Ball.render()
  }

  update = () => {
    this.Player.update()
    this.Computer.update(this.Ball)
    this.Ball.update(this.Player.Paddle, this.Computer.Paddle)
  }

  step = function() {
    this.update()
    this.refresh()
    this.animate(this.step)
  }.bind(this)

  render() {
    return (
      <Container>
        <canvas
          ref={canvas => (this.canvas = canvas)}
          width={vars.canvasWidth}
          height={vars.canvasHeight}
        />
      </Container>
    )
  }
}

export default Index
