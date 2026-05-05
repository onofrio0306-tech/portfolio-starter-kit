export default function Resume() {
  return (
    <div
      style={{
        padding: "60px 20px",
        textAlign: "center",
        minHeight: "100vh",
        background: "linear-gradient(135deg, #0f172a, #1e1b4b)",
        color: "white",
      }}
    >
      <h1 style={{ fontSize: "40px", marginBottom: "10px" }}>
        Resume
      </h1>

      <p style={{ opacity: 0.7, marginBottom: "40px" }}>
        Cybersecurity & IT Networking Student • Building Hands-On Skills in Cloud, Networking, and Security
      </p>

      <div style={{ marginBottom: "20px" }}>
        <a
          href="/resume.pdf"
          target="_blank"
          style={{
            marginRight: "10px",
            border: "1px solid #555",
            padding: "12px 20px",
            borderRadius: "8px",
            color: "white",
            textDecoration: "none",
          }}
        >
          View Resume
        </a>

        <a
          href="/resume.pdf"
          target="_blank"
          style={{
            background: "linear-gradient(135deg, #2563eb, #7c3aed)",
            color: "white",
            padding: "14px 26px",
            borderRadius: "10px",
            fontWeight: "600",
            boxShadow: "0 10px 20px rgba(0,0,0,0.3)",
            textDecoration: "none",
          }}
        >
          Download Resume (PDF)
        </a>
      </div>
    </div>
  )
}
