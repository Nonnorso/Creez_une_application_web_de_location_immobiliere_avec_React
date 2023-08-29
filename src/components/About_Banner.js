import AboutBanner from '../assets/A_Propos_Banner.png'
import "../Styles/banner.scss"

function aboutBanner() {
    
    return (
        <div className="k-banner B2">
            <img src={AboutBanner} alt="about_banner" title="about_banner" />
        </div>
    )
}

export default aboutBanner