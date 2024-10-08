import { useForm } from "react-hook-form";
import AuthLayout from "../Ui/AuthLayout";
import errorIcon from "../../assets/imgs/icon-error.svg";
import Button from "../Ui/Button";


function ResetPassword(){

    const {register, handleSubmit,formState:{errors}} =useForm();

    return(
        <AuthLayout Title = {" Forgot Password"}
            Form ={
                <form id="form">
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
    )
}

export default ResetPassword;