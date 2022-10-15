import { BrowserRouter, Routes, Outlet, Route, NavLink} from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import About from "./pages/About";
import Home from "./pages/Home";

const App = () => {
    return (
        <BrowserRouter>
            <Navbar>
                <ul>
                    <li>
                        <NavLink to='/' end>Accueil</NavLink>
                    </li>
                    <li>
                        <NavLink to='about'>A Propos</NavLink>
                    </li>
                </ul>
            </Navbar>

            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='about' element={<About />} />
            </Routes>

            <Outlet />

            <Footer />
        </BrowserRouter>
    );
}

export default App;