import { Link } from "react-router-dom"

export default function PageNotFound() {
    return (
        <div>
            <h3>ERROR 404</h3>
            <p>Please try again or check your url</p>
            <div className="button-back">
                <Link to={"/"}><button>TORNA ALLA HOME</button></Link>
            </div>
        </div>
    )
}
