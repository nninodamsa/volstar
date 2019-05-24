import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Banner from "../components/banner"
import About from "../components/about"
import Areas from "../components/areas"
import Contact from "../components/contact"
import Mision from "../components/mision"
import axios from 'axios';

export default class IndexPage extends React.Component {
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
        Para: "nnino@damsa.com.mx",
  			Copia: "nnino@damsa.com.mx",
  			CopiaOculta: "nnino@damsa.com.mx",
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
    <SEO title="Inicio" keywords={[`gatsby`, `application`, `react`]} />
    <Banner />
    <About />
    <div className="areas container">    
        <Areas bg="#74a332" link="/sistema-es48" classorder="" title="" icon="tower" text="telecomunicaciones" />
        <Areas bg="#7daf38" link="/" classorder="main" title="áreas de aplicación" icon="golf-cart" text="movilidad" />
        <Areas bg="#8bc13f" link="/" classorder="" title="" icon="forklift" text="movilidad industrial" />
    </div>
    <Contact sendEmail={this.sendEmail} handleInputChange={this.handleInputChange} stateValues={state} enabled={enabled} />
    <Mision/>
  </Layout>
  ) 
  }
}

