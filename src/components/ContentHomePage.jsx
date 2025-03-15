// iMPORTO LINK
import axios from "axios"
import { Link } from "react-router-dom"

export default function ContentHomePage({movie, removeMovie}) {
    // ricaviamo con il props dati del map
    const { id, title, director, abstract, image} = movie
    
    return (

        <div className="card-set">
            <img src={image ? image : "../../nope-not-here.avif"} alt={title} />

            <div className="text-set">
                <h4>{title}</h4>
                <p>{director}</p>
                <span>{abstract}</span>
                <Link to={`/reviews/${id}`}><button>SEE MORE</button></Link>
                <button onClick={() => removeMovie(id)}>DELETE</button>
            </div>

        </div>


    )
}
