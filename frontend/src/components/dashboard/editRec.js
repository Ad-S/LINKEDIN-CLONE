import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import axios from 'axios';

import PropTypes from "prop-types";
import { connect } from "react-redux";
import { editrec } from "../../actions/authActions";
import { makerec } from "../../actions/authActions";
import classnames from "classnames";

class editRec extends Component {
    constructor() {
      super();
      this.state = {
        bio: "",
        contact_no: "",
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
            name: this.props.auth.user.name,
            email: this.props.auth.user.email,
            bio: this.state.bio,
            contact_no: this.state.contact_no
        };
        
        // this.props.editrec(newUser, this.props.history);
        axios.post('/api/recruiters/editProf',newUser)
        this.props.history.push("/profileRec"); 
        // console.log(newUser);
      };
      onAddClick = e => {
        e.preventDefault();
        const { user } = this.props.auth;

        const newUser = {
          name: this.props.auth.user.name,
          email: this.props.auth.user.email,
          bio: this.state.bio,
          contact_no: this.state.contact_no
      };

      
      axios.post('/api/recruiters/addProf',newUser)

      this.props.history.push("/profileRec"); 

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
                          value={this.state.bio}
                          error={errors.bio}
                          id="bio"
                          type="text"
                          // maxlength="250"
                          className={classnames("", {
                            invalid: errors.bio
                          })}
                        />
                        <label htmlFor="bio">Bio</label>
                        <span className="red-text">{errors.bio}</span>
                      </div>
                      <div className="input-field col s12">
                        <input
                          onChange={this.onChange}
                          value={this.state.contact_no}
                          error={errors.contact_no}
                          id="contact_no"
                          type="number"
                          className={classnames("", {
                            invalid: errors.contact_no
                          })}
                        />
                        <label htmlFor="contact_no">Contact number</label>
                        <span className="red-text">{errors.contact_no}</span>
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
                    
                    {/* { user.bio */}
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
                    {/* } */}
                    </div>

                    </form>
                </div>
              </div>
              </div >
            );
          }
}

editRec.propTypes = {
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
  )(withRouter(editRec));
