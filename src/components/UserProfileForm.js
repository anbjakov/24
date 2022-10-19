import {useForm} from "react-hook-form";

const UserProfileForm = ()=> {
    const {register,
        handleSubmit,
        formState: {errors}
        } = useForm()
    const onSubmit =(data)=>{
        console.log(data)
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)} noValidate className="container needs-validation text-center border border-primary">
            <div className="bg-dark text-white mt-1">
                <h1>USER FORM</h1>
            </div>
            <div className="row gap-1">
                <div className="input-group">
                    <span className="input-group-text w-25">
                         {
                             errors.fName && <div><i className="bi bi-exclamation-octagon-fill text-danger"> </i></div>
                         }
                       First Name
                    </span>
                    <input {...register("fName", {
                        required: "First name is required",
                        minLength:{
                            value:3,
                            message:"First name length expected more than 3",
                        },}
                        ) } type="text" className="form-control" />
                </div>
                {
                    errors.fName && <div style={{color:"red"}}>
                        {errors.fName.message}
                    </div>
                }
                <div className="input-group">
                    <span className="input-group-text w-25">
                        {
                            errors.lName && <div><i className="bi bi-exclamation-octagon-fill text-danger"> </i></div>
                        }
                        Last name
                    </span>
                    <input {...register("lName", {
                        required: "Second name is required",
                        minLength:{
                            value:3,
                            message:"Second name length expected more than 3",
                        },})} type="text" className="form-control" />
                </div>
                {
                    errors.lName && <div style={{color:"red"}}>
                        {errors.lName.message}
                    </div>
                }
                <div className="input-group">
                    <span className="input-group-text w-25">
                        {errors.country && <div><i className="bi bi-exclamation-octagon-fill text-danger"> </i></div> }
                        Country
                    </span>
                    <select {...register("country", {required: "select country"})} className="form-select text-center"
                            aria-label="Default select example">
                        <option value=''>Select country </option>
                        <option value="ua">Ukraine</option>
                        <option value="pl">Poland</option>
                        <option value="ge">Germany</option>
                    </select>
                </div>

            </div>
            {errors.country && <div style={{color:"red"}}>
                {errors.country.message}
            </div>}
            <button type="submit" className="btn btn-primary mt-1 mb-1">Sign in</button>
        </form>
    )
}

export default UserProfileForm