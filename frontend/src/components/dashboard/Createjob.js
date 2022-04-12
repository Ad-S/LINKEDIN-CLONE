import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createJob } from "../../actions/authActions";
import classnames from "classnames";
class Createjob extends Component {
  constructor() {
    super();
    this.state = {
      title: "",
      // name: "",
      max_applications: "",
      max_positions: "",
      // posting_day: "",
      // posting_month: "",
      // posting_year: "",
      Deadline_day: "",
      Deadline_month: "",
      Deadline_year: "",
      Deadline_hour: "",
      Deadline_minute: "",
      Required_skillset: "",
      Type_of_job: "",
      Duration: "",
      Salary_per_month: "",
      // rating: "",
      errors: {}
    };
  }
//   componentDidMount() {
//     // If logged in and user navigates to Register page, should redirect them to dashboard
//     if (this.props.auth.isAuthenticated) {
//       this.props.history.push("/dashboard");
//     }
//   }
  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push("/dashboard"); 
    }
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
  } 
  
  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };
  onSubmit = e => {
    e.preventDefault();
    console.log(this.state.Type_of_job);

    // const { user } = this.props.auth;
    var d = new Date();
    var x  = d.getMonth();
    x = x + 1;

    const newUser = {
        title: this.state.title,
        name: this.props.auth.user.name,
        email: this.props.auth.user.email,
        max_applications: this.state.max_applications,
        max_positions: this.state.max_positions,
        posting_day: d.getDate(),
        posting_month: x,
        posting_year: d.getFullYear(),
        Deadline_day: this.state.Deadline_day,
        Deadline_month: this.state.Deadline_month,
        Deadline_year: this.state.Deadline_year,
        Deadline_hour: this.state.Deadline_hour,
        Deadline_minute: this.state.Deadline_minute,
        Required_skillset: this.state.Required_skillset,
        Type_of_job: this.state.Type_of_job,
        Duration: this.state.Duration,
        Salary_per_month: this.state.Salary_per_month,
        // rating: this.state.rating
    };
    this.props.createJob(newUser, this.props.history);
    this.props.history.push("/dashboard"); 
    console.log(newUser);
  };

  render() {
    const { errors } = this.state;
    return (
      <div className="container">
        <div className="row">
          <div className="col s8 offset-s2">
            <Link to="/Dashboard" className="btn-flat waves-effect">
              <i className="material-icons left">keyboard_backspace</i> Back to
              home
            </Link>
            <div className="col s12" style={{ paddingLeft: "11.250px" }}>
              <h4>
                <b>Create job</b> below
              </h4>
            </div>
            <form noValidate onSubmit={this.onSubmit}>
              <div className="input-field col s12">
                <input
                  onChange={this.onChange}
                  value={this.state.title}
                  error={errors.title}
                  id="title"
                  type="text"
                  className={classnames("", {
                    invalid: errors.title
                  })}
                />
                <label htmlFor="name">Title</label>
                <span className="red-text">{errors.title}</span>
              </div>
              {/* <div className="input-field col s12">
                <input
                  onChange={this.onChange}
                  value={this.state.name}
                  error={errors.name}
                  id="name"
                  type="text"
                  className={classnames("", {
                    invalid: errors.name
                  })}
                />
                <label htmlFor="name">Name</label>
                <span className="red-text">{errors.name}</span>
              </div> */}
              <div className="input-field col s12">
                <input
                  onChange={this.onChange}
                  value={this.state.max_applications}
                  error={errors.max_applications}
                  id="max_applications"
                  type="number"
                  className={classnames("", {
                    invalid: errors.max_applications
                  })}
                />
                <label htmlFor="name">Maximum number of applications</label>
                <span className="red-text">{errors.max_applications}</span>
              </div>
              <div className="input-field col s12">
                <input
                  onChange={this.onChange}
                  value={this.state.max_positions}
                  error={errors.max_positions}
                  id="max_positions"
                  type="number"
                  className={classnames("", {
                    invalid: errors.max_positions
                  })}
                />
                <label htmlFor="name">Maximum number of positions</label>
                <span className="red-text">{errors.max_positions}</span>
              </div>
              {/* <div className="input-field col s12">
                <input
                  onChange={this.onChange}
                  value={this.state.posting_day}
                  error={errors.posting_day}
                  id="posting_day"
                  type="number"
                  className={classnames("", {
                    invalid: errors.posting_day
                  })}
                />
                <label htmlFor="name">Day of posting</label>
                <span className="red-text">{errors.posting_day}</span>
              </div>
              <div className="input-field col s12">
                <input
                  onChange={this.onChange}
                  value={this.state.posting_month}
                  error={errors.posting_month}
                  id="posting_month"
                  type="number"
                  className={classnames("", {
                    invalid: errors.posting_month
                  })}
                />
                <label htmlFor="name">Month of posting</label>
                <span className="red-text">{errors.posting_month}</span>
              </div>
              <div className="input-field col s12">
                <input
                  onChange={this.onChange}
                  value={this.state.posting_year}
                  error={errors.posting_year}
                  id="posting_year"
                  type="number"
                  className={classnames("", {
                    invalid: errors.posting_year
                  })}
                />
                <label htmlFor="name">Year of posting</label>
                <span className="red-text">{errors.posting_year}</span>
              </div> */}
              <div className="input-field col s12">
                <input
                  onChange={this.onChange}
                  value={this.state.Deadline_day}
                  error={errors.Deadline_day}
                  id="Deadline_day"
                  type="number"
                  className={classnames("", {
                    invalid: errors.Deadline_day
                  })}
                />
                <label htmlFor="name">Day of deadline</label>
                <span className="red-text">{errors.Deadline_day}</span>
              </div>
              <div className="input-field col s12">
                <input
                  onChange={this.onChange}
                  value={this.state.Deadline_month}
                  error={errors.Deadline_month}
                  id="Deadline_month"
                  type="number"
                  className={classnames("", {
                    invalid: errors.Deadline_month
                  })}
                />
                <label htmlFor="name">Month of deadline</label>
                <span className="red-text">{errors.Deadline_month}</span>
              </div>
              <div className="input-field col s12">
                <input
                  onChange={this.onChange}
                  value={this.state.Deadline_year}
                  error={errors.Deadline_year}
                  id="Deadline_year"
                  type="number"
                  className={classnames("", {
                    invalid: errors.Deadline_year
                  })}
                />
                <label htmlFor="name">Year of deadline</label>
                <span className="red-text">{errors.Deadline_year}</span>
              </div>
              <div className="input-field col s12">
                <input
                  onChange={this.onChange}
                  value={this.state.Deadline_hour}
                  error={errors.Deadline_hour}
                  id="Deadline_hour"
                  type="number"
                  className={classnames("", {
                    invalid: errors.Deadline_hour
                  })}
                />
                <label htmlFor="name">Hour of deadline</label>
                <span className="red-text">{errors.Deadline_hour}</span>
              </div>
              <div className="input-field col s12">
                <input
                  onChange={this.onChange}
                  value={this.state.Deadline_minute}
                  error={errors.Deadline_minute}
                  id="Deadline_minute"
                  type="number"
                  className={classnames("", {
                    invalid: errors.Deadline_minute
                  })}
                />
                <label htmlFor="name">Minute of deadline</label>
                <span className="red-text">{errors.Deadline_minute}</span>
              </div>
              <div className="input-field col s12">
                <input
                  onChange={this.onChange}
                  value={this.state.Required_skillset}
                  error={errors.Required_skillset}
                  id="Required_skillset"
                  type="text"
                  className={classnames("", {
                    invalid: errors.Required_skillset
                  })}
                />
                <label htmlFor="name">Required Skillset</label>
                <span className="red-text">{errors.Required_skillset}</span>
              </div>
              <div className="input-field col s12">
                <input
                  onChange={this.onChange}
                  value={this.state.Duration}
                  error={errors.Duration}
                  id="Duration"
                  min = "0"
                  max = "6"
                  type="number"
                  className={classnames("", {
                    invalid: errors.Duration
                  })}
                />
                <label htmlFor="name">Duration</label>
                <span className="red-text">{errors.Duration}</span>
              </div>

              <div className="input-field col s12">
                <input
                  onChange={this.onChange}
                  value={this.state.Salary_per_month}
                  error={errors.Salary_per_month}
                  id="Salary_per_month"
                  type="number"
                  className={classnames("", {
                    invalid: errors.Salary_per_month
                  })}
                />
                <label htmlFor="password">Salary per month</label>
                <span className="red-text">{errors.Salary_per_month}</span>
              </div>
              {/* <div className="input-field col s12">
                <input
                  onChange={this.onChange}
                  value={this.state.rating}
                  error={errors.rating}
                  id="rating"
                  type="number"
                  className={classnames("", {
                    invalid: errors.rating
                  })}
                />
                <label htmlFor="password2">Rating</label>
                <span className="red-text">{errors.rating}</span>
              </div> */}
              <div className="input-field col s12">
                <label htmlFor="Type">Select the type of job</label>
                <br></br>
                <br></br>
                <select
                  onChange={this.onChange}
                  value={this.state.Type_of_job}
                  id="Type_of_job"
                  className="browser-default"
               >
                <option value="Full-time">Full-time</option>
                <option value="Part-time">Part-time</option>
                <option value="Work from home">Work from home</option>
                </select>
              <span className="red-text">{errors.Type_of_job}</span>
              </div>
            <div className="col s12" style={{ paddingLeft: "11.250px" }}>
              <button
                style={{
                  width: "150px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px",
                  marginTop: "1rem"
                }}
                type="submit"
                className="btn btn-large waves-effect waves-light hoverable blue accent-3"
              >
                Add job
                </button>
            </div>
            </form>
        </div>
      </div>
      </div >
    );
  }
}
Createjob.propTypes = {
  createJob: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});
export default connect(
  mapStateToProps,
  { createJob }
)(withRouter(Createjob));