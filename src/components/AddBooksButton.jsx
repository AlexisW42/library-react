import { Link } from 'react-router-dom'

function AddBooksButton() {
  return (
    <div className="fixed bottom-16 right-5 h-16 w-16 rounded-full bg-indigo-900 text-gray-200 dark:bg-blue-800 sm:bottom-20">
      <button>
        <Link to="/addbook">
          <svg
            className="h-16 w-16"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            ></path>
          </svg>
        </Link>
      </button>
    </div>
  )
}
export default AddBooksButton
