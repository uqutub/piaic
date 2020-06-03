import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Todos from './Todos';
// import Parent from './ParentChild';
// import Todos from './Todos';
// import PromiseExample from './PromiseExample';
import * as serviceWorker from './serviceWorker';
import { HeaderComponent, FooterComponent } from './component/index';

// import abc, { sum } from './utility';
// let resultOfSum = sum(2, 4);
// let resultOfMultiply = abc.multiply(2, 4);
// console.log('sum', resultOfSum)
// console.log('mul', resultOfMultiply)
// console.log('grreting ', abc.greeting('Foo'));


ReactDOM.render(
  <React.StrictMode>
    <Fragment>   {/* <> */}
      <HeaderComponent />
      <App />
      {/* <Todos /> */}
      <FooterComponent />
    </Fragment> {/* </> */}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

// index  // Grand Index
//  - App // Index's Child
   // - parent  
      // - child


