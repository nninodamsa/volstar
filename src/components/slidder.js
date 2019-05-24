import React from "react"
import "./styles.css"

import makeCarousel from 'react-reveal/makeCarousel';
import Slide from 'react-reveal/Slide';


const Slidder = () => {
    
    const CarouselUI = ({ position, handleClick, children }) => (
        <div className="slidder container">
            <div className="content-slidder">
                {children}
                <div className="arrow a-left" onClick={handleClick} data-position={position - 1}>{'<'}</div>
                <div className="arrow a-right" onClick={handleClick} data-position={position + 1}>{'>'}</div>
            </div>
        </div>
      );
      const Carousel = makeCarousel(CarouselUI);

    return (
        <Carousel defaultWait={10000} maxTurns={300}>
            <Slide right>
                <div>
                    <div className="title-slidder">Diagrama de Fuerza Radiobase Típica Gran Capacidad (Respaldo Acido/Plomo)</div>
                    <img className="img-slidder" src="/img/slidder1.jpg" alt="Diagrama de Fuerza Radiobase Típica Gran Capacidad (Respaldo Acido/Plomo)" />
                </div>
            </Slide>
            <Slide right>
                <div>
                    <div className="title-slidder">Diagrama de Fuerza Radiobase Típica Gran Capacidad (Respaldo VOLSTAR ES48)</div>
                    <img className="img-slidder" src="/img/slidder2.jpg" alt="Diagrama de Fuerza Radiobase Típica Gran Capacidad (Respaldo VOLSTAR ES48)" />
                </div>
            </Slide>
            <Slide right>
                <div>
                    <div className="title-slidder">Diagrama de Fuerza Radio base Tradicional ULTRA Light Capacidad Mínima (Respaldo Acido/Plomo)</div>
                    <img className="img-slidder" src="/img/slidder3.jpg" alt="Diagrama de Fuerza Radio base Tradicional ULTRA Light Capacidad Mínima (Respaldo Acido/Plomo)" />
                </div>
            </Slide>
            <Slide right>
                <div>
                    <div className="title-slidder">Diagrama de Fuerza Radio base ULTRA Light Capacidad Mínima (Respaldo VOLSTAR ES48)</div>
                    <img className="img-slidder" src="/img/slidder4.jpg" alt="Diagrama de Fuerza Radio base ULTRA Light Capacidad Mínima (Respaldo VOLSTAR ES48)" />
                </div>
            </Slide>
        </Carousel>
    )
}



export default Slidder
