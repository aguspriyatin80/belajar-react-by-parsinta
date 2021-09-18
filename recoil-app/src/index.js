import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import App from './App';
import reportWebVitals from './reportWebVitals';
import { RecoilRoot } from 'recoil';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';
import { Suspense } from 'react';


ReactDOM.render(
  <RecoilRoot>
    <Suspense fallback="Loading...">
      <BrowserRouter>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </BrowserRouter>
    </Suspense>
  </RecoilRoot >
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
