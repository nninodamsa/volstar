import React from "react"
import Input from "./input"
import Textarea from "./textarea"
import Button from "./button"

import "./styles.css"

const Contact = () => {
  state = {
    firstName: "",
    lastName: "",
  }

  return (
    <section className="contact container">
        
        <div className="title color-white">contáctanos</div>
        
        <form id="formul" onSubmit={this.sendEmail}>
            <Input idinput="name" text="Nombre" valor="" />
            <Input idinput="telefono" text="Teléfono" valor="" />
            <Input idinput="correo" text="Correo" valor="" />
            <Input idinput="asunto" text="Asunto" valor="" />   
            <Textarea idinput="mensaje" text="Mensaje" valor="" />  
            <div className="item col-right">
                <Input idinput="interes" text="Segmento de interés" valor="" />  
                <Button idinput="button" type="submit" text="Enviar" />
            </div>
        </form>
           
    </section>
  )
}


export default Contact
