import styles from "./Header.module.css";

const Header = (props) => {
  return (
    <div className={styles["header-container"]}>
      <div className={styles.header}>
        <button onClick={props.loadPeople}>Load people</button>
      </div>
    </div>
  );
};

export default Header;
