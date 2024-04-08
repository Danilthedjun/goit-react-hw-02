export default function Options({ addValue }) {
  return (
    <div>
      <button onClick={() => addValue("good")}>Good</button>
      <button onClick={() => addValue("neutral")}>Neutral</button>
      <button onClick={() => addValue("bad")}>Bad</button>
    </div>
  );
}
