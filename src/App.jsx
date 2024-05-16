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


  return (
    <>

      <div className="bg-gray-100 bg-opacity-50 text-gray-900 dark:bg-gray-800/90 text-opacity-50">
        <button onClick={handleChangeTheme} className="fixed bottom-0 right-0 m-8 dark:bg-gray-800 dark:text-white rounded-full py-2 px-4 bg-gray-200 text-gray-800 rounded-full shadow-md z-50 dark:border-white border-transparent border">
          {modoOsc ? 'Modo Claro' : 'Modo Oscuro'}
        </button>

        <div className="container mx-auto py-8 dark:bg-slate-800/30 rounded-lg px-6 ring-slate-900/5 shadow-xl">
          <h1 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white text-center">Clima de tu ciudad</h1>
          <Panel></Panel>

        </div>


      </div>

    </>
  )
}

export default App
