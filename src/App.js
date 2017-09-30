import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Container } from 'reactstrap'
import Header from './common/header'
import Home from './common/home'
import Camera from './camera/index'
import Pong from './pong/index'
import FacePong from './face-pong/index'
import 'bootstrap/dist/css/bootstrap.css'

class App extends Component {
  render() {
    return (
      <Router>
        <Container>
          <Header />
          <Route exact path="/" component={Home} />
          <Route path="/pong" component={Pong} />
          <Route path="/camera" component={Camera} />
          <Route path="/facePong" component={FacePong} />
        </Container>
      </Router>
    )
  }
}

export default App
