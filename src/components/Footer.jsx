function Footer() {
  return (
    <footer className="row-start-3 row-end-4 mt-4 h-fit bg-indigo-900 p-4 text-center text-gray-200 dark:border-t-2 dark:border-t-slate-800 dark:bg-slate-900">
      <p>
        <a
          className="text-blue-500 underline"
          href="https://github.com/AlexisW42"
        >
          AlexisW42
        </a>{' '}
        {new Date().getFullYear()}
      </p>
    </footer>
  )
}
export default Footer
