import { useForm } from "react-hook-form";
import AuthLayout from "../Ui/AuthLayout";
import errorIcon from "../../assets/imgs/icon-error.svg";
import Button from "../Ui/Button";
import { postRequest } from "../../services/requestsService";
import { Navigate } from "react-router-dom";
import { useState } from "react";


function ResetPassword(){

    const {register, handleSubmit,formState:{errors}} =useForm();
    const [toNext,setToNext] = useState(false);

    

    const onSubmit = async(data) =>{
        const Url = "resetPassword";

        try{
             const  response = await postRequest(Url,data);
             response.status === 200 && setToNext(true);
           
        }
        catch(error){
            console.error(error);
        }
    }
    const onErrors = errors => console.error(errors);

    return(
        <>
        {/* Redirection to otp page after submit */}
        
        {toNext && <Navigate to="verifyOtp" replace={true}></Navigate>}

        {/* Email form  */}

        <AuthLayout Title = {"Forgot Password"}
            Form ={
                <form id="form" onSubmit={handleSubmit(onSubmit, onErrors)} >
                    <div>
                        <input type="text" name="email" {...register('email',{required: "email is required",pattern: { value: /\S+@\S+\.\S+/,message: "Entered value does not match email format",}})}  placeholder="Email Address" id="email" className={`email ${errors?.email && "invalid"}`}></input>
                        {errors?.email &&
                            <span><img src={errorIcon} alt="error" className="error-icon"/></span>
                        }
                        <span className="error">{errors?.email && errors.email.message}</span>
                    </div>
                    <Button/>
                </form>
            }
        />
        </>
    )
}

export default ResetPassword;