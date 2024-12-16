import styles from "./MainComponent.module.scss";
const MainComponent = () => {
  return (
    <>
      <div className={styles.wrapper}>
        <h2>Project X</h2>
        <h3 className={styles.textLight}>TOP SECRET! DO NOT PRESS!</h3>
        <button id={styles.mainButton}>Button</button>
      </div>
    </>
  );
};

export default MainComponent;
