import React from 'react';
import {
  BrowserRouter as Router,
  Route,NavLink
} from "react-router-dom";
import { connect } from "react-redux"
import router from './router'
import GuardRouter from './gurdRouter/guard'
import HotMovie from './views/movies/hotMovies'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      router
    }
  }
  render() {
    return (
      <div >
        <Router>
          {            
            router.map((v, i) => {
              return (
              
                <Route key={i} path={v.path} exact={v.exact} render={() => <GuardRouter {...v}></GuardRouter>}></Route>
                
              )
             
            }
          
            )
          }
            
        </Router>
      </div>
    );
  }
}

export default connect(null, null)(App);
