import React, {Component} from 'react'
import './Property.scss'
import {List} from '../ListContainer/listings'
export default class Property extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            List: undefined
           
        }
        
    }
    
   
    render() {
        console.log(this.props.property);
        
        if(this.props.property === undefined)
            return null
  
        return(
            <div id="property-detail">

                <div className="property-detail-gallery">
                    <div className="col">
                        <div className="image">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Gelbensande3.jpg/1200px-Gelbensande3.jpg" width="100%"/>
                        </div>
                    </div>
                    <div className="col">
                        <div className="image">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Gelbensande3.jpg/1200px-Gelbensande3.jpg" width="100%"/>
                        </div>
                        <div className="image">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Gelbensande3.jpg/1200px-Gelbensande3.jpg" width="100%"/>
                        </div>
                    </div>
                    <div className="col">
                        <div className="image">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Gelbensande3.jpg/1200px-Gelbensande3.jpg" width="100%"/>
                        </div>
                        <div className="image">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Gelbensande3.jpg/1200px-Gelbensande3.jpg" width="100%"/>
                        </div>
                    </div>
                </div>
                
                    
                <div className="property-detail-address">{this.props.property[0].address}</div>
                <div className="property-detail-meta-summary">
                    {this.props.property[0].meta.beds} beds &bull; {this.props.property[0].meta.baths} baths &bull; {this.props.property[0].meta.sqft.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} sqft
                </div>
                
                <div className="property-detail-summary">{this.props.property[0].summary}</div>
                
                <div className="property-detail-meta">
                    <h3>Facts and Features</h3>
                    
                </div>
            
            </div>
            )
    }
}