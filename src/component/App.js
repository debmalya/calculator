import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';
import './App.css';
//import jaegetClient from 'jaeger-client';
// Related to zipkinSimple
import zipkinSimple from 'zipkin-simple'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
    
     this.zipkinTracerSimple = new zipkinSimple({
             debug: true,
             host: "localhost",
             port: "9411",
             path: "/api/v2/spans",
             sampling: 1.0,
       }) 
    
	   this.zipkinSimpleTraceData
  }

  handleClick = (buttonName) => {
    // zipkin-simple tracing
	  this.zipkinSimpleTraceData=this.zipkinTracerSimple.getChild(this.zipkinSimpleTraceData);
    this.zipkinSimpleTraceData = this.zipkinTracerSimple.sendClientSend(this.zipkinSimpleTraceData, {
	     service: 'handleClick',
	     name:'Clicked ' + buttonName 
    })  
	console.log(" zipkinSimpleTraceData: "+ this.zipkinSimpleTraceData )
	// end of zipkin-simple tracing
    this.setState(calculate(this.state, buttonName));
  }

  render() {
    return (
      <div className="component-app">
        <Display
          value={this.state.next || this.state.total || '0'}
        />
        <ButtonPanel
          clickHandler={this.handleClick}
        />
      </div>
    );
  }
}
export default App;
