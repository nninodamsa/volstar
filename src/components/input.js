import React from "react"
import "./styles.css"

const Input = (props) => {
  const { idinput, text, valor } = props;
  return (
    <div className="item">
        <input className={idinput} placeholder={text} value={valor} />
    </div>
  )
}


export default Input
