import React, {Component} from 'react'
import {render} from 'react-dom'
import './index.scss';

export default class Test extends Component {
    constructor() {
        super();
        this.state = {

        }
    }
    componentDidMount() {
         let testOne = document.querySelector(".test").innerHTML = " or is it?";
    }
    render() {
       
        return(
            <div className="test">test complete{this.testOne}</div>
        )
    }
}

render(
    <Test />,
    document.getElementById('root')
)