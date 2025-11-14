import { Link } from 'react-router-dom'
import './Diodos.css'

function Diodos() {
  return (
    <div className="tarea-page">
      <header className="tarea-header">
        <h1>🔴 Diodos</h1>
        <p className="subtitle">Permiten el paso de corriente en una sola dirección</p>
      </header>

      <div className="tarea-content">
        <section className="intro-section">
          <h2>🔍 ¿Qué es un Diodo?</h2>
          <p>
            Un <strong>diodo</strong> es un componente semiconductor que permite el flujo de 
            corriente eléctrica en <strong>una sola dirección</strong>, actuando como una 
            válvula unidireccional para la corriente.
          </p>
          <div className="formula-card">
            <h3>📐 Característica V-I</h3>
            <p><strong>I = Is × (e^(V/(n×Vt)) - 1)</strong></p>
            <p>Donde: I = Corriente, Is = Corriente de saturación, V = Voltaje, n = Factor ideal, Vt = Voltaje térmico</p>
          </div>
        </section>

        <section className="simbolos-section">
          <h2>🎨 Símbolos y Polaridad</h2>
          <p>Los diodos tienen una polaridad definida y símbolos específicos para cada tipo.</p>
          
          <div className="simbolos-grid">
            <div className="simbolo-card">
              <h3>🔴 Diodo Rectificador</h3>
              <div className="simbolo-visual">
                <div className="diodo-simbolo">
                  <div className="anodo">Ánodo</div>
                  <div className="cuerpo-diodo"></div>
                  <div className="catodo">Cátodo</div>
                </div>
              </div>
              <p><strong>Flujo: Ánodo → Cátodo</strong></p>
              <p>La banda indica el cátodo</p>
            </div>

            <div className="simbolo-card">
              <h3>💡 Diodo LED</h3>
              <div className="simbolo-visual">
                <div className="led-simbolo">
                  <div className="anodo">Ánodo</div>
                  <div className="cuerpo-led"></div>
                  <div className="catodo">Cátodo</div>
                </div>
              </div>
              <p><strong>Flujo: Ánodo → Cátodo</strong></p>
              <p>Flechas indican emisión de luz</p>
            </div>

            <div className="simbolo-card">
              <h3>⚡ Diodo Zener</h3>
              <div className="simbolo-visual">
                <div className="zener-simbolo">
                  <div className="anodo">Ánodo</div>
                  <div className="cuerpo-zener"></div>
                  <div className="catodo">Cátodo</div>
                </div>
              </div>
              <p><strong>Funciona en inversa</strong></p>
              <p>Regulación de voltaje</p>
            </div>
          </div>
        </section>

        <section className="tipos-section">
          <h2>🔧 Tipos de Diodos</h2>
          <div className="tipos-grid">
            <div className="tipo-card">
              <h3>🔴 Diodos Rectificadores</h3>
              <ul>
                <li><strong>Conversión AC a DC</strong></li>
                <li>Corrientes altas</li>
                <li>Fuentes de alimentación</li>
                <li>1N4001 - 1N4007 series</li>
                <li>Voltaje: 50V - 1000V</li>
              </ul>
            </div>

            <div className="tipo-card">
              <h3>💡 Diodos LED</h3>
              <ul>
                <li><strong>Emisión de luz</strong></li>
                <li>Diferentes colores</li>
                <li>Bajo consumo</li>
                <li>Necesitan resistencia limitadora</li>
                <li>Voltaje directo: 1.8V - 3.3V</li>
              </ul>
            </div>

            <div className="tipo-card">
              <h3>⚡ Diodos Zener</h3>
              <ul>
                <li><strong>Regulación de voltaje</strong></li>
                <li>Funcionan en polarización inversa</li>
                <li>Voltaje de ruptura controlado</li>
                <li>Protección de circuitos</li>
                <li>Series: 1N4728 - 1N4764</li>
              </ul>
            </div>

            <div className="tipo-card">
              <h3>📡 Diodos Schottky</h3>
              <ul>
                <li><strong>Baja caída de voltaje</strong></li>
                <li>Alta velocidad de conmutación</li>
                <li>Rectificación de alta frecuencia</li>
                <li>Menor pérdida de energía</li>
                <li>Voltaje directo: ~0.3V</li>
              </ul>
            </div>

            <div className="tipo-card">
              <h3>🔄 Diodos de Señal</h3>
              <ul>
                <li><strong>Circuitos de baja potencia</strong></li>
                <li>Detección de señales</li>
                <li>Conmutación rápida</li>
                <li>Protección ESD</li>
                <li>Series: 1N4148, 1N914</li>
              </ul>
            </div>

            <div className="tipo-card">
              <h3>💡 Diodos Emisores de Infrarrojo</h3>
              <ul>
                <li><strong>Luz infrarroja</strong></li>
                <li>Controles remotos</li>
                <li>Sensores de proximidad</li>
                <li>Comunicación óptica</li>
                <li>Longitud onda: 850nm - 940nm</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="caracteristicas-section">
          <h2>⚡ Características Principales</h2>
          <div className="caracteristicas-grid">
            <div className="caracteristica-card">
              <h3>📊 Voltaje Directo (Vf)</h3>
              <p><strong>Voltaje necesario para conducción</strong></p>
              <ul>
                <li>Silicio: 0.6V - 0.7V</li>
                <li>Schottky: 0.2V - 0.3V</li>
                <li>LED rojo: 1.8V - 2.2V</li>
                <li>LED azul/blanco: 3.0V - 3.6V</li>
              </ul>
            </div>

            <div className="caracteristica-card">
              <h3>⚡ Corriente Máxima (If)</h3>
              <p><strong>Máxima corriente en directa</strong></p>
              <ul>
                <li>Señal: 150mA - 300mA</li>
                <li>Rectificador: 1A - 6A</li>
                <li>LED: 20mA - 30mA</li>
                <li>Potencia: hasta 100A</li>
              </ul>
            </div>

            <div className="caracteristica-card">
              <h3>🛡️ Voltaje Inverso (Vr)</h3>
              <p><strong>Máximo voltaje en inversa</strong></p>
              <ul>
                <li>Señal: 75V - 100V</li>
                <li>Rectificador: 50V - 1000V</li>
                <li>Zener: 2.4V - 200V</li>
                <li>Excederlo causa daño</li>
              </ul>
            </div>

            <div className="caracteristica-card">
              <h3>⏱️ Tiempo de Recuperación</h3>
              <p><strong>Velocidad de conmutación</strong></p>
              <ul>
                <li>Rectificador: 1µs - 10µs</li>
                <li>Schottky: 10ns - 100ns</li>
                <li>Señal: 2ns - 8ns</li>
                <li>Crítico en alta frecuencia</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="aplicaciones-section">
          <h2>🔌 Aplicaciones Prácticas</h2>
          <div className="aplicaciones-grid">
            <div className="aplicacion-card">
              <h3>🔋 Rectificación</h3>
              <p>Conversión de corriente alterna a continua:</p>
              <ul>
                <li>Fuentes de alimentación</li>
                <li>Cargadores de baterías</li>
                <li>Circuitos de potencia</li>
                <li>Medio onda y onda completa</li>
              </ul>
            </div>

            <div className="aplicacion-card">
              <h3>💡 Indicación Visual</h3>
              <p>LEDs para mostrar estados:</p>
              <ul>
                <li>Indicadores de encendido</li>
                <li>Display 7 segmentos</li>
                <li>Iluminación de bajo consumo</li>
                <li>Pantallas LED</li>
              </ul>
            </div>

            <div className="aplicacion-card">
              <h3>⚡ Protección</h3>
              <p>Protegen circuitos de voltajes indeseados:</p>
              <ul>
                <li>Diodos Zener (sobrevoltaje)</li>
                <li>Protección ESD</li>
                <li>Supresión de transitorios</li>
                <li>Protección de pines</li>
              </ul>
            </div>

            <div className="aplicacion-card">
              <h3>📡 Circuitos RF</h3>
              <p>En radiofrecuencia y comunicaciones:</p>
              <ul>
                <li>Detección de AM</li>
                <li>Mezcladores de frecuencia</li>
                <li>Moduladores</li>
                <li>Circuitos de sintonía</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="polaridad-section">
          <h2>🎯 Identificación de Polaridad</h2>
          <div className="polaridad-content">
            <div className="polaridad-item">
              <h4>🔴 Diodos Rectificadores</h4>
              <p>La <strong>banda plateada o blanca</strong> indica el <strong>cátodo</strong>. 
              El otro extremo es el ánodo.</p>
            </div>
            <div className="polaridad-item">
              <h4>💡 LEDs</h4>
              <p>El <strong>terminal más largo</strong> es el <strong>ánodo</strong>. 
              En el LED, el cátodo tiene la patita corta y una muesca plana.</p>
            </div>
            <div className="polaridad-item">
              <h4>⚡ Diodos SMD</h4>
              <p>Una <strong>banda o marca</strong> indica el <strong>cátodo</strong>. 
              En algunos, un punto o triángulo señala el ánodo.</p>
            </div>
          </div>
        </section>

        <section className="precauciones-section">
          <h2>⚠️ Precauciones Importantes</h2>
          <div className="precauciones-content">
            <div className="precaucion-item">
              <h4>🔋 Polaridad Correcta</h4>
              <p>Conectar un diodo al revés puede causar <strong>cortocircuito</strong> 
              o daño permanente. Siempre verificar la polaridad.</p>
            </div>
            <div className="precaucion-item">
              <h4>💡 Resistencia para LEDs</h4>
              <p>Los LEDs <strong>siempre necesitan una resistencia limitadora</strong> 
              en serie. Sin ella, se queman instantáneamente.</p>
            </div>
            <div className="precaucion-item">
              <h4>⚡ Disipación de Calor</h4>
              <p>Diodos de potencia requieren <strong>disipadores de calor</strong>. 
              La temperatura excesiva reduce su vida útil.</p>
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

export default Diodos