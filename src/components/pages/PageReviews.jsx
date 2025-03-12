// importiamo componente di contenuto
import ContentPageReviews from "../ContentPageReviews"
// Importo axios per la chiamata
import axios from "axios"

// importo usestate ed effect per ricavare i dati dall api
import { useState, useEffect } from "react"

// importiamo useParams per ottenere l'ID direttamente dalla rotta
import { useParams } from "react-router-dom"

export default function PageReviews() {
    // recuperiamo id dalla request
    const {id} = useParams()

    // Imposto le variabili di stato dove avremo i dati 
    const [reviews, setReviews] = useState({})

    // facciamo una function per fare la richiesta API di tipo get(show)
    function fetchReviews() {
        axios.get('http://localhost:3000/api/movie/' + id)
            .then(res => { setReviews(res.data) })
            .catch(err => console.log(err))
    }

    useEffect(fetchReviews,[])
    return (
        <div className="div-set-reviews">

            {reviews.map(review => (
                <ContentPageReviews review={review} key={review.id}/>
            ))}
            
        </div>
    )
}
