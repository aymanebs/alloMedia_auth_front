import { Route, Routes } from "react-router-dom";
import Register from "../components/Auth/Register";
import Login from "../components/Auth/Login";
import ResetPassword from "../components/Auth/ResetPassword";
import Otp from "../components/Auth/Otp";


function AppRouter(){
  return(
     <Routes>
          <Route path="/register" element={<Register/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/resetPassword" element={<ResetPassword/>} />
          <Route path="/resetPassword/verifyOtp" element={<Otp/>} />
     </Routes>
  );
}

export default AppRouter;
