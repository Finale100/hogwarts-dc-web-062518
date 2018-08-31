import React from 'react'
import HogTile from './HogTile'

export default class HogContainer extends React.Component {


    render() {
      return(
    <div>
      <div>
        <input type='radio' id='none' name='greased' value='none' onChange={(e)=>{this.props.onChangeType(e.target.value)}}/>
        <label for="none"> None</label>
      </div>
      <div>
        <input type='radio' id='greased' name='greased' value='greased'/>
        <label for="greased"> Greased</label>
      </div>
      <div>
        <input type='radio' id='notGreased' name='greased' value='not greased'/>
        <label for="notGreased"> Not Greased</label>
      </div>
      <div>
      {this.props.hogs.map(hog => <HogTile hog={hog} key={hog.name} displayDetails={this.props.displayDetails}/>)}
      </div>
    </div>
    )
  }
}
