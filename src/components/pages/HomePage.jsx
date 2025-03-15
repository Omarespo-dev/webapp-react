

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


    // Funzione per rimuovere il film dalla lista e aggiornare lo stato
    function removeMovie(id) {

        // Chiamata per eliminare il film dal server
        axios.delete(`http://localhost:3000/api/movie/${id}`)

            .then(() => {
                // Dopo che il film è stato eliminato dal server, aggiorniamo la lista localmente


                // Confrontiamo l'id del film (movie.id) con l'id che vogliamo rimuovere (id).
                // Se l'id del film è diverso da quello che vogliamo rimuovere (movie.id !== id),
                // la condizione restituisce "true" e il film viene incluso nel nuovo array.
                // Se invece l'id del film è uguale a quello da rimuovere (movie.id === id),
                // la condizione restituisce "false" e il film viene escluso dal nuovo array.
                const newMovies = movies.filter((movie) => {
                    return movie.id !== id;
                })

                setMovies(newMovies);
            })

            .catch(err => console.log(err))
    }

    return (<>

        {movies.length === 0 ? <h2>Il server non risponde 404!!</h2> :
            <>
                <h2>LIST MOVIES</h2>
                <div className="div-set">
                    {movies.map(movie => (
                        <ContentHomePage movie={movie} key={movie.id} removeMovie={removeMovie} />
                    ))}
                </div>
            </>
        }




    </>

    )
}
