import { Link } from 'react-router-dom'

function BlogPage() {
  return (
    <div className="blog-page">
      <header>
        <h1>📝 Mi Blog</h1>
        <p>Artículos y experiencias personales</p>
      </header>

      <div className="blog-grid">
        <div className="blog-post-card">
          <h3>Mi experiencia aprendiendo React</h3>
          <p>Cómo fue crear mi primer portafolio con React y Vite...</p>
          <Link to="/blog/react-experience">
            <button>Leer más</button>
          </Link>
        </div>
        
        <div className="blog-post-card">
          <h3>Tips para estudiantes de TICS</h3>
          <p>Consejos que me hubiera gustado saber antes...</p>
          <Link to="/blog/tips-tics">
            <button>Leer más</button>
          </Link>
        </div>
      </div>

      <Link to="/" className="back-button">
        ← Volver al inicio
      </Link>
    </div>
  )
}

export default BlogPage