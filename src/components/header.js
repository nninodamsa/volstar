import PropTypes from "prop-types"
import React from "react"

import iconSet from './selection.json'
import IcomoonReact, {iconList} from 'icomoon-react'

import "./styles.css"
import { Link } from "gatsby"

const Header = () => (
  <header>
    <div className="logo-header">
      <Link to="/">
        <img src="/img/logo-big.png" alt="Volstar" />
      </Link>
    </div>
    <div className="menu">
        
        <a target="_blank"
          href="https://www.facebook.com/volstarenergia/" 
        >
          <IcomoonReact iconSet={iconSet} size={18} icon="facebook-logo" />
        </a>
        <a target="_blank"
          href="https://www.linkedin.com/company/volstar/?viewAsMember=true"
        >
          <IcomoonReact iconSet={iconSet} size={18} icon="linkedin-logo" />
        </a>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
