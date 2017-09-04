import React, { Component } from "react";

export default class TransitionState extends Component {
 
 constructor(props, state) {
     this.state = {
         hero: {
             state: true,
             transition: "fade"
         }
     }
 }

getElem(elem)
{
    return this.state.elem.state;
}

update(elem, state) {
    this.state.elem.state = state;
}

}