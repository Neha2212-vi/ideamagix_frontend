import { NavLink } from "react-router-dom";
const Navbar = () => {
  const handleClick = () => {
    localStorage.removeItem("token");
    window.location.reload();
    window.location = "/";
  };
  return (
    <>
      <ul className="header">
        <NavLink to="/admin_dashboard/allinstructor" className="list_item">
          <li>Instructors </li>
        </NavLink>

        <NavLink to="/admin_dashboard/addcourse">
          <li>Add courses</li>
        </NavLink>

        <li onClick={handleClick}>Logout</li>
      </ul>
      ;
    </>
  );
};
export default Navbar;
