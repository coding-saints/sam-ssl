import React, {Component} from 'react'
import './Property.scss'
export default class Property extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            property: {
                name: "Tester McTesterson",
                address: "101 Test Lane New York, NY 10001",
                images: [
                    "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Gelbensande3.jpg/1200px-Gelbensande3.jpg",
                    "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Gelbensande3.jpg/1200px-Gelbensande3.jpg",
                    "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Gelbensande3.jpg/1200px-Gelbensande3.jpg",
                    "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Gelbensande3.jpg/1200px-Gelbensande3.jpg",
                    "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Gelbensande3.jpg/1200px-Gelbensande3.jpg"
                ]
            }
        }
    }
    
    render() {
        return(
            <div id="property-detail">
            
                <div className="property-detail-name">{this.state.property.name}</div>
                <div className="property-detail-address">{this.state.property.address}</div>
                                
                <div className="property-detail-gallery">
                    <div className="col">
                        <div classNamme="image">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Gelbensande3.jpg/1200px-Gelbensande3.jpg" width="100%"/>
                        </div>
                    </div>
                    <div className="col">
                        <div classNamme="image">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Gelbensande3.jpg/1200px-Gelbensande3.jpg" width="100%"/>
                        </div>
                        <div classNamme="image">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Gelbensande3.jpg/1200px-Gelbensande3.jpg" width="100%"/>
                        </div>
                    </div>
                    <div className="col">
                        <div classNamme="image">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Gelbensande3.jpg/1200px-Gelbensande3.jpg" width="100%"/>
                        </div>
                        <div classNamme="image">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Gelbensande3.jpg/1200px-Gelbensande3.jpg" width="100%"/>
                        </div>
                    </div>
                </div>
            
            </div>
            )
    }
}