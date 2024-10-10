import "../../assets/css/emailVerificationStyle.css"
import { CheckCircle, XCircle } from 'lucide-react';
import { useEffect, useState } from "react";
import { Navigate, replace, useNavigate, useSearchParams } from 'react-router-dom';


function EmailVerification(){

    const [searchParams, setSearchParams] = useSearchParams();
    const [isVerified,setIsVerified] = useState(false);
    const navigate = useNavigate();

    useEffect(()=>{
        checkVerification()
    },[searchParams]);


    function checkVerification(){
        if(searchParams.get("isVerified") ==="true") setIsVerified(true);
        if(searchParams.get("isVerified") ==="false") setIsVerified(false);
    }

    const clickHandler = () => navigate("/login",{replace:true});

    return(

    <div className="email-verified-container">
        {
            isVerified ?
            (<CheckCircle className="check-icon" />)
            : 
            (<XCircle className="icon expired" />)
        }
      
      <h2 className="title">{ isVerified ? "Email Verified" : "Email Verification Expired"}</h2>
      <p className="message">
        {
            isVerified ? "Your email was verified successfully. You can now access all features of your account."
                        : "Your email verification link has expired. Please request a new verification email."
        }  
      </p>
      {
        !isVerified &&
        (<button className="resend-button" >Resend Email</button>)
      }
      {
        isVerified ?
        (<button className="resend-button" onClick={clickHandler} >Login</button>)
        :(<button className="resend-button" >Resend Email</button>)
      }
    </div>

    )
}

export default EmailVerification;