import React, { Component } from 'react';
import {Button} from 'react-bootstrap';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import StatusBox from '../components/StatusBox';
import RadioButtons from '../components/RadioButtons';
import Scroll from '../components/Scroll';
import './App.css';


class App extends Component {
  constructor() {
    super()
    this.state = {
      shows: [],
      searchfield: ''
    }
  }


  componentDidMount() {
    fetch('https://api.tvmaze.com/shows')
      .then(response=> response.json())
      .then(users => {this.setState({ shows: users})});
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value })
  }


  render() {
    const { shows, searchfield, option } = this.state;
    const filteredShows = shows.filter(show =>{
      return show.name.toLowerCase().includes(searchfield.toLowerCase());    
    })
  

    return !shows.length ?
       <h1 className='tc title'>Loading...</h1>:
           <div className='tc'>
           <img className= 'logo' src="https://cdn.jsdelivr.net/gh/RonM-11/react_tv_show@master/img/logo.png" alt="logo" />

           <h1 className='f1'>Tv shows</h1>
           <SearchBox className='sb' searchChange={this.onSearchChange}/>     
           <Scroll>
               <CardList shows={filteredShows} />

           </Scroll>
         </div>
     }    
}

export default App;