import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import HomeView from '../HomeView/HomeView'
import PropertyView from '../PropertyView/PropertyView'
import{Route, Switch} from 'react-router-dom'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

import './App.scss'

const App = (props) => (
  <div id="page-container">
  <TransitionGroup>
  <CSSTransition key={props.location.pathname} classNames="fade" timeout={0} mountOnEnter={true} unmountOnExit={true} appear>
    <Switch location={props.location}>
          <Route exact path="/" component={HomeView} />
          <Route path="/:listingId" component={PropertyView} />
    </Switch>
    </CSSTransition>
    </TransitionGroup>
  </div>
);


export default App