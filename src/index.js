import React from 'react';
import ReactDOM from 'react-dom';

//*Dependencies */
import App from './App';
import { BrowserRouter } from 'react-router-dom';

//css part
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
