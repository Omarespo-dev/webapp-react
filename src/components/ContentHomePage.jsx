// iMPORTO LINK
import { Link } from "react-router-dom"

export default function ContentHomePage(props) {
    // ricaviamo con il props dati del map
    const { id, title, director, abstract, image } = props.movie

    return (
        
        <div className="card-set">
            <img src={image ? image : "../../nope-not-here.avif"} alt={title} />

            <div className="text-set">
                <h4>{title}</h4>
                <p>{director}</p>
                <span>{abstract}</span>
                <Link to={`/reviews/${id}`}><button>SEE MORE</button></Link>
                
            </div>

        </div>


    )
}
