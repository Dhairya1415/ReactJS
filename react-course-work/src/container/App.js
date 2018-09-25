//import Radium, {StyleRoot} from 'radium';
import Cockpit from '../components/Cockpit/Cockpit.js';
import React, { Component } from 'react';
// import logo from './logo.svg';
import Persons from '../components/Persons/Persons.js'
import classes from './App.css';

class App extends Component {
  state = {
    persons: [
        {id: '1', name: 'MAX', age: 28},
        {id: '2', name: 'MANU', age: 29},
        {id: '3', name: 'STEPH', age: 26},

    
    ],

    showPersons: false
  }

  switchNameHandler = (newName) =>{
    //This Doesnt Work this.state.persons[0].name = 'Maximilian';
    this.setState ({
        persons: [
        {name: newName, age: 28},
        {name: 'MANU', age: 29},
        {name: 'STEPH', age: 27}
    ]
    })
  }

  nameChangedHandler = ( event, id ) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    // const person = Object.assign({}, this.state.persons[personIndex]);

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState( {persons: persons} );
  }

  toggelPersons = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }
  
  deletePersonHandler = (PersonIndex) => {
    const persons = [...this.state.persons];
    persons.splice(PersonIndex, 1);
    this.setState({persons: persons});
  }
    
  render() {
    

    let persons = null;

      if(this.state.showPersons) {
        persons = <Persons 
                  persons={this.state.persons}
                  clicked={this.deletePersonHandler}
                  changed={this.nameChangedHandler}
                />;
         
    
 }

    return (
      
      <div className={classes.App}>
        <Cockpit 
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          clicked={this.toggelPersons}
        /> 
        {persons}      
      </div>
      
      );
  }
}

export default App;


// <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h1 className="App-title">Welcome to React</h1>
//         </header>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>


// return React.createElement('div', null, 'h1', 'It doesnt work.');
// return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'It works now'));
  // let persons = null;
  //   if(this.state.showPersons) {
  //     persons = (
  //         <div>
  //             {this.state.persons.map(person => {
  //               return 
  //               <Person name={person.name} age={person.age} />
  //             })}
  //         </div>
  //      );
  //   }
  // <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
  //           <Person 
  //             name={this.state.persons[1].name} 
  //             age={this.state.persons[1].age}
  //             click={this.switchNameHandler.bind(this, 'Max!')}
  //             change={this.nameChangedHandler}
  //             >My Hobbies: Racing</Person>
  //         <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>