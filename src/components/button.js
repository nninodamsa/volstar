import React from "react"
import "./styles.css"

const Button = (props) => {
  const { text, enabled } = props;
  return (
    <div className="item">
        <button className="btn" disabled={!enabled}>
            {text}
        </button>
    </div>
  )
}


export default Button
