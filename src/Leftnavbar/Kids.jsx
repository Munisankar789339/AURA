import { Link } from "react-router-dom"
import Girls from '../assets/kids/girls.jpg'
function Kids() {
  return (
    <main>
      <h1>kids</h1>
      <Link to="/kids/Ladies" aria-label="Browse kids clothing categories">
        <img src={Girls} alt="Browse kids clothing categories" className="cursor-pointer" />
      </Link>
    </main>
  )
}
export default Kids