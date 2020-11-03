import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './screens/Home/index';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Header from './components/header';
import Footer from './components/footer';

const indexRoutes = [{ path: '/', name: "App", component: App }]

ReactDOM.render(
  <React.StrictMode>
    <div>
      <BrowserRouter>
        <Switch>
          {
            indexRoutes.map((prop, key) => {
              return (
                <Route path={prop.path} component={prop.component} key={key} />
              )
            })
          }
        </Switch>
      </BrowserRouter>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
