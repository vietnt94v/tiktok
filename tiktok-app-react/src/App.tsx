import React from 'react'
import RouterConfig from './routes'

function App() {
  return (
    <div className='fixed h-full w-full left-2/4 -translate-x-2/4 top-0 overflow-hidden max-w-sm border border-b-0 border-t-0 border-slate-500'>
      <RouterConfig></RouterConfig>
    </div>
  )
}

export default App
