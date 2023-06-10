
import { Link } from "react-router-dom";


export default function  ErrorNotFound  () {


  return(
	<div>
<main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center">
          <p className="text-base font-semibold text-indigo-600">404</p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">Page not found</h1>
          <p className="mt-6 text-base leading-7 text-gray-600">Sorry, we couldn’t find the page you’re looking for.</p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link to ="/"
              className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Go back home
            </Link>
            <a href="#" className="text-sm font-semibold text-gray-900">
              Contact support <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </div>
      </main>
</div>
  )
}



// {/* <nav aria-label="breadcrumb" className="w-full p-4 dark:bg-gray-800 dark:text-gray-100">
// 	<ol className="flex h-8 space-x-2">
// 		<li className="flex items-center">
// 			<a rel="noopener noreferrer" href="#" title="Back to homepage" className="hover:underline">
// 				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 pr-1 dark:text-gray-400">
// 					<path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
// 				</svg>
// 			</a>
// 		</li>
// 		<li className="flex items-center space-x-2">
// 			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" fill="currentColor" className="w-2 h-2 mt-1 transform rotate-90 fill-current dark:text-gray-600">
// 				<path d="M32 30.031h-32l16-28.061z"></path>
// 			</svg>
// 			<a rel="noopener noreferrer" href="#" className="flex items-center px-1 capitalize hover:underline">Parent</a>
// 		</li>
// 		<li className="flex items-center space-x-2">
// 			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" fill="currentColor" className="w-2 h-2 mt-1 transform rotate-90 fill-current dark:text-gray-600">
// 				<path d="M32 30.031h-32l16-28.061z"></path>
// 			</svg>
// 			<a rel="noopener noreferrer" href="#" className="flex items-center px-1 capitalize hover:underline">Parent</a>
// 		</li>
// 		<li className="flex items-center space-x-2">
// 			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" fill="currentColor" className="w-2 h-2 mt-1 transform rotate-90 fill-current dark:text-gray-600">
// 				<path d="M32 30.031h-32l16-28.061z"></path>
// 			</svg>
// 			<a rel="noopener noreferrer" href="#" className="flex items-center px-1 capitalize hover:underline hover:no-underline cursor-default">Current</a>
// 		</li>
// 	</ol>
// </nav> */}

