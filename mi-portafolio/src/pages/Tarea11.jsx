import { Link } from 'react-router-dom'
import './Tarea11.css'

function Tarea11() {
  return (
    <div className="tarea-page">
      <header className="tarea-header">
        <h1>🕰️ Línea del Tiempo: Tecnologías Disruptivas</h1>
        <p className="subtitle">De la imprenta a la inteligencia artificial - La evolución que cambió al mundo</p>
      </header>

      <div className="tarea-content">
        <section className="intro-section">
          <h2>🔍 ¿Qué son las Tecnologías Disruptivas?</h2>
          <p>
            Son innovaciones que <strong>rompen con lo establecido</strong> y cambian permanentemente 
            la forma en que vivimos, trabajamos y nos relacionamos. Comienzan con prestaciones 
            inferiores pero terminan dominando completamente el mercado.
          </p>
          <div className="concepto-card">
            <h3>📚 Concepto clave - Clayton M. Christensen</h3>
            <p>
              <strong>"The Innovator's Dilemma" (1995)</strong> - Las tecnologías disruptivas 
              inicialmente son peores que las establecidas, pero mejoran rápidamente y 
              eventualmente desplazan a las tecnologías dominantes.
            </p>
          </div>
        </section>

        {/* Línea del Tiempo Principal */}
        <section className="timeline-section">
          <h2>📅 Línea del Tiempo Histórica</h2>
          
          <div className="timeline">
            {/* Imprenta */}
            <div className="timeline-item">
              <div className="timeline-year">1040</div>
              <div className="timeline-content">
                <h3>🎨 Imprenta China</h3>
                <p><strong>Primera imprenta</strong> con piezas de porcelana sobre papel de arroz</p>
                <ul>
                  <li>Precursora de la revolución de la imprenta</li>
                  <li>Sistema de impresión con tipos móviles</li>
                </ul>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-year">1440</div>
              <div className="timeline-content">
                <h3>🖨️ Imprenta de Gutenberg</h3>
                <p><strong>Johannes Gutenberg</strong> revoluciona la reproducción de textos</p>
                <ul>
                  <li>Quitó el monopolio a la iglesia católica</li>
                  <li>Impulsó el desarrollo humano y el conocimiento</li>
                  <li>Democratizó el acceso a la información</li>
                </ul>
              </div>
            </div>

            {/* Máquina de Vapor */}
            <div className="timeline-item">
              <div className="timeline-year">1769</div>
              <div className="timeline-content">
                <h3>🚂 Máquina de Vapor</h3>
                <p><strong>James Watt</strong> perfecciona la máquina de vapor</p>
                <ul>
                  <li>Revolución Industrial</li>
                  <li>Cambio industrial, económico, social y científico</li>
                  <li>Fin de monarquías absolutistas</li>
                  <li>Ascenso de la burguesía y capitalismo</li>
                </ul>
              </div>
            </div>

            {/* Teléfono */}
            <div className="timeline-item">
              <div className="timeline-year">1854</div>
              <div className="timeline-content">
                <h3>📞 Teléfono de Meucci</h3>
                <p><strong>Antonio Meucci</strong> inventa el "Teletrofoni"</p>
                <ul>
                  <li>Primer prototipo de teléfono</li>
                  <li>Comunicación a distancia</li>
                </ul>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-year">1876</div>
              <div className="timeline-content">
                <h3>📟 Teléfono de Bell</h3>
                <p><strong>Alexander Graham Bell</strong> patenta el teléfono</p>
                <ul>
                  <li>Cambió la forma de comunicarse a grandes distancias</li>
                  <li>Nueva industria y fuentes de trabajo</li>
                  <li>No desapareció el correo - evolución disruptiva</li>
                </ul>
              </div>
            </div>

            {/* Automóvil */}
            <div className="timeline-item">
              <div className="timeline-year">1908</div>
              <div className="timeline-content">
                <h3>🚗 Ford Modelo T</h3>
                <p><strong>Henry Ford</strong> revoluciona la industria automotriz</p>
                <ul>
                  <li>Fabricación en serie - verdadera disrupción</li>
                  <li>Accesible a clases medias</li>
                  <li>Popularización masiva del automóvil</li>
                  <li>Cambió el transporte de personas y mercancías</li>
                </ul>
              </div>
            </div>

            {/* Teléfono Móvil */}
            <div className="timeline-item">
              <div className="timeline-year">1973</div>
              <div className="timeline-content">
                <h3>📱 Primer Teléfono Móvil</h3>
                <p><strong>Martín Cooper</strong> realiza la primera llamada móvil</p>
                <ul>
                  <li>Segunda disrupción en telecomunicaciones</li>
                  <li>Comunicación sin cables</li>
                </ul>
              </div>
            </div>

            {/* Smartphone */}
            <div className="timeline-item">
              <div className="timeline-year">1992</div>
              <div className="timeline-content">
                <h3>📲 IBM Simon</h3>
                <p><strong>Primer smartphone</strong> - IBM Simon Personal Communicator</p>
                <ul>
                  <li>Tercera disrupción tecnológica en telefonía</li>
                  <li>Concentra telecomunicaciones, procesadores, memorias y software</li>
                  <li>Cambió la forma de comunicarse de la sociedad</li>
                </ul>
              </div>
            </div>

            {/* Internet */}
            <div className="timeline-item current">
              <div className="timeline-year">1990s+</div>
              <div className="timeline-content">
                <h3>🌐 Internet</h3>
                <p><strong>La gran tecnología disruptiva de nuestra época</strong></p>
                <ul>
                  <li>Cambió el curso de la historia y desarrollo humano</li>
                  <li>Base para todas las tecnologías disruptivas actuales</li>
                  <li>Disrupciones cada vez más comunes y frecuentes</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Tecnologías Futuras */}
        <section className="futuro-section">
          <h2>🚀 Tecnologías con Potencial Disruptivo Actual</h2>
          
          <div className="tecnologias-grid">
            <div className="tecnologia-card">
              <h3>🤖 Inteligencia Artificial</h3>
              <p>Computadoras que emulan inteligencia y habilidades humanas</p>
              <ul>
                <li>Aprendizaje automático</li>
                <li>Procesamiento de lenguaje natural</li>
                <li>Visión por computadora</li>
              </ul>
            </div>

            <div className="tecnologia-card">
              <h3>☁️ Cómputo en la Nube</h3>
              <p>Acceso a recursos informáticos remotos via internet</p>
              <ul>
                <li>Almacenamiento de información</li>
                <li>Ejecución de aplicaciones remotas</li>
                <li>Plataformas como servicio</li>
              </ul>
            </div>

            <div className="tecnologia-card">
              <h3>📡 Internet de las Cosas</h3>
              <p>Dispositivos que transfieren datos sin intervención humana</p>
              <ul>
                <li>Wearables y automóviles conectados</li>
                <li>Casas inteligentes</li>
                <li>Ciudades inteligentes</li>
              </ul>
            </div>

            <div className="tecnologia-card">
              <h3>🕶️ Realidad Virtual/Aumentada</h3>
              <p>Experiencias simuladas y combinación con el mundo real</p>
              <ul>
                <li>Inmersión total (VR)</li>
                <li>Elementos superpuestos (AR)</li>
                <li>Entrenamiento y educación</li>
              </ul>
            </div>

            <div className="tecnologia-card">
              <h3>⚛️ Computación Cuántica</h3>
              <p>Cálculos complejos a velocidades inalcanzables</p>
              <ul>
                <li>Principios cuánticos</li>
                <li>Resolución de problemas complejos</li>
                <li>Investigación científica</li>
              </ul>
            </div>

            <div className="tecnologia-card">
              <h3>⛓️ Blockchain</h3>
              <p>Registro digital compartido e inmodificable</p>
              <ul>
                <li>Criptomonedas</li>
                <li>Contratos inteligentes</li>
                <li>Transparencia en transacciones</li>
              </ul>
            </div>

            <div className="tecnologia-card">
              <h3>🤖 Robótica de Servicios</h3>
              <p>Robótica aplicada a tareas útiles para humanos</p>
              <ul>
                <li>Logística de almacén</li>
                <li>Procesos quirúrgicos</li>
                <li>Agricultura automatizada</li>
              </ul>
            </div>

            <div className="tecnologia-card">
              <h3>🚗 Vehículos Autónomos</h3>
              <p>Vehículos que se conducen sin intervención humana</p>
              <ul>
                <li>Tesla y otras marcas</li>
                <li>Transporte autónomo</li>
                <li>Aeronaves no tripuladas</li>
              </ul>
            </div>

            <div className="tecnologia-card">
              <h3>🌿 Tecnologías Verdes</h3>
              <p>Innovaciones para reducir impacto ambiental</p>
              <ul>
                <li>Energía solar</li>
                <li>Captura de carbono</li>
                <li>Sostenibilidad</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="reflexion-section">
          <h2>💡 Reflexión Final</h2>
          <div className="reflexion-content">
            <p>
              Las <strong>tecnologías disruptivas</strong> demuestran que la innovación no se trata 
              solo de mejorar lo existente, sino de <strong>reinventar completamente</strong> cómo 
              hacemos las cosas. Desde Gutenberg hasta la IA, cada disrupción ha redefinido 
              los límites de lo posible y nos ha llevado hacia nuevos horizontes del desarrollo humano.
            </p>
            <p>
              Hoy vivimos en una era donde estas disrupciones ocurren con <strong>mayor frecuencia</strong>, 
              impulsadas por internet y la globalización. El futuro se escribe con cada nueva 
              tecnología que desafía el status quo.
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

export default Tarea11