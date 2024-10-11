import AppRouter from "./AppRouter";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App(){
  const notify = () => toast("Wow so easy !");
  return(
      <>
          <AppRouter/> 
          <div>
          <button onClick={notify}>Notify !</button>
          <ToastContainer />
        </div>
      </>
  );
}

export default App
