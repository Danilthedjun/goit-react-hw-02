export default function Options({ addValue, feedback, total }) {
  return (
    <div>
      <button onClick={() => addValue("good")}>Good</button>
      <button onClick={() => addValue("neutral")}>Neutral</button>
      <button onClick={() => addValue("bad")}>Bad</button>
      {total > 0 && <button onClick={feedback}>Reset</button>}
    </div>
  );
}
