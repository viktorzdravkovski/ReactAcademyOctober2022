import "./PersonCard.css";

const PersonCard = (props) => {
  const {item} = props;

  const onClickHandler = () => {
    props.deletePersonHandler(item.id);
  };

  return <div className="card-container">
    <p>{item.id}</p>
    <p>{item.name}</p>
    <p>{item.age}</p>
    <p>{item.profession}</p>
    <button onClick={onClickHandler}>Delete person</button>
  </div>
};

export default PersonCard;