import React, { Component } from "react";
import {Listings} from '../ListContainer/listings.js'
import Main from "../Main/Main"
import ListContainer from '../ListContainer/ListContainer'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import {CSSTransition, TransitionGroup}  from 'react-transition-group'
import TransitionState from '../TransitionState/TransitionState'
import ApplicationContainer from '../ApplicationContainer/ApplicationContainer'


export default class HomeView extends Component {

    constructor(props, state) {
        super(props, state);
        
        this.state = {
            listings: undefined
        }
        
       this.getListings = this.getListings.bind(this);
    }

        getListings(showListings) {
            console.log("getListings is firing! boom boom")
            if(showListings)
                this.setState({
                    listings: Listings
                })
            console.log(this.state.listings);
        }

        render() {
            
            const animation = () => (
                <CSSTransition in={true} key={this.props.location.pathname} timeout={5000} classNames="fade" onExit={() => (console.log("Exiting Main.js"))} onEnter={() => (console.log("Entering Main.js"))}>
                    <Main {...this.props} />
                </CSSTransition>
            )
            
             return ( 
                 <div className="app-wrapper">
                    <Header />
                    <Main {...this.props} doit={this.getListings} />
                    <ListContainer {...this.props} listings={this.state.listings} />
                   { /* <ApplicationContainer/> */ }
                  
                    <Footer />
                </div>
                )
        }
}