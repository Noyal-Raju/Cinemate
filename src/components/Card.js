import {Link} from 'react-router-dom'
import Backup from '../assests/backup.png'

export const Card = ({movie}) => {

  const {id,overview,original_title,poster_path}=movie

  const image=poster_path ?`https://image.tmdb.org/t/p/w500/${poster_path}` : Backup

  return (
    <div className="flex flex-col  bg-neutral-primary-soft  max-w-sm border dark:border-gray-600 bg-white dark:bg-gray-800 rounded-lg shadow-lg m-3">
      <Link to={`/movies/${id}`} className='p-2'>
        <img className="rounded-lg" src={image} alt="" />
      </Link>
      <div className="flex flex-col h-full p-3 text-center">
        <div className='flex h-full'>
          <Link to={`/movies/${id}`}>
            <h5 className="mt-3 mb-1 text-2xl dark:text-white font-semibold tracking-tight text-heading">
              {original_title}
            </h5>
            <p className='pb-2 dark:text-gray-500'>{overview}</p>
          </Link>
        </div>
        <Link
          to={`/movies/${id}`}
          className="inline-flex mx-[120px] items-center bg-blue-700 rounded-lg text-white bg-brand box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-2 py-2.5 focus:outline-none"
        >
          Read more
          <svg
            className="w-4 h-4 ms-1.5 rtl:rotate-180 -me-0.5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 12H5m14 0-4 4m4-4-4-4"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
};
