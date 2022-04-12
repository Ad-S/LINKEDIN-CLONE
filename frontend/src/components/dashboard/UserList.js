import React, {Component} from 'react';
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


import SearchIcon from "@material-ui/icons/Search";
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';

class UsersList extends Component {

    onLogoutClick = e => {
        e.preventDefault();
        this.props.logoutUser();
      };
    
    constructor(props) {
        super(props);
        this.state = {users: [],sortedUsers: [], sortName:true};
        this.renderIcon = this.renderIcon.bind(this);
        this.sortChange = this.sortChange.bind(this);
    }


    componentDidMount() {
        const {user} = this.props.auth;
        axios.post('/api/details/viewJobs',user)
             .then(response => {
                //  console.log("fsdfsaddsf");
                //  console.log(response);
                //  console.log("fsdfsaddsf");

                 this.setState({users: response.data, sortedUsers:response.data, searchText:''});
             })
             .catch(function(error) {
                 console.log(error);
                //  console.log("errorrrr");
             })
             console.log(user);
    }

    viewApp(e)
    {
        e.preventDefault();
        console.log(e.target.id);

        localStorage.setItem("jobId",e.target.id);
        window.location = "/viewApc"
    }
    Editul(e)
    {
        e.preventDefault();
        console.log(e.target.id);

        localStorage.setItem("jobId1",e.target.id);
        window.location = "/Editjob"
    }
    deleteul(e)
    {
        e.preventDefault();
        const data = {_id: e.target.id}
        axios.post('/api/details/deleteJob',data);
        window.location.reload();
    }


    sortChange(){
/**
 *      Note that this is sorting only at front-end.
 */
        var array = this.state.users;
        var flag = this.state.sortName;
        array.sort(function(a, b) {
            if(a.Duration != undefined && b.Duration != undefined){
                return (1 - flag*2) * (new Date(a.Duration) - new Date(b.Duration));
            }
            else{
                return 1;
            }
          });
        this.setState({
            users:array,
            sortName:!this.state.sortName,
        })
    }

    renderIcon(){
        if(this.state.sortName){
            return(
                <ArrowDownwardIcon/>
            )
        }
        else{
            return(
                <ArrowUpwardIcon/>
            )            
        }
    }

    customFunction(e){
        console.log(e.target.value);
        this.setState({
            searchText:e.target.value
        })
    }

    render() {
        return (
            <div>
                <Grid container>
                <Grid item xs={12} md={3} lg={3}>
                    <List component="nav" aria-label="mailbox folders">
                        <ListItem text>
                                        <h3></h3>
                        </ListItem>
                    </List>
                </Grid>
                    <Grid item xs={12} md={9} lg={9}>
                    <List component="nav" aria-label="mailbox folders">
                        <TextField 
                        id="standard-basic" 
                        // label="Search" 
                        fullWidth={true}   
                        // InputProps={{
                        //     endAdornment: (
                        //         <InputAdornment>
                        //             <IconButton>
                        //                 <SearchIcon />
                        //             </IconButton>
                        //         </InputAdornment>
                        //     )}}
                        // onChange={customFunction}
                        />
                    </List>
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid item xs={12} md={3} lg={3}>
                        <List component="nav" aria-label="mailbox folders">

                            <ListItem button>
                                <form noValidate autoComplete="off">
                                    <label></label>
                                    <TextField id="standard-basic" label="" fullWidth={true} />
                                    <TextField id="standard-basic" label="" fullWidth={true}/>
                                </form>                                                                
                            </ListItem>
                            <Divider />
                            {/* <ListItem button divider>
                                <Autocomplete
                                    id="combo-box-demo"
                                    options={this.state.users}
                                    getOptionLabel={(option) => option.name}
                                    style={{ width: 300 }}
                                    renderInput={(params) => <TextField {...params} label="Select Names" variant="outlined" />}
                                />
                            </ListItem> */}
                        </List>
                    </Grid>
                    <Grid item xs={12} md={9} lg={9}>
                        <Paper>
                            <Table size="small">
                                <TableHead>
                                    <TableRow>
                                            <TableCell> Sr No.</TableCell>
                                            <TableCell> <Button onClick={this.sortChange}>{this.renderIcon()}</Button>Duration</TableCell>
                                            <TableCell>Title</TableCell>
                                            <TableCell>Name</TableCell>
                                            <TableCell>max_applications</TableCell>
                                            <TableCell>max_positions</TableCell>
                                            <TableCell>Required_skillset</TableCell>
                                            <TableCell>Type of job</TableCell>
                                            <TableCell>Salary per month</TableCell>
                                            <TableCell></TableCell>


                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                {
                                this.state.users.map((user,ind) => (
                                        <TableRow key={ind}>
                                            <TableCell>{ind}</TableCell>
                                            <TableCell>{user.Duration}</TableCell>

                                            <TableCell>{user.title}</TableCell>
                                            <TableCell>{user.name}</TableCell>
                                            <TableCell>{user.max_applications}</TableCell>
                                            <TableCell>{user.max_positions}</TableCell>
                                            <TableCell>{user.Required_skillset}</TableCell>
                                            <TableCell>{user.Type_of_job}</TableCell>
                                            <TableCell>{user.Salary_per_month}</TableCell>
                                            <TableCell><button
                                            id = {user._id}
                                            onClick = {this.viewApp}
                                            className="btn btn-large waves-effect waves-light hoverable blue accent-3"
                                            >View_application
                                            </button></TableCell>
                                            <TableCell><button
                                            id = {user._id}
                                            onClick = {this.Editul}
                                            className="btn btn-large waves-effect waves-light hoverable blue accent-3"
                                            >EDIT
                                            </button></TableCell>
                                            <TableCell><button
                                            id = {user._id}
                                            onClick = {this.deleteul}
                                            className="btn btn-large waves-effect waves-light hoverable blue accent-3"
                                            >DELETE
                                            </button></TableCell>

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

UsersList.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
  };
  const mapStateToProps = state => ({
    auth: state.auth
  });
  export default connect(
    mapStateToProps,
    { logoutUser }
  )(UsersList);
