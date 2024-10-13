import { useState } from "react";
import AuthLayout from "../Ui/AuthLayout";
import Button from "../Ui/Button";
import { postRequest } from "../../services/requestsService";
import { Navigate } from "react-router-dom";
import errorIcon from "../../assets/imgs/icon-error.svg"


function Otp(){

    const[formData,setformData]=useState({otp:""});
    const[next,setNext] =useState(false);
    const[error,setError] =useState(false);

    function handleChange(event){
        setformData({...formData,otp:event.target.value});
    }

    async function handleSubmit(event){
        const Url="resetPassword/verifyOtp"
        event.preventDefault();

        if(validateOtp()){  
             try{
            const response = await postRequest(Url,formData);
            const data = response.data;
            response.status===400 && setError(true);
            response.status===200 && setNext(true);
            }
            catch(error){
            console.error(error);
            }
        }
    }

    function validateOtp(){
        setError(true);
        return /^\d{6}$/.test(formData.otp);      
    }

    return(
        <>
        {next && <Navigate to="updatePassword" replace={true}></Navigate>}
        <AuthLayout
        Title={"Enter Otp"}
        Form={
            <form id="form" onSubmit={handleSubmit}>
            <div>
                <input type="text" name="otp"   placeholder="Otp" id="otp" className="otp" value={formData.otp} onChange={handleChange}></input>
                {error &&
                <>
                <span><img src={errorIcon} alt="error" className="error-icon"/></span> 
                <span className="error">Invalid or expired OTP</span>
                </>
                }
            </div>
            <Button/>
        </form>

        }
        
        />
        </>
    )
}

export default Otp;