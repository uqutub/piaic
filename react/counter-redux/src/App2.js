import React, { useEffect } from 'react';
import { CounterAction, Counter2Action, AuthAction, useDispatch, useSelector, connect } from './store/index';
// import './App.css';

function App() {

    const dispatch = useDispatch();

    useEffect(()=> {
        setTimeout(() => {
            dispatch(AuthAction.login({email: 'abc@ka.c', password: 'Yahooo123'}))
        }, 1500)
        console.log('ComponentDidMount........')
    }, []); // componentDidMount

  

    const { counter, cs } = useSelector(({ counter, counter2 }) => ({
        counter: counter.counterState,
        cs: counter2.cs
    }));
    const { loader, user, error } = useSelector(({ auth }) => auth);
    // const { counterState: counter } = useSelector(({ counter }) => counter);

    useEffect(()=> {
        console.log('countr has changed');
    }, [counter]); // componentDidMount

    //   const incremnetHandler = () => {
    //     dispatch(CounterAction.incrementFnc());
    //   }

    const decremnetHandler = () => dispatch(CounterAction.decrementFnc());

    return (
        <div className="App">
            <div style={{background: 'yellow'}}>
                <h1>Login</h1>
                {loader ? <span>Loader Ternary....</span> : null}
                {loader && <span>Loader AND....</span>}
            </div>
            
            <header className="App-header">
                Counter App2: {counter}
            </header>
            <button onClick={() => dispatch(CounterAction.incrementFnc())}>
                Increment +
            </button>
            <br />
            <button onClick={decremnetHandler}>Decrement -</button>
            <hr />
            <h2>Counter 2 New Redux State</h2>
            <h3>{cs}</h3>
            <button onClick={() => {
                dispatch(Counter2Action.setCounter(50));
            }}>Set/Reset Counter</button>

            <button onClick={() => {
                dispatch(Counter2Action.inc())
            }}>++++++++</button>
            <button onClick={() => {
                dispatch(Counter2Action.dec())
            }}>--------</button>
        </div>
    );
}

export default App;