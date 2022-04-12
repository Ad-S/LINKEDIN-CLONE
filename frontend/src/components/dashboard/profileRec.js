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
import { makerec } from "../../actions/authActions";
import classnames from "classnames";



class profileRec extends Component {


  constructor(props) {
    super(props);
    this.state = {users: []};
}

    componentDidMount() {
      const {user} = this.props.auth;
      axios.post('/api/recruiters/viewProf',user)
        .then(response => {
          //  console.log("fsdfsaddsf");
          //  console.log(response);
          //  console.log("fsdfsaddsf");

          this.setState({users: response.data});
      })
      .catch(function(error) {
          console.log(error);
          //  console.log("errorrrr");
      })
          // .then(response => {
          //     // console.log("fsdfsaddsf");
          //     console.log(response);
          //     // console.log("fsdfsaddsf");
          //     if(response.data.length == 0)
          //     {
          //       console.log("h1")
          //       const newUser = {
          //         name: this.props.auth.user.name,
          //         email: this.props.auth.user.email,
          //         bio: "",
          //         contact_no: ""
          //       };
          //       console.log(newUser);
          //       axios.post('/api/recruiters/addProf',newUser)
                
          //     }
                
          //     if(response.data.length == 0){
          //       console.log("h2")
                
          //       this.props.history.push("/editRec");
          //     }
          //       // this.props.makerec(newUser, this.props.history);
          //       this.setState({users: response.data, sortedUsers:response.data, searchText:''});
              
              
          // })
          // .catch(function(error) {
          //     console.log(error);
          //     //  console.log("errorrrr");
          // })

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
                                            <TableCell>Email</TableCell>
                                            <TableCell>Bio</TableCell>
                                            <TableCell>Contact no.</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                  {
                                    this.state.users.map((user) =>(
                                         <TableRow >
                                            <TableCell>{user.name}</TableCell>
                                            <TableCell>{user.email}</TableCell>
                                            <TableCell>{user.bio}</TableCell>
                                            <TableCell>{user.contact_no}</TableCell>
                                        </TableRow> 
                                    ))
                                  }
                                  
                                
                                        
                                
                                
                                </TableBody>
                            </Table>
                        </Paper>               
                    </Grid>
      </Grid>
      <Link
            to="/editRec"
            style={{
              width: "150px",
              borderRadius: "3px",
              letterSpacing: "1.5px",
              marginTop: "1rem"
            }}
            className="btn btn-large waves-effect waves-light hoverable blue accent-3"
          >
            Edit/Add
      </Link>

      </div>
    )
  }
}

profileRec.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(
  mapStateToProps,
  { logoutUser }
)(profileRec);





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