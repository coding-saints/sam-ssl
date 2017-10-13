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
    
                {this.props.property[0].name}
                <img src={this.props.property[0].image} width="250" />
            
            
            
                {/*<div className="property-detail-name">{this.state.property.name}</div>
                <div className="property-detail-address">{this.state.property.address}</div>
                                
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
                </div>*/}
            
            </div>
            )
    }
}