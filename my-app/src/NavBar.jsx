import { Link } from "react-router-dom";



function NavBar () {
    return <div>
<nav>
    <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/checkout">Checkout</Link></li>
    </ul>
</nav>

    </div>
}

export default NavBar