import React from 'react'
import ReactDOM from 'react-dom'
import Dashboard from './components/Dashboard';

// const NewApp = require('./components/MessageList').default

function renderApp(App) {
  ReactDOM.render(<App />, document.getElementById('root'))
}

renderApp(Dashboard);

// if (module.hot) {
//   module.hot.accept('./components/message-list', () => {
//     renderApp(NewApp)
//   })
// }
