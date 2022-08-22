// Write your code here.

import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {count: 0}

  onIncrement = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
  }

  render() {
    const {count} = this.state

    return (
      <div className="bg-container">
        <div className="card-container">
          <div className="letters-count-container">
            <h1 className="heading">Calculate the Letters you enter</h1>
            <div className="label">
              <label htmlFor="label" className="para">
                Enter the phrase
              </label>
              <input
                type="text"
                name="label"
                id="label"
                placeholder="Enter the phrase"
                onChange={this.onIncrement}
                className="input-class"
              />
            </div>
            <p className="para1">No.of Letters: {count}</p>
          </div>
          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
              alt="letters calculator"
              className="image"
            />
          </div>
        </div>
      </div>
    )
  }
}

export default LettersCalculator
