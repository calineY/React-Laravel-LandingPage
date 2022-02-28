import { Outlet } from "react-router-dom";
import Login from "../pages/Login";

const useAuth=()=>{
    const id=localStorage.getItem('id');
    if (id===null){
        return false;
    }
    return true;
}

const ProtectedRoutes = () => {
    const isAuth=useAuth();
    return (
      isAuth? <Login/>:<Outlet/>
    )
}

export default ProtectedRoutes