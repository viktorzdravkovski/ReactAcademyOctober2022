import styles from "./PersonCard.module.css";

const PersonCard = (props) => {
  return (
    <>
      <span className={styles.name}>{props.person.name}</span>
      <ul className={styles["person-info"]}>
        <li>{props.person.height}</li>
        <li>{props.person.mass}</li>
        <li>{props.person.eyeColor}</li>
        <li>{props.person.birthYear}</li>
      </ul>
      <button className={styles["homeworld-btn"]} onClick={props.loadWorld}>
        Home world
      </button>
    </>
  );
};

export default PersonCard;
