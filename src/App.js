import { useEffect } from "react";
import { useState } from "react";
import GuessLetters from "./components/GuessLetters/GuessLetters";
import Hangman from "./components/Hangman/Hangman";
import Letters from "./components/Letters/Letters";
import Result from "./components/Result/Result";
import UsedLetters from "./components/UsedLetters/UsedLetters";

function App() {
  const usedLettersArray = ["A", "B", "C", "D"];
  const [word, setWord] = useState([]);
  const randomWordUrl =
    "https://palabras-aleatorias-public-api.herokuapp.com/random";

  const randomWord = async () => {
    const response = await fetch(randomWordUrl);
    const randomWordUrlJson = await response.json();
    const randomWordUrlJsonSplited = randomWordUrlJson.body.Word.normalize(
      "NFD"
    )
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
          <Hangman />
        </div>
        <GuessLetters />
        <Result />
        <Letters />
      </div>
    </>
  );
}

export default App;
