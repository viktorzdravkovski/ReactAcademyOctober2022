const PersonCard = (props) => {
  const { person } = props;

  return (
    <div
      style={{
        padding: "10px",
        border: "1px solid black",
        borderRadius: "10px",
      }}
    >
      <h3>{person.name}</h3>
      <p>{person.age}</p>
    </div>
  );
};

export default PersonCard;
