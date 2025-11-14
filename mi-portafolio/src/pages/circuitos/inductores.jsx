import { Link } from 'react-router-dom'
import './Inductores.css'

function Inductores() {
  return (
    <div className="tarea-page">
      <header className="tarea-header">
        <h1>🟡 Inductores</h1>
        <p className="subtitle">Almacenan energía en un campo magnético</p>
      </header>

      <div className="tarea-content">
        <section className="intro-section">
          <h2>🔍 ¿Qué es un Inductor?</h2>
          <p>
            Un <strong>inductor</strong> o bobina es un componente pasivo que almacena 
            energía en forma de <strong>campo magnético</strong>. Está formado por un 
            alambre conductor enrollado alrededor de un núcleo, que puede ser de aire, 
            ferrita o hierro.
          </p>
          <div className="formula-card">
            <h3>📐 Ley de Faraday-Lenz</h3>
            <p><strong>V = L × (di/dt)</strong></p>
            <p>Donde: V = Voltaje (V), L = Inductancia (H), di/dt = Cambio de corriente</p>
          </div>
        </section>

        <section className="codigo-section">
          <h2>🎨 Código de Valores y Colores</h2>
          <p>Los inductores usan sistemas de colores similar a las resistencias para indicar su valor.</p>
          
          <div className="tabla-codigos">
            <h3>📊 Código de Colores para Inductores</h3>
            <div className="tabla-container">
              <table className="codigos-table">
                <thead>
                  <tr>
                    <th>Color</th>
                    <th>1° Banda</th>
                    <th>2° Banda</th>
                    <th>3° Banda</th>
                    <th>Tolerancia</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="color-black">Negro</td>
                    <td>0</td>
                    <td>0</td>
                    <td>×1</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td className="color-brown">Marrón</td>
                    <td>1</td>
                    <td>1</td>
                    <td>×10</td>
                    <td>±1%</td>
                  </tr>
                  <tr>
                    <td className="color-red">Rojo</td>
                    <td>2</td>
                    <td>2</td>
                    <td>×100</td>
                    <td>±2%</td>
                  </tr>
                  <tr>
                    <td className="color-orange">Naranja</td>
                    <td>3</td>
                    <td>3</td>
                    <td>×1K</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td className="color-yellow">Amarillo</td>
                    <td>4</td>
                    <td>4</td>
                    <td>×10K</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td className="color-green">Verde</td>
                    <td>5</td>
                    <td>5</td>
                    <td>×100K</td>
                    <td>±0.5%</td>
                  </tr>
                  <tr>
                    <td className="color-blue">Azul</td>
                    <td>6</td>
                    <td>6</td>
                    <td>×1M</td>
                    <td>±0.25%</td>
                  </tr>
                  <tr>
                    <td className="color-purple">Violeta</td>
                    <td>7</td>
                    <td>7</td>
                    <td>-</td>
                    <td>±0.1%</td>
                  </tr>
                  <tr>
                    <td className="color-gray">Gris</td>
                    <td>8</td>
                    <td>8</td>
                    <td>-</td>
                    <td>±0.05%</td>
                  </tr>
                  <tr>
                    <td className="color-white">Blanco</td>
                    <td>9</td>
                    <td>9</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td className="color-gold">Dorado</td>
                    <td>-</td>
                    <td>-</td>
                    <td>×0.1</td>
                    <td>±5%</td>
                  </tr>
                  <tr>
                    <td className="color-silver">Plateado</td>
                    <td>-</td>
                    <td>-</td>
                    <td>×0.01</td>
                    <td>±10%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="ejemplos-codigos">
            <h3>💡 Ejemplos de Lectura</h3>
            <div className="ejemplos-grid">
              <div className="ejemplo-item">
                <h4>Marrón - Negro - Marrón</h4>
                <p><strong>1 (marrón) 0 (negro) ×10 (marrón)</strong></p>
                <p className="resultado">Resultado: 10 × 10 = 100 µH</p>
              </div>
              <div className="ejemplo-item">
                <h4>Amarillo - Violeta - Rojo</h4>
                <p><strong>4 (amarillo) 7 (violeta) ×100 (rojo)</strong></p>
                <p className="resultado">Resultado: 47 × 100 = 4,700 µH (4.7 mH)</p>
              </div>
              <div className="ejemplo-item">
                <h4>Rojo - Rojo - Dorado</h4>
                <p><strong>2 (rojo) 2 (rojo) ×0.1 (dorado)</strong></p>
                <p className="resultado">Resultado: 22 × 0.1 = 2.2 µH</p>
              </div>
            </div>
          </div>
        </section>

        <section className="tipos-section">
          <h2>🔧 Tipos de Inductores</h2>
          <div className="tipos-grid">
            <div className="tipo-card">
              <h3>💨 Inductores de Aire</h3>
              <ul>
                <li><strong>Núcleo de aire</strong></li>
                <li>Baja inductancia</li>
                <li>Alta frecuencia de trabajo</li>
                <li>Sin pérdidas en núcleo</li>
                <li>Circuitos RF y radio</li>
              </ul>
            </div>

            <div className="tipo-card">
              <h3>🧲 Inductores de Ferrita</h3>
              <ul>
                <li><strong>Núcleo de ferrita</strong></li>
                <li>Alta inductancia</li>
                <li>Frecuencias medias/altas</li>
                <li>Bajas pérdidas</li>
                <li>Fuentes conmutadas</li>
              </ul>
            </div>

            <div className="tipo-card">
              <h3>⚙️ Inductores de Núcleo de Hierro</h3>
              <ul>
                <li><strong>Núcleo laminado de hierro</strong></li>
                <li>Muy alta inductancia</li>
                <li>Bajas frecuencias (50/60Hz)</li>
                <li>Transformadores de potencia</li>
                <li>Pérdidas por histéresis</li>
              </ul>
            </div>

            <div className="tipo-card">
              <h3>💾 Inductores SMD</h3>
              <ul>
                <li><strong>Montaje superficial</strong></li>
                <li>Muy compactos</li>
                <li>Núcleo de ferrita</li>
                <li>Circuitos impresos modernos</li>
                <li>Código numérico o puntos</li>
              </ul>
            </div>

            <div className="tipo-card">
              <h3>🎛️ Inductores Variables</h3>
              <ul>
                <li><strong>Inductancia ajustable</strong></li>
                <li>Núcleo móvil de ferrita</li>
                <li>Sintonización de frecuencia</li>
                <li>Radios y circuitos RF</li>
                <li>Rango limitado</li>
              </ul>
            </div>

            <div className="tipo-card">
              <h3>🌀 Toroides</h3>
              <ul>
                <li><strong>Forma de anillo</strong></li>
                <li>Alto confinamiento magnético</li>
                <li>Baja interferencia</li>
                <li>Alta eficiencia</li>
                <li>Fuentes y filtros</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="aplicaciones-section">
          <h2>🔌 Aplicaciones Prácticas</h2>
          <div className="aplicaciones-grid">
            <div className="aplicacion-card">
              <h3>🔋 Filtros de Frecuencia</h3>
              <p>Bloquean o dejan pasar frecuencias específicas:</p>
              <ul>
                <li>Filtros paso bajo/alto</li>
                <li>Eliminación de ruido</li>
                <li>Circuitos resonantes LC</li>
                <li>Filtros EMI/RFI</li>
              </ul>
            </div>

            <div className="aplicacion-card">
              <h3>⚡ Almacenamiento de Energía</h3>
              <p>Almacenan energía en campo magnético:</p>
              <ul>
                <li>Fuentes conmutadas</li>
                <li>Convertidores DC-DC</li>
                <li>Circuitos de potencia</li>
                <li>Almacenamiento temporal</li>
              </ul>
            </div>

            <div className="aplicacion-card">
              <h3>🔌 Transformadores</h3>
              <p>Acoplan circuitos y transforman voltajes:</p>
              <ul>
                <li>Aislamiento galvánico</li>
                <li>Cambio de nivel de voltaje</li>
                <li>Acoplamiento de impedancia</li>
                <li>Redes de alimentación</li>
              </ul>
            </div>

            <div className="aplicacion-card">
              <h3>📡 Circuitos RF</h3>
              <p>En circuitos de radiofrecuencia:</p>
              <ul>
                <li>Sintonización de antenas</li>
                <li>Circuitos resonantes</li>
                <li>Osciladores RF</li>
                <li>Amplificadores de RF</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="caracteristicas-section">
          <h2>⚡ Características Principales</h2>
          <div className="caracteristicas-grid">
            <div className="caracteristica-card">
              <h3>📏 Unidad de Medida</h3>
              <p><strong>Henrios (H)</strong></p>
              <p>Múltiplos comunes: mH (mili), µH (micro), nH (nano)</p>
              <div className="conversion-card">
                <p><strong>1 H = 1,000 mH</strong></p>
                <p><strong>1 mH = 1,000 µH</strong></p>
                <p><strong>1 µH = 1,000 nH</strong></p>
              </div>
            </div>

            <div className="caracteristica-card">
              <h3>💪 Corriente de Saturación</h3>
              <p><strong>Máxima corriente antes de saturar</strong></p>
              <ul>
                <li>Límite del núcleo magnético</li>
                <li>Pérdida de inductancia</li>
                <li>Importante en diseño</li>
                <li>Especificación crítica</li>
              </ul>
            </div>

            <div className="caracteristica-card">
              <h3>🛡️ Resistencia Serie (DCR)</h3>
              <p><strong>Resistencia del alambre</strong></p>
              <ul>
                <li>Pérdidas por calor</li>
                <li>Eficiencia del componente</li>
                <li>Caída de voltaje</li>
                <li>Menor DCR = mejor</li>
              </ul>
            </div>

            <div className="caracteristica-card">
              <h3>🎯 Factor Q</h3>
              <p><strong>Calidad del inductor</strong></p>
              <ul>
                <li>Q = XL / R</li>
                <li>Mayor Q = mejor</li>
                <li>Menores pérdidas</li>
                <li>Crítico en circuitos RF</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="comportamiento-section">
          <h2>🔄 Comportamiento en Circuitos</h2>
          <div className="comportamiento-content">
            <div className="comportamiento-item">
              <h4>⚡ Corriente Continua (DC)</h4>
              <p>En DC, el inductor actúa como <strong>cortocircuito</strong> una vez cargado. 
              Solo la resistencia del alambre (DCR) limita la corriente.</p>
            </div>
            <div className="comportamiento-item">
              <h4>🔁 Corriente Alterna (AC)</h4>
              <p>En AC, el inductor presenta <strong>reactancia inductiva (XL)</strong> que 
              se opone a cambios en la corriente. XL = 2πfL.</p>
            </div>
            <div className="comportamiento-item">
              <h4>⏱️ Respuesta Temporal</h4>
              <p>La corriente en un inductor <strong>no puede cambiar instantáneamente</strong>. 
              Se opone a cambios bruscos (Ley de Lenz).</p>
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

export default Inductores