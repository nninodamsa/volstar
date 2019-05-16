import React from "react"
import "./styles.css"

const Control = () => (
  <div className="control container">
    <div className="item main" style={{backgroundColor: "#74a332"}}>
        <div className="subtitle color-dark">control al máximo</div>

        <p className="color-dark">El equipo ES48 monitorea cuando el suministro eléctrico (220 VCA) se 
suspende y de forma inmediata por medio de su control activa el respaldo 
de baterías. La pantalla alfanumérica indicará el estado de la batería, nivel 
de voltaje y corriente que se está suministrando al sistema.</p>
        <p className="color-dark">
También cuenta con alarmas que indicarán el proceso que se está 
ejecutando. </p>
    </div>

    <div className="item aside" style={{backgroundColor: "#7daf38"}}>
      <div className="subtitle color-dark">ventajas del producto</div>

      <p className="color-dark">
        <ul>
            <li>Detiene el robo de baterías por no contener componentes ni sustancias útiles para ningún otro uso, eliminando las afectaciones a los servicios de comunicaciones por blackouts de la Radiobase. </li>
            <li>Mínima contaminación en el ambiente.</li> 
            <li>Bajo costo de operación y de mantenimiento. </li>
            <li>Controla, mide y registra valores de voltaje, corriente y potencia. </li>
            <li>Se comunica vía 485, USB, Ethernet. </li>
            <li>Medición independiente de consumo de energía para cada unidad que integra el sistema de comunicación que se alimenta. </li>
        </ul>
      </p>
    </div>
  </div>
)



export default Control
