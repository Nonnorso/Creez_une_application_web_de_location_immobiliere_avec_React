import '../../Styles/index.scss'
import FooterLogo from '../../assets/Footer_LOGO.png'

 
function Footer() {
    return (
        <div class="footerStyle">
        <img src={FooterLogo} alt="footer_logo" title="footer_logo" />
        <p class="WhiteText">© 2020 Kasa. All rights reserved</p>
        </div>
    )
}

export default Footer