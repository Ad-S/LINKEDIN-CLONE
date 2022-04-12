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
import Fuse from "fuse.js";

import SearchIcon from "@material-ui/icons/Search";
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';

class jobList extends Component {

    onLogoutClick = e => {
        e.preventDefault();
        this.props.logoutUser();
      };
    
    constructor(props) {
        super(props);
        this.state = {users2: [],users: [],filuser: [],sortedUsers: [], sortName:true, min_salary:"", max_salary:"",duration:"",type_of_job:"",find:""};
        this.renderIcon = this.renderIcon.bind(this);
        this.sortChange = this.sortChange.bind(this);
        this.renderIcon2 = this.renderIcon2.bind(this);
        this.onChange = this.onChange.bind(this);
        this.onChange2 = this.onChange2.bind(this);
        this.onChange3 = this.onChange3.bind(this);
        this.onChange4 = this.onChange4.bind(this);
        this.onChange5 = this.onChange5.bind(this);
        this.onApply = this.onApply.bind(this);



        this.sortChange2= this.sortChange2.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.errors) {
          this.setState({
            errors: nextProps.errors
          });
        }
    }


    componentDidMount() {
        const {user} = this.props.auth;
        axios.post('/api/details/viewallJobs',user)
             .then(response => {
                //  console.log("fsdfsaddsf");
                //  console.log(response);
                //  console.log("fsdfsaddsf");

                 this.setState({users: response.data,filuser: response.data, sortedUsers:response.data, searchText:''});
             })
             .catch(function(error) {
                 console.log(error);
                //  console.log("errorrrr");
             })
             console.log(user);
    }

    async onChange(e)  {
        
        e.preventDefault();
        e["value"] = parseInt(e.target.value);
        
        await this.setState({ min_salary: parseInt( e.value) });
        // this.setState({ max_salary: e.target.value });

        var filuser2 = [];

        if(this.state.min_salary == 0)
        {
            filuser2 = this.state.users;
        }
        else{
        var i ;
        for(i=0;i<this.state.users.length;i++)
        {
            var x = this.state.users[i];
            if(x.Salary_per_month >= this.state.min_salary)
            {
                filuser2.push(x)
            }
        }
        }

        if(this.state.max_salary === "" )
        {
            filuser2 = filuser2
        }
        else{
        var i,filuser3 =[] ;
        for(i=0;i<filuser2.length;i++)
        {
            var x = filuser2[i];
            if(x.Salary_per_month <= this.state.max_salary)
            {
                filuser3.push(x)
            }
        }
        filuser2 = filuser3
        }
        await this.setState({filuser: filuser2})

        if(this.state.duration === "")
        {
            filuser2 = filuser2
        }
        else{
            var i ,filuser4 = [];
            for(i=0;i<filuser2.length;i++)
            {
                var x = filuser2[i];
                if(x.Duration < this.state.duration)
                {
                    filuser4.push(x)
                }
            }
            filuser2 = filuser4
        }
        await this.setState({filuser: filuser2})

        if(this.state.type_of_job === "")
        {
            filuser2 = filuser2
        }
        else{
            var i ,filuser5 = [];
            for(i=0;i<filuser2.length;i++)
            {
                var x = filuser2[i];
                if(x.Type_of_job === this.state.type_of_job)
                {
                    filuser5.push(x)
                }
            }
            filuser2 = filuser5
        }
        await this.setState({filuser: filuser2})

        if(this.state.find === "")
        {
            filuser2 = filuser2;
        }
        else{
            const fuse = new Fuse(filuser2,{keys:['title'],includeScore: true});
            const results = fuse.search(this.state.find);
            await this.setState({filuser: results.map(result => result.item)})
        }   

}

async onChange2(e)  {

    e.preventDefault();
    e["value"] = parseInt(e.target.value);

    await this.setState({ max_salary: parseInt( e.value) });

    // this.setState({ max_salary: e.target.value });


    var filuser2 = [];

    if(this.state.min_salary == 0)
        {
            filuser2 = this.state.users;
        }
        else{
        var i ;
        for(i=0;i<this.state.users.length;i++)
        {
            var x = this.state.users[i];
            if(x.Salary_per_month >= this.state.min_salary)
            {
                filuser2.push(x)
            }
        }
        }

        if(this.state.max_salary === "" )
        {
            filuser2 = filuser2
        }
        else{
        var i,filuser3 =[] ;
        for(i=0;i<filuser2.length;i++)
        {
            var x = filuser2[i];
            if(x.Salary_per_month <= this.state.max_salary)
            {
                filuser3.push(x)
            }
        }
        filuser2 = filuser3
        }
        await this.setState({filuser: filuser2})

        if(this.state.duration === "")
        {
            filuser2 = filuser2
        }
        else{
            var i ,filuser4 = [];
            for(i=0;i<filuser2.length;i++)
            {
                var x = filuser2[i];
                if(x.Duration < this.state.duration)
                {
                    filuser4.push(x)
                }
            }
            filuser2 = filuser4
        }
        await this.setState({filuser: filuser2})

        if(this.state.type_of_job === "")
        {
            filuser2 = filuser2
        }
        else{
            var i ,filuser5 = [];
            for(i=0;i<filuser2.length;i++)
            {
                var x = filuser2[i];
                if(x.Type_of_job === this.state.type_of_job)
                {
                    filuser5.push(x)
                }
            }
            filuser2 = filuser5
        }
        await this.setState({filuser: filuser2})

        if(this.state.find === "")
        {
            filuser2 = filuser2;
        }
        else{
            const fuse = new Fuse(filuser2,{keys:['title'],includeScore: true});
            const results = fuse.search(this.state.find);
            await this.setState({filuser: results.map(result => result.item)})
        }

    
}
async onChange3(e)  {

    e.preventDefault();
    e["value"] = parseInt(e.target.value);

    await this.setState({ duration: parseInt( e.value) });

    // this.setState({ max_salary: e.target.value });


    var filuser2 = [];

    if(this.state.min_salary == 0)
        {
            filuser2 = this.state.users;
        }
        else{
        var i ;
        for(i=0;i<this.state.users.length;i++)
        {
            var x = this.state.users[i];
            if(x.Salary_per_month >= this.state.min_salary)
            {
                filuser2.push(x)
            }
        }
        }

        if(this.state.max_salary === "" )
        {
            filuser2 = filuser2
        }
        else{
        var i,filuser3 =[] ;
        for(i=0;i<filuser2.length;i++)
        {
            var x = filuser2[i];
            if(x.Salary_per_month <= this.state.max_salary)
            {
                filuser3.push(x)
            }
        }
        filuser2 = filuser3
        }
        await this.setState({filuser: filuser2})
        
        if(this.state.duration === "")
        {
            filuser2 = filuser2
        }
        else{
            var i ,filuser4 = [];
            for(i=0;i<filuser2.length;i++)
            {
                var x = filuser2[i];
                if(x.Duration < this.state.duration)
                {
                    filuser4.push(x)
                }
            }
            filuser2 = filuser4
        }
        await this.setState({filuser: filuser2})

        if(this.state.type_of_job === "")
        {
            filuser2 = filuser2
        }
        else{
            var i ,filuser5 = [];
            for(i=0;i<filuser2.length;i++)
            {
                var x = filuser2[i];
                if(x.Type_of_job === this.state.type_of_job)
                {
                    filuser5.push(x)
                }
            }
            filuser2 = filuser5
        }
        await this.setState({filuser: filuser2})

        if(this.state.find === "")
        {
            filuser2 = filuser2;
        }
        else{
            const fuse = new Fuse(filuser2,{keys:['title'],includeScore: true});
            const results = fuse.search(this.state.find);
            await this.setState({filuser: results.map(result => result.item)})
        }
    
}

async onChange4(e)
{
    e.preventDefault();
    e["value"] = (e.target.value);

    await this.setState({ type_of_job:  e.value });

    // this.setState({ max_salary: e.target.value });


    var filuser2 = [];

    if(this.state.min_salary == 0)
        {
            filuser2 = this.state.users;
        }
        else{
        var i ;
        for(i=0;i<this.state.users.length;i++)
        {
            var x = this.state.users[i];
            if(x.Salary_per_month >= this.state.min_salary)
            {
                filuser2.push(x)
            }
        }
        }

        if(this.state.max_salary === "" )
        {
            filuser2 = filuser2
        }
        else{
        var i,filuser3 =[] ;
        for(i=0;i<filuser2.length;i++)
        {
            var x = filuser2[i];
            if(x.Salary_per_month <= this.state.max_salary)
            {
                filuser3.push(x)
            }
        }
        filuser2 = filuser3
        }
        await this.setState({filuser: filuser2})
        
        if(this.state.duration === "")
        {
            filuser2 = filuser2
        }
        else{
            var i ,filuser4 = [];
            for(i=0;i<filuser2.length;i++)
            {
                var x = filuser2[i];
                if(x.Duration < this.state.duration)
                {
                    filuser4.push(x)
                }
            }
            filuser2 = filuser4
        }
        await this.setState({filuser: filuser2})

        if(this.state.type_of_job === "")
        {
            filuser2 = filuser2
        }
        else{
            var i ,filuser5 = [];
            for(i=0;i<filuser2.length;i++)
            {
                var x = filuser2[i];
                if(x.Type_of_job === this.state.type_of_job)
                {
                    filuser5.push(x)
                }
            }
            filuser2 = filuser5
        }
        await this.setState({filuser: filuser2})

        if(this.state.find === "")
        {
            filuser2 = filuser2;
        }
        else{
            const fuse = new Fuse(filuser2,{keys:['title'],includeScore: true});
            const results = fuse.search(this.state.find);
            await this.setState({filuser: results.map(result => result.item)})
        }

}

async onChange5(e)
{
    e.preventDefault();
    e["value"] = (e.target.value);

    await this.setState({ find:  e.value });

    // this.setState({ max_salary: e.target.value });


    var filuser2 = [];

    if(this.state.min_salary == 0)
        {
            filuser2 = this.state.users;
        }
        else{
        var i ;
        for(i=0;i<this.state.users.length;i++)
        {
            var x = this.state.users[i];
            if(x.Salary_per_month >= this.state.min_salary)
            {
                filuser2.push(x)
            }
        }
        }

        if(this.state.max_salary === "" )
        {
            filuser2 = filuser2
        }
        else{
        var i,filuser3 =[] ;
        for(i=0;i<filuser2.length;i++)
        {
            var x = filuser2[i];
            if(x.Salary_per_month <= this.state.max_salary)
            {
                filuser3.push(x)
            }
        }
        filuser2 = filuser3
        }
        await this.setState({filuser: filuser2})
        
        if(this.state.duration === "")
        {
            filuser2 = filuser2
        }
        else{
            var i ,filuser4 = [];
            for(i=0;i<filuser2.length;i++)
            {
                var x = filuser2[i];
                if(x.Duration < this.state.duration)
                {
                    filuser4.push(x)
                }
            }
            filuser2 = filuser4
        }
        await this.setState({filuser: filuser2})

        if(this.state.type_of_job === "")
        {
            filuser2 = filuser2
        }
        else{
            var i ,filuser5 = [];
            for(i=0;i<filuser2.length;i++)
            {
                var x = filuser2[i];
                if(x.Type_of_job === this.state.type_of_job)
                {
                    filuser5.push(x)
                }
            }
            filuser2 = filuser5
        }
        await this.setState({filuser: filuser2})

        if(this.state.find === "")
        {
            filuser2 = filuser2;
        }
        else{
            const fuse = new Fuse(filuser2,{keys:['title'],includeScore: true});
            const results = fuse.search(this.state.find);
            await this.setState({filuser: results.map(result => result.item)})
        }

}

onApply(e)
{
    e.preventDefault();
    // console.log(e.target.id);
    var sop = prompt("SOP (max 250 words)")
    console.log(this.state.users.email);

    const {user} = this.props.auth;
      axios.post('/api/applicants/viewApl',user)
        .then(response => {
        //    console.log("fsdfsaddsf");
          //  console.log(response);
          //  console.log("fsdfsaddsf");

        //   this.setState({users2: response.data});
        // console.log(response.data[0].Skills);
          
          const newUser = {
            rec_email: e.target.value,
            name: this.props.auth.user.name,
            email: this.props.auth.user.email,
            job_id: e.target.id,
            Skills: response.data[0].Skills,
            Institute_name: response.data[0].Institute_name,
            Stage_of_app: "Applied",
            sop: sop
            // Skills: this.state.Skills,
            // : this.state.contact_no
        };
        console.log(newUser);
    
        axios.post('/api/applied/addit',newUser)
      })
      .catch(function(error) {
          console.log(error);
          //  console.log("errorrrr");
      })

    // const { user } = this.props.auth
    
    

    

}



// };

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

    sortChange2(){
        /**
         *      Note that this is sorting only at front-end.
         */
                var array = this.state.users;
                var flag = this.state.sortName;
                array.sort(function(a, b) {
                    if(a.Salary_per_month != undefined && b.Salary_per_month != undefined){
                        return (1 - flag*2) * (new Date(a.Salary_per_month) - new Date(b.Salary_per_month));
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
        
            renderIcon2(){
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

        // sortChange3(){
        //     /**
        //      *      Note that this is sorting only at front-end.
        //      */
        //             var array = this.state.users;
        //             var flag = this.state.sortName;
        //             array.sort(function(a, b) {
        //                 if(a.Duration != undefined && b.Duration != undefined){
        //                     return (1 - flag*2) * (new Date(a.Duration) - new Date(b.Duration));
        //                 }
        //                 else{
        //                     return 1;
        //                 }
        //                 });
        //             this.setState({
        //                 users:array,
        //                 sortName:!this.state.sortName,
        //             })
        //         }
            
        //         renderIcon3(){
        //             if(this.state.sortName){
        //                 return(
        //                     <ArrowDownwardIcon/>
        //                 )
        //             }
        //             else{
        //                 return(
        //                     <ArrowUpwardIcon/>
        //                 )            
        //             }
        //         }

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
                                        <h6>Filters</h6>
                        </ListItem>
                    </List>
                </Grid>
                    <Grid item xs={12} md={9} lg={9}>
                    <List component="nav" aria-label="mailbox folders">
                        <TextField 
                        onChange={this.onChange5}
                        value= {this.state.find}
                        id="standard-basic" 
                        label="Search" 
                        fullWidth={true}   
                        InputProps={{
                            endAdornment: (
                                <InputAdornment>
                                    <IconButton>
                                        <SearchIcon />
                                    </IconButton>
                                </InputAdornment>
                            )}}
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
                                    <label>Salary</label>
                                    <TextField onChange={this.onChange} value= {this.state.min_salary}  id="standard-basic" label="Enter Min" fullWidth={true} />
                                    <TextField onChange={this.onChange2} value= {this.state.max_salary}  id="standard-basic" label="Enter Max" fullWidth={true}/>

                                </form>                                                                
                            </ListItem>
                            <ListItem button>
                                <form noValidate autoComplete="off">
                                    <label>Duration</label>
                                    <TextField onChange={this.onChange3} value= {this.state.duration}  id="standard-basic" label="Max duration" fullWidth={true} />

                                </form>                                                                
                            </ListItem>
                            
                            <Divider />
                            <ListItem button divider>
                            <select
                                onChange={this.onChange4}
                                value={this.state.type_of_job}
                                id="Type_of_job"
                                className="browser-default"
                            >
                                <option value="Full-time">Full-time</option>
                                <option value="Part-time">Part-time</option>
                                <option value="Work from home">Work from home</option>
                            </select>
                                {/* <Autocomplete
                                    id="combo-box-demo"
                                    options={this.state.users}
                                    getOptionLabel={(option) => option.Type_of_job}
                                    style={{ width: 300 }}
                                    renderInput={(params) => <TextField {...params} label="Select Names" variant="outlined" />}
                                /> */}
                            </ListItem>
                            {/* <ListItem button>
                                <form noValidate autoComplete="off">
                                    <label>Reset</label>
                                    <TextField onChange={this.onChange4} value= {this.state.duration}  id="standard-basic" label="type 0" fullWidth={true} />

                                </form>                                                    
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
                                            <TableCell>Deadline day</TableCell>
                                            <TableCell>Deadline month</TableCell>
                                            <TableCell>Deadline year</TableCell>

                                            <TableCell>Required_skillset</TableCell>
                                            <TableCell><Button onClick={this.sortChange2}>{this.renderIcon2()}</Button>Salary per month</TableCell>

                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                {
                                this.state.filuser.map((user,ind) => (
                                        <TableRow key={ind}>
                                            <TableCell>{ind}</TableCell>
                                            <TableCell>{user.Duration}</TableCell>

                                            <TableCell>{user.title}</TableCell>
                                            <TableCell>{user.name}</TableCell>
                                            <TableCell>{user.Deadline_day}</TableCell>
                                            <TableCell>{user.Deadline_month}</TableCell>
                                            <TableCell>{user.Deadline_year}</TableCell>

                                            <TableCell>{user.Required_skillset}</TableCell>
                                            <TableCell>{user.Salary_per_month}</TableCell>
                                            <TableCell><button
                                            id = {user._id}
                                            value = {user.email}
                                            onClick={this.onApply} 
                                            className="btn btn-large waves-effect waves-light hoverable blue accent-3"
                                            >APPLY</button></TableCell>

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

jobList.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
  };
  const mapStateToProps = state => ({
    auth: state.auth
  });
  export default connect(
    mapStateToProps,
    { logoutUser }
  )(jobList);
