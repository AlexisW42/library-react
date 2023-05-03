function Header() {
  return (
    <div className="h-16 grid grid-cols-4 bg-indigo-900 text-gray-200 dark:bg-slate-900">
      <div className="grid content-center justify-center col-start-1 text-3xl">
        Library
      </div>
      <div className="grid content-center col-start-2 col-end-5">
        A place to store information about books
      </div>
    </div>
  )
}

export default Header
