// importo lo state perle variabili di tato
import axios from "axios";
import { useState } from "react"

// importo useNavigate
import { useNavigate } from "react-router-dom";

export default function FormPageAddFilm() {
    // facciamo prima una variabile dove inizializziamo il form vuoto
    const initialForm ={
        title:"",
        director:"",
        abstract:"",
        image: null
    }
    // andiamo a usare uno useState per il form con due variabili di stato
    const [formData,setFormData] = useState(initialForm)

    // andiamo a fare la funzione per ricavare i value dagli input
    function getValue (event) {
        // andiamo a prendere event dagli input
        const {value,name} = event.target

        if (name === "image") setFormData({ ...formData, image: event.target.files[0] });
        else setFormData({ ...formData, [name]: value });
    }
    
    
    // navigazione
    const navigate = useNavigate();

    
    // Ora andiamo a gestire in onSubmit del form
    function submitForm(event){
        // non faccio refreshare la page all invio del form
        event.preventDefault();

        // faccio chiamata axios per creare un nuovo film
        axios.post('http://localhost:3000/api/movie/',formData,
            { headers: { "Content-Type": "multipart/form-data" } })
            
            .then(
                () => { navigate("/") }
            )
 
            .catch((err) => {
                console.log(err);
            });
    }   
    return (
        <div className="container mt-5" >
            <h2>Inserisci una Recensione</h2>
            <form id="reviewForm" onSubmit={submitForm}>
                <div className="mb-3">
                    <label className="form-label">Title</label>
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        name="title"
                        value={formData.title}
                        onChange={getValue}
                        placeholder="Inserisci il titolo del film"
                        required
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Director</label>
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        name="director"
                        value={formData.director}
                        onChange={getValue}
                        placeholder="Inserisci il Director"
                        required
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Abstract</label>
                    <textarea
                        className="form-control"
                        id="text"
                        name="abstract"
                        value={formData.abstract}
                        onChange={getValue}
                        rows="4"
                        placeholder="Inserisci il testo del film"
                        required
                    ></textarea>
                </div>

                <div className="mb-3">
                    <label  className="form-label">Scegli immagine</label>
                    <input 
                    className="form-control" 
                    type="file" 
                    id="formFile"
                    name="image"
                    onChange={getValue}
                    required
                    />
                </div>

                <button type="submit" className="set">Add Film</button>
            </form>
        </div>
    )
}
