import React from 'react'
import PropertyResultsSideBar from '../PropertyResultsSideBar/PropertyResultsSideBar'
import Property from '../Property/Property'
import './PropertyView.scss'
import {Listings, List} from '../ListContainer/listings.js'

import {CSSTransition}  from 'react-transition-group'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

export default class PropertyView extends React.Component {
        constructor(props) {
                super(props);
                this.getProperty = this.getProperty.bind(this)
                this.state = {
                        List: undefined
                }
        }
        
         getProperty(showProperty) {
                if(showProperty)
        this.setState({
            List:List
        })
        console.log(this.state.List)
    }
    
        
        render(){
                return(
                <div className="app-wrapper">
                        <Header />
                        <div className="propertyview">
                                <PropertyResultsSideBar doit={this.getProperty} listings={Listings} />
                               <Property property={this.state.List} />
                        </div>
                        <Footer />
                </div>
                        )
        }
}

