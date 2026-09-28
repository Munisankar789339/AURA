import { Routes, Route } from "react-router-dom"
import Navbar from "./Navbar"
import Homepage from "./Home/Homepage"
import Ladies from "./Leftnavbar/Ladies"
import Men from "./Leftnavbar/Men"
import Kids from "./Leftnavbar/Kids"
import KidsCategories from "./KidsCategories"
import Beauty from "./Leftnavbar/Beauty"
import HomeFurniture from "./Leftnavbar/Homefurniture"
import Shoes from "./Leftnavbar/Shoes"
import Search from "./Rightnavbar/Searchbar"
import Profile from "./Rightnavbar/Profile"
import Likes from "./Rightnavbar/Likes"
import Cart from "./Rightnavbar/Cart"

function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/ladies" element={<Ladies />} />
        <Route path="/men" element={<Men />} />
        <Route path="/kids" element={<Kids />} />
        <Route path="/kids/categories" element={<KidsCategories />} />
        <Route path="/beauty" element={<Beauty />} />
        <Route path="/home-furniture" element={<HomeFurniture />} />
        <Route path="/shoes" element={<Shoes />} />
        <Route path="/search" element={<Search />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/likes" element={<Likes />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  )
}

export default App
