import { useNavigate } from "react-router-dom"
export default function Home() {
  const nav = useNavigate()
  return (
    <div style={{ background: "#7c4dff", minHeight: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
      <div style={{ background: "white", width: "380px", padding: "25px", borderRadius: "20px", textAlign: "center" }}>
        <div style={{ fontSize: "40px" }}></div>
        <h1 style={{ color: "#7c4dff" }}>Welcome to the Frontend Quiz!</h1>
        <p>10 questions</p>
        <button onClick={() => nav("/quiz")} style={{ width: "100%", padding: "12px", background: "#7c4dff", color: "white", border: "none", borderRadius: "10px", marginTop: "10px" }}>Start Quiz</button>
      </div>
    </div>
  )
}