import { Link } from 'react-router-dom'

function Resistencias() {
  return (
    <div className="tarea-page">
      <h1>🟤 Resistencias</h1>
      <p>Componente que se opone al paso de la corriente eléctrica</p>
      
      <h2>Características Principales</h2>
      <ul>
        <li>Unidad: Ohmios (Ω)</li>
        <li>Función: Limitar corriente, dividir voltajes</li>
        <li>Código de colores para identificar valores</li>
      </ul>
      
      <Link to="/tareacircuitos" className="back-button">
        ← Volver a Circuitos
      </Link>
    </div>
  )
}

export default Resistencias