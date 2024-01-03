import React, { Suspense } from 'react'
import { useRoutes } from 'react-router-dom'
import routes from './router'
import AppHeader from './components/app-header'
import AppFooter from './components/app-footer'
// import Demo1 from './views/demo/demo1'

function App() {
  return (
    <Suspense fallback="">
      {/* <Demo1 name="Lily" age={10} /> */}
      <AppHeader />
      <div>{useRoutes(routes)}</div>
      <AppFooter />
    </Suspense>
  )
}

export default App
