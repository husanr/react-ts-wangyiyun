import React, { Suspense } from 'react'
import { useRoutes, Link } from 'react-router-dom'
import routes from './router'
import Demo1 from './views/demo/demo1'

function App() {
  return (
    <Suspense fallback="">
      <Demo1 name="Lily" age={10} />
      <nav>
        <Link to="/discover">发现音乐</Link>
        <Link to="/mine">我的音乐</Link>
        <Link to="/focus">关注</Link>
        <Link to="/download">下载客户端</Link>
      </nav>
      <div>{useRoutes(routes)}</div>
    </Suspense>
  )
}

export default App
