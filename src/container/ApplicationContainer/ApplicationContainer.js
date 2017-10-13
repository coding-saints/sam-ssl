import React, {Component} from 'react'
import { Transition } from 'react-transition-group'
import './ApplicationContainer.scss'

const duration = 500;

const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out`,
  display: 'none',
  width:'100%',
  opacity: 0,
  padding: 20,
  backgroundColor: '#FFF',
  position:'absolute'
}

const transitionStyles = {
  entering: { opacity: 0, display:'block'},
  entered: { opacity: 1, display:'block' }, 
  
  exiting: { opacity:1, display:'block' },
  exited: { opacity:0, display:'block' }
};

export default class ApplicationContainer extends Component {
  state = { 
    show: [true,false,false],
    showIndex: 0
  }

  handleToggle(e) {
    
    const nextIndex = (this.state.showIndex+1 == this.state.show.length) ? 0 : this.state.showIndex+1;

    this.setState(({ show }) => ({
      show: this.state.show.map( (s,i) => {
        if(i == this.state.showIndex || i == nextIndex)
          return !s;
          
          return s;
      } ),
      showIndex: nextIndex
    }))
    
    e.preventDefault();
  }
  
  render() {
    const { show } = this.state
    return (
      <div>
        <div>
          <div className="ac-wrapper"> 
              <form>
            
                <Transition in={show[0]} timeout={duration}>
                {(state) => (
                  <div style={{
                  ...defaultStyle,
                  ...transitionStyles[state]
                }}>
                    <label htmlFor="fname">First Name</label>
                    <input type="text" id="fname" name="firstname" placeholder="Your name.."/>
                    
                    <label htmlFor="lname">Last Name</label>
                    <input type="text" id="lname" name="lastname" placeholder="Your last name.."/>
                    
                    <input type="submit" value="Submit" onClick={(e) => this.handleToggle(e) } />
                  </div>
                  )}
                </Transition>
                
                <Transition in={show[1]} timeout={duration}>
                {(state) => (
                  <div style={{
                  ...defaultStyle,
                  ...transitionStyles[state]
                }}>
                    <label htmlFor="fname">First Name</label>
                    <input type="text" id="fname" name="firstname" placeholder="Your name.."/>
                    
                    <input type="submit" value="Submit" onClick={(e) => this.handleToggle(e) } />
                  </div>
                  )}
                </Transition>
                                
                <Transition in={show[2]} timeout={duration}>
                {(state) => (
                  <div style={{
                  ...defaultStyle,
                  ...transitionStyles[state]
                }}>
                    <label htmlFor="fname">First Name</label>
                    <input type="text" id="fname" name="firstname" placeholder="Your name.."/>
                    
                    <input type="submit" value="Submit" onClick={(e) => this.handleToggle(e) } />
                  </div>
                  )}
                </Transition>
                
              </form>
          </div>
        </div>
      </div>
    )
  }
}

/*export default class ApplicationContainer extends Component {
    constructor() {
        super();
        this.state = {
             in: false
        }
    }
    
    toggleEnterState()  {
        this.setState(
            {
                in: true   
            }
        )
    }
    

    render() {
      
        return (
    <div>
      <Transition in={this.state.in} timeout={500} />
      <button onClick={this.toggleEnterState}>Click to Enter</button>
    </div>
  );

        return(
            <div className="ac-wrapper"> 
                <Transition in={this.state.in} timeout={1000}>
                {
                    (state) => (
                        <form style={{...transitionStyles[state]}}>
                            <label htmlFor="fname">First Name</label>
                            <input type="text" id="fname" name="firstname" placeholder="Your name.."/>
                            
                            <label htmlFor="lname">Last Name</label>
                            <input type="text" id="lname" name="lastname" placeholder="Your last name.."/>
                            
                            <input type="submit" value="Submit" onClick={this.toggleEnterState} />
                        </form>   
                    )
                }
                </Transition>
            </div>
        )
    }
}*/