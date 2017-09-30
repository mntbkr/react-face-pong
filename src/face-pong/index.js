import React from 'react'
import { Col, Row } from 'reactstrap'
import CameraTracker from '../camera/cameraTracker'
import Pong from '../pong/game'
import GameInput from '../pong/gameLogic/gameInput'
import setPaddleMotion from '../camera/controller'

let controller = 'still'

class FacePong extends React.Component {
  handleFaceChange = x => {
    let newController = setPaddleMotion(x)
    if (newController !== controller) {
      controller = newController
      GameInput.setMovePaddle(controller)
    }
  }

  render() {
    return (
      <Row>
        <Col xs="6">
          <CameraTracker onChange={this.handleFaceChange} />
        </Col>
        <Col xs="6">
          <Pong easy />
        </Col>
      </Row>
    )
  }
}

export default FacePong
