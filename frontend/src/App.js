import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";
import { Provider } from "react-redux";
import store from "./store";
import Navbar from "./components/layout/Navbar";
import Landing from "./components/layout/Landing";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import PrivateRoute from "./components/private-route/PrivateRoute";
import Dashboard from "./components/dashboard/Dashboard";
import Createjob from "./components/dashboard/Createjob";
import UserList from "./components/dashboard/UserList";
import profileRec from "./components/dashboard/profileRec";
import editRec from "./components/dashboard/editRec";
import jobList from "./components/dashboard/jobList";
import profileapl from "./components/dashboard/profileapl";
import editApl from "./components/dashboard/editApl";
import viewApc from "./components/dashboard/viewApc";
import Editjob from "./components/dashboard/Editjob";
import viewEmp from "./components/dashboard/viewEmp";





// Check for token to keep user logged in
if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
// Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
    // Redirect to login
    window.location.href = "./login";
  }
}
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Navbar />
            <Route exact path="/" component={Landing} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Switch>
              <PrivateRoute exact path="/dashboard" component={Dashboard} />
              <PrivateRoute exact path="/Createjob" component={Createjob} />
              <PrivateRoute exact path="/UserList" component={UserList} />
              <PrivateRoute exact path="/profileRec" component={profileRec} />
              <PrivateRoute exact path="/editRec" component={editRec} />
              <PrivateRoute exact path="/jobList" component={jobList} />
              <PrivateRoute exact path="/profileapl" component={profileapl} />
              <PrivateRoute exact path="/editApl" component={editApl} />
              <PrivateRoute exact path="/viewApc" component={viewApc} />
              <PrivateRoute exact path="/Editjob" component={Editjob} />
              <PrivateRoute exact path="/viewEmp" component={viewEmp} />


            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}
export default App;