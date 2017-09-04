import React from 'react'
import PropertyResultsSideBar from '../PropertyResultsSideBar/PropertyResultsSideBar'
import Property from '../Property/Property'
import './PropertyView.scss'

import {CSSTransition}  from 'react-transition-group'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

const PropertyView = (props) => (
        <div className="app-wrapper">
                <Header />
                <div className="propertyview">
                        <PropertyResultsSideBar />
                        <Property />
                </div>
                <Footer />
        </div>
    )
    
export default PropertyView