import { useState, useEffect } from 'react'
import Header from './components/Header'
import AppRouter from './components/AppRouter'
import Footer from './components/Footer'

function App() {
  const [searchText, setSearchText] = useState('')
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
      <Header
        darkMode={ToggleDarkMode}
        darkToggle={darkToggle}
        setSearchText={setSearchText}
      />
      <AppRouter searchText={searchText} />
      <Footer />
    </>
  )
}

export default App
