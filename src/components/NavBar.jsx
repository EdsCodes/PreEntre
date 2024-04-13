import logo from "../assets/images/Electro_Store_logo.jpg";
import CartWidget from "./CartWidget";

const NavBar = () => {
    return (
        <div className="container-fluid BarraNav">
            <nav className="row navbar navbar-expand-lg bg-body-ligth">
                <div className="col d-flex justify-content-end BarraNavegacion">
                    <a className="navbar-brand" href="#">
                        <img src={logo} alt="Logo Electro Store" />
                    </a>
                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="#">Inicio</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Categorías</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Iniciar Sesión</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" aria-disabled="true">Nosotros</a>
                            </li>
                        </ul>
                    </div>
                    <div className="d-flex align-items-center">
                        <CartWidget />
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default NavBar;