import React from 'react';
import { CounterAction, useDispatch, useSelector, connect } from './store/index';
// import './App.css';

class App extends React.Component {
  render() {
    return (
      <header className="App-header">
        <h1>Counter App</h1>
        <h2>{this.props.counter}</h2>
        <button onClick={this.props.plus}>Increment +</button>
        |
        <button onClick={this.props.minus}>Decrement -</button>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({ // state: is a redux store state
  counter: state.counter.counterState,
});

const mapDispatchToProps = (dispatch) => ({
  plus: (payload) => dispatch(CounterAction.incrementFnc(payload)),
  minus: (payload) => dispatch(CounterAction.decrementFnc(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
