import React, {Component} from 'react'
import ListSummary from '../ListSummary/ListSummary'
import './PropertyResultsSideBar.scss'

export default class PropertyResultsSideBar extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            listings: undefined
        }
    }
    
    
    render() {
        return(
            <div id="results-sidebar">
               { this.props.listings.map( (listing, index) => (<ListSummary key={index}
                                name={listing.name} 
                                address={listing.address}
                                onClick={() => this.props.doit(true)}
                                price={listing.price} />)
                )
               }
            </div>
            )
    }
}