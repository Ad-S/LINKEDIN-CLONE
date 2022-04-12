import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import axios from 'axios';

import PropTypes from "prop-types";
import { connect } from "react-redux";
import { editrec } from "../../actions/authActions";
import { makerec } from "../../actions/authActions";
import classnames from "classnames";

class Editjob extends Component {
    constructor() {
      super();
      this.state = {
        max_applications: "",
        max_positions: "",
        Deadline_day: "",
        Deadline_day: "",
        Deadline_month: "",
        Deadline_year: "",
        Deadline_hour: "",
        Deadline_minute: "",
        jobID: "",
        errors: {}
      };
    }
    componentWillReceiveProps(nextProps) {
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
        // console.log(this.state.Type_of_job);
    
        const { user } = this.props.auth;
        const id_data = {job_id: localStorage.getItem("jobId1")}

        // var d = new Date();
        // var x  = d.getMonth();
        // x = x + 1;
    
        const newUser = {
            
            jobID: id_data,
            max_applications: this.state.max_applications,
            max_positions: this.state.max_positions,
            Deadline_day: this.state.Deadline_day,
            Deadline_month: this.state.Deadline_month,
            Deadline_year: this.state.Deadline_year,
            Deadline_hour: this.state.Deadline_hour,
            Deadline_minute: this.state.Deadline_minute,
        };
        
        // this.props.editrec(newUser, this.props.history);
        axios.post('/api/details/editJob',newUser)
        this.props.history.push("/UserList"); 
        // console.log(newUser);
      };
    //   onAddClick = e => {
    //     e.preventDefault();
    //     const { user } = this.props.auth;

    //     const newUser = {
    //       name: this.props.auth.user.name,
    //       email: this.props.auth.user.email,
    //       bio: this.state.bio,
    //       contact_no: this.state.contact_no
    //   };

      
    //   axios.post('/api/recruiters/addProf',newUser)

    //   this.props.history.push("/profileRec"); 

    //   };


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
                        <b>Edit profile</b> below
                      </h4>
                    </div>
                    <form noValidate onSubmit={this.onSubmit}>
                      <div className="input-field col s12">
                        <input
                          onChange={this.onChange}
                          value={this.state.max_applications}
                          error={errors.max_applications}
                          id="max_applications"
                          type="number"
                          // maxlength="250"
                          className={classnames("", {
                            invalid: errors.max_applications
                          })}
                        />
                        <label htmlFor="max_applications">Max applications</label>
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
                        <label htmlFor="max_positions">Max positions</label>
                        <span className="red-text">{errors.max_positions}</span>
                      </div>

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
                        Edit
                        </button>
                    </div>
                    

                    </form>
                </div>
              </div>
              </div >
            );
          }
}

Editjob.propTypes = {
    editrec: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
  };
  const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
  });
  export default connect(
    mapStateToProps,
    { editrec }
  )(withRouter(Editjob));
