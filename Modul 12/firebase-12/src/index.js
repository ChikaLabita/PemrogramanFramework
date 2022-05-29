import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import BlogPost_Mhs from "./Tugas4/Tugas4/BlogPost_Mhs"
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(<BlogPost_Mhs />, document.getElementById('content'));

/*ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
*/
reportWebVitals();