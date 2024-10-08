import { Route, Routes } from "react-router-dom";
import Register from "../components/Auth/Register";
import Login from "../components/Auth/Login";


function AppRouter(){
  return(
     <Routes>
          <Route path="/register" element={<Register/>} />
          <Route path="/login" element={<Login/>} />
     </Routes>
  );
}

export default AppRouter;
