import { Link } from "react-router-dom"
import { FaSearch } from "react-icons/fa"

function Searchbar() {
  return (
    <Link to="/search" aria-label="Search">
      <FaSearch />
    </Link>
  )
}
export default Searchbar