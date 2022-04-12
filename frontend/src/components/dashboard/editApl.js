import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import axios from 'axios';

import PropTypes from "prop-types";
import { connect } from "react-redux";
import { editrec } from "../../actions/authActions";
// import { makerec } from "../../actions/authActions";
import classnames from "classnames";

class editApl extends Component {
    constructor() {
      super();
      this.state = {
        name: "",
        Institute_name: "",
        srt_year: "",
        end_year: "",
        Skills: "",
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
        // var d = new Date();
        // var x  = d.getMonth();
        // x = x + 1;
    
        const newUser = {
            name: this.state.name,
            email: this.props.auth.user.email,
            Institute_name: this.state.Institute_name,
            srt_year: this.state.srt_year,
            end_year: this.state.end_year,
            Skills: this.state.Skills
        };
        
        // this.props.editrec(newUser, this.props.history);
        axios.post('/api/applicants/editProf',newUser)
        this.props.history.push("/profileapl"); 
        // console.log(newUser);
      };
      onAddClick = e => {
        e.preventDefault();
        const { user } = this.props.auth;

        const newUser = {
            name: this.state.name,
            email: this.props.auth.user.email,
            Institute_name: this.state.Institute_name,
            srt_year: this.state.srt_year,
            end_year: this.state.end_year,
            Skills: this.state.Skills
      };
      
      axios.post('/api/applicants/addProf',newUser)

      this.props.history.push("/profileapl"); 

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
                        <b>Edit profile</b> below
                      </h4>
                    </div>
                    <form noValidate onSubmit={this.onSubmit}>
                      <div className="input-field col s12">
                        <input
                          onChange={this.onChange}
                          value={this.state.name}
                          error={errors.name}
                          id="name"
                          type="text"
                          // maxlength="250"
                          className={classnames("", {
                            invalid: errors.name
                          })}
                        />
                        <label htmlFor="name">Name</label>
                        <span className="red-text">{errors.name}</span>
                      </div>
                      <div className="input-field col s12">
                        <input
                          onChange={this.onChange}
                          value={this.state.Institute_name}
                          error={errors.Institute_name}
                          id="Institute_name"
                          type="text"
                          className={classnames("", {
                            invalid: errors.Institute_name
                          })}
                        />
                        <label htmlFor="Institute_name">Institute name</label>
                        <span className="red-text">{errors.Institute_name}</span>
                      </div>
                      <div className="input-field col s12">
                        <input
                          onChange={this.onChange}
                          value={this.state.srt_year}
                          error={errors.srt_year}
                          id="srt_year"
                          type="number"
                          // maxlength="250"
                          className={classnames("", {
                            invalid: errors.srt_year
                          })}
                        />
                        <label htmlFor="srt_year">Start year</label>
                        <span className="red-text">{errors.srt_year}</span>
                      </div>
                      <div className="input-field col s12">
                        <input
                          onChange={this.onChange}
                          value={this.state.end_year}
                          error={errors.end_year}
                          id="end_year"
                          type="number"
                          // maxlength="250"
                          className={classnames("", {
                            invalid: errors.end_year
                          })}
                        />
                        <label htmlFor="end_year">End year</label>
                        <span className="red-text">{errors.end_year}</span>
                      </div>
                      <div className="input-field col s12">
                        <input
                          onChange={this.onChange}
                          value={this.state.Skills}
                          error={errors.Skills}
                          id="Skills"
                          type="text"
                          // maxlength="250"
                          className={classnames("", {
                            invalid: errors.Skills
                          })}
                        />
                        <label htmlFor="Skills">Skills</label>
                        <span className="red-text">{errors.Skills}</span>
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
                        Edit_profile
                        </button>
                    </div>
                    <div className="col s12" style={{ paddingLeft: "11.250px" }}>

                    <button
                      style={{
                        width: "150px",
                        borderRadius: "3px",
                        letterSpacing: "1.5px",
                        marginTop: "1rem"
                      }}
                      onClick={this.onAddClick}
                      className="btn btn-large waves-effect waves-light hoverable blue accent-3"
                    >
                      Add_profile
                    </button>
                    </div>

                    </form>
                </div>
              </div>
              </div >
            );
          }
}

editApl.propTypes = {
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
  )(withRouter(editApl));
