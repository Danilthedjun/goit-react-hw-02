export default function Feedback({ values, total, positivValue }) {
  return (
    <div>
      <p>Good: {values.good}</p>
      <p>Neutral: {values.neutral}</p>
      <p>Bad: {values.bad}</p>
      <p>Total: {total}</p>
      <p>Positive: {positivValue}%</p>
    </div>
  );
}
