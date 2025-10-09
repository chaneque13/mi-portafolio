import { Link } from 'react-router-dom'
import './Tarea7.css'

function Tarea7() {
  return (
    <div className="tarea-page">
      <header className="tarea-header">
        <h1>📊 Tipología de Contenidos en Internet</h1>
        <p className="subtitle">Análisis y clasificación de los tipos de contenido web</p>
      </header>

      <div className="tarea-content">
        <section className="intro-section">
          <h2>🔍 Introducción</h2>
          <p>
            La tipología web nos permite clasificar y entender mejor los diversos contenidos que 
            encontramos en internet. Esta clasificación ayuda a comprender cómo interactuamos 
            digitalmente y cómo estos contenidos se interrelacionan.
          </p>
        </section>
              <h2>🎯 Mis 4 Categorías Principales</h2>
        <section className="tipologia-grid">
      
          
          <div className="categoria-card">
            <div className="categoria-header">
              <span className="categoria-icon">👥</span>
              <h3>Social</h3>
            </div>
            <div className="categoria-content">
              <p><strong>Definición:</strong> Contenidos que facilitan la interacción humana</p>
              <ul>
                <li>Redes sociales (Facebook, Instagram, Twitter)</li>
                <li>Plataformas de comunicación (WhatsApp, Discord)</li>
                <li>Juegos multijugador en línea</li>
                <li>Foros y comunidades</li>
              </ul>
            </div>
          </div>

          <div className="categoria-card">
            <div className="categoria-header">
              <span className="categoria-icon">🎓</span>
              <h3>Educativo</h3>
            </div>
            <div className="categoria-content">
              <p><strong>Definición:</strong> Contenidos para aprendizaje y desarrollo</p>
              <ul>
                <li>Plataformas educativas (Coursera, edX, Classroom)</li>
                <li>Tutoriales en video (YouTube educativo)</li>
                <li>Documentación técnica</li>
                <li>Foros especializados</li>
              </ul>
              <p className="nota">💡 <em>Nota: Muchos contenidos educativos usan formatos sociales y de entretenimiento</em></p>
            </div>
          </div>

          <div className="categoria-card">
            <div className="categoria-header">
              <span className="categoria-icon">🎮</span>
              <h3>Entretenimiento</h3>
            </div>
            <div className="categoria-content">
              <p><strong>Definición:</strong> Contenidos para ocio y diversión</p>
              <ul>
                <li>Streaming (Netflix, HBO, YouTube)</li>
                <li>Videojuegos y plataformas gaming</li>
                <li>Contenido multimedia</li>
                <li>Redes sociales de entretenimiento</li>
              </ul>
            </div>
          </div>

          <div className="categoria-card">
            <div className="categoria-header">
              <span className="categoria-icon">💼</span>
              <h3>Económico</h3>
            </div>
            <div className="categoria-content">
              <p><strong>Definición:</strong> Contenidos relacionados con transacciones y finanzas</p>
              <ul>
                <li>Banca en línea y fintech</li>
                <li>E-commerce (Amazon, Mercado Libre)</li>
                <li>Criptomonedas y trading</li>
                <li>Plataformas de pago (PayPal, Stripe)</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="analisis-section">
          <h2>🔗 Análisis de Interconexión</h2>
          <div className="interconexion">
            <p>
              <strong>Lo más interesante es cómo estas categorías se interrelacionan:</strong>
            </p>
            <ul>
              <li>🎮 <strong>El entretenimiento necesita lo económico:</strong> Suscripciones, compras en juego, patrocinios</li>
              <li>👥 <strong>Lo social es fundamental:</strong> Sin interacción humana, las plataformas pierden sentido</li>
              <li>🎓 <strong>Lo educativo se mezcla:</strong> Usa formatos de entretenimiento para ser más efectivo</li>
              <li>💼 <strong>Lo económico impulsa todo:</strong> Monetiza las otras categorías</li>
            </ul>
            <p className="conclusion">
              <strong>Conclusión:</strong> Esta clasificación en 4 categorías principales permite entender 
              la complejidad de internet, donde rara vez encontramos contenido "puro". La interconexión 
              entre estas categorías es lo que hace tan rica y diversa la experiencia web actual.
            </p>
          </div>
        </section>

        <section className="ejemplos-section">
          <h2>🌐 Ejemplos Prácticos</h2>
          <div className="ejemplos-grid">
            <div className="ejemplo-item">
              <h4>YouTube</h4>
              <p>Combina: 🎮 Entretenimiento + 🎓 Educación + 💼 Economía</p>
            </div>
            <div className="ejemplo-item">
              <h4>Discord</h4>
              <p>Combina: 👥 Social + 🎮 Entretenimiento + 🎓 Educación</p>
            </div>
            <div className="ejemplo-item">
              <h4>Coursera</h4>
              <p>Combina: 🎓 Educación + 💼 Economía + 👥 Social</p>
            </div>
          </div>
        </section>
      </div>

      <Link to="/" className="back-button">
        ← Volver al portafolio
      </Link>
    </div>
  )
}

export default Tarea7