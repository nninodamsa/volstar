import React from "react"
import "./styles.css"

const Input = (props) => {
  const { idinput, text, handleInputChange, valor } = props;
  
  return (
    <div className="item">
        <input name={idinput} placeholder={text} value={valor}  onChange={handleInputChange} />
    </div>
  )
}


export default Input
