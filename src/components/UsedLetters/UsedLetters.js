import "./UsedLetters.css";

const UsedLetters = () => {
  const usedLettersArray = ["A", "B", "C", "D"];

  return (
    <section className="used-letters-container">
      <h2>Used letters</h2>
      <ul className="used-letters">
        {usedLettersArray.map((usedLetter) => (
          <li className="used-letter">{usedLetter},&nbsp;</li>
        ))}
      </ul>
    </section>
  );
};

export default UsedLetters;
