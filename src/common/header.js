import React from 'react'
import { NavLink as RouterNavLink } from 'react-router-dom'
import { Nav, NavItem, NavLink } from 'reactstrap'
import styled from 'styled-components'

const HeaderContainer = styled.div`
  background-color: #000;
  color: grey;
`

class Header extends React.Component {
  render() {
    return (
      <HeaderContainer>
        <h2>Welcome to Camera Control Experiments</h2>

        <Nav tabs>
          <NavItem>
            <NavLink exact to="/" tag={RouterNavLink} activeClassName="active">
              Home
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/pong" tag={RouterNavLink} activeClassName="active">
              Pong
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/camera" tag={RouterNavLink} activeClassName="active">
              Camera
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              to="/facePong"
              tag={RouterNavLink}
              activeClassName="active"
            >
              FacePong
            </NavLink>
          </NavItem>
        </Nav>
      </HeaderContainer>
    )
  }
}

export default Header
