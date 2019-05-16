import React from "react"
import "./styles.css"

const Menu = () => (
  <span>
    <Link
          to="/"
        >
          Inicio
        </Link>
        <Link
          to="/"
        >
          Productos
        </Link>
        <Link
          to="/"
        >
          Industria
        </Link>
        <Link
          to="/"
          className="lastone"
        >
          Contacto
        </Link>
  </span>
)


export default Menu
