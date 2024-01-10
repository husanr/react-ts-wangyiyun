import React, { Suspense } from 'react'
import { useRoutes } from 'react-router-dom'
import routes from './router'
import AppHeader from './components/app-header'
import AppFooter from './components/app-footer'
import AppPlayerBar from './views/player/app-player-bar'
// import Demo1 from './views/demo/demo1'

function App() {
  return (
    <div className="App">
      <AppHeader />
      <Suspense fallback="">
        {/* <Demo1 name="Lily" age={10} /> */}
        <div>{useRoutes(routes)}</div>
      </Suspense>
      <AppPlayerBar />
      <AppFooter />
    </div>
  )
}

export default App
