import React from "react"
import "./styles.css"

const Button = (props) => {
  const { text } = props;
  return (
    <div className="item">
        <button className="btn">
            {text}
        </button>
    </div>
  )
}


export default Button
