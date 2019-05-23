import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Intro from "../components/intro"
import UsosEs48 from "../components/usos-es48"
import Control from "../components/control"
import Slidder from "../components/slidder"
import Info from "../components/info"
import Contact from "../components/contact"
import axios from 'axios';

export default class SecondPage extends React.Component {
  constructor(props) {
		super(props);
		this.state = {
			nombre : '',
			telefono : '',
			correo : '',
			asunto : '',
			interes : '',
			mensaje : ''
		}
  }

  cleanState = () => {
		this.setState({
			nombre : '',
			telefono : '',
			correo : '',
			asunto : '',
			interes : '',
			mensaje : ''
		})
  }

  sendEmail = (e) => {
		e.preventDefault();
    
    const message = ' Nombre: ' + this.state.nombre + ' <br/> Teléfono: ' +  this.state.telefono + ' <br/> Correo: ' + this.state.correo + ' <br/> Asunto: ' + this.state.asunto + ' <br/> Área de Interes: ' + this.state.interes + ' <br/> Mensaje: ' + this.state.mensaje;
    
    axios.post('https://www.damsa.com.mx/WebSiteCore/WebApiEnvioDeCorreo/api/Correos', {
    		Id_Sistema: "SITIO_CONTACTO",
  			De: "noreply@damsa.com.mx",
  			Para: "contacto@volstar.mx",
  			Copia: "contacto@volstar.mx",
  			CopiaOculta: "contacto@volstar.mx",
  			Asunto: "Correo enviado desde el formulario de contacto",
  			Msg: message

  		})
  		.then(function (response) {
    		document.getElementById("res-contacto").innerHTML = "Su email fue enviado"
  		})
  		.catch(function (error) {
    		document.getElementById("res-contacto").innerHTML = "Ocurrio un error. Intente más tarde"
      });
      
      this.cleanState()
  }

  handleInputChange = event => {
    const target = event.target
    const value = target.value
    const name = target.name

    this.setState({
      [name]: value,
    })
    console.log(value)
  }

  render() {
    const { nombre, telefono, correo, mensaje } = this.state
    const enabled = nombre.length > 0 && telefono.length > 0 && correo.length > 0 && mensaje.length > 0;
    const state = this.state
  return(
  <Layout>
    <SEO title="SISTEMA ES48 " />
    <Intro title="SISTEMA ES48" slogan="rectificador y controlador multifunción en 48 VDC" />

    <UsosEs48/>
    <Control/>
    <Slidder/>
    <Info/>
    <Contact sendEmail={this.sendEmail} handleInputChange={this.handleInputChange} stateValues={state} enabled={enabled}  />
  </Layout>
  ) 
}
}

