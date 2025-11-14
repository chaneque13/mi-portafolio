import { Link } from 'react-router-dom'
import './Capacitores.css'

function Capacitores() {
  return (
    <div className="tarea-page">
      <header className="tarea-header">
        <h1>🔵 Capacitores</h1>
        <p className="subtitle">Almacenan carga eléctrica en un campo electrostático</p>
      </header>

      <div className="tarea-content">
        <section className="intro-section">
          <h2>🔍 ¿Qué es un Capacitor?</h2>
          <p>
            Un <strong>capacitor</strong> o condensador es un componente pasivo que almacena 
            energía en forma de <strong>campo electrostático</strong>. Está formado por dos 
            placas conductoras separadas por un material aislante llamado dieléctrico.
          </p>
          <div className="formula-card">
            <h3>📐 Fórmula de Capacitancia</h3>
            <p><strong>C = Q / V</strong></p>
            <p>Donde: C = Capacitancia (F), Q = Carga (C), V = Voltaje (V)</p>
          </div>
        </section>

        <section className="codigo-section">
          <h2>🎨 Código de Valores y Tolerancias</h2>
          <p>Los capacitores usan diferentes sistemas para indicar su valor y características.</p>
          
          <div className="tabla-codigos">
            <h3>📊 Códigos Comunes en Capacitores</h3>
            <div className="tabla-container">
              <table className="codigos-table">
                <thead>
                  <tr>
                    <th>Código</th>
                    <th>Valor</th>
                    <th>Unidad</th>
                    <th>Ejemplo</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>n</strong></td>
                    <td>Nano</td>
                    <td>10⁻⁹</td>
                    <td>10n = 10 nanofaradios</td>
                  </tr>
                  <tr>
                    <td><strong>µ</strong></td>
                    <td>Micro</td>
                    <td>10⁻⁶</td>
                    <td>100µ = 100 microfaradios</td>
                  </tr>
                  <tr>
                    <td><strong>m</strong></td>
                    <td>Mili</td>
                    <td>10⁻³</td>
                    <td>2m2 = 2.2 milifaradios</td>
                  </tr>
                  <tr>
                    <td><strong>p</strong></td>
                    <td>Pico</td>
                    <td>10⁻¹²</td>
                    <td>470p = 470 picofaradios</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="ejemplos-codigos">
            <h3>💡 Ejemplos de Lectura</h3>
            <div className="ejemplos-grid">
              <div className="ejemplo-item">
                <h4>104</h4>
                <p><strong>10 × 10⁴ pF = 100,000 pF = 100 nF = 0.1 µF</strong></p>
                <p className="explicacion">(Código de 3 dígitos: primeros 2 = valor, 3° = multiplicador)</p>
              </div>
              <div className="ejemplo-item">
                <h4>2A473J</h4>
                <p><strong>47 × 10³ pF = 47,000 pF = 47 nF, J = ±5%</strong></p>
                <p className="explicacion">(Código completo con voltaje y tolerancia)</p>
              </div>
              <div className="ejemplo-item">
                <h4>100µF 25V</h4>
                <p><strong>100 microfaradios, voltaje máximo 25V</strong></p>
                <p className="explicacion">(Valor directo con especificación de voltaje)</p>
              </div>
            </div>
          </div>
        </section>

        <section className="tipos-section">
          <h2>🔧 Tipos de Capacitores</h2>
          <div className="tipos-grid">
            <div className="tipo-card">
              <h3>🧩 Capacitores Cerámicos</h3>
              <ul>
                <li><strong>Más comunes y económicos</strong></li>
                <li>Valores pequeños (pF a nF)</li>
                <li>No polarizados</li>
                <li>Uso general en circuitos</li>
                <li>Baja inductancia parásita</li>
              </ul>
            </div>

            <div className="tipo-card">
              <h3>⚡ Capacitores Electrolíticos</h3>
              <ul>
                <li><strong>Alta capacitancia</strong></li>
                <li>Valores grandes (µF a mF)</li>
                <li>Polarizados (+ y -)</li>
                <li>Fuentes de alimentación</li>
                <li>Filtrado de baja frecuencia</li>
              </ul>
            </div>

            <div className="tipo-card">
              <h3>💎 Capacitores de Tántalo</h3>
              <ul>
                <li><strong>Alta densidad</strong></li>
                <li>Mejor estabilidad que electrolíticos</li>
                <li>Polarizados</li>
                <li>Circuitos críticos</li>
                <li>Mayor costo</li>
              </ul>
            </div>

            <div className="tipo-card">
              <h3>📦 Capacitores de Poliéster</h3>
              <ul>
                <li><strong>Buena estabilidad</strong></li>
                <li>Rango medio de valores</li>
                <li>No polarizados</li>
                <li>Audio y RF</li>
                <li>Tolerancia ±5% a ±10%</li>
              </ul>
            </div>

            <div className="tipo-card">
              <h3>💾 Capacitores SMD</h3>
              <ul>
                <li><strong>Montaje superficial</strong></li>
                <li>Muy compactos</li>
                <li>Cerámicos y de tántalo</li>
                <li>Circuitos impresos modernos</li>
                <li>Código numérico</li>
              </ul>
            </div>

            <div className="tipo-card">
              <h3>🎛️ Capacitores Variables</h3>
              <ul>
                <li><strong>Capacitancia ajustable</strong></li>
                <li>Sintonización de frecuencia</li>
                <li>Radio y TV antiguos</li>
                <li>Trimmers y variables</li>
                <li>Rango limitado</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="aplicaciones-section">
          <h2>🔌 Aplicaciones Prácticas</h2>
          <div className="aplicaciones-grid">
            <div className="aplicacion-card">
              <h3>🔋 Almacenamiento de Energía</h3>
              <p>Acumulan carga para liberarla cuando se necesita:</p>
              <ul>
                <li>Flash de cámaras</li>
                <li>Fuentes conmutadas</li>
                <li>Sistemas de backup</li>
                <li>Descargas de alta energía</li>
              </ul>
            </div>

            <div className="aplicacion-card">
              <h3>🔄 Filtrado de Señales</h3>
              <p>Separan frecuencias altas y bajas:</p>
              <ul>
                <li>Filtros paso alto/bajo</li>
                <li>Eliminación de ruido</li>
                <li>Acoplamiento de señales AC</li>
                <li>Desacoplamiento de fuentes</li>
              </ul>
            </div>

            <div className="aplicacion-card">
              <h3>⏰ Circuitos de Tiempo</h3>
              <p>Controlan retardos y frecuencias:</p>
              <ul>
                <li>Osciladores</li>
                <li>Temporizadores (555)</li>
                <li>Circuitos RC</li>
                <li>Control de frecuencia</li>
              </ul>
            </div>

            <div className="aplicacion-card">
              <h3>💡 Corrección de Factor de Potencia</h3>
              <p>Mejoran la eficiencia en sistemas AC:</p>
              <ul>
                <li>Motores industriales</li>
                <li>Balastos de lámparas</li>
                <li>Sistemas de potencia</li>
                <li>Reducción de consumo</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="caracteristicas-section">
          <h2>⚡ Características Principales</h2>
          <div className="caracteristicas-grid">
            <div className="caracteristica-card">
              <h3>📏 Unidad de Medida</h3>
              <p><strong>Faradios (F)</strong></p>
              <p>Múltiplos comunes: µF (micro), nF (nano), pF (pico)</p>
              <div className="conversion-card">
                <p><strong>1 F = 1,000,000 µF</strong></p>
                <p><strong>1 µF = 1,000 nF</strong></p>
                <p><strong>1 nF = 1,000 pF</strong></p>
              </div>
            </div>

            <div className="caracteristica-card">
              <h3>⚡ Voltaje de Trabajo</h3>
              <p><strong>Máximo voltaje aplicable</strong></p>
              <ul>
                <li>Electrolíticos: 6.3V a 450V</li>
                <li>Cerámicos: 50V a 2kV</li>
                <li>Excederlo causa daño</li>
                <li>Importante en diseño</li>
              </ul>
            </div>

            <div className="caracteristica-card">
              <h3>🎯 Tolerancia</h3>
              <p><strong>Precisión del valor nominal</strong></p>
              <ul>
                <li>Cerámicos: ±5% a ±20%</li>
                <li>Electrolíticos: ±20%</li>
                <li>Tántalo: ±10% a ±20%</li>
                <li>Políster: ±5% a ±10%</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="precauciones-section">
          <h2>⚠️ Precauciones Importantes</h2>
          <div className="precauciones-content">
            <div className="precaucion-item">
              <h4>🔋 Polarización</h4>
              <p>Los capacitores electrolíticos y de tántalo son <strong>polarizados</strong>. 
              Conectarlos al revés puede causar explosión o daño permanente.</p>
            </div>
            <div className="precaucion-item">
              <h4>⚡ Descarga Peligrosa</h4>
              <p>Capacitores grandes pueden almacenar carga por mucho tiempo. 
              Siempre <strong>descargarlos</strong> antes de manipular circuitos.</p>
            </div>
            <div className="precaucion-item">
              <h4>🔥 Voltaje Máximo</h4>
              <p>Nunca exceder el <strong>voltaje de trabajo máximo</strong> especificado. 
              Puede causar cortocircuito interno o explosión.</p>
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

export default Capacitores