import { Link } from 'react-router-dom'
import './Tarea8.css' 

function Tarea8() {
  return (
    <div className="tarea-page">
      <header className="tarea-header">
        <h1>🌐 Protocolo HTTP</h1>
        <p className="subtitle">Estructura, funcionamiento y elementos del protocolo web</p>
      </header>

      <div className="tarea-content">
        <section className="intro-section">
          <h2>🔍 ¿Qué es HTTP?</h2>
          <p>
            <strong>HTTP (HyperText Transfer Protocol)</strong> es el protocolo fundamental 
            para la transferencia de información en la web. Define cómo los clientes 
            (navegadores) y servidores se comunican entre sí.
          </p>
        </section>

        <section className="estructura-section">
          <h2>🏗️ Estructura de una Petición HTTP</h2>
          
          <div className="code-block">
            <h4>Ejemplo de petición GET:</h4>
            <pre>{`GET /index.html HTTP/1.1
Host: www.ejemplo.com
User-Agent: Mozilla/5.0
Accept: text/html
Accept-Language: es-MX
Connection: keep-alive`}</pre>
          </div>

          <div className="componentes-grid">
            <div className="componente-card">
              <h3>📝 Línea de Solicitud</h3>
              <ul>
                <li><strong>Método:</strong> GET, POST, PUT, etc.</li>
                <li><strong>URI:</strong> /ruta/del/recurso</li>
                <li><strong>Versión:</strong> HTTP/1.1 o HTTP/2</li>
              </ul>
            </div>

            <div className="componente-card">
              <h3>📋 Encabezados (Headers)</h3>
              <ul>
                <li><strong>Host:</strong> Dominio del servidor</li>
                <li><strong>User-Agent:</strong> Información del cliente</li>
                <li><strong>Accept:</strong> Tipos de contenido aceptados</li>
                <li><strong>Content-Type:</strong> Tipo de contenido enviado</li>
              </ul>
            </div>

            <div className="componente-card">
              <h3>📦 Cuerpo (Body)</h3>
              <ul>
                <li><strong>Opcional:</strong> Solo en POST, PUT, PATCH</li>
                <li><strong>Contenido:</strong> Datos del formulario, JSON, etc.</li>
                <li><strong>Formato:</strong> Definido por Content-Type</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="metodos-section">
          <h2>🛠️ Métodos de Petición HTTP</h2>
          
          <div className="metodos-grid">
            <div className="metodo-card get">
              <div className="metodo-header">
                <span className="metodo-badge">GET</span>
                <h3>Obtener Recursos</h3>
              </div>
              <p>Solicita datos de un recurso específico. No debe modificar datos.</p>
              <ul>
                <li><strong>Uso:</strong> Cargar páginas, obtener información</li>
                <li><strong>Idempotente:</strong> Sí</li>
                <li><strong>Seguro:</strong> Sí</li>
              </ul>
            </div>

            <div className="metodo-card post">
              <div className="metodo-header">
                <span className="metodo-badge">POST</span>
                <h3>Enviar Datos</h3>
              </div>
              <p>Envía datos para ser procesados y crear nuevos recursos.</p>
              <ul>
                <li><strong>Uso:</strong> Formularios, uploads, APIs</li>
                <li><strong>Idempotente:</strong> No</li>
                <li><strong>Seguro:</strong> No</li>
              </ul>
            </div>

            <div className="metodo-card put">
              <div className="metodo-header">
                <span className="metodo-badge">PUT</span>
                <h3>Actualizar Recursos</h3>
              </div>
              <p>Reemplaza completamente un recurso existente.</p>
              <ul>
                <li><strong>Uso:</strong> Actualizar perfiles, editar contenido</li>
                <li><strong>Idempotente:</strong> Sí</li>
                <li><strong>Seguro:</strong> No</li>
              </ul>
            </div>

            <div className="metodo-card delete">
              <div className="metodo-header">
                <span className="metodo-badge">DELETE</span>
                <h3>Eliminar Recursos</h3>
              </div>
              <p>Elimina un recurso específico del servidor.</p>
              <ul>
                <li><strong>Uso:</strong> Borrar usuarios, eliminar archivos</li>
                <li><strong>Idempotente:</strong> Sí</li>
                <li><strong>Seguro:</strong> No</li>
              </ul>
            </div>

            <div className="metodo-card patch">
              <div className="metodo-header">
                <span className="metodo-badge">PATCH</span>
                <h3>Modificar Parcialmente</h3>
              </div>
              <p>Actualiza parcialmente un recurso existente.</p>
              <ul>
                <li><strong>Uso:</strong> Campos específicos, updates parciales</li>
                <li><strong>Idempotente:</strong> Depende</li>
                <li><strong>Seguro:</strong> No</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="codigos-section">
          <h2>📊 Códigos de Respuesta HTTP</h2>
          
          <div className="codigos-grid">
            <div className="codigo-categoria">
              <h3 className="categoria-100">1xx - Informativo</h3>
              <p>Petición recibida, proceso continuando</p>
              <ul>
                <li><strong>100 Continue:</strong> El servidor está listo para el cuerpo</li>
                <li><strong>101 Switching Protocols:</strong> Cambio de protocolo</li>
              </ul>
            </div>

            <div className="codigo-categoria">
              <h3 className="categoria-200">2xx - Éxito</h3>
              <p>Petición recibida y procesada correctamente</p>
              <ul>
                <li><strong>200 OK:</strong> Petición exitosa</li>
                <li><strong>201 Created:</strong> Recurso creado</li>
                <li><strong>204 No Content:</strong> Éxito sin contenido</li>
              </ul>
            </div>

            <div className="codigo-categoria">
              <h3 className="categoria-300">3xx - Redirección</h3>
              <p>Se requieren acciones adicionales</p>
              <ul>
                <li><strong>301 Moved Permanently:</strong> Redirección permanente</li>
                <li><strong>302 Found:</strong> Redirección temporal</li>
                <li><strong>304 Not Modified:</strong> Usar caché local</li>
              </ul>
            </div>

            <div className="codigo-categoria">
              <h3 className="categoria-400">4xx - Error del Cliente</h3>
              <p>Error en la petición del cliente</p>
              <ul>
                <li><strong>400 Bad Request:</strong> Petición mal formada</li>
                <li><strong>401 Unauthorized:</strong> No autenticado</li>
                <li><strong>403 Forbidden:</strong> Prohibido</li>
                <li><strong>404 Not Found:</strong> Recurso no encontrado</li>
              </ul>
            </div>

            <div className="codigo-categoria">
              <h3 className="categoria-500">5xx - Error del Servidor</h3>
              <p>Error interno del servidor</p>
              <ul>
                <li><strong>500 Internal Server Error:</strong> Error genérico</li>
                <li><strong>502 Bad Gateway:</strong> Gateway incorrecto</li>
                <li><strong>503 Service Unavailable:</strong> Servicio no disponible</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="flujo-section">
          <h2>🔄 Flujo de una Comunicación HTTP</h2>
          <div className="flujo-steps">
            <div className="step">
              <span className="step-number">1</span>
              <p><strong>Cliente envía petición</strong> con método, headers y opcionalmente body</p>
            </div>
            <div className="step">
              <span className="step-number">2</span>
              <p><strong>Servidor procesa la petición</strong> según el método y URI</p>
            </div>
            <div className="step">
              <span className="step-number">3</span>
              <p><strong>Servidor envía respuesta</strong> con código de estado y contenido</p>
            </div>
            <div className="step">
              <span className="step-number">4</span>
              <p><strong>Cliente interpreta respuesta</strong> y muestra al usuario</p>
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

export default Tarea8