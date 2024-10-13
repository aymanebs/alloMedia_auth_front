import "../../assets/css/authStyle.css"

function AuthLayout({Form,Title="Join our community"}){

    return(
        <div className="auth-layout-wrapper">
        <div className="wrapper">
        <section className="left">
          <h1>AlloMedia</h1>
          <p> Rejoigner message</p>
        </section>
        <section className="right">
          <h2 className="heading">
            <span>{Title}</span>
          </h2>
          <div className="form-group">
            {Form}
          </div>
        </section>
      </div>
      </div>
      
    )
}

export default AuthLayout;