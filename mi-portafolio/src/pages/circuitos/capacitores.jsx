import { Link } from 'react-router-dom'

function Capacitores() {
  return (
    <div className="tarea-page">
      <h1>🔵 Capacitores</h1>
      <p>Almacenan carga eléctrica en un campo electrostático</p>
      
      <h2>Características Principales</h2>
      <ul>
        <li>Unidad: Faradios (F)</li>
        <li>Función: Almacenar energía, filtrar señales</li>
        <li>Tipos: Cerámicos, electrolíticos, tántalo</li>
      </ul>
      
      <Link to="/tareacircuitos" className="back-button">
        ← Volver a Circuitos
      </Link>
    </div>
  )
}

export default Capacitores