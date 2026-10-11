type Props = {
  q: { text: string; options: string[] };
  sel: string;
  set: (v: string) => void;
};

export default function QuestionCard({ q, sel, set }: Props) {
  return (
    <div className="q-box">
      <h3>{q.text}</h3>
      {q.options.map((op) => (
        <button key={op} className={sel === op? "opt sel" : "opt"} onClick={() => set(op)}>
          {op}
        </button>
      ))}
    </div>
  );
}