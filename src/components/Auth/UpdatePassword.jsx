import { useForm } from "react-hook-form";
import AuthLayout from "../Ui/AuthLayout";
import Button from "../Ui/Button";
import { postRequest } from "../../services/requestsService";
import errorIcon from "../../assets/imgs/icon-error.svg";
import { useState } from "react";
import { Navigate } from "react-router-dom";


function UpdatePassword(){

    const {register,watch,handleSubmit,formState:{errors}} =useForm();
    const [next,setNext] = useState(false);

    const onFormSubmit = async (data) =>{
        const Url= "resetPassword//updatePassword";
        try{
            const response = await postRequest(Url,data);
            response.status ===200 && setNext(true);
        }
        catch(error){
            console.error(error);
        }
    }

    const onErrors = errors => console.error(errors); 

    return(
        <>
        {next && <Navigate to="/login" replace={true} ></Navigate>}
        <AuthLayout
            Title="Reset password"
            Form = { 
                <form id="form" onSubmit={handleSubmit(onFormSubmit,onErrors)}>
                    <div>
                    <input
                        {...register("newPassword", {
                            required: "Password is required",
                            pattern: {
                            value: /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/,
                            message: "Password must contain one digit, one lowercase letter, one uppercase letter, one special character, and must be 8-16 characters long.",
                            },
                        })}
                        type="password"
                        className="password"
                        placeholder="Password"
                    />
                    {
                        errors?.newPassword && <span><img src={errorIcon} alt="error" className="error-icon"/></span>        
                    }

                     <span className="error">{errors?.newPassword && errors.newPassword.message}</span>
                    </div>
                    <div>
                    <input
                        {...register("confirm_password", {
                            required: "Confirm password is required",
                            validate: (value) =>
                            value === watch("newPassword") || "Passwords do not match",
                        })}
                        type="password"
                        className="confirm_password"
                        placeholder="Confirm password"
                    />
                    {
                        errors?.confirm_password && <span><img src={errorIcon} alt="error" className="error-icon"/></span>
                    }
                    <span className="error">{errors?.confirm_password && errors.confirm_password.message}</span>
                    </div>
                    <Button/>
                </form>
             }
        />
        </>
    )
}

export default UpdatePassword;