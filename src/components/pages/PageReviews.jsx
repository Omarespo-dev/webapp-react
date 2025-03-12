// importiamo componente di contenuto
import ContentPageReviews from "../ContentPageReviews"
// Importo axios per la chiamata
import axios from "axios"

// importo usestate ed effect per ricavare i dati dall api
import { useState, useEffect } from "react"

// importiamo useParams per ottenere l'ID direttamente dalla rotta
import { useParams , Link} from "react-router-dom"

export default function PageReviews() {
    // recuperiamo id dalla request
    const { id } = useParams()

    // Imposto le variabili di stato dove avremo i dati 
    const [movie, setMovie] = useState({})

    // facciamo una function per fare la richiesta API di tipo get(show)
    function fetchReviews() {
        axios.get('http://localhost:3000/api/movie/' + id)
            .then(res => { setMovie(res.data) })
            .catch(err => console.log(err))
    }

    useEffect(fetchReviews, [])

    return (
        <div className="all-container">
            <div className="div-set-reviews">
            <div className="card-set-reviews">

                <img src={movie.image} alt="" />

                <div className="text-set-reviews">
                    <h2>Inception</h2>
                    <p>Director: Christopher Nolan</p>
                    <span>A skilled thief is given a chance at redemption if he can successfully perform inception</span>
                </div>
            </div>

            <section>
                <h3>Our community reviews</h3>
                <p>Average:*****</p>
            </section>

            {movie.reviews?.map(review => (
                <ContentPageReviews review={review} key={review.id} />
            ))}


            <div className="button-back">
                <Link to={"/"}><button>TORNA ALLA HOME</button></Link>
            </div>
        </div>

        </div>
        
    )
}
