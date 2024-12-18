import styles from "./Questionaty.module.scss";
import { useEffect, useState } from "react";

const Questionary = ({setShowFinalText}) => {
  const questions = [
    {
      q: "How many green lights can you see?",
      a: ["3", "three"],
    },
    { q: "What is the Answer to the Ultimate Question of Life, the Universe and Everything?", a: "42" },
    {
      q: "Nothing beats the festive aroma Of cinnamon and Oranges, as we Deck the halls and Light the tree, Enjoying the Snowfall together.",
      a: "noodles",
    },
    { q: "I think there's something off with the living room light. What's this color?", a: "green" },

    {
      q: "In the Adverture Time episode Holly Jolly Christmas, what thing is pictured on BMO's sweater?",
      a: "snowman",
    },
    {
      q: "The Bible of this triangular demon might hold the answer to this one.",
      a: "teeth",
    },
    {
      q: "What's the number on the robot frog?",
      a: ["4", "four"],
    },
    {
      q: "There might be a file on your desktop holding a password.",
      a: "cookie"
    }
  ];
  const [answer, setAnswer] = useState("");
  const [currentQ, setCurrentQ] = useState(0);
  const [wrong, setWrong] = useState(false);

  const handleLink = () => {
    setShowFinalText(true);
  };
  const handleSubmit = (event) => {
    if (event.key === "Enter") {
      if (
        questions[currentQ]?.a.includes(
          answer.replace(/[^A-Z0-9]/gi, "").toLowerCase()
        )
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
    <>
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
        <h3>Maybe you're still missing something... Look closer.</h3>
      )}
      <a onClick={handleLink}
        style={{
          position: "fixed",
          left: "calc(50% - 252px)",
          bottom: "20px",
          zIndex: 1,
          opacity: 0.05 * currentQ,
          cursor: "pointer"
        }}
      >
        <img
          style={{ height: "70px", transform: "rotate(-40deg)" }}
          src={`${window.location.href}/gnome.png`}
        />
      </a>
    </>
  );
};

export default Questionary;
