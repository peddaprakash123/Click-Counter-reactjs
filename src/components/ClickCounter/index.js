import {Component} from 'react'

import './index.css'

class ClickCounter extends Component {
  state = {count: 0, key: 1}

  onIncreament = () => {
    this.setState(prevState => ({
      count: prevState.count + 1,
      key: prevState.key + 1,
    }))
  }

  onClear = () => {
    this.setState({
      count: 0,
      key: 0,
    })
  }

  render() {
    const {count} = this.state
    return (
      <div className="bg-container">
        <h1 className="heading">
          The Button has been clicked <span className="number">{count}</span>{' '}
          times
        </h1>
        <p className="paragraph">Click the button to increase the count!</p>
        <div>
          <button type="button" className="button" onClick={this.onIncreament}>
            Click Me!
          </button>
          <button type="button" className="button1" onClick={this.onClear}>
            Clear Me!
          </button>
        </div>
      </div>
    )
  }
}
export default ClickCounter