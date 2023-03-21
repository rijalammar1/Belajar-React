import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import HelloComponent from './Component/HelloComponent';
import StateFullComponent from './StateFullComponent';

// function HelloWorld () {
//   return <p>ini adalah function component</p>
// }

// const HelloWorld = () =>{
//   return <p>ini adalah arrow function</p>
// }

// class StatefulComponent extends React.Component{
//   render() {
//     return <p>ini adalah Statefull Component</p>
//   } 
// }

// class Greeting extends React.Component{
//   render() {
//     return <h1>Hello, {this.props.name}</h1>;
//   }
// }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HelloComponent />
  </React.StrictMode>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
