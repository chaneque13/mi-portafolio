
import { Link } from 'react-router-dom'

function Tarea7() {
  return (
    <div className="tarea-page">
      <h1>Tipologias</h1>
      <h2>Elaborar una tipologia de los contenidos que hay en internet</h2>
      <p>
        Considero que los contenidos de internet pueden ser divididos en sociales, educativos, entretenimiento, económicos. Siendo los sociales: redes sociales, comunicacion con otras personas, tambien entraria el jugar con otras personas.
        Los educativos, contenidos de estudio ya sea por medio de foros (que son sociales tambien), por medio de videos (que es un medio de entretenimiento tambien), y por medio de plataformas de educacion como coursera, edx, classroom, educ.
        Los de entretenimiento como los juegos, los streams, los videos de youtube, netflix, y mas paginas de streaming, el entretenimiento no solo son medios para divertirnos, pueden ser hasta educativos o sociales, por supuesto en el lado económico 
        también son importantes, mueven una economía, desde las mensualidades de netflix, hbo, la compra de juegos, o el pago que se les da a los youtubers por anuncios y visitas, no se diga de las donaciones de streamers.
        Y el económico, que pueden ser desde apps bancarias, cuestiones más burocráticas, a criptomonedas, y por supuesto los ejemplos anteriores.
        Al final de cuenttas decidí dividirlos en 4. Porque si nos damos cuenta se relacionan, el entretenimiento necesita dinero y público, lo social es necesario ya que sin este las redes pierden sentido,
        somos seres sociales después de todo, y eso así mismo se interconecta con jugar en línea, ver películas en netflix con tu familia, todos estos medios se interconetan, por eso deicidí que son los contenidos más importantes.
      </p>
      
      
      <Link to="/" className="back-button">
        ← Volver al portafolio
      </Link>
    </div>
  )
}

export default Tarea7