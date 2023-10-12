import { useState } from "react";
import styles from "./TextContainerModules.module.css";

const TextContainerModules = () => {
  const [text, setText] = useState("");
  const [matcher, setMatcher] = useState("");
  const [isMatch, setIsMatch] = useState(false);

  const onChangeMatcherHandler = (event) => {
    setMatcher(event.target.value);
    event.target.value.trim().length > 0 &&
    text.indexOf(event.target.value) > -1
      ? setIsMatch(true)
      : setIsMatch(false);
  };

  const onChangeTextHandler = (event) => {
    setText(event.target.value);
    event.target.value.trim().length > 0 &&
    event.target.value.indexOf(matcher) > -1
      ? setIsMatch(true)
      : setIsMatch(false);
  };

  const classes = `${styles["matcher-container"]} ${
    isMatch ? styles.valid : ""
  }`;

  return (
    <div className={styles.container}>
      <div className={classes}>
        <h3>{matcher}</h3>
        <label>Change text to match</label>
        <input type="text" onChange={onChangeMatcherHandler} value={matcher} />
      </div>
      <div className={styles["text-container"]}>
        <label>Add text</label>
        <input type="text" onChange={onChangeTextHandler} value={text} />
      </div>
    </div>
  );
};

export default TextContainerModules;
