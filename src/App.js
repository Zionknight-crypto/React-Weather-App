import React, { Component } from 'react';
import './App.css';
import sun from './img/sun.png'
import ErrorBoundry from './ErrorBoundry'

/*****************************************/ 
/*               API DATA                */
/*****************************************/

const API_KEY = '336eac8083532c51fc2ac7331f8f597f'
const URL = 'http://api.weatherstack.com'


/*****************************************/ 
/*            App Component              */
/*****************************************/

export class App extends Component {
 
  state = {
    api: [],  
    searchfield: 'Helsinki',
    city: '',
    country: '',
    localtime:'',
    icon: sun,
    temperature: '',
    desc: ''
}   

  componentDidMount() {
    this.getAPI();
  }
      //`${URL}/current?access_key=${API_KEY}&query=${this.state.searchfield}`
    getAPI = async () => {
      const apiCall = await fetch(`${URL}/current?access_key=${API_KEY}&query=${this.state.searchfield}`);
      const data = await apiCall.json();
      console.log(data)
       this.setState({
          city: data.location.name,
          country: data.location.country,
          localtime: data.location.localtime,
          icon: data.current.weather_icons,
          temperature: data.current.temperature,
          desc: data.current.weather_descriptions 
          
      })
    }

  onSearchChange = (e) => {
            this.setState({searchfield: e.target.value })            
  }

  onSubmitChange = (e) => {
    e.preventDefault()
    this.setState({searchfield: e.target.value }) 

    this.getAPI();
  } 

  render() {

    const {city, country, temperature, desc, localtime, icon } = this.state;

        return (
        <div className="app">
          <header className="header">
            <h1 className="header__h1">Weather by city {'- ' + city}</h1>
              <div>
                <form onSubmit={this.onSubmitChange}  className="form">
                  <input className="searchbox" name="searchfield" type="text"  placeholder="city..." value={this.state.searchfield} onChange={this.onSearchChange} />
                  <button type="submit" className="btn">Search</button>
                </form>
              </div>
          </header>

          <main className="main">
            <section>
              <ErrorBoundry>
              <div className="card">
                <p className="description">City: {city}</p> 
                <p className="description">Country: {country}</p>
                <p className="description">Local Time: {localtime}</p>
                <img alt="icon" src={icon}/>
                <p className="description">Degrees Celsius: {temperature}</p>
                <p className="description">{desc}</p>
              </div>
              </ErrorBoundry>
            </section>
            
          </main> 

          <footer className="footer">
            <div className="footer__left">
              <div className="footer__left-copy">&copy; Built in 2020</div>
            </div>
            <div className="footer__right">
              <div className="footer__right-icons">
                  <a className="footer__right-link" target="_blank" rel="noopener noreferrer" href="https://github.com/Zionknight-crypto?tab=repositories">David's github</a>
              </div>
            </div>
          </footer>
        </div>
      )
    }
}
export default App;
