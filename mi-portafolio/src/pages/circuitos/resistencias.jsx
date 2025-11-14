import { Link } from 'react-router-dom'
import './Resistencias.css'

function Resistencias() {
  return (
    <div className="tarea-page">
      <header className="tarea-header">
        <h1>🟤 Resistencias</h1>
        <p className="subtitle">Componente que se opone al paso de la corriente eléctrica</p>
      </header>

      <div className="tarea-content">
        <section className="intro-section">
          <h2>🔍 ¿Qué es una Resistencia?</h2>
          <p>
            La <strong>resistencia eléctrica</strong> se define como la oposición al flujo de corriente eléctrica. 
            De la <strong>Ley de Ohm</strong> tenemos que la resistencia eléctrica (R) es directamente proporcional 
            al voltaje eléctrico (V) e inversamente proporcional a la corriente eléctrica (I).
          </p>
          <div className="formula-card">
            <h3>📐 Fórmula de la Ley de Ohm</h3>
            <p><strong>R = V / I</strong></p>
            <p>Donde: R = Resistencia (Ω), V = Voltaje (V), I = Corriente (A)</p>
          </div>
        </section>

        <section className="colores-section">
          <h2>🎨 Código de Colores de Resistencias</h2>
          <p>Las resistencias usan un sistema de 4 bandas de colores para indicar su valor en ohmios.</p>
          
          <div className="tabla-colores">
            <h3>📊 Tabla Completa de Código de Colores</h3>
            <div className="tabla-container">
              <table className="colores-table">
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
                    <td>×10M</td>
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

          <div className="ejemplos-colores">
            <h3>💡 Ejemplos Prácticos</h3>
            <div className="ejemplos-grid">
              <div className="ejemplo-item">
                <h4>Marrón - Negro - Rojo - Dorado</h4>
                <p><strong>1 (marrón) 0 (negro) ×100 (rojo) ±5% (dorado)</strong></p>
                <p className="resultado">Resultado: 10 × 100 = 1,000Ω (1KΩ) ±5%</p>
              </div>
              <div className="ejemplo-item">
                <h4>Amarillo - Violeta - Naranja - Dorado</h4>
                <p><strong>4 (amarillo) 7 (violeta) ×1K (naranja) ±5% (dorado)</strong></p>
                <p className="resultado">Resultado: 47 × 1,000 = 47,000Ω (47KΩ) ±5%</p>
              </div>
              <div className="ejemplo-item">
                <h4>Rojo - Rojo - Marrón - Plateado</h4>
                <p><strong>2 (rojo) 2 (rojo) ×10 (marrón) ±10% (plateado)</strong></p>
                <p className="resultado">Resultado: 22 × 10 = 220Ω ±10%</p>
              </div>
            </div>
          </div>
        </section>

        <section className="caracteristicas-section">
          <h2>⚡ Características Principales</h2>
          <div className="caracteristicas-grid">
            <div className="caracteristica-card">
              <h3>📏 Unidad de Medida</h3>
              <p><strong>Ohmios (Ω)</strong></p>
              <p>Múltiplos comunes: KΩ (kiloohmios), MΩ (megaohmios)</p>
            </div>
            <div className="caracteristica-card">
              <h3>🎯 Funciones</h3>
              <ul>
                <li>Limitar corriente en circuitos</li>
                <li>Dividir voltajes</li>
                <li>Disipar potencia en forma de calor</li>
                <li>Pull-up/Pull-down en circuitos digitales</li>
              </ul>
            </div>
            <div className="caracteristica-card">
              <h3>🔧 Tipos Comunes</h3>
              <ul>
                <li><strong>Carbón:</strong> Más comunes, económicas</li>
                <li><strong>Película metálica:</strong> Mayor precisión</li>
                <li><strong>Bobinadas:</strong> Alta potencia</li>
                <li><strong>SMD:</strong> Montaje superficial</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="aplicaciones-section">
          <h2>🔌 Aplicaciones Prácticas</h2>
          <div className="aplicaciones-content">
            <div className="aplicacion-item">
              <h4>🔋 Divisor de Voltaje</h4>
              <p>Dos resistencias en serie para obtener un voltaje específico</p>
            </div>
            <div className="aplicacion-item">
              <h4>💡 Limitador de Corriente para LEDs</h4>
              <p>Protege los LEDs de corriente excesiva</p>
            </div>
            <div className="aplicacion-item">
              <h4>🎚️ Potenciómetros</h4>
              <p>Resistencias variables para controles de volumen, brillo, etc.</p>
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

export default Resistencias