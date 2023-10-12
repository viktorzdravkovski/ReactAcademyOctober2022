import styles from "./UserItem.module.css";
import { useReducer } from "react";

const privilegeReducer = (state, action) => {
  if (action.type === "READ_CLICK") {
    return {
      read: !state.read,
      write: state.write,
      execute: state.execute,
    };
  }

  if (action.type === "WRITE_CLICK") {
    return {
      read: state.read,
      write: !state.write,
      execute: state.execute,
    };
  }

  if (action.type === "EXECUTE_CLICK") {
    return {
      read: state.read,
      write: state.write,
      execute: !state.execute,
    };
  }

  return {
    read: false,
    write: false,
    execute: false,
  };
};

const UserItem = (props) => {
  const [privilegeState, dispatchPrivilege] = useReducer(privilegeReducer, {
    read: false,
    write: false,
    execute: false,
  });

  const handleClickRead = () => {
    dispatchPrivilege({ type: "READ_CLICK" });
  };

  const handleClickWrite = () => {
    dispatchPrivilege({ type: "WRITE_CLICK" });
  };

  const handleClickExecute = () => {
    dispatchPrivilege({ type: "EXECUTE_CLICK" });
  };

  return (
    <div className={styles["user-item-container"]}>
      <h3>{props.user.email}</h3>
      <h3>{props.user.password}</h3>
      <ul>
        <li>
          <button
            className={`${styles["custom-btn"]} ${
              privilegeState.read && styles["active"]
            }`}
            onClick={handleClickRead}
          >
            Read
          </button>
        </li>
        <li>
          <button
            className={`${styles["custom-btn"]} ${
              privilegeState.write && styles["active"]
            }`}
            onClick={handleClickWrite}
          >
            Write
          </button>
        </li>
        <li>
          <button
            className={`${styles["custom-btn"]} ${
              privilegeState.execute && styles["active"]
            }`}
            onClick={handleClickExecute}
          >
            Execute
          </button>
        </li>
      </ul>
    </div>
  );
};

export default UserItem;
