import { useEffect, useState } from 'react'

import { Panel } from './components/Panel'

function App() {
  const [theme, setTheme] = useState('ligth')

  useEffect(() => {
    if (theme === 'dark') {
      document.querySelector('html').classList.add('dark')

    } else {
      document.querySelector('html').classList.remove('dark')


    }
  }, [theme])

  const handleChangeTheme = () => {
    setTheme(prevTheme => prevTheme === 'ligth' ? 'dark' : 'ligth')
  }

  return (
    <>
      <div className="container mx-auto py-8 dark:bg-slate-900/50  bg-opacity-80 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl">
      <button onClick={handleChangeTheme} className="dark:bg-gray-800 dark:text-white rounded-full py-2 px-4 bg-gray-200 text-gray-800 rounded-full shadow-md">
  Modo oscuro
</button>

        <div id="weatherContainer" className="text-overlay p-8 rounded-lg">
          <h1 className="text-3xl font-bold mb-4 text-white">Clima de tu ciudad</h1>
          <Panel></Panel>
          

        </div>

      </div>

    </>
  )
}

export default App
