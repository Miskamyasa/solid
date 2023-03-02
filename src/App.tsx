import type {JSXElement} from "solid-js"

import {Router, useRoutes} from "@solidjs/router"

import RootLayout from "./layout/RootLayout"
import {rootRoutes} from "./navigation/rootRoutes"


const App = (): JSXElement => {
  const Routes = useRoutes(rootRoutes)
  return (
    <Router>
      <RootLayout>
        <Routes />
      </RootLayout>
    </Router>
  )
}

export default App
