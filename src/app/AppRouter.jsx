import { Route, Routes } from "react-router-dom";
import Register from "../components/Auth/Register";
import Login from "../components/Auth/Login";
import ResetPassword from "../components/Auth/ResetPassword";
import Otp from "../components/Auth/Otp";
import UpdatePassword from "../components/Auth/UpdatePassword";
import EmailVerification from "../components/Auth/EmailVerification";


function AppRouter(){
  return(
     <Routes>

          <Route path="/register" element={<Register/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/resetPassword" element={<ResetPassword/>} />
          <Route path="/resetPassword/verifyOtp" element={<Otp/>} />
          <Route path="/resetPassword/verifyOtp/updatePassword" element={<UpdatePassword/>} />
          <Route path="/emailVerification" element={<EmailVerification/>}/>

          
    
     </Routes>
  );
}

export default AppRouter;
