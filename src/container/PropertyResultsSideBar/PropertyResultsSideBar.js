import React, {Component} from 'react'
import './PropertyResultsSideBar.scss'
export default class PropertyResultsSideBar extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            
        }
    }
    
    render() {
        return(
            <div id="results-sidebar">
                
                <div className="property">
                    <div className="property-name">My House</div>
                    <div className="property-price">$1,000,000</div>
                    <div className="property-address">123 Dumpster Ave SideofStreet, NJ</div>
                </div>
                
                <div className="property">
                    <div className="property-name">My House</div>
                    <div className="property-price">$1,000,000</div>
                    <div className="property-address">123 Dumpster Ave SideofStreet, NJ</div>
                </div>
                
                <div className="property">
                    <div className="property-name">My House</div>
                    <div className="property-price">$1,000,000</div>
                    <div className="property-address">123 Dumpster Ave SideofStreet, NJ</div>
                </div>
                
                <div className="property">
                    <div className="property-name">My House</div>
                    <div className="property-price">$1,000,000</div>
                    <div className="property-address">123 Dumpster Ave SideofStreet, NJ</div>
                </div>
                
            </div>
            )
    }
}