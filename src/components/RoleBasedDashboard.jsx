//import React, { useState } from "react";
import StudentDashboard from "./StudentDashboard";
import TeacherDashboard from "./FacultyDashboard";
import AdminDashboard from "./AdminDashboard";
import AccessDenied from "./AccessDenied";
import Login from "./Login";
function RoleBasedDashboard({ user }) {
  // 1) Not logged in
  if (!user) return <Login />;

  // 2) Logged in, choose component by role
  switch (user.role) {
    case "student":
      return <StudentDashboard user={user} />;
    case "teacher":
      return <TeacherDashboard user={user} />;
    case "admin":
      return <AdminDashboard user={user} />;
    default:
      return <AccessDenied />;
  }
}
export default RoleBasedDashboard;