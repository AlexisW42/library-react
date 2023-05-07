import NavBar from './NavBar'

function Header() {
  return (
    <div className="h-16 grid grid-cols-[18rem_1fr_1fr] bg-indigo-900 text-gray-200 dark:bg-slate-900 dark:border-b-2 dark:border-b-slate-800">
      <div className="grid content-center justify-center col-start-1 text-3xl">
        Library
      </div>
      <div className="grid content-center col-start-2 col-end-3">
        A place to store information about books
      </div>
      <NavBar />
    </div>
  )
}

export default Header
