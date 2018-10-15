//import './main.css'

import React from 'react'
import ReactDOM from 'react-dom'
import {createStore, applyMiddleware} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import {syncHistoryWithStore} from 'react-router-redux'
//import {Router, Route, browserHistory} from 'react-router'
import { Router, Route, hashHistory } from 'react-router';
import {Provider} from 'react-redux'


import reducers from './reducers'
import Layout from './containers/layout'
import Gsap1 from './containers/gsap1'
import Gsap2 from './containers/gsap2'
import Gsap3 from './containers/gsap3'
import Gsap4 from './containers/gsap4'
import Gsap5 from './containers/gsap5'
import Gsap6 from './containers/gsap6'
import Gsap7 from './containers/gsap7'
import Gsap8 from './containers/gsap8'

const store = createStore(reducers, composeWithDevTools(
  applyMiddleware(thunk)
))

//const history = syncHistoryWithStore(browserHistory, store)
const history = syncHistoryWithStore(hashHistory, store);

ReactDOM.render(
 
  <Provider store={store}>
    <Router history={history}>
      <Route component={Layout}>
        <Route path='/' component={Gsap1}/>
        <Route path='/gsap2' component={Gsap2}/>
        <Route path='/gsap3' component={Gsap3}/>
        <Route path='/gsap4' component={Gsap4}/>
        <Route path='/gsap5' component={Gsap5}/>
        <Route path='/gsap6' component={Gsap6}/>
        <Route path='/gsap7' component={Gsap7}/>
        <Route path='/gsap8' component={Gsap8}/>
      </Route>
    </Router>
  </Provider>,

   
  document.getElementById('root')
);
