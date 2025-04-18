const CompetitionCard = ({ name, details }) => (
    <div className="card bg-base-100 shadow-md p-4 transform transition duration-300 hover:scale-102 hover:bg-primary">
    <div className="card-body">
      <h3 className="card-title">{name}</h3>
      <p>{details}</p>
    </div>
  </div>
);

export default CompetitionCard;
