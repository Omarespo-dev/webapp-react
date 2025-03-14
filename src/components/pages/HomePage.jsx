
// Importo axios per la chiamata
import axios from "axios"

// importo il componente che ha il contenuto
import ContentHomePage from "../ContentHomePage"

// importo usestate ed effect per ricavare i dati dall api
import { useState, useEffect } from "react"

export default function HomePage() {

    // Imposto le variabili di stato dove avremo i dati 
    const [movies, setMovies] = useState([])

    // facciamo una function per fare la richiesta API di tipo get(index)
    function fetchMovies() {
        
        axios.get('http://localhost:3000/api/movie/')
            .then(res => { setMovies(res.data) })
            .catch(err => console.log(err)
        )
    }

    useEffect(fetchMovies, [])

    return (<>

        <h2>LIST MOVIES</h2>
        
        
        <div className="div-set">
            
            {movies.map(movie => (
                <ContentHomePage movie={movie} key={movie.id} />
            ))}
        </div>



    </>

    )
}
