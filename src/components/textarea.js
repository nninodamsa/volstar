import React from "react"
import "./styles.css"

const Textarea = (props) => {
  const { idinput, text, handleInputChange, valor } = props;
  return (
    <div className="item">
        <textarea name={idinput} placeholder={text} value={valor} onChange={handleInputChange}>
            
        </textarea>
    </div>
  )
}


export default Textarea
