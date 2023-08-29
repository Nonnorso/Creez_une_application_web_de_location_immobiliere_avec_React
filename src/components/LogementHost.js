import "../Styles/logementHost.scss"

const LogementHost = ({ host }) => {
  
  return (
    <div className="logementHost FlexRow">
      <p className='SmallText RedText'>{host.name}</p>
      <img src={host.picture} alt="Host" />
    </div>
  );
};

export default LogementHost;