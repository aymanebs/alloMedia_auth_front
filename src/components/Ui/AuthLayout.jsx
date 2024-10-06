import "../../assets/css/authStyle.css"

function AuthLayout({Form}){

    return(
        
        <div className="wrapper">
        <section className="left">
          <h1>AlloMedia  un service de livraison à domicile</h1>
          <p> Rejoigner message</p>
        </section>
        <section className="right">
          <h2 className="heading">
            <span>Try it free 7 </span> then $20/mo. thereafter
          </h2>
          <div className="form-group">
            {Form}
          </div>
        </section>
      </div>
      
    )
}

export default AuthLayout;