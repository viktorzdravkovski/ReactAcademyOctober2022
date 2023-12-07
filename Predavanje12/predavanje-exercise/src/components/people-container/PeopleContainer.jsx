import styles from "./PeopleContainer.module.css";
import ItemContainer from "../person/ItemContainer";

const PeopleContainer = (props) => {
  return (
    <div className={styles.container}>
      {props.people.map((person) => {
        return <ItemContainer person={person} key={person.id} />;
      })}
    </div>
  );
};

export default PeopleContainer;
