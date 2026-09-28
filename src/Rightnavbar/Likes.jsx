import { Link } from "react-router-dom"
import { FaRegHeart } from "react-icons/fa"

function Likes() {
  return (
    <Link to="/likes" aria-label="Likes">
      <FaRegHeart />
    </Link>
  )
}

export default Likes