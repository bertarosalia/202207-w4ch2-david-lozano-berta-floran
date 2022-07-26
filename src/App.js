import { useEffect } from "react";
import { useState } from "react";
import GuessLetters from "./components/GuessLetters/GuessLetters";
import Hangman from "./components/Hangman/Hangman";
import Letters from "./components/Letters/Letters";
import Result from "./components/Result/Result";
import UsedLetters from "./components/UsedLetters/UsedLetters";

function App() {
  const usedLettersArray = ["A", "B", "C", "D"];
  const numberOfMistakes = 7;
  const [word, setWord] = useState([]);

  const randomWordUrl =
    "https://clientes.api.greenborn.com.ar/public-random-word";

  const randomWord = async () => {
    const response = await fetch(randomWordUrl);
    const randomWordUrlJson = await response.json();

    const randomWordUrlJsonSplited = randomWordUrlJson[0]
      .replace(/([aeio])\u0301|(u)[\u0301\u0308]/gi, "$1$2")
      .normalize()
      .split("");

    setWord(randomWordUrlJsonSplited);

    return randomWordUrlJson;
  };

  (() => word)();

  useEffect(() => {
    randomWord();
  }, [randomWordUrl]);

  return (
    <>
      <div className="container">
        <div className="main-container">
          <UsedLetters props={usedLettersArray} />
          <Hangman numberOfMistakes={numberOfMistakes} />
        </div>
        <GuessLetters />
        <Result />
        <Letters />
      </div>
    </>
  );
}

export default App;
