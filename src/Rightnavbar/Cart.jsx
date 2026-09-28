import { Link } from "react-router-dom"
import { BsCart } from "react-icons/bs"

function Cart() {
  return (
    <Link to="/cart" aria-label="Cart">
      <BsCart />
    </Link>
  )
}
export default Cart