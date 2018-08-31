import React from 'react'


export default class HogDetail extends React.Component {

  render() {
    return (
      <div>
        <h1>{this.props.oneHog.name}</h1>
        <ul>
          <li>Specialty: {this.props.oneHog.specialty}</li>
          <li>Highest Medal Achieved: {this.props.oneHog["highest medal achieved"]}</li>
          <li>{this.props.oneHog['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']}</li>
        </ul>
        <img src={require(`../hog-imgs/${this.props.oneHog.name.toLowerCase().split(' ').join('_')}.jpg`)}/>
      </div>
    )
  }
}
