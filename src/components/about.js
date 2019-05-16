import React from "react"
import "./styles.css"

const About = () => (
  <section className="about">
    <div className="container">
        <div className="item about1">
            <div className="title color-white">QUIENES SOMOS</div>
            <div className="subtitle color-white">VOLSTAR se encuentra conformada por un grupo de empresarios del Occidente de México</div>
            <p className="color-white">
            Con más de 20 años de trayectoria, creando empresas exitosas que han trascendido a nivel nacional, siendo consideradas algunas de ellas como modelos industriales gracias a la innovación aplicada 
    en sus productos y procesos, logrando certificaciones ante normas internacionales como empresas incluyentes y socialmente responsables.
            </p>
            <p className="color-white">
            Es esta visión lo que lleva a este grupo de empresarios a crear en el año de 2018, VOLSTAR, con el propósito de proveer energía eléctrica mediante soluciones innovadoras y personalizadas que contribuyan a la reducción en los costos de sus clientes y a la preservación de los recursos naturales no renovables.
            </p>
        </div>

        <div className="item about2">
            <div className="bg-green"></div>
            <div className="img-about">
                <img src="/img/img-about.jpg" alt="Sobre Volstar" />
            </div>
        </div>
    </div>
  </section>
)


export default About
