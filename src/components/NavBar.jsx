import logo from "../assets/images/Electro_Store_logo.jpg";
import CartWidget from "./CartWidget";

const NavBar = () => {
    return (
        <div className="container-fluid BarraNav">
            <nav className="row navbar navbar-expand-lg bg-body-light">
                <div className="container d-flex justify-content-between BarraNavegacion">
                    <a className="navbar-brand" href="#">
                        <img src={logo} alt="Logo Electro Store" />
                    </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse d-flex justify-content-end itemsBarraNav" id="navbarNavAltMarkup">
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
                    <CartWidget />
                </div>
            </nav>
        </div>
    );
};

export default NavBar;
