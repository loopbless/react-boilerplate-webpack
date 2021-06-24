import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'
import { PageHome } from '@/home'

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/home' component={PageHome} />
        <Redirect path='**' to='/home' />
      </Switch>
    </BrowserRouter>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
