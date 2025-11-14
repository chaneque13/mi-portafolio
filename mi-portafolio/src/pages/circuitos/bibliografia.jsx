import { Link } from 'react-router-dom'
import './Bibliografia.css'

function Bibliografia() {
  return (
    <div className="tarea-page">
      <header className="tarea-header">
        <h1>📚 Bibliografía</h1>
        <p className="subtitle">Fuentes de consulta y recursos para el estudio de componentes electrónicos</p>
      </header>

      <div className="tarea-content">
        <section className="intro-section">
          <h2>🔍 Recursos de Consulta</h2>
          <p>
            Esta sección recopila <strong>fuentes confiables</strong> y 
            <strong> recursos educativos</strong> para profundizar en el estudio 
            de los componentes electrónicos y sus aplicaciones.
          </p>
        </section>

        <section className="recursos-section">
          <h2>📖 Por Tipo de Componente</h2>
          <div className="recursos-grid">
            
            {/* Resistencias */}
            <div className="recurso-categoria">
              <h3>🟤 Resistencias</h3>
              <div className="recurso-item">
                <h4>Portal Académico CCH - UNAM</h4>
                <p className="autor">Colin, N. A. P., & Ramos, J. Á. (2021)</p>
                <p className="descripcion">Guía completa sobre resistencias con ejemplos prácticos y teoría fundamental.</p>
                <a href="https://portalacademico.cch.unam.mx/cibernetica1/implementacion-de-circuitos-logicos/resistencias" 
                   target="_blank" 
                   rel="noopener noreferrer" 
                   className="recurso-link">
                  🌐 Ver recurso
                </a>
              </div>
            </div>

            {/* Capacitores */}
            <div className="recurso-categoria">
              <h3>🔵 Capacitores</h3>
              <div className="recurso-item">
                <h4>Electronics Tutorials</h4>
                <p className="autor">Electronics Tutorials (2018)</p>
                <p className="descripcion">Introducción completa a capacitores, capacitancia y carga eléctrica.</p>
                <a href="https://www.electronics-tutorials.ws/capacitor/cap_1.html" 
                   target="_blank" 
                   rel="noopener noreferrer" 
                   className="recurso-link">
                  🌐 Ver recurso
                </a>
              </div>
            </div>

            {/* Inductores */}
            <div className="recurso-categoria">
              <h3>🟡 Inductores</h3>
              <div className="recurso-item">
                <h4>HowStuffWorks - Electrónica</h4>
                <p className="autor">Brain, M. (2000)</p>
                <p className="descripcion">Explicación detallada de cómo funcionan los inductores y sus aplicaciones.</p>
                <a href="https://electronics.howstuffworks.com/inductor.htm" 
                   target="_blank" 
                   rel="noopener noreferrer" 
                   className="recurso-link">
                  🌐 Ver recurso
                </a>
              </div>
            </div>

            {/* Diodos */}
            <div className="recurso-categoria">
              <h3>🔴 Diodos</h3>
              <div className="recurso-item">
                <h4>Fluke Corporation</h4>
                <p className="autor">Fluke (s.f.)</p>
                <p className="descripcion">Guía profesional sobre diodos, sus tipos y aplicaciones prácticas.</p>
                <a href="https://www.fluke.com/es-us/informacion/blog/electrica/que-es-un-diodo" 
                   target="_blank" 
                   rel="noopener noreferrer" 
                   className="recurso-link">
                  🌐 Ver recurso
                </a>
              </div>
            </div>

            {/* Transistores */}
            <div className="recurso-categoria">
              <h3>🟢 Transistores</h3>
              <div className="recurso-item">
                <h4>SparkFun Electronics</h4>
                <p className="autor">JIMBLOM (2018)</p>
                <p className="descripcion">Tutorial completo sobre transistores con ejemplos prácticos y proyectos.</p>
                <a href="https://learn.sparkfun.com/tutorials/transistors/all" 
                   target="_blank" 
                   rel="noopener noreferrer" 
                   className="recurso-link">
                  🌐 Ver recurso
                </a>
              </div>
            </div>

          </div>
        </section>

        <section className="videos-section">
          <h2>🎥 Recursos en Video</h2>
          <div className="videos-grid">
            <div className="video-item">
              <h3>📹 Introducción a la Electrónica</h3>
              <p className="video-desc">Curso completo de electrónica básica desde cero</p>
              <div className="video-container">
                <iframe 
                  width="100%" 
                  height="200" 
                  src="https://www.youtube.com/embed/mc979OhitAg" 
                  title="Curso de electrónica" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen>
                </iframe>
              </div>
              <a href="https://www.youtube.com/watch?v=mc979OhitAg" 
                 target="_blank" 
                 rel="noopener noreferrer" 
                 className="video-link">
                📺 Ver en YouTube
              </a>
            </div>
          </div>
        </section>

        <section className="libros-section">
          <h2>📚 Libros Recomendados</h2>
          <div className="libros-grid">
            <div className="libro-item">
              <h3>📖 "Electrónica para Dummies"</h3>
              <p className="autor-libro">Cathleen Shamieh</p>
              <p className="descripcion-libro">Introducción amigable a la electrónica con proyectos prácticos.</p>
              <span className="nivel">Nivel: Principiante</span>
            </div>

            <div className="libro-item">
              <h3>📖 "The Art of Electronics"</h3>
              <p className="autor-libro">Paul Horowitz, Winfield Hill</p>
              <p className="descripcion-libro">Considerada la biblia de la electrónica, cubre teoría y práctica avanzada.</p>
              <span className="nivel">Nivel: Avanzado</span>
            </div>

            <div className="libro-item">
              <h3>📖 "Practical Electronics for Inventors"</h3>
              <p className="autor-libro">Paul Scherz, Simon Monk</p>
              <p className="descripcion-libro">Enfoque práctico con énfasis en proyectos y aplicaciones reales.</p>
              <span className="nivel">Nivel: Intermedio</span>
            </div>
          </div>
        </section>

        <section className="sitios-section">
          <h2>🌐 Sitios Web Educativos</h2>
          <div className="sitios-grid">
            <div className="sitio-item">
              <h3>🔧 All About Circuits</h3>
              <p className="url-sitio">https://www.allaboutcircuits.com</p>
              <p className="descripcion-sitio">Textbooks, tutorials y foros sobre todos los temas de electrónica.</p>
              <span className="categoria-sitio">Teoría y Práctica</span>
            </div>

            <div className="sitio-item">
              <h3>💡 Electronics Tutorials</h3>
              <p className="url-sitio">https://www.electronics-tutorials.ws</p>
              <p className="descripcion-sitio">Tutoriales gratuitos desde básico hasta avanzado.</p>
              <span className="categoria-sitio">Tutoriales</span>
            </div>

            <div className="sitio-item">
              <h3>🔌 SparkFun Learn</h3>
              <p className="url-sitio">https://learn.sparkfun.com</p>
              <p className="descripcion-sitio">Tutoriales prácticos con componentes reales y proyectos.</p>
              <span className="categoria-sitio">Proyectos Prácticos</span>
            </div>

            <div className="sitio-item">
              <h3>💬 Electrónica Unicrom</h3>
              <p className="url-sitio">https://unicrom.com</p>
              <p className="descripcion-sitio">Tutoriales en español con explicaciones claras y ejemplos.</p>
              <span className="categoria-sitio">Comunidad en Español</span>
            </div>
          </div>
        </section>

        <section className="consejos-section">
          <h2>💡 Consejos de Estudio</h2>
          <div className="consejos-content">
            <div className="consejo-item">
              <h4>🎯 Empieza con lo Básico</h4>
              <p>Domina primero resistencias, capacitores y diodos antes de pasar a transistores y circuitos integrados.</p>
            </div>
            <div className="consejo-item">
              <h4>🔧 Teoría + Práctica</h4>
              <p>Combina el estudio teórico con proyectos prácticos. La experiencia hands-on es invaluable.</p>
            </div>
            <div className="consejo-item">
              <h4>📊 Usa Hoja de Datos</h4>
              <p>Aprende a leer datasheets de componentes. Es una habilidad esencial en electrónica.</p>
            </div>
            <div className="consejo-item">
              <h4>🔄 Repasa Constantemente</h4>
              <p>La electrónica se construye sobre conceptos fundamentales. La repetición consolida el aprendizaje.</p>
            </div>
          </div>
        </section>
      </div>

      <Link to="/tareacircuitos" className="back-button">
        ← Volver a Circuitos
      </Link>
    </div>
  )
}

export default Bibliografia