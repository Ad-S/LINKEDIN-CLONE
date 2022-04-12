const Validator = require("validator");
const isEmpty = require("is-empty");

module.exports = function validateRegisterInput(data) {
    let errors = {};
    
    data.title = !isEmpty(data.title) ? data.title : "";
    data.name = !isEmpty(data.name) ? data.name : "";
    data.email = !isEmpty(data.email) ? data.email : "";
    data.max_applications = !isEmpty(data.max_applications) ? data.max_applications.toString() : "";
    data.max_positions = !isEmpty(data.max_positions) ? data.max_positions.toString()   : "";
    data.posting_day = !isEmpty(data.posting_day) ? data.posting_day.toString() : "";
    data.posting_month = !isEmpty(data.posting_month) ? data.posting_month.toString() : "";
    data.posting_year = !isEmpty(data.posting_year) ? data.posting_year.toString() : "";
    data.Deadline_day = !isEmpty(data.Deadline_day) ? data.Deadline_day.toString() : "";
    data.Deadline_month = !isEmpty(data.Deadline_month) ? data.Deadline_month.toString() : "";
    data.Deadline_year = !isEmpty(data.Deadline_year) ? data.Deadline_year.toString() : "";
    data.Deadline_hour = !isEmpty(data.Deadline_hour) ? data.Deadline_hour.toString() : "";
    data.Deadline_minute = !isEmpty(data.Deadline_minute) ? data.Deadline_minute.toString() : "";
    data.Required_skillset = !isEmpty(data.Required_skillset) ? data.Required_skillset : "";
    data.Type_of_job = !isEmpty(data.Type_of_job) ? data.Type_of_job : "";
    data.Duration = !isEmpty(data.Duration) ? data.Duration.toString() : "";
    data.Salary_per_month = !isEmpty(data.Salary_per_month) ? data.Salary_per_month.toString() : "";
    // data.rating = !isEmpty(data.rating) ? data.rating.toString() : "";

    console.log(data);

    if (Validator.isEmpty(data.title)) {
        errors.title = "title is required";
    }
    if (Validator.isEmpty(data.name)) {
        errors.name = "Name is required";
    }
    if (Validator.isEmpty(data.email)) {
        errors.email = "Email is required";
    } 
    else if (!Validator.isEmail(data.email)) {
        errors.email = "Invalid email";
    }
    console.log("aaditya")
    if (Validator.isEmpty(data.max_applications)) {
        errors.max_applications = "Number of max applications is required";
    }
    console.log("kartik")
    if (Validator.isEmpty(data.max_positions)) {
        errors.max_positions = "Number of max positions is required";
    }
    console.log("protans");

    if (Validator.isEmpty(data.posting_day)) {
        errors.posting_day = "Day is required";
    }
    else if (data.posting_day > 31) {
        errors.posting_day = "Day should be less than 31";
    }

    if (Validator.isEmpty(data.posting_month)) {
        errors.posting_month = "Month is required";
    }
    else if (data.posting_month > 12) {
        errors.posting_month = "Month should be less than 12";
    }
    if (Validator.isEmpty(data.posting_year)) {
        errors.posting_year = "year is required";
    }

    if (Validator.isEmpty(data.Deadline_day)) {
        errors.Deadline_day = "Deadline Day is required";
    }
    else if (data.Deadline_day > 31) {
        errors.Deadline_day = "deadline Day should be less than 31";
    }

    if (Validator.isEmpty(data.Deadline_month)) {
        errors.Deadline_month = "Deadline month is required";
    }
    else if (data.Deadline_month > 12) {
        errors.Deadline_month = "deadline month should be less than 12";
    }

    if (Validator.isEmpty(data.Deadline_hour)) {
        errors.Deadline_hour = "Deadline hour is required";
    }
    else if (data.Deadline_hour > 24) {
        errors.Deadline_hour = "deadline hour should be less than 24";
    }

    if (Validator.isEmpty(data.Deadline_minute)) {
        errors.Deadline_minute = "Deadline minute is required";
    }
    else if (data.Deadline_minute > 60) {
        errors.Deadline_minute = "deadline minute should be less than 60";
    }

    if (Validator.isEmpty(data.Required_skillset)) {
        errors.Required_skillset = "Required_skillset is required";
    }

    if (Validator.isEmpty(data.Type_of_job)) {
        errors.Type_of_job = "Type_of_job is required";
    }

    if (Validator.isEmpty(data.Duration)) {
        errors.Duration = "Duration is required";
    }
    else if (data.Duration > 6 ) {
        errors.Duration = "Duration should be less than 6";
    }
    else if (data.Duration < 0 ) {
        errors.Duration = "Duration should be greater than 0";
    }

    if (Validator.isEmpty(data.Salary_per_month)) {
        errors.Salary_per_month = "Duration is required";
    }

    // if (Validator.isEmpty(data.rating)) {
    //     errors.rating = "rating is required";
    // }
    // else if (data.rating < 0 ) {
    //     errors.rating = "rating should be greater than 0";
    // }
    // else if (data.rating > 6 ) {
    //     errors.rating = "Rating should be less than 0";
    // }

    return {
        errors,
        isValid: isEmpty(errors)
    };
};