import { useState } from "react";
import AuthLayout from "../Ui/AuthLayout";
import Button from "../Ui/Button";
import { postRequest } from "../../services/requestsService";


function Otp(){

    const[formData,setformData]=useState({otp:""});

    function handleChange(event){
        setformData({...formData,otp:event.target.value});
    }

    async function handleSubmit(event){
        const Url="resetPassword/verifyOtp"
        event.preventDefault();
        try{
            const data = await postRequest(Url,formData);
            console.log("otp verified succesfully: ",data);
        }
        catch(error){
            console.error(error);
        }
    }

    return(
        <AuthLayout
        Title={"Enter Otp"}
        Form={
            <form id="form" onSubmit={handleSubmit}>
            <div>
                <input type="text" name="otp"   placeholder="Otp" id="otp" className="otp" value={formData.otp} onChange={handleChange}></input>
            </div>
            <Button/>
        </form>

        }
        
        />
    )
}

export default Otp;