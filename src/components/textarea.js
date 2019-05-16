import React from "react"
import "./styles.css"

const Textarea = (props) => {
  const { idinput, text, valor } = props;
  return (
    <div className="item">
        <textarea className={idinput} placeholder={text}>
            {valor}
        </textarea>
    </div>
  )
}


export default Textarea
