import React, { Component } from "react";
import "./Main.scss";

import apartment from '../../public/assets/apartment-hero.jpg';


export default class Main extends Component {
    
    constructor(props, state) {
        super(props, state);
        
        this.state = {
            locations: []
        }
    }

    componentDidMount() {
        const locations = ["Harrisburg", "Enola", "Mechanicsburg", "ABC"]
        
        this.setState({
            locations: locations
        })
    }
    
    
    render() {
        return(
                <div className="main-wrapper">
                        <div id="intro">
                            <h1>My Awesome Apartments</h1>
                            <div id="search">
                                <select id="search-text" onChange={ () => this.props.doit(true) }>
                                {
                                this.state.locations.map(
                                    (location, index) => (
                                        <option key={index}>{location}</option>
                                    )
                                )
                                }
                                </select>
                            </div>
                        </div>
                    <div id="overlay"></div>
                </div>
            )
    }
}

