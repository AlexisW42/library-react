function NavBar() {
  function basename() {
    console.log(import.meta.env.DEV)
    if (import.meta.env.DEV) return '/'
    return '/library-react/'
  }

  return (
    <ul className="mt-4 flex flex-col rounded-lg border border-gray-100 p-4 font-medium dark:border-gray-700 dark:bg-gray-800 md:mt-0 md:flex-row md:space-x-8 md:border-0 md:p-0 md:dark:bg-gray-900">
      <li>
        <a
          href={basename()}
          className="block rounded bg-blue-700 py-2 pl-3 pr-4 text-white md:bg-transparent md:p-0 md:text-blue-700 md:dark:text-blue-500"
          aria-current="page"
        >
          Home
        </a>
      </li>
      <li>
        <a
          href={`${basename()}about`}
          className="block rounded py-2 pl-3 pr-4 text-white hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-700 dark:hover:text-white md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-blue-500"
        >
          About
        </a>
      </li>
    </ul>
  )
}
export default NavBar
