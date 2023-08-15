import '../../Styles/index.scss'
import { Link } from 'react-router-dom'
import Logo from '../../assets/LOGO.svg'
 
function Header() {
    return (
        <nav class="FlexRow NavStyle">

        <img src={Logo} alt="Logo Kasa" title="Logo Kasa" />
        
        <div class="LinkStyle">
            <Link class="MediumSizeText RedText" to="/" >Accueil</Link>
            <Link class="MediumSizeText RedText" to="/about" >A Propos</Link>
        {/* <Link to="/logement">Fiche de logement</Link> */}
        </div>
        
                 
        </nav>
    )
}

export default Header