import React, {Component, Fragment} from 'react';
import Toolbar from "./components/UI/Toolbar/Toolbar";
import {Container} from "reactstrap";
import {Route, Switch} from "react-router";
import Regions from "./containers/Information/Information";
import NewInfo from "./containers/NewInfo/NewInfo";
import Register from "./containers/Register/Register";
import {NotificationContainer} from "react-notifications";
import 'react-notifications/lib/notifications.css';
import Login from "./containers/Login/Login";


class App extends Component {
  render(){
      return (
          <Fragment>
              <NotificationContainer/>
              <header>
                  <Toolbar/>
              </header>
              <Container>
                  <Switch>
                      <Route path="/" exact component={Regions}/>
                      <Route path="/category/:id" component={Regions}/>
                      <Route path="/new/information" component={NewInfo}/>
                      <Route path="/register" component={Register}/>
                      <Route path="/login" component={Login}/>
                  </Switch>
              </Container>
          </Fragment>
      );
  }
}

export default App;
