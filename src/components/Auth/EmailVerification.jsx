import AuthLayout from "../Ui/AuthLayout";
import iconVerified from "../../assets/imgs/icon-verified.svg";

function EmailVerification(){


    return(
        <AuthLayout
        Title="Email Verification"

        Form={
            <div className="email-verified-container">
            <img src={iconVerified}></img>
            <h2 className="title">Email Verified</h2>
            <p className="message">
              Your email was verified successfully. You can now access all features of your account.
            </p>
          </div>
        }

        
        />
    )
}

export default EmailVerification;