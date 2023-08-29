import "../Styles/logementTags.scss"

const LogementTags = ({ tags }) => {
  
  return (
    <div className="logementTags FlexRow">
        {tags.map((tag, index) => (
          <div className="Tag WhiteText" key={index}>{tag}</div>
        ))}
    </div>
  );
};

export default LogementTags;