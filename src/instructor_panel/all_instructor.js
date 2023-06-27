import "./instructor_dashboard/instructor_home.css"
import { useState,useEffect} from "react";
import axios from "axios";
const AllInstructor = ()=>{
    const [instructors, setInstructors] = useState([])
    // const handleClick = () => {
    //   localStorage.removeItem("token");
    //   window.location.reload();
    //   window.location = "/";
    // };
    useEffect(()=>{
      const allInstructor = async ()=>{
          const res = await axios.get("https://ideamagix-backend-1gwu.onrender.com/all_instructor")
          setInstructors(res.data)
      }
      allInstructor();
    },[])
    // console.log(instructors);
    return(
      <div className="card">{instructors.map((ele)=>(
        <div key={ele._id} className="card_wrapper">
          <span className="card_item">{ele.full_name}</span>
          <span className="card_item">{ele.email}</span>
        </div>
      ))}</div>
    )
}
export default AllInstructor;