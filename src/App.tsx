//* Components
import Header from './components/Header'
import User from './components/User'
import Home from './components/Home'
//* Routing
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

function App() {
  return (
    <div className='App'>
      <Router>
        <Header />
        <Switch>
          <Route path='/user/:id'>
            <User />
          </Route>
          <Route path='/Home'>
            <Home />
          </Route>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App
