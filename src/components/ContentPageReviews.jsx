// iMPORTO LINK
import { Link } from "react-router-dom"

export default function ContentPageReviews(props) {
    // ricaviamo con il props dati del map
    const { title, director, abstract, image } = props.review

    return (<>
        <div className="card-set-reviews">

        <img src={image} alt="" />

            <div className="text-set-reviews">
                <h2>{title}</h2>
                <p>{director}</p>
                <span>{abstract}</span>
            </div>
        </div>

        <section>
            <h3>Our community reviews</h3>
            <p>Average:*****</p>
        </section>

        <div className="card-vote">
            <span>An absolute masterpiece, beatifully written.</span>
            <h4>Vote ****</h4>
            <p>By Alice</p>
        </div>


        <div className="button-back">
            <Link to={"/"}><button>TORNA ALLA HOME</button></Link>
        </div>

    </>




    )
}
