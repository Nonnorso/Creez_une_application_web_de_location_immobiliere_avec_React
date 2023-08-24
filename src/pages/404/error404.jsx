import { Link } from 'react-router-dom'
import '../../Styles/index.scss'

function Error404() {
    
    return (
        <div className="FlexColumn Style404">
            <h1 className="RedText Title404">404</h1>
            <p className="RedText Txt404">Oups! La page que vous demandez n'existe pas.</p>
            <Link className="RedText SmallText" to="/" >Retourner sur la page d’accueil</Link>
        </div>
    )
}

export default Error404