import styles from "./topBar.module.css";

const TopBar = ({ text, action, textAction, linkAction, functionAction }) => {
  return (
    <div className={styles.container}>
      <span>{text}</span>
      {action === "link" ? (
        <a href={linkAction}>{textAction}</a>
      ) : (
        <button onClick={functionAction}>{textAction}</button>
      )}
    </div>
  );
};

export default TopBar;
