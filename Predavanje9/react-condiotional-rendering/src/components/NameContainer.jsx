import styles from "./NameContainer.module.css";

const NameContainer = (props) => {
  const onClickHandler = () => {
    if (props.deletePeopleHandler) {
      props.deletePeopleHandler();
    }
  };

  return (
    <div className={styles["name-container"]}>
      {props.deletePeopleHandler && (
        <button onClick={onClickHandler}>Delete list</button>
      )}
      {props.children}
    </div>
  );
};

export default NameContainer;
