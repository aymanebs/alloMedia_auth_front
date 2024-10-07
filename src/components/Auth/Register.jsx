import { useState } from "react";
import Button from "../Ui/Button";
import AuthLayout from "../Ui/AuthLayout";
import errorIcon from "../../assets/imgs/icon-error.svg"
import { postRequest } from "../../services/requestsService";
function Register(){
    const [formData,setFormData] =useState({
        name:"",
        email:"",
        password:"",
        confirm_password:"",
        address:"",
        phone:""
    });
    
    const[errors,setErrors] =useState({});

    //Handling form change
    function handleChange(e){
        setFormData({...formData,[e.target.name]: e.target.value});
    }

    // Handling form submit
    async function handleSubmit(event){
        const Url = "register";
        event.preventDefault();
        if(formValidation()){
            const data = await postRequest(Url,formData);
            console.log("register success",data);       
        }   
    }

    // validation function
    function formValidation(){ 
        const newErrors ={};
        const passwordRegex = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/;
        for( const key in formData){
            const value = formData[key].trim();
            console.log("key",key);
            if(value === ""){
                 newErrors[key] = `${key}  is required`;     
            }
            if(key === "name" && value.length < 3){
                newErrors.name = "The name is too short, min:3 characters";
            }
            if(key === "name" && value.length > 30){
                newErrors.name = "The name is too long, max:30 characters"
            }
            if(key === "email" && !value.includes("@")){
                newErrors.email = "The email address should contain an '@' symbol";
            }
            if(key === "password" && !passwordRegex.test(value)){
                newErrors.password = "Password must contain one digit, one lowercase letter, one uppercase letter, one special character, and it must be 8-16 long."
            }
            if(key === "confirm_password" && value != formData.password){
                newErrors.confirm_password = "Passwords do not match";
            }
            if(key === "address" && value.length <3){
                newErrors.address =" Address too short must contain at least 3 characters"
            }
             if(key === "phone" && value.length != 10){
                newErrors.phone = "Phone format not correct.";
            }
            if(key === "address" && value.length >50){
                newErrors.address = " Address too long must not exceed 50 characters";
            }
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    }
    return(
        
        <AuthLayout 
        Form = {
        
        <form id="form" onSubmit={handleSubmit}>
          <div>
            <input type="text" name="name" className={`first_name ${errors.name ? "invalid":""}`}  placeholder="Name" id="name" value={formData.name} onChange={handleChange}></input>
            {errors.name ?
            <span><img src={errorIcon} alt="error" className="error-icon"/></span> : null
            }
            <span className="error">{errors.name}</span>
          </div>
         <div>
            <input type="text" name="email" className={`email ${errors.email ? "invalid" : ""}`} placeholder="Email Address" id="email" value={formData.email} onChange={handleChange}></input>
            {errors.email ?
            <span><img src={errorIcon} alt="error" className="error-icon"/></span> : null
            }
            <span className="error">{errors.email}</span>
          </div>
          <div>
            <input type="password" name="password" className={`password ${errors.password ? "invalid" : ""}`} placeholder="Password" id="pass" value={formData.password} onChange={handleChange}></input>
            {errors.password ?
            <span><img src={errorIcon} alt="error" className="error-icon"/></span> : null
            }
            <span className="error">{errors.password}</span>
          </div>
          <div>
            <input type="password" name="confirm_password" className={`confirm_password ${errors.confirm_password ? "invalid" : ""}`} placeholder="Confirm password" id="confass" value={formData.confirm_password} onChange={handleChange}></input>
            {errors.confirm_password ?
            <span><img src={errorIcon} alt="error" className="error-icon"/></span> : null
            }
            <span className="error">{errors.confirm_password}</span>
          </div>
          <div>
            <input type="text" name="phone" className={`phone ${errors.phone ? "invalid" : "" }`} placeholder="Phone number" id="phone" value={formData.phone} onChange={handleChange}></input>
            {errors.phone ?
            <span><img src={errorIcon} alt="error" className="error-icon"/></span> : null
            }
            <span className="error">{errors.phone}</span>
          </div>
          <div>
            <input type="text" name="address" className={`address ${errors.address ? "invalid" : "" }`} placeholder="Address" id="address" value={formData.address} onChange={handleChange}></input>
            {errors.address ?
            <span><img src={errorIcon} alt="error" className="error-icon"/></span> : null
            }
            <span className="error">{errors.address}</span>
          </div>
          <Button Label="Register"/>
          <p>By clicking the button, you are agreeing to our <span>Terms and Services</span></p>
        </form>
        }
        />
      
    )
}
export default Register;