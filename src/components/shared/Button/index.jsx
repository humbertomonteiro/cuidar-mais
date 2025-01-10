import styles from "./button.module.css";

const Button = ({ action, children, link, ...args }) => {
  return (
    <>
      {action === "link" ? (
        <a className={styles.button} href={link} {...args}>
          {children}
        </a>
      ) : (
        <button className={styles.button} {...args}>
          {children}
        </button>
      )}
    </>
  );
};

export default Button;
