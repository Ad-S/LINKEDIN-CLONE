const Validator = require("validator");
const isEmpty = require("is-empty");

module.exports = function validateRegisterInput(data) {

    let errors = {};
    data.name = !isEmpty(data.name) ? data.name : "";
    data.email = !isEmpty(data.email) ? data.email : "";
    data.contact_no = !isEmpty(data.contact_no) ? data.contact_no : "";
    data.bio = !isEmpty(data.bio) ? data.bio : "";

    if (Validator.isEmpty(data.name)) {
        errors.name = "name is required";
    }

    if (Validator.isEmpty(data.email)) {
        errors.email = "Email is required";
    } 
    else if (!Validator.isEmail(data.email)) {
        errors.email = "Invalid email";
    }

    if (Validator.isEmpty(data.contact_no)) {
        errors.contact_no = "contact number is required";
    }

    if (Validator.isEmpty(data.bio)) {
        errors.bio = "Bio is required";
    }

    return {
        errors,
        isValid: isEmpty(errors)
    };

}