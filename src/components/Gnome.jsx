import { useState } from "react";
import styles from "./Gnome.module.scss";
const Gnome = () => {
  const [status, setStatus] = useState(0);
  return (
    <>
      {status === 0 && (
        <h2>
          Oh hello there! I have a gift for you but do you want to get it today
          or on Christmas?
        </h2>
      )}

      {status !== 1 && (
        <img
          src={`${window.location.href}/gnome.png`}
          style={{
            height: "300px",
            position: "fixed",
            bottom: 0,
            left: 0,
            right: 0,
            margin: "auto",
          }}
        />
      )}
      {status === 0 && (
        <>
          {" "}
          <button className={styles.button} onClick={() => setStatus(1)}>
            Today
          </button>
          <button className={styles.button} onClick={() => setStatus(2)}>
            Christmas
          </button>
        </>
      )}
      {status === 1 && (
        <>
          <h3>Then go find it!</h3>
          <img src={`${window.location.href}/map.png`} />
        </>
      )}
      {status === 2 && (
        <h2>At least get some snacks from the kitchen. You've deserved it!</h2>
      )}
    </>
  );
};

export default Gnome;
