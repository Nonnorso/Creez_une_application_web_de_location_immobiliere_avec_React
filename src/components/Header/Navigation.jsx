import { Link } from 'react-router-dom'
 
function Header() {
    return (
        <nav>
            <Link to="/">Accueil</Link>
            <Link to="/about">A propos</Link>
            <Link to="/logement">Fiche de logement</Link>
            <Link to="/error404">Erreur 404</Link>        
        </nav>
    )
}

export default Header