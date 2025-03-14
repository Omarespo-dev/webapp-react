import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";


// importiamo componente di contenuto
import ContentPageReviews from "../ContentPageReviews"
// Importo axios per la chiamata
import axios from "axios"

// importo usestate ed effect per ricavare i dati dall api
import { useState, useEffect } from "react"

// importiamo useParams per ottenere l'ID direttamente dalla rotta
import { useParams, Link, useNavigate } from "react-router-dom"

// importo il ReviewForm
import ReviewForm from "../ReviewForm"

export default function PageReviews() {

    // utilizzo per il redirect (useNavigate)
    const redirect = useNavigate();

    // recuperiamo id dalla request
    const { id } = useParams()

    // Imposto le variabili di stato dove avremo i dati 
    const [movie, setMovie] = useState({})

    // facciamo una function per fare la richiesta API di tipo get(show)
    function fetchReviews() {
        axios.get('http://localhost:3000/api/movie/' + id)
            .then(res => { setMovie(res.data) })
            .catch(err => {
                console.log(err);
                if (err.status === 404) redirect("/404")
            })
    }

    useEffect(fetchReviews, [])

    // calcolo la media dei voti
    const averageVote = movie.reviews?.reduce((sum, review) => sum + review.vote, 0) / movie.reviews?.length;

    // Normalizzare la media per 5 stelle (se il voto massimo è 10)
    const votoNormale = Math.round(averageVote);

    // funzione per le stelle
    function averageStar() {

        // ciclo per le stelel e faccio push
        const stelle = [];

        for (let i = 0; i < 5; i++) {
            stelle.push(
                <FontAwesomeIcon
                    key={i}
                    icon={faStar}
                    style={{ color: i < votoNormale ? "#ffff80" : "#c0c0c0" }} />
            );
        }

        return stelle
    }

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
                    <p>{averageStar()}</p>
                </section>

                {movie.reviews?.map(review => (
                    <ContentPageReviews review={review} key={review.id} />
                ))}

                <section className="set-form">
                    <ReviewForm reloadReviews={fetchReviews} />
                </section>

                <div className="button-back">
                    <Link to={"/"}><button>TORNA ALLA HOME</button></Link>
                </div>
            </div>

        </div>

    )
}
