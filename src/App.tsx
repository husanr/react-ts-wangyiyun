import React, { Suspense } from 'react'
import { useRoutes } from 'react-router-dom'
import routes from './router'

function App() {
  return (
    <Suspense fallback="">
      <div>{useRoutes(routes)}</div>
    </Suspense>
  )
}

export default App
