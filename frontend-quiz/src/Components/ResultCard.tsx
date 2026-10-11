export default function ResultCard({ score, total }: { score: number; total: number }) {
  return <div><h2>Result</h2><p>{score}/{total} - {Math.round(score/total*100)}%</p><p>Total:{total} Correct:{score} Wrong:{total-score}</p></div>;
}