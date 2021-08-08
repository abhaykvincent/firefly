// this Layout component wraps every page with the app header on top
// check out App.js to see how it's used

import React from 'react'

import logIn from '../../actions/logIn'
import FirebaseAuth from '../misc/FirebaseAuth'
import {
  HeaderLink,
} from '../../styles/links'

const Layout = ({children}) => (
  <div className="header-footer__wrapper">
    {/* <div className="header">
      <HeaderLink to="/">Genuine Connections</HeaderLink>

      <div style={{float: 'right'}}></div>
    </div> */}

    {children}

    <div className="footer">
      © Genuine Connections  {(new Date()).getFullYear()}
    </div>

  </div>
)

export default Layout
