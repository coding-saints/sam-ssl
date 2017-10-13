import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import HomeView from '../HomeView/HomeView'
import PropertyView from '../PropertyView/PropertyView'
//import Listings from '../ListContainer/listings.js'
import{Route, Switch} from 'react-router-dom'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import './App.scss'

export default class App extends React.Component {
  
  constructor(props) {
    super(props);
    
    this.state = {
      listings: undefined
    }
  }
  
  render() {
    return(
        <div id="page-container">
  <TransitionGroup>
  <CSSTransition key={this.props.location.pathname} classNames="fade" timeout={0} mountOnEnter={true} unmountOnExit={true} appear>
    <Switch location={this.props.location}>
          <Route exact path="/" component={HomeView}  />
          <Route path="/:listingId" component={PropertyView}  />
    </Switch>
    </CSSTransition>
    </TransitionGroup>
  </div>
);
  }
}




