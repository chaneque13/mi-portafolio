import { Link } from 'react-router-dom'

function Transistores() {
  return (
    <div className="tarea-page">
      <h1>🟢 Transistores</h1>
      <p>Amplifican o conmutan señales electrónicas</p>
      
      <h2>Características Principales</h2>
      <ul>
        <li>Función: Amplificación, conmutación</li>
        <li>Tipos: BJT, MOSFET, JFET</li>
        <li>Patas: Base, Colector, Emisor (BJT)</li>
      </ul>
      
      <Link to="/tareacircuitos" className="back-button">
        ← Volver a Circuitos
      </Link>
    </div>
  )
}

export default Transistores