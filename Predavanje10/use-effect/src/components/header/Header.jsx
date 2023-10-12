import styles from "./Header.module.css";
import { StyledButton } from "../button/ButtonStyles";

const Header = (props) => {
  return (
    <div className={styles.header}>
      <h3>Home</h3>
      {props.isLoggedIn && (
        <StyledButton onClick={props.logoutUser}>Log Out</StyledButton>
      )}
    </div>
  );
};

export default Header;
