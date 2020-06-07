import React from 'react';
import { CounterAction, useDispatch, useSelector, connect } from './store/index';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <header className="App-header">
        <h1>Counter</h1>
        <h2>{this.props.counter}</h2>
        <button onClick={this.props.plus}>Increment +</button>
        |
        <button onClick={this.props.minus}>Decrement -</button>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  counter: state.counter.counterState,
});

const mapDispatchToProps = (dispatch) => ({
  plus: (payload) => dispatch(CounterAction.increment(payload)),
  minus: (payload) => dispatch(CounterAction.decrement(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);




// function App() {

//   const dispatch = useDispatch();

//   const { counter } = useSelector(({ counter }) => ({
//     counter: counter.counterState
//   }));

//   // const { counterState: counter } = useSelector(({ counter }) => counter);

//   const incremnetHandler = () => {
//     dispatch(CounterAction.increment());
//   }

//   const decremnetHandler = () => dispatch(CounterAction.decrement());

//   return (
//     <div className="App">
//       <header className="App-header">
//         Counter: {counter}
//       </header>
//       <button onClick={incremnetHandler}>Increment +</button>
//       <br />
//       <button onClick={decremnetHandler}>Decrement -</button>
//     </div>
//   );
// }

// export default App;
