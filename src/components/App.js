import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import HogContainer from './HogContainer'
import HogDetail from './HogDetail'
import HogTile from './HogTile'

class App extends Component {
  constructor() {
    super()
    this.state= {
      oneHog: null,
      greased: null
    }
  }

  onChangeType= (e) => {
    if(e.currentTarget.value === "greased") {
      this.setState ({
        greased: true
      })
    }
    this.setState({
      greased: e.curreTarget.value
    })
  }

  displayDetails=(e)=> {
    e.preventDefault()
    let tHog = hogs.find(hog=> hog.name === e.currentTarget.id)
    this.setState({
      oneHog: tHog,
    })
  }

  render() {
    return (
      <div className="App">
          <Nav />
          <HogContainer hogs={hogs} displayDetails={this.displayDetails} />
          {this.state.oneHog !== null ? <HogDetail oneHog={this.state.oneHog}/> : null}
      </div>
    )
  }
}

export default App;
