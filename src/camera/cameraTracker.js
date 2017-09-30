import React from 'react'
import styled from 'styled-components'
import propTypes from 'prop-types'
import GameInput from '../pong/gameLogic/gameInput'
import TrollFace64 from '../trollFace.png'

let TrollFace = new Image()
TrollFace.src = TrollFace64

let tracking = window.tracking
let tracker = new tracking.LandmarksTracker()

const Container = styled.div`
  #faceTrackingVideo,
  #faceTrackingCanvas {
    margin-top: 120px;
    position: absolute;
    transform: rotateY(180deg);
  }

  #faceTrackingVideo {
  }
`

class Index extends React.Component {
  static propTypes = {
    onChange: propTypes.func,
    showTrollFace: propTypes.bool
  }

  static defaultProps = {
    onChange: () => {},
    showTrollFace: false
  }

  componentDidMount() {
    let context = this.canvas.getContext('2d')
    tracker.setInitialScale(4)
    tracker.setStepSize(2)
    tracker.setEdgesDensity(0.1)

    tracking.track(this.video, tracker, { camera: true })
    tracker.on('track', event => {
      context.clearRect(0, 0, this.canvas.width, this.canvas.height)
      if (!event.data) return
      if (!event.data.faces.length) return

      event.data.faces.forEach(rect => {
        if (this.props.showTrollFace) {
          context.drawImage(TrollFace, rect.x, rect.y)
        } else {
          context.strokeStyle =
            GameInput.getMovePaddle() !== 'still' ? 'green' : 'red'
          context.lineWidth = 15
          context.strokeRect(rect.x, rect.y, rect.width, rect.height)
        }

        // context.font = '16px Helvetica'
        // context.fillStyle = '#fff'
        // context.fillText(rect.x + 'px', rect.x, rect.y + rect.y / 2)

        this.props.onChange(rect.x)
      })
    })
  }

  componentWillUnmount() {
    tracker.removeAllListeners('track')
  }

  render() {
    return (
      <Container>
        <video
          id="faceTrackingVideo"
          ref={video => (this.video = video)}
          width="320"
          height="240"
          preload
          autoPlay
          loop
          muted
        />
        <canvas
          id="faceTrackingCanvas"
          ref={canvas => (this.canvas = canvas)}
          width="320"
          height="240"
        />
      </Container>
    )
  }
}

export default Index
