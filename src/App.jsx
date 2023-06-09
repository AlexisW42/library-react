import { useState, useLayoutEffect, useEffect } from 'react'
import { BrowserRouter } from 'react-router-dom'
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
      return window.matchMedia('(prefers-color-scheme: dark').matches
    } else {
      return localStorage.getItem('theme') === 'dark'
    }
  })

  function bodyDark() {
    darkToggle
      ? document.querySelector('body').classList.add('dark')
      : document.querySelector('body').classList.remove('dark')
  }

  useLayoutEffect(() => {
    bodyDark()
  })

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
      <BrowserRouter basename={import.meta.env.DEV ? '/' : '/library-react/'}>
        <Header
          darkMode={ToggleDarkMode}
          darkToggle={darkToggle}
          setSearchText={setSearchText}
        />
        <AppRouter searchText={searchText} />
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
