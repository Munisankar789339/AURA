import { Link } from "react-router-dom"
import { CgProfile } from "react-icons/cg"

function Profile() {
  return (
    <Link to="/profile" aria-label="Profile">
      <CgProfile />
    </Link>
  )
}
export default Profile