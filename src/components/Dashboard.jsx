import React, { useState } from "react";
import RoleBasedDashboard from "./RoleBasedDashboard";
export default function Dashboard() {
  const [user, setUser] = useState(null);
  //const { theme } = useContext(ThemeContext);
  

  const buttonStyle = {
    padding: "10px 12px",
    borderRadius: 10,
    background: "#0723db",
    color: "#fff",
    textAlign: "center" ,
    border: "none",
    cursor: "pointer",
    fontWeight: 600,
  };

  return (
    <div style={{ padding: 20, fontFamily: "system-ui, Arial" }}>
      <h1>Role-Based Conditional Rendering</h1>

      {/* Role selector (simulates login) */}
      <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginBottom: 16 }}>
        <button
          style={buttonStyle}
          onClick={() => setUser({ name: "Geetha", role: "student" })}
        >
          Login as Student
        </button>

        <button
          style={buttonStyle}
          onClick={() => setUser({ name: "Geetha", role: "teacher" })}
        >
          Login as Teacher
        </button>

        <button
          style={buttonStyle}
          onClick={() => setUser({ name: "Geetha", role: "admin" })}
        >
          Login as Admin
        </button>

        <button style={buttonStyle} onClick={() => setUser({ name: "Geetha", role: "guest" })}>
          Login as Guest (invalid role)
        </button>

        <button style={buttonStyle} onClick={() => setUser(null)}>
          Logout
        </button>
      </div>

      <hr />

      {/* Conditional rendering happens here */}
      <RoleBasedDashboard user={user} />
    </div>
  );
}
