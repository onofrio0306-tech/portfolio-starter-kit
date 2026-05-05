export default function Certifications() {
  return (
   <div style={{ padding: "40px", maxWidth: "1000px", margin: "0 auto" }}>
      <h1 style={{ marginBottom: "30px", textAlign: "center" }}>
  Certifications
</h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "30px",
        }}
      >

        <div style={{ background: "#111", padding: "15px", borderRadius: "10px" }}>
          <h3>CAE2Y Cybersecurity – WCTC (2026)</h3>
          <img
            src="/certs/cae2y.png"
            style={{
              width: "100%",
              borderRadius: "8px",
              maxHeight: "250px",
              objectFit: "cover",
            }}
          />
        </div>

        <div style={{ background: "#111", padding: "15px", borderRadius: "10px" }}>
          <h3>IT Security Administrator – WCTC (2025)</h3>
          <img
            src="/certs/admin.png"
            style={{
              width: "100%",
              borderRadius: "8px",
              maxHeight: "250px",
              objectFit: "cover",
            }}
          />
        </div>

        <div style={{ background: "#111", padding: "15px", borderRadius: "10px" }}>
          <h3>IT Security Manager – WCTC (2025)</h3>
          <img
            src="/certs/manager.png"
            style={{
              width: "100%",
              borderRadius: "8px",
              maxHeight: "250px",
              objectFit: "cover",
            }}
          />
        </div>

        <div style={{ background: "#111", padding: "15px", borderRadius: "10px" }}>
          <h3>Google Cybersecurity Certificate (2025)</h3>
          <img
            src="/certs/google.png"
            style={{
              width: "100%",
              borderRadius: "8px",
              maxHeight: "250px",
              objectFit: "cover",
            }}
          />
        </div>

      </div>
    </div>
  )
}
