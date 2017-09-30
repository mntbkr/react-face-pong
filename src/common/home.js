import React from 'react'
import styled from 'styled-components'
import { Button } from 'reactstrap'

const Container = styled.div`
  margin-top: 50px;
  img {
    width: 100%;
  }

  .center {
    text-align: center;
  }
`

class Home extends React.Component {
  state = {
    image: 'payWithYourFace.jpg',
    start: false
  }

  handleClick = () => {
    let image = 'payWithYourFace.jpg'
    if (this.state.image === 'payWithYourFace.jpg') {
      image = 'playWithYourFace.jpg'
    }

    this.setState({
      image
    })
  }

  handleStartClick = () => {
    this.setState({
      start: true
    })
  }

  render() {
    return (
      <Container>
        {this.state.start ? (
          <img
            onClick={this.handleClick}
            alt="demo"
            src={`/${this.state.image}`}
          />
        ) : (
          <div className="center">
            <Button color="success" onClick={this.handleStartClick}>
              Lets Go
            </Button>
          </div>
        )}
      </Container>
    )
  }
}

export default Home
