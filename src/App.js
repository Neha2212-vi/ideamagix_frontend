import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AdminLogin from "./admin_panel/login/login";
import SignUp from "./admin_panel/signup/signup";
import AdminDashboard from "./admin_panel/dashboard/home";
import InstructorDashboard from "./instructor_panel/instructor_dashboard/instructor_home";
import AllInstructor from "./instructor_panel/all_instructor";
import AddCourse from "./admin_panel/dashboard/add_course";
function App() {
  const token = localStorage.getItem("token");
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/" element={<AdminLogin />} />
          {token && (
            <Route path="/admin_dashboard" element={<AdminDashboard />}>
              <Route path="allinstructor" element={<AllInstructor />} />
              <Route path="addcourse" element={<AddCourse />} />
            </Route>
          )}
          {token && (
            <Route
              path="/instructor_dashboard"
              element={<InstructorDashboard />}
            />
          )}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
