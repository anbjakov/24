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
                             errors.firstName && <div><i className="bi bi-exclamation-octagon-fill text-danger"> </i></div>
                         }
                       First Name
                    </span>
                    <input {...register("firstName", {
                        required: "First name is required",
                        minLength:{
                            value:3,
                            message:"First name length expected more than 3",
                        },}
                        ) } type="text" className="form-control" />
                </div>
                {
                    errors.firstName && <div className="danger">
                        {errors.firstName.message}
                    </div>
                }
                <div className="input-group">
                    <span className="input-group-text w-25">
                        {
                            errors.lastName && <div><i className="bi bi-exclamation-octagon-fill text-danger"> </i></div>
                        }
                        Last name
                    </span>
                    <input {...register("lastName", {
                        required: "Second name is required",
                        minLength:{
                            value:3,
                            message:"Second name length expected more than 3",
                        },})} type="text" className="form-control" />
                </div>
                {
                    errors.lastName && <div className="danger">
                        {errors.lastName.message}
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
            {errors.country && <div className="danger">
                {errors.country.message}
            </div>}
            <button type="submit" className="btn btn-primary mt-1 mb-1">Sign in</button>
        </form>
    )
}

export default UserProfileForm