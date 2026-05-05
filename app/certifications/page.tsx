export default function Certifications() {
  return (
    <div style={{ padding: "40px", textAlign: "center" }}>
      <h1>Certifications</h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "20px",
          marginTop: "30px",
        }}
      >
        <div>
          <h3>CAE2Y Cybersecurity – WCTC (2026)</h3>
          <img src="/certs/cae2y.png" alt="CAE2Y Cybersecurity" style={{ width: "100%" }} />
        </div>

        <div>
          <h3>IT Security Administrator – WCTC (2025)</h3>
          <img src="/certs/admin.png" alt="IT Security Administrator" style={{ width: "100%" }} />
        </div>

        <div>
          <h3>IT Security Manager – WCTC (2025)</h3>
          <img src="/certs/manager.png" alt="IT Security Manager" style={{ width: "100%" }} />
        </div>

        <div>
          <h3>Google Cybersecurity Certificate (2025)</h3>
          <img src="/certs/google.png" alt="Google Cybersecurity Certificate" style={{ width: "100%" }} />
        </div>
      </div>
    </div>
  );
}
