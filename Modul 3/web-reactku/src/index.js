import React from 'react';
import ReactDOM from 'react-dom';
import Test from './Test';
import List from './List';
import Component from './Component/HelloComponent'; 
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

/*ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);*/

function HelloComponent(){
  return HelloComponent

}

class StateFullComponent extends React.Component{
  render(){
  return <p>StateFullComponent</p>
  }
}

ReactDOM.render(<Component />, document.getElementById('root'));


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

