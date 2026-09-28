import { Link } from "react-router-dom"
import Logo from "./Leftnavbar/Logo"
import Searchbar from "./Rightnavbar/Searchbar"
import Profile from "./Rightnavbar/Profile"
import Likes from "./Rightnavbar/Likes"
import Cart from "./Rightnavbar/Cart"
function Navbar() {
  return (
      <div className="w-[98%] mx-auto h-23 flex items-center justify-between">
        <div className="flex items-center gap-7">
          <div>
            <Logo />
          </div>

          <div className="flex items-center gap-6">
            <Link to="/" className="text-sm font-medium">Home</Link>
            <Link to="/ladies" className="text-sm font-medium">Ladies</Link>
            <Link to="/men" className="text-sm font-medium">Men</Link>
            <Link to="/kids" className="text-sm font-medium">kids</Link>
            <Link to="/beauty" className="text-sm font-medium">Beauty</Link>
            <Link to="/home-furniture" className="text-sm font-medium">Home Furniture</Link>
            <Link to="/shoes" className="text-sm font-medium">Shoes</Link>
          </div>
        </div>

        <div className="flex items-center gap-6 ">
          <Searchbar />
          <Profile />
          <Likes />
          <Cart />
        </div>

      </div>
  )
}
export default Navbar