import { Route, Routes } from "react-router-dom";
import Register from "../components/Auth/Register";
import Login from "../components/Auth/Login";
import ResetPassword from "../components/Auth/ResetPassword";


function AppRouter(){
  return(
     <Routes>
          <Route path="/register" element={<Register/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/resetPassword" element={<ResetPassword/>} />
     </Routes>
  );
}

export default AppRouter;
