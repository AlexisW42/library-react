import { useState, useEffect } from 'react'
import Header from './components/Header'
import AppRouter from './components/AppRouter'
import Footer from './components/Footer'

function App() {
  const [searchText, setSearchText] = useState('')
  const [darkToggle, setDarkToggle] = useState(() => {
    if (localStorage.getItem('theme') === null) {
      localStorage.setItem(
        'theme',
        window.matchMedia('(prefers-color-scheme: dark').matches
          ? 'dark'
          : 'light'
      )
      return !window.matchMedia('(prefers-color-scheme: dark').matches
    } else {
      return localStorage.getItem('theme') === 'dark'
    }
  })

  function bodyDark() {
    if (darkToggle) {
      document.querySelector('body').classList.add('dark')
    } else {
      document.querySelector('body').classList.remove('dark')
    }
  }

  useEffect(() => {
    bodyDark()
  })

  function ToggleDarkMode() {
    setDarkToggle(!darkToggle)
    bodyDark()
    localStorage.setItem('theme', !darkToggle ? 'dark' : 'light')
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
