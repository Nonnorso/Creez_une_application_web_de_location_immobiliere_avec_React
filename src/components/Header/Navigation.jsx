import { Link } from 'react-router-dom'
 
function Header() {
    return (
        <nav>

            <Link to="/">Accueil</Link>
            <Link to="/about">A propos</Link>
            <Link to="/logement">Fiche de logement</Link> 
                 
        </nav>
    )
}

export default Header