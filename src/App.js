import React, { Component } from 'react';
import './App.css';
//Radium allows to use psuedo selectors and media queries in inline css.
//App need to be in StyleRoot - Check return in render()
import Radium, { StyleRoot } from 'radium';//Default export, named export
import Person from './Person/Person';
//Class based Component - also referred as containers,smart,statefull
class App extends Component {  
  state = {
    persons : [{
      name : 'Hari'
    }, {
      name : 'Ravi'
    }],
    age : 24
  };
  //only changes in props or state  trigger React to re-render your components and potentially update the DOM in the browser
  updateDataHandler = () => {
    let currentAge = this.state.age;
    this.setState({age : currentAge+1});
  };

  render() {
    return (
      <StyleRoot>
        <div className="App">
          <h1 className="App-title">Welcome</h1>

          <button onClick={this.updateDataHandler}>Update Data</button>

          <Person name={this.state.persons[0].name} age={this.state.age}> Jarvis </Person>
          <Person name={this.state.persons[1].name} age={this.state.age + 3}/>   <Person />        
        </div>
      </StyleRoot>
      //Only one element need to be returned
    );
    // return React.createElement('div', {className : 'App'}, React.createElement('h1', null, `Hi I'm a React App`));
  }

  // button - onClick(React) - onclick(HTML)
}

export default Radium(App);
