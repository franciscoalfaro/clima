import { useEffect, useState } from 'react'

import { Panel } from './components/Panel'

function App() {
  const [theme, setTheme] = useState('ligth')
  const [modoOsc, setModoOsc] = useState(false)

  useEffect(() => {
    if (theme === 'dark') {
      document.querySelector('html').classList.add('dark')
      setModoOsc(true)

    } else {
      document.querySelector('html').classList.remove('dark')
      setModoOsc(false)


    }
  }, [theme])

  const handleChangeTheme = () => {
    setTheme(prevTheme => prevTheme === 'ligth' ? 'dark' : 'ligth')
  }

  console.log(modoOsc)

  return (
    <>
      <div className="relative">
        <button onClick={handleChangeTheme} className="fixed bottom-0 right-0 m-8 dark:bg-gray-800 dark:text-white rounded-full py-2 px-4 bg-gray-200 text-gray-800 rounded-full shadow-md z-50">
          {modoOsc ?  'Modo Claro' :'Modo Oscuro'}
        </button>
        <div className="py-8 dark:bg-slate-800/90 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl">
          <div id="weatherContainer" className="text-overlay p-8 rounded-lg">
            <h1 className="text-3xl font-bold mb-4 text-white">Clima de tu ciudad</h1>
            <Panel></Panel>
          </div>
        </div>
      </div>

    </>
  )
}

export default App
