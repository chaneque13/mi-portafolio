import { Link } from 'react-router-dom'

function Bibliografia() {
  return (
    <div className="tarea-page">
      <h1>📚 Bibliografía</h1>
      <p>Fuentes de consulta para componentes electrónicos</p>
      
      <h2>Recursos Recomendados</h2>
      <ul>
        <li>Libro: "Electrónica para Dummies"</li>
        <li>Sitio web: All About Circuits</li>
        <li>Video: Curso de electrónica básica en YouTube</li>
        <li>Foro: Electrónica Unicrom</li>
      </ul>
      
      <Link to="/tareacircuitos" className="back-button">
        ← Volver a Circuitos
      </Link>
    </div>
  )
}

export default Bibliografia