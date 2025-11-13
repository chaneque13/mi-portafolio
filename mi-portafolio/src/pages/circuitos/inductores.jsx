import { Link } from 'react-router-dom'

function Inductores() {
  return (
    <div className="tarea-page">
      <h1>🟡 Inductores</h1>
      <p>Almacenan energía en un campo magnético</p>
      
      <h2>Características Principales</h2>
      <ul>
        <li>Unidad: Henrios (H)</li>
        <li>Función: Filtrar frecuencias, almacenar energía magnética</li>
        <li>Oponen cambios bruscos de corriente</li>
      </ul>
      
      <Link to="/tareacircuitos" className="back-button">
        ← Volver a Circuitos
      </Link>
    </div>
  )
}

export default Inductores