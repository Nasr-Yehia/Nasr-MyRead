import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Search from './views/Search'
import Home from './views/Home'
import './App.css'
import Sql, {MyContext} from './sql/Sql'


class BooksApp extends React.Component {
  render() {
    return (
      <div className="app">
        <Sql>

        {/* A <Switch> looks through its children <Route>s and
        renders the first one that matches the current URL. */}
        <Switch>
        
        <Route exact path = {"/"} render = {() => (
          <MyContext.Consumer>
            {context => <Home{...context}/>}
          </MyContext.Consumer>)}/>

          <Route exact path = {"/Home"} render = {() => (
          <MyContext.Consumer>
            {context => <Home{...context}/>}
          </MyContext.Consumer>)}/>

          <Route exact path = {"/search"} render = {() => (
          <MyContext.Consumer>
            {context => <Search{...context}/>}
          </MyContext.Consumer>)}/>

        </Switch>
        </Sql>
      </div>
    )
  }
}

export default BooksApp
