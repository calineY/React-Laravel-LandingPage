import { Outlet } from "react-router-dom";
import Register from "../pages/Register";

const useAuth=()=>{
    const id=localStorage.getItem('id');
    if (id===null){
        return false;
    }
    return true;
}

const ProtectedDashboard = () => {
    const isAuth=useAuth();
  return (
    isAuth? <Outlet/>:<Register/>
  )
}

export default ProtectedDashboard