import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { questions } from "../data/questions"

export default function Quiz() {
  const [i, setI] = useState(0)
  const [sel, setSel] = useState("")
  const [score, setScore] = useState(0)
  const nav = useNavigate()

  const next = () => {
    const finalScore = sel === questions[i].answer? score + 1 : score
    if (sel === questions[i].answer) setScore(finalScore)
    if (i + 1 < questions.length) { setI(i+1); setSel("") }
    else nav("/result", { state: { score: finalScore, total: questions.length } })
  }

  return (
    <div style={{ background: "#7c4dff", minHeight: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
      <div style={{ background: "white", width: "380px", padding: "25px", borderRadius: "20px", textAlign: "center" }}>
        <p>Question {i+1} of {questions.length}</p>
        <div style={{ height: "8px", background: "#eee", borderRadius: "10px", margin: "10px 0" }}>
          <div style={{ height: "100%", width: `${((i+1)/questions.length)*100}%`, background: "#7c4dff", borderRadius: "10px" }}></div>
        </div>

        <div style={{ background: "#f5eeff", border: "2px solid #dccdff", borderRadius: "15px", padding: "15px", margin: "15px 0" }}>
          <h3 style={{ textAlign: "center", marginBottom: "12px" }}>{questions[i].text}</h3>
          {questions[i].options.map((op: string) => (
            <button key={op} onClick={() => setSel(op)}
              style={{
                display: "block", width: "100%", padding: "10px", margin: "6px 0",
                borderRadius: "10px", border: "2px solid #e0d7ff",
                background: sel === op? "#7c4dff" : "white",
                color: sel === op? "white" : "black",
                cursor: "pointer"
              }}>
              {op}
            </button>
          ))}
        </div>

        <button disabled={!sel} onClick={next}
          style={{ width: "100%", padding: "12px", background: "#7c4dff", color: "white", border: "none", borderRadius: "10px", opacity: sel? 1 : 0.5 }}>
          Next 
        </button>
      </div>
    </div>
  )
}