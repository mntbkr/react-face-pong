import React from 'react'
import styled from 'styled-components'
import CameraTracker from './cameraTracker'
import { Button } from 'reactstrap'

const Container = styled.div`
  width: 300px;
  margin-left: auto;
  margin-right: auto;

  div.button {
    text-align: center;
  }
`

class Index extends React.Component {
  state = {
    showTrollFace: false
  }

  handleTroll = () => {
    this.setState({
      showTrollFace: !this.state.showTrollFace
    })
  }

  render() {
    return (
      <Container>
        <CameraTracker showTrollFace={this.state.showTrollFace} />

        <div className="button">
          <Button onClick={this.handleTroll}>Troll</Button>
        </div>
      </Container>
    )
  }
}

export default Index
