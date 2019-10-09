import React from 'react'
import './App.css'
import { Switch, Route } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css'

import Main from "./components/Main"
import SummarizedStats from "./components/SummarizedStats"
import DetailedStats from "./components/DetailedStats"

const App: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={Main} />
      <Route path="/summarized-stats" component={SummarizedStats} />
      <Route path="/detailed-stats" component={DetailedStats} />
    </Switch>
  )
}

export default App
