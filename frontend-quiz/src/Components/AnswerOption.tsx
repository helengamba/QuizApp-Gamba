export default function AnswerOption({ o, s, set }: { o: string; s: boolean; set: (v: string) => void }) {
  return <button className={s? "opt sel" : "opt"} onClick={() => set(o)}>{o}</button>;
}