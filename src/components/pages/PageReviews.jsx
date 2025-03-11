// importa link
import {Link} from "react-router-dom"

export default function PageReviews() {
    return (
        <div className="div-set-reviews">

            <div className="card-set-reviews">

                <img src="http://localhost:3000/img/movies_cover/inception.jpg" alt="" />

                <div className="text-set-reviews">
                    <h2>Inception</h2>
                    <p>Director: Christopher Nolan</p>
                    <span>A skilled thief is given a chance at redemption if he can successfully perform inception</span>
                    {/* <Link to={"/reviews"}><button>SEE MORE</button></Link> */}
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
            <div className="card-vote">
                <span>An absolute masterpiece, beatifully written.</span>
                <h4>Vote ****</h4>
                <p>By Alice</p>
            </div>
            <div className="card-vote">
                <span>An absolute masterpiece, beatifully written.</span>
                <h4>Vote ****</h4>
                <p>By Alice</p>
            </div>

            <div className="button-back">
                <Link to={"/"}><button>TORNA ALLA HOME</button></Link>
            </div>
            
        </div>
    )
}
