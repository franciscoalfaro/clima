import { useState } from 'react'

import { Panel } from './components/Panel'

function App() {

  return (
    <>
      <div className="container mx-auto py-8">
        <div id="weatherContainer" className="text-overlay p-8 rounded-lg">
          <h1 className="text-3xl font-bold mb-4 text-white">Clima de tu ciudad</h1>
         <Panel></Panel>
         

        </div>

      </div>

    </>
  )
}

export default App
