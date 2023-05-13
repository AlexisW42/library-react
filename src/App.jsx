import { useState, useEffect } from 'react'
import Header from './components/Header'
import AppRouter from './components/AppRouter'

function App() {
  const [darkToggle, setDarkToggle] = useState(
    window.matchMedia('(prefers-color-scheme: dark').matches
  )

  function bodyDark() {
    darkToggle
      ? document.getElementsByTagName('body')[0].classList.add('dark')
      : document.getElementsByTagName('body')[0].classList.remove('dark')
  }

  useEffect(() => {
    bodyDark()
  })

  function ToggleDarkMode() {
    setDarkToggle(!darkToggle)
    bodyDark()
  }

  return (
    <>
      <Header darkMode={ToggleDarkMode} darkToggle={darkToggle} />
      <AppRouter />
    </>
  )
}

export default App
