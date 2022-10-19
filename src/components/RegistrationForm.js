import {useState} from 'react'
import emailValidation from "../emailValidation";
import passwordValidation from "../passwordValidation";
const RegistrationForm =()=>{

    const [email,setEmail] = useState("" );

    const [password,setPassword] = useState("");

    const [passwordConfirm, setPasswordConfirm] = useState("");

    const [isError, setError] = useState({
        email: false,
        password: false,
        passConfirm: false
    })
    const handleSubmit= (event)=>{
        event.preventDefault();

        setError({
            ...isError,
            email: !emailValidation(email),
            password: !passwordValidation(password),
            passConfirm:  !( passwordValidation(passwordConfirm) && passwordConfirm === password)
        })

    }
    const handleEmailChange = ({target: {value}})=>{
        const emailAddress  = value.trim().toLowerCase();

        setEmail(emailAddress);

        setError({
              ...isError,
              email: false
          })
    }
    const handlePasswordChange = ({target:{value}}) =>{
        setPassword(value.trim());
        setError({
            ...isError,
            password: false
        })
    }
    const handlePasswordConfirmChange = ({target:{value}}) => {
        setPasswordConfirm(value.trim());
    }


 return (
     <form onSubmit={handleSubmit} noValidate className="container text-center border border-primary">
         <div className="bg-dark text-white mt-1">
         <h1>REGISTRATION FORM</h1>
         </div>
         <div className="row gap-1">
             <div className="input-group">
                 <span className="input-group-text w-25" >
                     {
                         isError.email?
                             <i className="bi bi-exclamation-octagon-fill text-danger"> Not valid email</i> :
                             "Enter email"
                     }

                 </span>
                 <input onChange={handleEmailChange} value={email} className="form-control" type="text"/>

             </div>
             {
                 isError.email&& <div style={{color:"red"}}>
                     Expected @, domain name, example: user@domain.com
                 </div>

             }
             <div className="input-group">
                 <span className="input-group-text w-25">
                     {
                         isError.password ?
                             <i className="bi bi-exclamation-octagon-fill text-danger"> Not valid pass</i> :
                             "Password"
                     }
                 </span>
                 <input onChange={handlePasswordChange} value={password} type="password" className="form-control" />
             </div>
             {
                 isError.password &&  <div style={{color:"red"}}>
                     Password length expected not less 3
                 </div>
             }
             <div className="input-group">
                 <span className="input-group-text w-25">
                     {
                         isError.passConfirm?
                             <i className="bi bi-exclamation-octagon-fill text-danger">Not valid</i> :
                             "Confirm password"
                     }
                 </span>
                 <input onChange={handlePasswordConfirmChange} value={passwordConfirm} type="password" className="form-control" />
             </div>
             {
                 isError.passConfirm &&  <div style={{color:"red"}}>
                     length expected not less 3 and match password
                 </div>
             }
         </div>
         <button type="submit" className="btn btn-primary mt-1 mb-1">Sign in</button>
     </form>
 )
}

export default RegistrationForm