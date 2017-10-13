import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import './ListSummary.scss'

export default class ListSummary extends Component {
    
    constructor(props) {
        super(props);
    }
    
    
    render() {
        return(
            <div onClick={this.props.onClick} className="listing">
                <div className="listing-image-box">
                   <Link to="/1"> 
                       <div className="listing-image">
                            <img src={this.props.image} />
                            <div className="listing-price">${this.props.price}</div>
                        </div>
                   </Link>
                </div>
                <div className="listing-info-box">
                    <div className="listing-address">{this.props.address}</div>
                    <div className="listing-summary">{this.props.summary}</div>
                    <div className="listing-meta">{this.props.meta}</div>
                </div>
            </div>
        )
    }
}