import { Link } from 'react-router-dom'

function TareasPage() {
  return (
    <div className="tareas-page">
      <header>
        <h1>📚 Mis Tareas</h1>
        <p>Todas mis tareas escolares</p>
      </header>

      <div className="tareas-grid">
        <div className="tarea-card">
          <h3>Tarea 7 - Tipologia</h3>
          <p>Elaborar una tipologia de los contenidos que hay en internet</p>
          <Link to="/tarea7"><button>Ver tarea</button></Link>
        </div>
        
        <div className="tarea-card">
          <h3>Tarea 8 - Protocolo HTTP</h3>
          <p>Explicacion del protocolo</p>
          <Link to="/tarea8"><button>Ver tarea</button></Link>
        </div>

        <div className="tarea-card">
          <h3>Tarea 9 - Puertos de internet</h3>
          <p>Protocolos, puertos y sus aplicaciones</p>
          <Link to="/tarea9"><button>Ver tarea</button></Link>
        </div>

          <div className="tarea-card">
          <h3>Tarea 11 - lINEA DEL TIEMPO </h3>
          <p>Linea del tiempo basada en la presentacion de las tecnologias disruptivas</p>
          <Link to="/tarea11"><button>Ver tarea</button></Link>
        </div>


          <div className="tarea-card">
            <h3>Tarea de circuitos</h3>
            <p>Explicacion de los elementos de circuitos</p>
            <Link to="/tareaCircuitos"><button>Ver tarea</button></Link>
          </div>
      </div>


      <Link to="/" className="back-button">
        ← Volver al inicio
      </Link>
    </div>
  )
}

export default TareasPage