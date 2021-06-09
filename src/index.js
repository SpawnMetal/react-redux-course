import React from 'react'
import {render} from 'react-dom'
import reportWebVitals from './reportWebVitals'
import {Provider} from 'react-redux'
import {applyMiddleware, createStore} from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import {rootReducer} from './redux/rootReducer'
import App from './App'
import {forbiddenWordsMiddleware} from './redux/middleware'

const store = createStore(
  rootReducer,
  applyMiddleware(thunk, logger, forbiddenWordsMiddleware)
)

const app = (
  <Provider store={store}>
    <App />
  </Provider>
)

render(app, document.getElementById('root'))

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
