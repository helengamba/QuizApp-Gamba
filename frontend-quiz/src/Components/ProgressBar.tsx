export default function ProgressBar({ c, t }: { c: number; t: number }) {
  return <div className="bar"><div style={{ width: `${(c/t)*100}%` }}></div></div>;
}