import React, { Component } from 'react';

import Header from './components/common/header';
import Footer from './components/common/footer';
import Home from './components/home';
import Courses from './components/courses';
import AboutUs from './components/aboutUs';

import {Route, Redirect, Switch} from 'react-router';
import { BrowserRouter as Router} from 'react-router-dom';


class App extends Component {
  constructor(){
    super();
    this.state = {
        loggedIn:true,
    }
  }
  authorized = (bool)=>{
      this.setState({loggedIn:bool});
  }

  render() {
    return (
      <div className="App">
         <Router>
                <div>
                        <Route path="/" component={Header} />
                        <Switch>
                            <Route exact strict path="/" component={()=>{ return <Home authorized={(isValid)=>{ this.authorized(isValid)}}/>}}  />
                            <Route path="/courses" exact component={()=>{ return (this.state.loggedIn?<Courses/> : <div>{alert('you need to sign in first')}<Redirect  to="/"/></div>) }} />
                            <Route path="/aboutUs" exact component={AboutUs} />
                        </Switch>
                        <Route path="/" component={Footer} />
                </div>
           </Router>
      </div>
    );
  }
}

export default App;
