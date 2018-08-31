import React from 'react'



export default class HogTile extends React.Component {
constructor(props){
  super(props)
}



  render() {
    return (
      <div id={this.props.hog.name} className='pigTile' onClick={this.props.displayDetails}>
      <h1>{this.props.hog.name}</h1>
      <img src={require(`../hog-imgs/${this.props.hog.name.toLowerCase().split(' ').join('_')}.jpg`)}></img>
      </div>
    )
  }
}
