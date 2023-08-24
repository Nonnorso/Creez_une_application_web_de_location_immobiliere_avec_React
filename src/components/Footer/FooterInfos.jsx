import '../../Styles/index.scss'
import FooterLogo from '../../assets/Footer_LOGO.png'

function Footer() {
    return (
        <div className="footerStyle FlexColumn">
        <img src={FooterLogo} alt="footer_logo" title="footer_logo" />
        <p className="WhiteText MediumSizeText">© 2020 Kasa. All rights reserved</p>
        </div>
    )
}

export default Footer