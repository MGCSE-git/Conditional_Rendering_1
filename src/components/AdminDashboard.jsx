import btnStyle from '../css/style.module.css';
function AdminDashboard({ user }) {
  return (
    <div>
      <h2>Admin Panel</h2>
      <p>Welcome, {user.name}. Manage users and system settings.</p>
      <button className={btnStyle.btn}>Manage Users</button>
      <button className={btnStyle.btn}>System Settings</button>
    </div>
  );
}
export default AdminDashboard;