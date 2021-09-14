import React from "react"
import { Switch as SwitchRouter, Route } from "react-router-dom"
// components
import Home from "components/views/Home"
import Profile from "components/views/Profile"

// This site has 3 pages, all of which are rendered
// dynamically in the browser (not server rendered).
//
// Although the page does not ever refresh, notice how
// React Router keeps the URL up to date as you navigate
// through the site. This preserves the browser history,
// making sure things like the back button and bookmarks
// work properly.

/*
  A <Switch> looks through all its children <Route>
  elements and renders the first one whose path
  matches the current URL. Use a <Switch> any time
  you have multiple routes, but you want only one
  of them to render at a time
*/

const Switch = () => (
  <SwitchRouter>
    <Route exact path="/">
      <Home />
    </Route>
    <Route path={`/profile/:id`}>
      <Profile />
    </Route>
  </SwitchRouter>
)

export default Switch
