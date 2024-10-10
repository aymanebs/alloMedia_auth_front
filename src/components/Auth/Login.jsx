import { useForm } from "react-hook-form";
import AuthLayout from "../Ui/AuthLayout";
import Button from "../Ui/Button";
import errorIcon from "../../assets/imgs/icon-error.svg";
import { postRequest } from "../../services/requestsService";
import { Link } from "react-router-dom";

export default function Login(){

    const {register,handleSubmit,formState:{errors}} = useForm();

    const Url = "login";
    
    const onFormSubmit = async (data) => {
        try{
            await postRequest(Url,data);
        }
        catch(error){
            console.error(error);
        }
    }
    const onErrors = errors => console.error(errors);


    return(
        <AuthLayout
        
        Form={
            <form id="form" onSubmit={handleSubmit(onFormSubmit,onErrors)}>


            <div>
                <input type="text"  {...register("email",{required:"Email is required",pattern: { value: /\S+@\S+\.\S+/,message: "Entered value does not match email format",}})} className={`email ${errors?.email && "invalid"}`} placeholder="Email Address" id="email"  ></input>
                {errors?.email &&
                    <span><img src={errorIcon} alt="error" className="error-icon"/></span>
                }
                <span className="error">{errors?.email && errors.email.message}</span>
            </div>

            <div>
                <input type="password"  {...register("password",{required:"Password is required",type:"password"})} className={`password ${errors?.password && "invalid"}`}  placeholder="Password" id="password" ></input>
                {errors?.password &&
                    <span><img src={errorIcon} alt="error" className="error-icon"/></span>
                }
                <span className="error">{errors?.password && errors.password.message}</span>     
             </div>

             <div className="form-options">
                        <label className="remember-me">
                            <input  type="checkbox" />
                            Remember me
                        </label>
                        <Link to="/resetPassword" className="forgot-password">Forgot password?</Link>
            </div>

            <Button/>

            </form>
        }
        
        />
    )
}