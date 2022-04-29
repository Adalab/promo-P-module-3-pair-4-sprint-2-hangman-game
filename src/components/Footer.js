import "../styles/Footer.scss";
import { NavLink } from "react-router-dom";
function Footer() {
  /*     Combinad este HTML y el componente <NavLink> de React Router DOM para crear el código de vuestro Footer.
Utilizamos el componente <NavLink> para que React Router DOM nos añada la clase active en el link que esté activo y así poder cambiar sus estilos a través de CSS. Visita la documentación para más info.
Entre los ficheros Sass que os dimos en el enunciado está src/scss/components/_footer.scss. Si lo importáis en el nuevo componente debería mostrarse bien maquetado. */

  return (
    <footer className="footer">
      <nav>
        <ul>
          <li className="footer__menu-item">
            <NavLink to="/" className="footer__menu-link">
              A jugar
            </NavLink>
          </li>
          <li className="footer__menu-item">
            <NavLink className="footer__menu-link" to="/instructions">
              ¿Cómo se juega?
            </NavLink>
          </li>
          <li className="footer__menu-item">
            <NavLink className="footer__menu-link" to="/options">
              Más opciones
            </NavLink>
          </li>
        </ul>
      </nav>
      <small className="footer__copy">© Adalab</small>
    </footer>
  );
}
export default Footer;
