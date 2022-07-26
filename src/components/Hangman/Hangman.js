import drawHangman from "../../utils/drawHangman/drawHangman";
import "./Hangman.css";

const Hangman = ({ numberOfMistakes }) => {
  const drawedHangman = drawHangman.slice(`-${numberOfMistakes}`);

  return (
    <div className="hangman-container">
      <svg className="hangman" viewBox="0 0 96 96" width="300" height="300">
        {drawedHangman}
      </svg>
    </div>
  );
};

export default Hangman;
