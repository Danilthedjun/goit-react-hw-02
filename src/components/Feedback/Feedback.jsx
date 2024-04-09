export default function Feedback({ values, total }) {
  return (
    <div>
      <p>Good: {values.good}</p>
      <p>Neutral: {values.neutral}</p>
      <p>Bad: {values.bad}</p>
      <p>Total: {total}</p>
      <p>
        Positive: {Math.round(((values.good + values.neutral) / total) * 100)}%
      </p>
    </div>
  );
}
