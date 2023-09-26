import './ScoreboardCard.css';

const ScoreboardCard = () => {
  return (
    <div className="scoreboard-card-container">
      <div className="scoreboard-card-name">
        <h3>Name</h3>
      </div>
      <div className="scoreboard-card-points">
        <h3>Points</h3>
      </div>
    </div>
  );
}

export default ScoreboardCard;