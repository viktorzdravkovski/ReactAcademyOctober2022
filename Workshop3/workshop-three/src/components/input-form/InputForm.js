import './InputForm.css';

const InputForm = () => {
  return (
    <div className="input-form-container">
      <form className="input-form">
        <div className="input-name-container">
          <p>Player name:</p>
          <input type="text"/>
        </div>
        <div className="clicks-container">
          <p>Clicks:</p>
          <h3>0</h3>
          <button className="click-btn" type="button">Click</button>
        </div>
        <button type="submit">Submit score</button>
      </form>
  </div>
  );
}

export default InputForm;