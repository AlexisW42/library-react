function NavBar() {
  return (
    <nav className="grid content-center col-start-3 col-end-4">
      <ul>
        <li className="flex flex-row">
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
      </ul>
    </nav>
  )
}
export default NavBar
