import React, { Component } from 'react';
import Header from './header';
import {Button} from './button'

export default class App extends Component {
    constructor(props) {
    super(props)

    this.state = {
      count: 0,
      asdf: "sdfghj",
      hshs: 90
    }
  }

increment(arg) {
  this.setState({count: this.state.count + arg})
}

  render() {
    return (
      <div>
        <Header />
        <Header />
        <Header />
        <div className="center">
          <Button title="Counting Button" grace={() => {this.increment(1)}}/>
          <Button className="" title="Our Amazzing Button" body="Our amazing content" grace={() => {this.increment(3)}}/>
        </div>
        
        <Button title="Second Button" dog="rover"/>
        <Button title="Third Button"/>
        <div className="center">
          <div>{this.state.count}</div>
        </div>
      </div>
    );
  }
}
