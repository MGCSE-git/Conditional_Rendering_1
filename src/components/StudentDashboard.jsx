// --- Role-specific components ---
function StudentDashboard({ user }) {
  return (
    <div>
      <h2>Student Dashboard</h2>
      <p>Welcome, {user.name}. Here are your assignments and grades.</p>
      <ul>
        <li>Math: Algebra worksheet</li>
        <li>Science: Lab report</li>
      </ul>
    </div>
  );
}
export default StudentDashboard;