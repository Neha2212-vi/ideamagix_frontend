import { Outlet } from "react-router-dom";
import "./home.css";
import Navbar from "./navbar";
const AdminDashboard = () => {
  return (
    <>
      <Navbar />
      <Outlet/>
    </>
  );
};
export default AdminDashboard;
