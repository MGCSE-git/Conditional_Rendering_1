import styles from '../css/style.module.css';

function TeacherDashboard({ user }) {
  return (
    <div>
      <h2>Teacher Dashboard</h2>
      <p>Welcome, {user.name}. Create quizzes and track class progress.</p>
      <button className={styles.btn}>Create Quiz</button>
      <button className={styles.btn}>View Submissions</button>
    </div>
  );
}
export default TeacherDashboard;