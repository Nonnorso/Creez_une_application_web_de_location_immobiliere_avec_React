import '../../Styles/index.scss'
import { Link } from 'react-router-dom'
import Logo from '../../assets/LOGO.svg'
 
function Header() {
    return (
        <nav className="FlexRow NavStyle">
            <Link to="/">
                <img src={Logo} alt="Logo Kasa" title="Logo Kasa" />
            </Link>
            
            <div className="LinkStyle">
                <Link className="MediumSizeText RedText" to="/" >Accueil</Link>
                <Link className="MediumSizeText RedText" to="/about" >A Propos</Link>
            </div>       
        </nav>
    )
}

export default Header