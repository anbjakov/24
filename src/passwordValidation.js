const passwordValidation = (password)=>{
    return password.trim().length>=3 && password.trim()!= ""
}

export default passwordValidation;