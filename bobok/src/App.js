import React, {Component, Fragment} from 'react';
import Toolbar from "./components/UI/Toolbar/Toolbar";
import {Container} from "reactstrap";
import {Route, Switch} from "react-router";
import Regions from "./containers/Regions/Information";


class App extends Component {
  render(){
      return (
          <Fragment>
              <header>
                  <Toolbar/>
              </header>
              <Container>
                  <Switch>
                      <Route path="/" exact component={Regions}/>
                      <Route path="/category/:id" component={Regions}/>
                  </Switch>
              </Container>
          </Fragment>
      );
  }
}

export default App;
