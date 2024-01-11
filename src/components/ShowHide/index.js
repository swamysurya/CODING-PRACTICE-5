// Write your code here
import {Component} from 'react'

import './index.css'

class ShowHide extends Component {
  state = {card1: true, card2: true}

  firstBtn = () => {
    this.setState(prevState => ({card1: !prevState.card1}))
  }

  secondBtn = () => {
    this.setState(prevState => ({card2: !prevState.card2}))
  }

  render() {
    const {card1, card2} = this.state
    return (
      <div className="bg-container">
        <div className="card">
          <h1 className="showhideHeading">Show/Hide</h1>
          <div className="namesCardContainer">
            <div className="nameCard">
              <button className="btn" type="button" onClick={this.firstBtn}>
                Show/Hide Firstname
              </button>
              {card1 ? <p className="name">Joe</p> : null}
            </div>
            <div className="nameCard">
              <button className="btn" type="button" onClick={this.secondBtn}>
                Show/Hide Lastname
              </button>
              {card2 ? <p className="name">Jonas</p> : null}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
