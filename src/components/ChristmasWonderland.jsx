import { useState } from "react";
import styles from "./ChristmasWonderland.module.scss";
import Questionary2 from "./Questionary2";
import Gnome from "./Gnome";
const ChristmasWonderland = () => {
  const [showQuestionary, setShowQuestionary] = useState(false);
  const [showFinalText, setShowFinalText] = useState(false);
  return (
    <div className={styles.background}>
      <div className={styles.wrapper}>
        <h1>Welcome to Christmas Extravaganza!</h1>
        {!showQuestionary ? (<><h3>Don't try it on your phone.</h3>
          <button
            onClick={() => setShowQuestionary(true)}
            className={styles.startButton}
          >
            Let's begin
          </button></>
        ) : 
          !showFinalText ? <Questionary2 setShowFinalText={setShowFinalText}/> : <Gnome />
        }
      </div>
      <img
        style={{
          position: "absolute",
          bottom: "0",
          right: "0",
          transform: "rotate(180deg)",
        }}
        src={`${window.location.href}/branches.png`}
      />
      <img
        style={{
          position: "absolute",
          bottom: "0",
          legt: "0",
          transform: "scaleX(-1) rotate(180deg)",
        }}
        src={`${window.location.href}/branches.png`}
      />
      <img
        style={{
          position: "absolute",
          top: "-150px",
          left: "-100px",
          right: 0,
          margin: "auto",
          width: "2400px",
        }}
        src={`${window.location.href}/lights.png`}
      />
      {!showFinalText && <img
        style={{
          position: "absolute",
          bottom: "-20px",
          left: "728px",
          zIndex: 3,
        }}
        src={`${window.location.href}/fireplace.webp`}
      />}
    </div>
  );
};

export default ChristmasWonderland;
