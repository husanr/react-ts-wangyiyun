import React, { Suspense } from 'react'
import { useRoutes } from 'react-router-dom'
import routes from './router'
import AppHeader from './components/app-header'
import AppFooter from './components/app-footer'
// import Demo1 from './views/demo/demo1'

function App() {
  return (
    <div className="App">
      <AppHeader />
      <Suspense fallback="">
        {/* <Demo1 name="Lily" age={10} /> */}
        <div>{useRoutes(routes)}</div>
      </Suspense>
      <AppFooter />
    </div>
  )
}

export default App
