// IN QUESTO COMPONENTE ANDIAMOA  GESTIRE IL FORM CON ONCHANGE SUGLI INPUT E IL SUBMIT DEL FORM

// Importiamo axios per fare la chiamata di tipo di Post
import axios from "axios"

// Importo lo useState per le variabili di stato
import { useState } from "react"

// importiamo useParams per ottenere l'ID direttamente dalla rotta
import { useParams } from "react-router-dom"

export default function ReviewForm({reloadReviews}) {
    
    // recuperiamo id dalla request
    const { id } = useParams()


    // inizializzo una variabile con un oggetto con delle proprieta che dovranno essere compilate
    const initialForm = {
        name: "",
        vote: 1,
        text: ""
    }

    // Imposto variabile di stato per il form dove si partira da un form con campi vuoti che dovranno essere compilati dall utente
    const [formData, setFormData] = useState(initialForm)


    // Funzione per la gestione degli onchange dei valori e il name
    function setValue(event) {
        // Estrai il valore e il nome da eventd.target dal campo input 
        const { value, name } = event.target

        // Aggiorno i valori di formData con setFormData, facendo una copia di formData che sarebbe initialForm,
        // e poi aggiorno solo il campo specifico, utilizzando il nome dell'input come chiave e il suo valore come dato.
        setFormData({ ...formData, [name]: value })
    }

    // funzione per invio della chiamata di tipo post per la creazione di una nuova recensione e per gestire l invio del form
    function submitReview(event) {
        // non faccio refreshare la page all invio del form
        event.preventDefault();

        // faccio chiamata axios
        axios.post(`http://localhost:3000/api/movie/${id}/reviews`,formData)
        .then(() => {
            setFormData(initialForm)
            reloadReviews()
        })
        .catch(err => console.log(err))
    }

    return (<>
        <div className="container mt-5"onSubmit={submitReview}>
            <h2>Inserisci una Recensione</h2>
            <form id="reviewForm" >
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Nome</label>
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        name="name"
                        onChange={setValue}
                        value={formData.name}
                        placeholder="Inserisci il tuo nome"
                        required
                    />
                </div>


                <div className="mb-3">
                    <label htmlFor="vote" className="form-label">Voto</label>
                    <input
                        type="number"
                        className="form-control"
                        id="vote"
                        name="vote"
                        onChange={setValue}
                        value={formData.vote}
                        placeholder="Inserisci un voto da 1 a 5"
                        min="1"
                        max="5"
                        required
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="text" className="form-label">Recensione</label>
                    <textarea
                        className="form-control"
                        id="text"
                        name="text"
                        onChange={setValue}
                        value={formData.text}
                        rows="4"
                        placeholder="Scrivi la tua recensione"
                        required
                    ></textarea>
                </div>

                <button type="submit" className="set">Invia Recensione</button>
            </form>
        </div>
    </>

    )
}
