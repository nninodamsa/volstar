import React from "react"
import "./styles.css"
import iconSet from './selection.json'
import IcomoonReact from 'icomoon-react'
 
const UsosEs48 = () => (
  <div className="usos-es48 container">
    <div className="item main">
      <div className="subtitle color-white">Capaz de monitorear, registrar y controlar el voltaje, corriente y potencia que se 
suministra a los equipos y al módulo de almacenamiento en ion-litio</div>
    </div>

    <div className="item aside">
      <div className="icon-area color-grey">
        <IcomoonReact iconSet={iconSet} size={60} icon="signal-tower" />
      </div>
      <div className="subtitle color-grey">aplicaciones</div>

      <p className="color-white">
        <ul>
            <li>Telecomunicaciones. </li>
            <li>Sistemas de energía renovables. </li>
            <li>Equipos de comunicación móvil.  </li>
            <li>Equipos de red.  </li>
        </ul>
      </p>
    </div>

    <div className="item aside">
      <div className="icon-area color-grey">
        <IcomoonReact iconSet={iconSet} size={60} icon="router" />
      </div>
      <div className="subtitle color-grey">componentes</div>

      <p className="color-white">
        <ul>
            <li>Pantalla alfanumérica (LCD). </li>
            <li>Botones de navegación. </li>
            <li>Puertos de comunicación.  </li>
            <li>Indicadores Luminosos frontales y posteriores.  </li>
        </ul>
      </p>
    </div>

    <div className="item aside">
      <div className="icon-area color-grey">
        <IcomoonReact iconSet={iconSet} size={60} icon="settings" />
      </div>
      <div className="subtitle color-grey">tareas</div>

      <p className="color-white">
        <ul>
            <li>Control de carga, descarga y protección para el módulo de baterías de litio. </li>
            <li>Control de 3 salidas programables de forma independiente. </li>
            <li>Control de alimentación de entrada de 220 VCA </li>
            <li>Control de alarmas del sistema.</li> 
            <li>Comunicación vía puertos USB, 458, Bluetooth, y opcional Ethernet y PLC </li>
        </ul>
      </p>
    </div>

  </div>
)



export default UsosEs48
