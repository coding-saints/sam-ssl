import React, { Component } from "react";
import "./Main.scss";

import apartment from '../../public/assets/apartment-hero.jpg';


export default class Main extends Component {
    
    constructor(props, state) {
        super(props, state);
        
        this.state = {
            locations: [],
            beds: []
        }
    }

    componentDidMount() {
        const locations = ["Harrisburg", "Enola", "Mechanicsburg", "ABC"]
        const beds = ['1','2','3','4']
        this.setState({
            locations: locations
        })
    }
    
    
    render() {
        return(
                <div className="main-wrapper">
                        <div id="intro">
                            <h1>SSL PROPERTIES</h1>
                            <div id="search">
                                <select id="search-text" onChange={ () => this.props.doit(true) }>
                                    <option>Choose A Location</option>
                                    {
                                    this.state.locations.map(
                                        (location, index) => (
                                            <option key={index}>{location}</option>
                                          
                                        )
                                    )
                                    }
                                </select>
                                 <div className="beds">
                          <select className="search-beds">
                          <option>Beds</option>
                          </select>
                                </div>
                            </div>
                        </div>
                    <div id="overlay"></div>
                </div>
            )
    }
}

