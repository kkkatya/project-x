import styles from "./Questionaty.module.scss";
import { useState } from "react";

const Questionary = () => {
  const questions = [
    {
      q: "That O looks quite explosive! What is this cool name?",
      a: "sexbobomb",
    },
    {
      q: "Look at him with his dashing yellow hat and horrible personality! But what do they call him?",
      a: "magicman",
    },
    { q: "When I walk past this tree, how many caps do I see?", a: "12" },
    { q: "I'm the Dude and my shadow is on what side of me?", a: "right" },
    {
      q: "On the top shelf I'm 5th from the left, what's my first name?",
      a: "harry",
    },
  ];
  const [answer, setAnswer] = useState("");
  const [currentQ, setCurrentQ] = useState(0);
  const [wrong, setWrong] = useState(false);
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
  return (
    <div>
      {currentQ === 0 && (
        <h4 style={{color: "#EFD5C3"}}>Let's see if you can answer these riddles.</h4>
      )}
      <h3>{questions[currentQ]?.q}</h3>
      <input
        className={`${styles.input} ${wrong && styles.wrong}`}
        onKeyDown={handleSubmit}
        value={answer}
        onChange={handleChange}
      />
    </div>
  );
};

export default Questionary;
