/*
import React, { Component } from 'react';
import './App.css';
// What is state and props?
// State - stored data in an initial state and can be updated or set at any time.
// Props - A data carrier from parent to child elements.

class App extends Component {
  constructor(props) {
    super(props)
    console.log('I am from the constructor')
    this.state = {
      countries: []  // the initial state
    }
  }
  componentDidMount() { // this happens once so now the state value of countries is 250
    const url = 'https://restcountries.eu/rest/v2/all'
    fetch(url)
    .then(response=>response.json())
    .then(data => {
      this.setState({
        countries: data
      })
      console.log(data)
    })

    console.log('component mounted')
  }
  render () {
    console.log('I am from render')
    return (
      <div className="app__container">
        <h1>React Life Cycle</h1>
        <h2>Countries:{this.state.countries.length}</h2> 
        // To show the initial state of counrties [] before set state 0 after set state 250
        </div>
        );
      }
    }
    export default App;
    
*/

/*
import React, { Component } from 'react';
import './App.css';


// What is state and props?
// State - stored data in an initial state and can be updated or set at any time.
// Props - A data carrier from parent to child elements.

const Count = props => {
  return (
  <div>
  <h1>{props.count}</h1>
  <button onClick={props.addOne}>Add one</button>
  </div>)
} 


class App extends Component {
  constructor(props) {
    super(props)

    console.log('I am from the constructor')

    this.state = {
      countries: []
    }
  }

  componentDidMount() {
    const url = 'https://restcountries.eu/rest/v2/all'
    fetch(url)
    .then(response=>response.json())
    .then(data => {
      this.setState({
        countries: data,
        count: 0
      })
      console.log(data)
    })
    console.log('component mounted')
  }

componentDidUpdate(prevProps,prevState) {
  console.log(prevProps,prevState)
  console.log('I am coming from the update')
}
addOne = () => {
  this.setState({count: this.state.count + 1}) 
}
  render () {
    console.log('I am from render')
    return (
      <div className="app__container">
        <h1>React Life Cycle</h1>
        <h2>Countries:{this.state.countries.length}</h2> To show the initial state of counrties []
        <Count count={this.state.count} addOne={this.addOne} /> 
        // This was the function component made at the top of app.js (below) 
        // and we pass in the values as attributes from source to destination 
        // (from state, via props to final element
        )
        // const Count = props => {
        //  return (
        //  <div>
        //  <h1>{props.count}</h1> // from state via props to destination
        //  <button onClick={props.addOne}>Add one</button> from addOne function, passed via props to element destination.
        //  </div>)
} 

      </div>
    );
  }
}
export default App;
*/

/*
import React, { Component } from 'react';
import './App.css';


// What is state and props?
// State - stored data in an initial state and can be updated or set at any time.
// Props - A data carrier from parent to child elements.
const Count = props => {
  return (
  <div>
  <h1>{props.count}</h1>
  <button onClick={props.addOne}>Add one</button>
  </div>)
} 

const Feedback = ( { feedback } ) => <p>{feedback}</p> 

class App extends Component {
  constructor(props) {
    super(props)

    console.log('I am from the constructor')

    this.state = {
      countries: []
    }
  }

  componentDidMount() {
    const url = 'https://restcountries.eu/rest/v2/all'
    fetch(url)
    .then(response=>response.json())
    .then(data => {
      this.setState({
        countries: data,
        count: 0
      })
      console.log(data)
    })
    console.log('component mounted')
  }

componentDidUpdate(prevProps,prevState) {
  console.log('prev Props: ', prevProps, 'prev State: ', prevState)
  console.log('I am coming from the update')
  
}

shouldComponentUpdate(nextProps, nextState) {
  console.log('Next state from should update: ', nextState)
  if(nextState.count < 11) {
    return true // conditional statement to control the onClick event of addOne() to 10 clicks
  }
return false 
}

addOne = () => {
  this.setState({count: this.state.count + 1}) 
}
  render () {
    console.log('I am from render')
    return (
      <div className="app__container">
        <h1>React Life Cycle</h1>
        <h2>Countries:{this.state.countries.length}</h2> To show the initial state of counrties []
        <Count count={this.state.count} addOne={this.addOne} /> 
        {
          this.state.count >= 10 ? <Feedback feedback='You only get 10 chances. Sorry buddy!' /> : ''
        } // on the 10th click this message will appear
        
      </div>
    );
  }
}


export default App;

*/
/*
import React, { Component } from 'react';
import './App.css';


// What is state and props?
// State - stored data in an initial state and can be updated or set at any time.
// Props - A data carrier from parent to child elements.
const Count = props => {
  return (
  <div>
  <h1>{props.count}</h1>
  <button onClick={props.addOne}>Add one</button>
  </div>)
} 

const Feedback = ( { feedback } ) => <p>{feedback}</p> 

class App extends Component {
  constructor(props) {
    super(props)

    console.log('I am from the constructor')

    this.state = {
      countries: [],
      index: 0,
      currentName: '',
      names: ['one','two','three','four'],
      count: 0
    }
  }

  componentDidMount() {
    const url = 'https://restcountries.eu/rest/v2/all'
    fetch(url)
    .then(response=>response.json())
    .then(data => {
      this.setState({
        countries: data,
        count: 0,
        currentName: '',
        names: ['one','two','three','four']
      })
      console.log(data)
    })
    console.log('component mounted')
  }

componentDidUpdate(prevProps,prevState) {
  console.log('prev Props: ', prevProps, 'prev State: ', prevState)
  console.log('I am coming from the update')
  let index = Math.floor(Math.random() * this.state.names.length)
  this.setState({ name: this.state.names[index]})
  let currentName = this.state.names[index]
}

shouldComponentUpdate(nextProps, nextState) {
  console.log('Next state from should update: ', nextState)

if(nextState.currentName === 'three') {
  return false
}
  // if(nextState.count < 11) {
  //   return true
  // }
return true 
}


addOne = () => {
  this.setState({count: this.state.count + 1}) 
}
  render () {
    console.log('I am from render')
    return (
      <div className="app__container">
        <h1>React Life Cycle</h1>
        <h2>Countries:{this.state.countries.length}</h2> To show the initial state of counrties []
        <Count count={this.state.count} addOne={this.addOne} /> 
        {
          this.state.count >= 10 ? <Feedback feedback='You only get 10 chances. Sorry buddy!' /> : ''
        }
        <h1>{this.state.currentName}</h1>
      </div>
    );
  }
}


export default App;

*/