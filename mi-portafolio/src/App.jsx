import { Route, Routes, Link } from 'react-router-dom'
import './App.css'
import Tarea7 from './pages/Tarea7'
import Tarea8 from './pages/Tarea8'
import Tarea9 from './pages/Tarea9'
import TareasPage from './pages/TareasPage'
import BlogPage from './pages/BlogPage'
import Tarea11 from './pages/Tarea11'
import TareaCircuitos from './pages/TareaCircuitos' 
import Resistencias from './pages/circuitos/resistencias'
import Capacitores from './pages/circuitos/capacitores'
import Inductores from './pages/circuitos/inductores'
import Diodos from './pages/circuitos/diodos'
import Transistores from './pages/circuitos/transistores'
import Bibliografia from './pages/circuitos/bibliografia'

function App() {
  return (
    <div className="App">
      <Routes>
        {/* Página Principal - CON header */}
        <Route path="/" element={
          <>
            <header>
              <h1>¡Que onda, soy Nacho!</h1>
              <p>Proyecto realizado para la materia de TICS</p>
            </header>

            <div className="main-cards">
              {/* Card Tareas */}
              <div className="main-card">
                <div className="card-icon">📚</div>
                <h2>Mis Tareas</h2>
                <p>mis tareas de la materia</p>
                <Link to="/tareas">
                  <button>Ver Tareas</button>
                </Link>
              </div>

              {/* Card GitHub */}
              <div className="main-card">
                <div className="card-icon">💻</div>
                <h2>Mi GitHub</h2>
                <p>Revisa mis proyectos y código</p>
                <a href="https://github.com/chaneque13" target="_blank" rel="noopener noreferrer">
                  <button>Ir a GitHub</button>
                </a>
              </div>

              {/* Card Blog */}
              <div className="main-card">
                <div className="card-icon">📝</div>
                <h2>Mi Blog</h2>
                <p>Seccion en construccion</p>
                <Link to="/blog">
                  <button>Leer Blog</button>
                </Link>
              </div>
            </div>
          </>
        } />
        
        {/* Otras páginas - SIN el header principal */}
        <Route path="/tareas" element={<TareasPage />} />
        <Route path="/tarea7" element={<Tarea7 />} />
        <Route path="/tarea8" element={<Tarea8 />} />
        <Route path="/tarea9" element={<Tarea9 />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/tarea11" element={<Tarea11 />} />
        <Route path="/tareacircuitos" element={<TareaCircuitos />} />
         <Route path="/circuitos/resistencias" element={<Resistencias />} />
        <Route path="/circuitos/capacitores" element={<Capacitores />} />
        <Route path="/circuitos/inductores" element={<Inductores />} />
        <Route path="/circuitos/diodos" element={<Diodos />} />
        <Route path="/circuitos/transistores" element={<Transistores />} />
        <Route path="/circuitos/bibliografia" element={<Bibliografia />} />
      </Routes>
    </div>
  )
}

export default App