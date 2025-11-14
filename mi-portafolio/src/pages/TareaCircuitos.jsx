import { Link } from 'react-router-dom'
import './TareaCircuitos.css'

function TareaCircuitos() {
  return (
    <div className="tarea-page">
      <header className="tarea-header">
        <h1>🔌 Componentes Electrónicos</h1>
        <p className="subtitle">Fundamentos de los componentes básicos en circuitos electrónicos</p>
      </header>

      <div className="tarea-content">
        <section className="intro-section">
          <h2>🔍 Introducción a los Componentes Electrónicos</h2>
          <p>
            Los componentes electrónicos son los elementos básicos que forman los circuitos 
            electrónicos. Cada uno tiene una función específica y sus propias características 
            que determinan su comportamiento en un circuito.
          </p>
        </section>

        {/* Grid de Componentes */}
        <section className="componentes-main-section">
          <h2>🎯 Componentes Principales</h2>
          <div className="componentes-grid">
            
            {/* Card Resistencias */}
            <Link to="/circuitos/resistencias" className="componente-card-link">
              <div className="componente-card">
                <div className="componente-icon">🟤</div>
                <h3>Resistencias</h3>
                <p>Componente que se opone al paso de la corriente eléctrica</p>
                <div className="card-features">
                  <span>Ω Ohmios</span>
                  <span>⚡ Limita corriente</span>
                  <span>🎨 Código colores</span>
                </div>
                <div className="card-arrow">→</div>
              </div>
            </Link>

            {/* Card Capacitores */}
            <Link to="/circuitos/capacitores" className="componente-card-link">
              <div className="componente-card">
                <div className="componente-icon">🔵</div>
                <h3>Capacitores</h3>
                <p>Almacenan carga eléctrica en un campo electrostático</p>
                <div className="card-features">
                  <span>⚡ Almacena energía</span>
                  <span>🔄 Filtra señales</span>
                  <span>📏 Faradios</span>
                </div>
                <div className="card-arrow">→</div>
              </div>
            </Link>

            {/* Card Inductores */}
            <Link to="/circuitos/inductores" className="componente-card-link">
              <div className="componente-card">
                <div className="componente-icon">🟡</div>
                <h3>Inductores</h3>
                <p>Almacenan energía en un campo magnético</p>
                <div className="card-features">
                  <span>🌀 Campo magnético</span>
                  <span>⚡ Filtra frecuencias</span>
                  <span>📏 Henrios</span>
                </div>
                <div className="card-arrow">→</div>
              </div>
            </Link>

            {/* Card Diodos */}
            <Link to="/circuitos/diodos" className="componente-card-link">
              <div className="componente-card">
                <div className="componente-icon">🔴</div>
                <h3>Diodos</h3>
                <p>Permiten el paso de corriente en una sola dirección</p>
                <div className="card-features">
                  <span>➡️ Una dirección</span>
                  <span>💡 LEDs</span>
                  <span>⚡ Rectificadores</span>
                </div>
                <div className="card-arrow">→</div>
              </div>
            </Link>

            {/* Card Transistores */}
            <Link to="/circuitos/transistores" className="componente-card-link">
              <div className="componente-card">
                <div className="componente-icon">🟢</div>
                <h3>Transistores</h3>
                <p>Amplifican o conmutan señales electrónicas</p>
                <div className="card-features">
                  <span>📈 Amplificación</span>
                  <span>🔀 Conmutación</span>
                  <span>💻 Componente clave</span>
                </div>
                <div className="card-arrow">→</div>
              </div>
            </Link>

            {/* Card Bibliografía */}
            <Link to="/circuitos/bibliografia" className="componente-card-link">
              <div className="componente-card">
                <div className="componente-icon">📚</div>
                <h3>Bibliografía</h3>
                <p>Fuentes de consulta y referencias adicionales</p>
                <div className="card-features">
                  <span>📖 Libros</span>
                  <span>🌐 Recursos web</span>
                  <span>🎥 Videos</span>
                </div>
                <div className="card-arrow">→</div>
              </div>
            </Link>

          </div>
        </section>

        <section className="info-section">
          <h2>💡 Información General</h2>
          <div className="info-content">
            <p>
              Cada componente electrónico tiene características únicas que determinan 
              su uso en los circuitos. <strong>Haz clic en cualquier componente</strong> 
               para conocer sus detalles específicos, aplicaciones y ejemplos prácticos.
            </p>
          </div>
        </section>
      </div>

      <Link to="/" className="back-button">
        ← Volver al portafolio
      </Link>
    </div>
  )
}

export default TareaCircuitos