import "./UsedLetters.css";

const UsedLetters = ({ props }) => {
  return (
    <section className="used-letters-container">
      <h2>Used letters</h2>
      <ul className="used-letters">
        {props.map((prop) => (
          <li className="used-letter">{prop},&nbsp;</li>
        ))}
      </ul>
    </section>
  );
};

export default UsedLetters;
