const Validator = require("validator");
const isEmpty = require("is-empty");

module.exports = function validateRegisterInput(data) {
    let errors = {};

    data.name = !isEmpty(data.name) ? data.name : "";
    data.email = !isEmpty(data.email) ? data.email : "";
    data.Institute_name = !isEmpty(data.Institute_name) ? data.Institute_name : "";
    data.srt_year = !isEmpty(data.srt_year) ? data.srt_year : "";
    data.end_year = !isEmpty(data.end_year) ? data.end_year : "";
    data.Skills = !isEmpty(data.Skills) ? data.Skills : "";
    // data.Rating = !isEmpty(data.Rating) ? data.Rating : "";

    if (Validator.isEmpty(data.name)) {
        errors.name = "name is required";
    }
    if (Validator.isEmpty(data.email)) {
        errors.email = "Email is required";
    } 
    else if (!Validator.isEmail(data.email)) {
        errors.email = "Invalid email";
    }
    if (Validator.isEmpty(data.Institute_name)) {
        errors.Institute_name = "Institute name is required";
    }
    if (Validator.isEmpty(data.srt_year)) {
        errors.srt_year = "start year is required";
    }
    if (Validator.isEmpty(data.end_year)) {
        errors.end_year = "end year is required";
    }
    if (Validator.isEmpty(data.Skills)) {
        errors.Skills = "Skills is required";
    }
    // if (Validator.isEmpty(data.Rating)) {
    //     errors.Rating = "Rating is required";
    // }
    // else if (data.Rating < 0 ) {
    //     errors.Rating = "rating should be greater than 0";
    // }
    // else if (data.Rating > 6 ) {
    //     errors.Rating = "Rating should be less than 0";
    // }
    return {
        errors,
        isValid: isEmpty(errors)
    };
};