function About() {
  return (
    <div className="mb-8 mt-8 grid min-w-[90vw] max-w-6xl grid-flow-row self-center justify-self-center rounded-md bg-slate-50 p-8 text-left dark:bg-slate-800 dark:text-gray-200">
      <p>
        Web Application to store data about books in bibliographic cards. You
        can add books, mark as read or unread and delete. The data is not
        deleted when leaving the app, is saved locally.
      </p>
      <p>
        The code of this application is availble on:{' '}
        <a
          className="text-blue-500 underline"
          href="https://github.com/AlexisW42/library-react"
        >
          https://github.com/AlexisW42/library-react
        </a>
      </p>
      <br />
      <br />
      <p>
        made by{' '}
        <a
          className="text-blue-500 underline"
          href="https://github.com/AlexisW42"
        >
          AlexisW42
        </a>
      </p>
    </div>
  )
}
export default About
