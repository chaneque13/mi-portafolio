import { Link } from 'react-router-dom'
import './Tarea9.css'

function Tarea9() {
  return (
    <div className="tarea-page">
      <header className="tarea-header">
        <h1>🔌 Puertos de Red TCP y UDP</h1>
        <p className="subtitle">Protocolos, puertos y sus aplicaciones en redes</p>
      </header>

      <div className="tarea-content">
        <section className="intro-section">
          <h2>🔍 ¿Qué son los Puertos de Red?</h2>
          <p>
            Los <strong>puertos de red</strong> son endpoints virtuales que permiten la comunicación 
            entre aplicaciones a través de una red. Funcionan como "puertas" que identifican 
            servicios específicos en un dispositivo.
          </p>
        </section>

        <section className="protocolos-section">
          <h2>🔄 TCP vs UDP</h2>
          
          <div className="protocolos-comparison">
            <div className="protocolo-card tcp">
              <div className="protocolo-header">
                <span className="protocolo-icon">🔒</span>
                <h3>TCP (Transmission Control Protocol)</h3>
              </div>
              <ul>
                <li><strong>Orientado a conexión</strong> - Establece handshake</li>
                <li><strong>Confiable</strong> - Garantiza entrega de paquetes</li>
                <li><strong>Control de flujo</strong> - Evita congestión</li>
                <li><strong>Reordenamiento</strong> - Organiza paquetes en orden</li>
                <li><strong>Más lento</strong> - Por la sobrecarga de control</li>
              </ul>
              <p><strong>Usos:</strong> Web (HTTP), email, transferencia de archivos</p>
            </div>

            <div className="protocolo-card udp">
              <div className="protocolo-header">
                <span className="protocolo-icon">⚡</span>
                <h3>UDP (User Datagram Protocol)</h3>
              </div>
              <ul>
                <li><strong>Sin conexión</strong> - No establece handshake</li>
                <li><strong>No confiable</strong> - No garantiza entrega</li>
                <li><strong>Sin control de flujo</strong> - Envía a máxima velocidad</li>
                <li><strong>Más rápido</strong> - Menos sobrecarga</li>
                <li><strong>Sin reordenamiento</strong> - Paquetes pueden llegar desordenados</li>
              </ul>
              <p><strong>Usos:</strong> Streaming, VoIP, juegos online, DNS</p>
            </div>
          </div>
        </section>

        <section className="puertos-section">
          <h2>📡 Puertos de Protocolos de Red</h2>
          
          <div className="puertos-table">
            <div className="table-header">
              <span>Protocolo</span>
              <span>Puerto</span>
              <span>Tipo</span>
              <span>Función</span>
            </div>

            <div className="table-row">
              <span className="protocol-name">HTTP</span>
              <span className="puerto-number">80</span>
              <span className="protocol-type tcp-badge">TCP</span>
              <span className="protocol-desc">Navegación web estándar</span>
            </div>

            <div className="table-row">
              <span className="protocol-name">HTTPS</span>
              <span className="puerto-number">443</span>
              <span className="protocol-type tcp-badge">TCP</span>
              <span className="protocol-desc">Web segura (SSL/TLS)</span>
            </div>

            <div className="table-row">
              <span className="protocol-name">SMTP</span>
              <span className="puerto-number">25</span>
              <span className="protocol-type tcp-badge">TCP</span>
              <span className="protocol-desc">Envío de correos</span>
            </div>

            <div className="table-row">
              <span className="protocol-name">POP3</span>
              <span className="puerto-number">110</span>
              <span className="protocol-type tcp-badge">TCP</span>
              <span className="protocol-desc">Descarga de correos</span>
            </div>

            <div className="table-row">
              <span className="protocol-name">IMAP</span>
              <span className="puerto-number">143</span>
              <span className="protocol-type tcp-badge">TCP</span>
              <span className="protocol-desc">Sincronización de correos</span>
            </div>

            <div className="table-row">
              <span className="protocol-name">MIME</span>
              <span className="puerto-number">-</span>
              <span className="protocol-type na-badge">N/A</span>
              <span className="protocol-desc">Estándar de formato, no usa puerto</span>
            </div>

            <div className="table-row">
              <span className="protocol-name">FTP</span>
              <span className="puerto-number">21</span>
              <span className="protocol-type tcp-badge">TCP</span>
              <span className="protocol-desc">Transferencia de archivos</span>
            </div>

            <div className="table-row">
              <span className="protocol-name">FTPS</span>
              <span className="puerto-number">990</span>
              <span className="protocol-type tcp-badge">TCP</span>
              <span className="protocol-desc">FTP seguro (SSL/TLS)</span>
            </div>

            <div className="table-row">
              <span className="protocol-name">SFTP</span>
              <span className="puerto-number">22</span>
              <span className="protocol-type tcp-badge">TCP</span>
              <span className="protocol-desc">SSH File Transfer Protocol</span>
            </div>

            <div className="table-row">
              <span className="protocol-name">BitTorrent</span>
              <span className="puerto-number">6881-6889</span>
              <span className="protocol-type tcp-badge">TCP</span>
              <span className="protocol-desc">Peer-to-peer file sharing</span>
            </div>

            <div className="table-row">
              <span className="protocol-name">FastTrack</span>
              <span className="puerto-number">1214</span>
              <span className="protocol-type tcp-badge">TCP</span>
              <span className="protocol-desc">Protocolo P2P (KaZaa)</span>
            </div>

            <div className="table-row">
              <span className="protocol-name">IRC</span>
              <span className="puerto-number">6667</span>
              <span className="protocol-type tcp-badge">TCP</span>
              <span className="protocol-desc">Internet Relay Chat</span>
            </div>

            <div className="table-row">
              <span className="protocol-name">XMPP</span>
              <span className="puerto-number">5222</span>
              <span className="protocol-type tcp-badge">TCP</span>
              <span className="protocol-desc">Jabber messaging</span>
            </div>

            <div className="table-row">
              <span className="protocol-name">MTProto</span>
              <span className="puerto-number">443</span>
              <span className="protocol-type tcp-badge">TCP</span>
              <span className="protocol-desc">Protocolo de Telegram</span>
            </div>
          </div>
        </section>

        <section className="rangos-section">
          <h2>🎯 Rangos de Puertos</h2>
          
          <div className="rangos-grid">
            <div className="rango-card">
              <h3>0 - 1023</h3>
              <p><strong>Puertos Bien Conocidos</strong></p>
              <p>Reservados para servicios del sistema</p>
              <ul>
                <li>HTTP (80), HTTPS (443)</li>
                <li>SSH (22), FTP (21)</li>
                <li>SMTP (25), DNS (53)</li>
              </ul>
            </div>

            <div className="rango-card">
              <h3>1024 - 49151</h3>
              <p><strong>Puertos Registrados</strong></p>
              <p>Para aplicaciones de usuario</p>
              <ul>
                <li>MySQL (3306)</li>
                <li>RDP (3389)</li>
                <li>Spotify (4370-4380)</li>
              </ul>
            </div>

            <div className="rango-card">
              <h3>49152 - 65535</h3>
              <p><strong>Puertos Dinámicos/Privados</strong></p>
              <p>Para conexiones temporales</p>
              <ul>
                <li>Conexiones cliente</li>
                <li>Sesiones temporales</li>
                <li>Puertos efímeros</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="importancia-section">
          <h2>💡 Importancia de los Puertos</h2>
          <div className="importancia-content">
            <div className="importancia-item">
              <h4>🎯 Identificación de Servicios</h4>
              <p>Cada servicio usa un puerto específico para evitar conflictos</p>
            </div>
            <div className="importancia-item">
              <h4>🛡️ Seguridad</h4>
              <p>Firewalls pueden bloquear/permiter puertos específicos</p>
            </div>
            <div className="importancia-item">
              <h4>🔧 Configuración de Red</h4>
              <p>Esencial para administración de redes y troubleshooting</p>
            </div>
            <div className="importancia-item">
              <h4>🌐 Comunicación Estandarizada</h4>
              <p>Permite interoperabilidad entre diferentes sistemas</p>
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

export default Tarea9