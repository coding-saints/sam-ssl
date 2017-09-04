import React, {Component} from 'react'

import ListSummary from '../ListSummary/ListSummary.js'
import './ListContainer.scss'

export default class ListContainer extends Component {
    constructor(props,state) {
        super(props,state);
    }
    
    componentDidMount() {
        
    }

    render() {
        return (
               <div id="listing-container" style={ (this.props.listings === undefined) ? {display: 'none'} : {} }>
                { 
                    (this.props.listings !== undefined) ?
                        this.props.listings.map( (listing, index) => (          
                            <ListSummary key={index}
                                name={listing.name} 
                                address={listing.address}
                                price={listing.price}
                                summary={listing.summary}
                                image={listing.image}
                            />  
                        )) 
                    : <div></div>
                }
            </div>
        )
    }
}