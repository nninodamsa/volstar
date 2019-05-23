import React from "react"
import Input from "./input"
import Textarea from "./textarea"
import Button from "./button"

import "./styles.css"

const Contact = (props) => {
  let {sendEmail, handleInputChange, enabled, stateValues} = props
  console.log(stateValues)
  return (
    <section className="contact container">
        
        <div className="title color-white">contáctanos</div>
        
        <form id="formul" onSubmit={sendEmail}> 
            <Input idinput="nombre" text="Nombre" valor={stateValues.nombre} handleInputChange={handleInputChange} />
            <Input idinput="telefono" text="Teléfono" valor={stateValues.telefono} handleInputChange={handleInputChange} />
            <Input idinput="correo" text="Correo" valor={stateValues.correo} handleInputChange={handleInputChange} />
            <Input idinput="asunto" text="Asunto" valor={stateValues.asunto} handleInputChange={handleInputChange} />   
            <Textarea idinput="mensaje" text="Mensaje" valor={stateValues.mensaje} handleInputChange={handleInputChange} />  
            <div className="item col-right">
                <Input idinput="interes" text="Segmento de interés" valor={stateValues.interes} handleInputChange={handleInputChange} />  
                <Button idinput="button" type="submit" text="Enviar" enabled={enabled} />

                <div id="res-contacto" className="color-white"></div>
            </div>
        </form>
           
    </section>
  )
}


export default Contact
