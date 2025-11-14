import { Link } from 'react-router-dom'
import './Transistores.css'

function Transistores() {
  return (
    <div className="tarea-page">
      <header className="tarea-header">
        <h1>🟢 Transistores</h1>
        <p className="subtitle">Amplifican o conmutan señales electrónicas - El componente clave de la electrónica moderna</p>
      </header>

      <div className="tarea-content">
        <section className="intro-section">
          <h2>🔍 ¿Qué es un Transistor?</h2>
          <p>
            Un <strong>transistor</strong> es un dispositivo semiconductor que puede 
            <strong>amplificar señales</strong> o actuar como <strong>interruptor electrónico</strong>. 
            Es el componente fundamental que hizo posible la revolución digital.
          </p>
          <div className="formula-card">
            <h3>📐 Ganancia de Corriente (BJT)</h3>
            <p><strong>β = Ic / Ib</strong></p>
            <p>Donde: β = Ganancia, Ic = Corriente colector, Ib = Corriente base</p>
          </div>
        </section>

        <section className="tipos-section">
          <h2>🔧 Familias de Transistores</h2>
          <div className="familias-grid">
            <div className="familia-card">
              <h3>🎯 Transistores BJT</h3>
              <p><strong>Bipolar Junction Transistor</strong></p>
              <ul>
                <li>Control por corriente</li>
                <li>Tres terminales: Base, Colector, Emisor</li>
                <li>Tipos: NPN y PNP</li>
                <li>Ganancia de corriente (β)</li>
                <li>Amplificación lineal</li>
              </ul>
            </div>

            <div className="familia-card">
              <h3>⚡ Transistores MOSFET</h3>
              <p><strong>Metal-Oxide-Semiconductor FET</strong></p>
              <ul>
                <li>Control por voltaje</li>
                <li>Tres terminales: Puerta, Drenador, Fuente</li>
                <li>Tipos: Canal N y Canal P</li>
                <li>Alta impedancia de entrada</li>
                <li>Conmutación rápida</li>
              </ul>
            </div>

            <div className="familia-card">
              <h3>🔌 Transistores JFET</h3>
              <p><strong>Junction Field-Effect Transistor</strong></p>
              <ul>
                <li>Control por voltaje</li>
                <li>Tres terminales: Puerta, Drenador, Fuente</li>
                <li>Tipos: Canal N y Canal P</li>
                <li>Alta impedancia de entrada</li>
                <li>Amplificación de audio</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="configuraciones-section">
          <h2>🎛️ Configuraciones de Conexión</h2>
          <div className="configuraciones-grid">
            <div className="configuracion-card">
              <h3>📈 Emisor Común</h3>
              <p><strong>Mayor ganancia de voltaje</strong></p>
              <ul>
                <li>Entrada: Base</li>
                <li>Salida: Colector</li>
                <li>Común: Emisor</li>
                <li>Inversión de fase</li>
                <li>Uso más común</li>
              </ul>
            </div>

            <div className="configuracion-card">
              <h3>📊 Colector Común</h3>
              <p><strong>Seguidor de emisor</strong></p>
              <ul>
                <li>Entrada: Base</li>
                <li>Salida: Emisor</li>
                <li>Común: Colector</li>
                <li>Ganancia ≈ 1</li>
                <li>Adaptación de impedancia</li>
              </ul>
            </div>

            <div className="configuracion-card">
              <h3>📉 Base Común</h3>
              <p><strong>Mayor ancho de banda</strong></p>
              <ul>
                <li>Entrada: Emisor</li>
                <li>Salida: Colector</li>
                <li>Común: Base</li>
                <li>Sin inversión de fase</li>
                <li>Circuitos RF</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="simbolos-section">
          <h2>🎨 Símbolos Electrónicos</h2>
          <div className="simbolos-grid">
            <div className="simbolo-card">
              <h3>🟢 BJT NPN</h3>
              <div className="simbolo-visual">
                <div className="transistor-simbolo npn">
                  <div className="colector">Colector</div>
                  <div className="base">Base</div>
                  <div className="emisor">Emisor</div>
                </div>
              </div>
              <p><strong>Flecha hacia afuera</strong></p>
              <p>Corriente: Colector → Emisor</p>
            </div>

            <div className="simbolo-card">
              <h3>🔴 BJT PNP</h3>
              <div className="simbolo-visual">
                <div className="transistor-simbolo pnp">
                  <div className="colector">Colector</div>
                  <div className="base">Base</div>
                  <div className="emisor">Emisor</div>
                </div>
              </div>
              <p><strong>Flecha hacia adentro</strong></p>
              <p>Corriente: Emisor → Colector</p>
            </div>

            <div className="simbolo-card">
              <h3>⚡ MOSFET Canal N</h3>
              <div className="simbolo-visual">
                <div className="mosfet-simbolo canal-n">
                  <div className="drenador">Drenador</div>
                  <div className="puerta">Puerta</div>
                  <div className="fuente">Fuente</div>
                </div>
              </div>
              <p><strong>Flecha hacia adentro</strong></p>
              <p>Activa con Vgs positivo</p>
            </div>

            <div className="simbolo-card">
              <h3>🔵 MOSFET Canal P</h3>
              <div className="simbolo-visual">
                <div className="mosfet-simbolo canal-p">
                  <div className="drenador">Drenador</div>
                  <div className="puerta">Puerta</div>
                  <div className="fuente">Fuente</div>
                </div>
              </div>
              <p><strong>Flecha hacia afuera</strong></p>
              <p>Activa con Vgs negativo</p>
            </div>
          </div>
        </section>

        <section className="modos-section">
          <h2>🔋 Modos de Operación (BJT)</h2>
          <div className="modos-grid">
            <div className="modo-card">
              <h3>📈 Activa</h3>
              <p><strong>Amplificación lineal</strong></p>
              <ul>
                <li>Unión BE: Directa</li>
                <li>Unión BC: Inversa</li>
                <li>Ic = β × Ib</li>
                <li>Para amplificadores</li>
                <li>Corriente controlada</li>
              </ul>
            </div>

            <div className="modo-card">
              <h3>💡 Saturación</h3>
              <p><strong>Interruptor cerrado</strong></p>
              <ul>
                <li>Unión BE: Directa</li>
                <li>Unión BC: Directa</li>
                <li>Máxima corriente</li>
                <li>Mínima caída Vce</li>
                <li>Estado ON</li>
              </ul>
            </div>

            <div className="modo-card">
              <h3>🚫 Corte</h3>
              <p><strong>Interruptor abierto</strong></p>
              <ul>
                <li>Unión BE: Inversa</li>
                <li>Unión BC: Inversa</li>
                <li>Corriente ≈ 0</li>
                <li>Máximo voltaje Vce</li>
                <li>Estado OFF</li>
              </ul>
            </div>

            <div className="modo-card">
              <h3>↔️ Inversa</h3>
              <p><strong>Operación invertida</strong></p>
              <ul>
                <li>Unión BE: Inversa</li>
                <li>Unión BC: Directa</li>
                <li>Baja ganancia</li>
                <li>Poco utilizado</li>
                <li>Características pobres</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="aplicaciones-section">
          <h2>🔌 Aplicaciones Prácticas</h2>
          <div className="aplicaciones-grid">
            <div className="aplicacion-card">
              <h3>📈 Amplificadores</h3>
              <p>Incrementan la amplitud de señales:</p>
              <ul>
                <li>Amplificadores de audio</li>
                <li>Preamplificadores</li>
                <li>Amplificadores RF</li>
                <li>Amplificadores operacionales</li>
              </ul>
            </div>

            <div className="aplicacion-card">
              <h3>🔀 Conmutación</h3>
              <p>Actúan como interruptores electrónicos:</p>
              <ul>
                <li>Control de relés</li>
                <li>Drivers de motores</li>
                <li>Control de LEDs</li>
                <li>Circuitos digitales</li>
              </ul>
            </div>

            <div className="aplicacion-card">
              <h3>⏰ Osciladores</h3>
              <p>Generan señales periódicas:</p>
              <ul>
                <li>Osciladores LC</li>
                <li>Osciladores RC</li>
                <li>Generadores de reloj</li>
                <li>Circuitos de temporización</li>
              </ul>
            </div>

            <div className="aplicacion-card">
              <h3>💾 Memoria Digital</h3>
              <p>Almacenamiento de información:</p>
              <ul>
                <li>Celda de memoria RAM</li>
                <li>Flip-flops</li>
                <li>Registros de desplazamiento</li>
                <li>Circuitos lógicos</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="parametros-section">
          <h2>📊 Parámetros Importantes</h2>
          <div className="parametros-grid">
            <div className="parametro-card">
              <h3>🎯 Ganancia (β o hFE)</h3>
              <p><strong>Relación Ic/Ib (BJT)</strong></p>
              <ul>
                <li>BJT: 20 - 800</li>
                <li>Transistores de señal: 100 - 300</li>
                <li>Transistores de potencia: 20 - 100</li>
                <li>Depende de la temperatura</li>
              </ul>
            </div>

            <div className="parametro-card">
              <h3>⚡ Vce(sat)</h3>
              <p><strong>Voltaje Colector-Emisor en saturación</strong></p>
              <ul>
                <li>BJT: 0.2V - 0.3V</li>
                <li>MOSFET: Muy bajo (Rds(on))</li>
                <li>Indica pérdidas</li>
                <li>Menor = mejor</li>
              </ul>
            </div>

            <div className="parametro-card">
              <h3>💪 Ic(max)</h3>
              <p><strong>Corriente máxima de colector</strong></p>
              <ul>
                <li>Señal: 100mA - 500mA</li>
                <li>Potencia: 1A - 100A</li>
                <li>Determina capacidad</li>
                <li>No exceder</li>
              </ul>
            </div>

            <div className="parametro-card">
              <h3>🛡️ Vceo</h3>
              <p><strong>Voltaje máximo Colector-Emisor</strong></p>
              <ul>
                <li>Señal: 30V - 100V</li>
                <li>Potencia: 200V - 1000V</li>
                <li>Límite de ruptura</li>
                <li>Crítico en conmutación</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="identificacion-section">
          <h2>🔍 Identificación de Terminales</h2>
          <div className="identificacion-content">
            <div className="identificacion-item">
              <h4>🟢 BJT - TO-92</h4>
              <p>Visto de frente, patas hacia abajo: <strong>Emisor - Base - Colector</strong></p>
              <p className="nota">(Algunos: Colector - Base - Emisor)</p>
            </div>
            <div className="identificacion-item">
              <h4>⚡ MOSFET - TO-220</h4>
              <p>Visto de frente, patas hacia abajo: <strong>Puerta - Drenador - Fuente</strong></p>
              <p className="nota">(Drenador conectado al disipador)</p>
            </div>
            <div className="identificacion-item">
              <h4>💾 SMD</h4>
              <p>Usar <strong>hoja de datos</strong> del fabricante. Marcas específicas 
              indican pin 1.</p>
              <p className="nota">(No hay estándar universal)</p>
            </div>
          </div>
        </section>

        <section className="curiosidades-section">
          <h2>💡 Curiosidades Históricas</h2>
          <div className="curiosidades-content">
            <div className="curiosidad-item">
              <h4>🏆 Invento Revolucionario</h4>
              <p>El transistor fue inventado en 1947 en Bell Labs por Bardeen, Brattain y Shockley, 
              ganando el Nobel de Física en 1956. Reemplazó a los tubos de vacío.</p>
            </div>
            <div className="curiosidad-item">
              <h4>💻 Base de la Computación</h4>
              <p>Un microprocesador moderno puede contener <strong>miles de millones</strong> de 
              transistores en un área menor a una uña.</p>
            </div>
            <div className="curiosidad-item">
              <h4>📱 Evolución Constante</h4>
              <p>La <strong>Ley de Moore</strong> predijo que el número de transistores en un chip 
              se duplicaría cada 2 años, guiando el desarrollo tecnológico por décadas.</p>
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

export default Transistores