import { Link } from 'react-router-dom'

function Diodos() {
  return (
    <div className="tarea-page">
      <h1>🔴 Diodos</h1>
      <p>Permiten el paso de corriente en una sola dirección</p>
      
      <h2>Características Principales</h2>
      <ul>
        <li>Función: Rectificar corriente AC a DC</li>
        <li>Tipos: LED, Zener, rectificadores</li>
        <li>Polarizados: Ánodo y cátodo</li>
      </ul>
      
      <Link to="/tareacircuitos" className="back-button">
        ← Volver a Circuitos
      </Link>
    </div>
  )
}

export default Diodos