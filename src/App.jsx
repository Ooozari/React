import { useEffect, useState } from 'react'
import { ThemeProvider } from './contexts/theme'
import './App.css'
import ThemeBtn from './components/ThemeButton'
import Card from './components/Card'

function App() {
  const [themeMode, setThemeMode] = useState()

  const darkTheme = () => {
    setThemeMode("dark")
  }
  const lightTheme = () => {
    setThemeMode("light")
  }

  useEffect(()=>{
    document.querySelector('html').classList.remove("dark", "light")
    document.querySelector('html').classList.add(themeMode)
  }
  ,[themeMode])
  return (
    <>
      <ThemeProvider value={{ themeMode, darkTheme, lightTheme }}>
        <div className="w-full min-h-screen flex items-center justify-center">
          <div className="flex flex-col items-center justify-center gap-4">

            {/* Theme Button aligned right inside card container */}
            <div className="w-full max-w-sm flex justify-end">
              <ThemeBtn />
            </div>

            {/* Card centered below the button */}
            <div className="w-full max-w-sm">
              <Card />
            </div>

          </div>
        </div>
      </ThemeProvider>

    </>
  )
}

export default App
