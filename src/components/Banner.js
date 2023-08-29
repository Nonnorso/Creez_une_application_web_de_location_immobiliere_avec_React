import "../Styles/banner.scss"
import HomeBanner from '../assets/Home_banner.png'

function homeBanner() {
    
    return (
        <div className="k-banner B1">
            <img src={HomeBanner} alt="home_banner" title="home_banner" />
            <p className="WhiteText LargeText">Chez vous, partout et ailleurs</p>
        </div>
    )
}

export default homeBanner