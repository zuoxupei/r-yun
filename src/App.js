import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import  NameCard from './components/NameCard'
import LikesButton from './components/LikesButton'
import DigitalClock from './components/DigitalClock'
import CommentBox from './components/CommentBox'
import Commentlist from './components/Commentlist'

const tags = ['shuaige']

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      cos: ['this is my first reply']
    }
    this.addComment = this.addComment.bind(this);
  }
  addComment(comments){
    this.setState({
      cos: [...this.state.cos,comments]
    })
  }

  render() {
    const {cos} = this.state
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
        <Commentlist comments={this.state.cos}/>
        <CommentBox commentslen={cos.length} onAddComment={this.addComment}/>
      </div>
    );
  }
}

export default App;
