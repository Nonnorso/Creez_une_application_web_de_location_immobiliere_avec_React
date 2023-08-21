import AboutBanner from '../../components/About_Banner'
import Collapse from '../../components/Collapse';
import collapseIcon from '../../assets/arrow_back_ios-24px 2.png';

function aPropos() {
    return (
      <div>
        <AboutBanner />
        <div className="collapse FlexColumn">
          <Collapse
            title="Fiabilité"
            icon={<img src={collapseIcon} alt="Icône de Collapse" />}
            content="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont
            régulièrement vérifiées par nos équipes."
          />

          <Collapse
            title="Respect"
            icon={<img src={collapseIcon} alt="Icône de Collapse" />}
            content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de
            perturbation du voisinage entraînera une exclusion de notre plateforme."
          />

          <Collapse
            title="Service"
            icon={<img src={collapseIcon} alt="Icône de Collapse" />}
            content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de
            perturbation du voisinage entraînera une exclusion de notre plateforme."
          />

          <Collapse
            title="Sécurité"
            icon={<img src={collapseIcon} alt="Icône de Collapse" />}
            content="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement
            correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au
            locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons
            également des ateliers sur la sécurité domestique pour nos hôtes."
          />
        </div>
      </div>
    );
  }

export default aPropos;