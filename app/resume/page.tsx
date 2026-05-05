export default function Resume() {
  return (
    <div style={{ padding: "40px", textAlign: "center" }}>
      <h1 style={{ marginBottom: "30px" }}>Resume</h1>

      <p style={{ marginBottom: "20px" }}>
        Download my resume below:
      </p>

      <a
        href="/resume.pdf"
        target="_blank"
        style={{
          background: "#2563eb",
          color: "white",
          padding: "12px 20px",
          borderRadius: "8px",
          textDecoration: "none",
          fontWeight: "bold",
        }}
      >
        Download Resume (PDF)
      </a>
    </div>
  )
}
