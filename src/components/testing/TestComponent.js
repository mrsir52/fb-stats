import React, { Component } from "react";
import { connect } from 'react-redux'
import { incrementCounter, decrementCounter } from './testAction'

const mapState = (state) => ({
    data: state.test.data
})

const actions = {
  incrementCounter,
  decrementCounter
}

class TestComponent extends Component {
  render() {
    const { data, incrementCounter, decrementCounter } = this.props;
    return (
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            The answer is {data}
          </p>
          <button onClick={incrementCounter}>Increment</button>
          <button onClick={decrementCounter}>Decrement</button>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    );
  }
}


export default connect(mapState, actions)(TestComponent)