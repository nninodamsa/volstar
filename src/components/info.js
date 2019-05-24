import React from "react"
import "./styles.css"

const Info = () => (
  <div className="info container">
    <div className="item main">
        <table>
            <thead>
            <tr>
                <td colSpan="2">General</td>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>Voltaje de operación </td>
                <td>220 VAC</td>
            </tr>
            <tr>
                <td>Voltaje de salida</td>
                <td>Programable 37 a 53 V, nominal 48 VDC</td>
            </tr>
            <tr>
                <td>Corriente</td>
                <td>5 A por salida (3 salidas) 15A </td>
            </tr>
            <tr>
                <td>Potencial total </td>
                <td>2.5 kWh </td>
            </tr>
            <tr>
                <td>Tiempo de respaldo </td>
                <td>2 hrs por 15 A con un módulo<br/>4 hrs por 15 A con 2 módulos</td>
            </tr>
            <tr>
                <td>Corriente de carga </td>
                <td>2 A</td>
            </tr>
            <tr>
                <td>Protección</td>
                <td>Sobre corriente</td>
            </tr>
            </tbody>
        </table>
        <table>
            <thead>
            <tr>
                <td colSpan="2">Alarmas</td>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>Operación</td>
                <td>Contacto seco (NA/NC) 220V @ 1A Max</td>
            </tr>
            <tr>
                <td>Voltaje de alimentación fuera </td>
                <td>Contacto seco (NA) </td>
            </tr>
            <tr>
                <td>Batería en descarga </td>
                <td>Contacto seco (NA) </td>
            </tr>
            <tr>
                <td>Bajo voltaje de batería </td>
                <td>Contacto seco (NA) </td>
            </tr>
            <tr>
                <td>Programable</td>
                <td>Contacto seco (NA) </td>
            </tr>
            </tbody>
        </table>
        <table>
            <thead>
            <tr>
                <td colSpan="2">Entradas</td>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>Tres entradas digitales programables </td>
                <td>48 VCD</td>
            </tr>
            </tbody>
        </table>
        <table>
            <thead>
            <tr>
                <td colSpan="2">Gabinete</td>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>ES48-C1 </td>
                <td>Gabinete de 19” x 2U x 9” </td>
            </tr>
            <tr>
                <td>Peso</td>
                <td>2 kg</td>
            </tr>
            <tr>
                <td>ES48-B2 </td>
                <td>Gabinete de 19” x 2U x 14” </td>
            </tr>
            <tr>
                <td>Peso</td>
                <td>13 kg </td>
            </tr>
            </tbody>
        </table>
    </div>

    <div className="item aside">
      <div className="subtitle color-white">Ventajas sobre sistema tradicional </div>

      
        <ul className="color-white">
            <li>Detiene el robo de baterías por no contener componentes ni sustancias útiles para ningún otro uso, eliminando las afectaciones a los servicios de comunicaciones por blackouts de la Radiobase. </li>
            <li>Sistema escalable a los requerimientos de energía de cada sitio y de cada rack.</li> 
            <li>La alimentación individual a cada rack permite el mantenimiento modular tanto preventivo y correctivo.  </li>
            <li>Capacidad de realizar hotswap. Agregar/Sustituir baterías sin interrumpir el servicio.  </li>
            <li>Instalación eléctrica con cables de calibre inferior, beneficio de menor costo en materiales.  </li>
            <li>Monitoreo y registro de historial individual de consumo en cada rack.  </li>
            <li>Reducción de riesgo de accidente por bajo peso y nulo riesgo de accidente por ácido. </li>
        </ul>
      
    </div>
  </div>
)



export default Info
