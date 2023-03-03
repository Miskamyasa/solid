import type {JSXElement} from "solid-js"

import {MetaProvider} from "@solidjs/meta"
import {Router, useRoutes} from "@solidjs/router"

import Head from "./components/Head/Head"
import RootLayout from "./layout/RootLayout"
import {rootRoutes} from "./navigation/rootRoutes"


const App = (): JSXElement => {
  const Routes = useRoutes(rootRoutes)
  return (
    <Router>
      <MetaProvider>
        <Head />
        <RootLayout>
          <Routes />
        </RootLayout>
      </MetaProvider>
    </Router>
  )
}

export default App
