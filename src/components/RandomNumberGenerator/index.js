/* eslint-disable react/button-has-type */
import {Component} from 'react'

import './index.css'

class RandomNumberGenerator extends Component {
  state = {number: 0}

  onRandom = () => {
    this.setState({number: Math.ceil(Math.random() * 100)})
  }

  render() {
    const {number} = this.state
    return (
      <div className="bg-container">
        <div className="container">
          <h1 className="heading">Random Number</h1>
          <p className="para">
            Generate a random number in the range of 0 to 100
          </p>
          <button className="button" onClick={this.onRandom}>
            Generate
          </button>
          <div className="number-description">
            <p>{number}</p>
          </div>
        </div>
      </div>
    )
  }
}
export default RandomNumberGenerator
