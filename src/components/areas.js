import React from "react"
import "./styles.css"

import iconSet from './selection.json'
import IcomoonReact from 'icomoon-react'
import { Link } from "gatsby";

const Areas = (props) => {
  const { title, icon, text, bg, classorder, link } = props;
  return (
  <div className={classorder + " item"} style={{backgroundColor: bg}}>
    <Link to={link}>
      <div className="title color-dark">{ title } </div>

      <div className="icon-area color-dark">
        <IcomoonReact iconSet={iconSet} size={60} icon={ icon } color="#000" />
      </div>

      <div className="text color-dark">{text}</div>
    </Link>
  </div>
  )
}


export default Areas
