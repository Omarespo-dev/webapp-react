// import link
import { Link } from "react-router-dom"

export default function Header() {
  return (
    <header>
      <Link to={"/"}> <h2>MOVIES</h2> </Link>
      <Link to={"/addFilm"}>
      <button type="submit" className="set">Add</button> 
      </Link>
    </header>

  )
}
