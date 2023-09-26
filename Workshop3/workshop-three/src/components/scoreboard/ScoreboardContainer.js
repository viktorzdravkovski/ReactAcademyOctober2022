import ScoreboardCard from "./ScoreboardCard";
import "./ScoreboardContainer.css";

const ScoreboardContainer = () => {
  return (
    <div className="container">
      <div className="scoreboard-container">
        <ScoreboardCard/>
        <ScoreboardCard/>
        <ScoreboardCard/>
      </div>
      <button type="button">Clear scores</button>
    </div>
  );
};

export default ScoreboardContainer;
