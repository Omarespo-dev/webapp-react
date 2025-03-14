import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

export default function ContentPageReviews(props) {
    // ricaviamo con il props dati del map
    const { name, vote, text } = props.review
    
    function stella(){
        // Voto della stellina dove math.ceil arrotondo a numero pieno
        const voto = vote;

        // ciclo per le stelel e faccio push
        const stelle = [];

        for(let i = 0; i < 5; i++){
            stelle.push(
                <FontAwesomeIcon
                    key={i}
                    icon={faStar}
                    style={{ color: i < voto ? "#ffff80" : "#c0c0c0" }} />
            );
        }

        return stelle
    }


    return (<>
        <div className="card-vote">
            <span>{text}</span>
            <h4>Vote:{stella()}</h4>
            <p>By {name}</p>
        </div>
    </>

    )
}
