import { Outlet } from "react-router-dom";
import Register from "../pages/Register";

//function to check if user is logged in
const useAuth=()=>{
    const id=localStorage.getItem('id');
    if (id===null){
        return false;
    }
    return true;
}

//if authorized show the protected route else redirect to registration page
const ProtectedDashboard = () => {
    const isAuth=useAuth();
  return (
    isAuth? <Outlet/>:<Register/>
  )
}

export default ProtectedDashboard