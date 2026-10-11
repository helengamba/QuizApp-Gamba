import { useLocation, useNavigate } from "react-router-dom"
export default function Result() {
  const { score, total } = useLocation().state as { score: number, total: number }
  const nav = useNavigate()
  return (
    <div style={{ background: "#7c4dff", minHeight: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
      <div style={{ background: "white", width: "380px", padding: "25px", borderRadius: "20px", textAlign: "center" }}>
        <h1 style={{ color: "#7c4dff" }}>Score: {score}/{total}</h1>
        <button onClick={() => nav("/quiz")} style={{ width: "100%", padding: "12px", background: "#7c4dff", color: "white", border: "none", borderRadius: "10px", marginTop: "10px" }}>Retake</button>
        <button onClick={() => nav("/")} style={{ width: "100%", padding: "12px", background: "white", border: "2px solid #7c4dff", color: "#7c4dff", borderRadius: "10px", marginTop: "8px" }}>Home</button>
      </div>
    </div>
  )
}