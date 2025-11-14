import { Link } from 'react-router-dom'

function Resistencias() {
  return (
    <div className="tarea-page">
      <h1>🟤 Resistencias</h1>
      <p>Componente que se opone al paso de la corriente eléctrica</p>
      
      <h2>¿Qué es?</h2>
      <p>
        la resistencia eléctrica, se define como la oposición al flujo de corriente eléctrica, 
        de la ley de Ohm tenemos que, la resistencia eléctrica (R) es directamente proporcional al volteje eléctrico (V) 
        e inversamente proporcional a la corriente eléctrica(I)
      </p>
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