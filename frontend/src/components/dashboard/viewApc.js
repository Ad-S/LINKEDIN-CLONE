import React, {Component} from 'react';
import { Link, withRouter } from "react-router-dom";
import axios from 'axios';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import Autocomplete from '@material-ui/lab/Autocomplete';
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
// import { makerec } from "../../actions/authActions";
import classnames from "classnames";



class viewApc extends Component {

    constructor(props) {
    super(props);
    this.state = {users: []};
}   

    // console.log("inside");

    componentDidMount() {
      const {user} = this.props.auth;
      const id_data = {job_id: localStorage.getItem("jobId")}
      axios.post('/api/applied/showapc',id_data)
        .then(response => {
        //    console.log("fsdfsaddsf");
           console.log(response.data);
          //  console.log("fsdfsaddsf");

          this.setState({users: response.data});
      })
      .catch(function(error) {
          console.log(error);
          //  console.log("errorrrr");
      })
  }

  onSubmitc(e,ind)
  {

      e.preventDefault();
      const values = [...this.state.users]
      console.log(values[ind].email);
      axios.post('/api/applicants/sendMail',{email: values[ind].email});


  //   const {user} = this.props.auth;


  //   var transporter = nodemailer.createTransport({
  //     service: 'gmail',
  //     auth: {
  //       user: 'dassjobportal0@gmail.com',
  //       pass: 'dass123#26'
  //     }
  //   });
    
  //   var mailOptions = {
  //     from: 'dassjobportal0@gmail.com',
  //     // to: this.state.users.email,
  //     subject: 'You are selected!',
  //     text: 'Your application is accepted congo'
  //   };
    
  //   transporter.sendMail(mailOptions, function(error, info){
  //     if (error) {
  //       console.log(error);
  //     } else {
  //       console.log('Email sent: ' + info.response);
  //     }
  //   });
  }


  render() {
    return (
      <div>
      <Grid container>
        <Grid item xs={12} md={9} lg={9}>
                        <Paper>
                            <Table size="small">
                                <TableHead>
                                    <TableRow>
                                            <TableCell>Name</TableCell>
                                            <TableCell>Stage</TableCell>
                                            <TableCell>Institute name</TableCell>
                                            <TableCell>SOP</TableCell>
                                            <TableCell>Skills</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                  {
                                    this.state.users.map((user,ind) =>(
                                         <TableRow >
                                            <TableCell>{user.name}</TableCell>
                                            <TableCell>{user.Stage_of_app}</TableCell>
                                            <TableCell>{user.Institute_name}</TableCell>
                                            <TableCell>{user.sop}</TableCell>
                                            <TableCell>{user.Skills}</TableCell>
                                            <TableCell>
                                            <button
                                            id = {user.email}
                                            style={{
                                              width: "150px",
                                              borderRadius: "3px",
                                              letterSpacing: "1.5px",
                                              marginTop: "1rem"
                                            }}
                                            
                                            onClick = {e => this.onSubmitc(e,ind)}
                                  
                                            className="btn btn-large waves-effect waves-light hoverable blue accent-3"
                                          >
                                            Send_mail
                                            </button>
                                            </TableCell>
                                        </TableRow> 
                                    ))
                                  }
                                  
                                
                                </TableBody>
                            </Table>
                        </Paper>               
                    </Grid>
      </Grid>

      </div>
    )
  }
}

viewApc.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(
  mapStateToProps,
  { logoutUser }
)(viewApc);





// import React, { Component } from "react";
// import { Link, withRouter } from "react-router-dom";
// import PropTypes from "prop-types";
// import { connect } from "react-redux";
// // import { createJob } from "../../actions/authActions";
// import classnames from "classnames";

// class profileRec extends Component {
//     constructor() {
//       super();
//       this.state = {
//         name: "",
//         email: "",
//         contact_no: "",
//         bio: "",
//         errors: {}
//       };
//     }
// }