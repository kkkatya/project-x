import { useEffect, useState } from "react";
import styles from "./MainComponent.module.scss";
import Questionary from "./Questionary";
const MainComponent = () => {
  const [showQuestionary, setShowQuestionary] = useState(false);
  const [progress, setProgress] = useState(0);
  const [loading, setLoading] = useState(false);
  const handleButtonClick = () => {
    setLoading(true);
  };

  useEffect(() => {
    if (loading) {
      const interval = setInterval(() => {
        setProgress((prev) => prev + 1);
        console.log(progress);
      }, 100);
      if (progress > 100) {
        setShowQuestionary(true);
        clearInterval(interval);
        setLoading(false);
      }

      return () => clearInterval(interval);
    }
  }, [loading, progress]);

  useEffect(() => {
    if(typeof window !== undefined){
      if(window.localStorage.getItem("showFinalText")){
        setShowQuestionary(true);
      }
    }
  }, []);
  return (
    <>
      <div className={styles.wrapper}>
        <h2>Project X</h2>
        {showQuestionary ? (
            <Questionary />
        ) : (
          <>
            {!loading ? (
              <h3>TOP SECRET! DO NOT PRESS!</h3>
            ) : (
              <h3>YOUR LOSS...</h3>
            )}
            {loading ? (
              <progress value={progress} max={100} />
            ) : (
              <button id={styles.mainButton} onClick={handleButtonClick}>
                Button
              </button>
            )}
          </>
        )}
      </div>
    </>
  );
};

export default MainComponent;
