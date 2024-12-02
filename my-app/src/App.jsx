import Tour from "./Components/Tour.jsx";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./Pages/Home.jsx";
import About from "./Pages/About.jsx";
import Checkout from "./Pages/Checkout.jsx";
import NavBar from "./NavBar.jsx";
import Footer from "./Footer.jsx";

function App() {
    return (
        <>
        <BrowserRouter>
        <NavBar></NavBar>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/checkout" element={<Checkout/>}/>
        </Routes>
        <Footer></Footer>
        </BrowserRouter>
        </>
    )
}

export default App;
