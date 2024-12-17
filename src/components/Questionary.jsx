import styles from "./Questionaty.module.scss";
import { useEffect, useState } from "react";

const Questionary = () => {
  const questions = [
    {
      q: "That O looks quite explosive! What is this cool name?",
      a: "sexbobomb",
    },
    { q: "I'm the Dude and my shadow is on what side of me?", a: "right" },
    {
      q: "Look at him with his dashing yellow hat and horrible personality! But what do they call him?",
      a: "magicman",
    },
    { q: "When I walk past this tree, how many caps do I see?", a: "12" },

    {
      q: "On the top shelf I'm 5th from the left, what's my first name?",
      a: "harry",
    },
    {
      q: "01100111 01100001 01101110 01100111 01101001 01101110 01101001",
      a: "gangini",
    },
    {
      q: "Ask your crazy neighbor for the password.",
      a: "pickle",
    },
  ];
  const [answer, setAnswer] = useState("");
  const [currentQ, setCurrentQ] = useState(0);
  const [wrong, setWrong] = useState(false);
  const [showFinalText, setShowFinalText] = useState(false);

  const handleLink = () => {
    setShowFinalText(true);
    if(typeof window !== undefined){
      window.localStorage.setItem("currentQ", currentQ);
      window.localStorage.setItem("showFinalText", true);
    }
  }
  const handleSubmit = (event) => {
    if (event.key === "Enter") {
      if (
        answer.replace(/[^A-Z0-9]/gi, "").toLowerCase() ==
        questions[currentQ]?.a
      ) {
        setCurrentQ((prev) => prev + 1);
        setAnswer("");
        setWrong(false);
      } else {
        setWrong(true);
      }
    }
  };
  const handleChange = (event) => {
    setWrong(false);
    setAnswer(event.currentTarget.value);
  };

  useEffect(() => {
    if(typeof window !== undefined){
      setCurrentQ(window.localStorage.getItem("currentQ") || 0);
      setShowFinalText(window.localStorage.getItem("showFinalText") || false);
    }
  }, []);
  return (
    <div>
      {currentQ === 0 && (
        <h4 style={{ color: "#EFD5C3" }}>
          Let's see if you can answer these riddles.
        </h4>
      )}
      {currentQ < questions.length ? (
        <>
          <h3>{questions[currentQ]?.q}</h3>
          <input
            className={`${styles.input} ${wrong && styles.wrong}`}
            onKeyDown={handleSubmit}
            value={answer}
            onChange={handleChange}
          />
        </>
      ) : (
        <>
          <h3>Alright, you win this one.</h3>
          {showFinalText ? <h3>Come here for more later.</h3> : <a className={styles.successLink} href="https://www.humblebundle.com/?gift=kRdeDHSCYKNhu3A5" target="_blank" onClick={handleLink}>
            Press here
          </a>}
        </>
      )}
    </div>
  );
};

export default Questionary;
