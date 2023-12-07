import styles from "./WorldCard.module.css";

const WorldCard = (props) => {
  return (
    <>
      <span className={styles.name}>{props.world.name}</span>
      <ul className={styles.info}>
        <li>{props.world.climate}</li>
        <li>{props.world.terrain}</li>
        <li>{props.world.population}</li>
      </ul>
      <button className={styles["person-btn"]} onClick={props.loadPerson}>
        Person
      </button>
    </>
  );
};

export default WorldCard;
