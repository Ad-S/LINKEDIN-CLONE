const Validator = require("validator");
const isEmpty = require("is-empty");

module.exports = function validateRegisterInput(data) {
    let errors = {};
    //console.log(data);
    data.name = !isEmpty(data.name) ? data.name : "";
    data.email = !isEmpty(data.email) ? data.email : "";
    data.password = !isEmpty(data.password) ? data.password : "";
    data.password2 = !isEmpty(data.password2) ? data.password2 : "";
    data.Type = !isEmpty(data.Type) ? data.Type : "";

    //console.log(data);

    ///
    if (Validator.isEmpty(data.name)) {
        errors.name = "Name is required";
    }

    ///
    if (Validator.isEmpty(data.email)) {
        errors.email = "Email is required";
    } 
    else if (!Validator.isEmail(data.email)) {
        errors.email = "Invalid email";
    }

    ///
    if (Validator.isEmpty(data.password)) {
        errors.password = "Password is required";
        //console.log(data.password);
    }
    //console.log(data.password);

    ///
    if (Validator.isEmpty(data.password2)) {
        errors.password2 = "Confirm your password";
        //console.log(data.password2); 
    }

    ///
    if(!Validator.isLength(data.password, {min: 6, max: 30})) {
        errors.password2 = "Password should be of atleast length 6";
    }

    ///
    if(!Validator.equals(data.password, data.password2)) {
        errors.password2 = "Password must match";
    }

    if (Validator.isEmpty(data.Type)) {
        errors.Type = "Type is required";
        //console.log(data.password);
    }

    ///HOW TO CHECK THE PASSWORD IS CORRECT

    return {
        errors,
        isValid: isEmpty(errors)
    };

};
    


