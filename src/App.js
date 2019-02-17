import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import  NameCard from './components/NameCard'
import LikesButton from './components/LikesButton'
import DigitalClock from './components/DigitalClock'
import CommentBox from './components/CommentBox'

const tags = ['shuaige']

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            this is my first react-app
          </p>
          <a>
            r-yun zxp
          </a>
        </header>
        <NameCard name='zxp' number={15221104634} isHuman={true} tags={tags}/>
        <LikesButton/>
        <DigitalClock/>
        <CommentBox/>
      </div>
    );
  }
}

export default App;
