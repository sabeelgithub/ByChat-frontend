import React, { useEffect, useState } from 'react'
import icon from '../Assets/icon-main.png'
import Loaders from '../Components/Loader/Loaders'


function Footer() {
  const [loader, setLoader] = useState(true)

  useEffect(() => {
      setTimeout(() => {
        setLoader(false)
      }, 600);
    }, [])
  return (
   <>

   {loader ? <Loaders/>: <footer className="bg-black rounded-lg shadow dark:bg-gray-900 m-4">
   <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
     <div className="sm:flex sm:items-center sm:justify-between">
       <a href="https://flowbite.com/" className="flex items-center mb-4 sm:mb-0">
         <img src={icon} className="h-8 mr-3" alt="Flowbite Logo" />
         <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">ByChat</span>
       </a>
       <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
         <li>
           <a href="#" className="mr-4 hover:underline md:mr-6 text-white">About</a>
         </li>
         <li>
           <a href="#" className="mr-4 hover:underline md:mr-6 text-white">Privacy Policy</a>
         </li>
         <li>
           <a href="#" className="mr-4 hover:underline md:mr-6 text-white">Licensing</a>
         </li>
         <li>
           <a href="#" className="hover:underline text-white">Contact</a>
         </li>
       </ul>
     </div>
     <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
     <span className="block text-sm text-white sm:text-center dark:text-gray-400"><a href="https://flowbite.com/" className="hover:underline text-white">mohammedsabeeltc@</a>All Rights Reserved.</span>
   </div>
 </footer> }

   




 

   
   </>
  )
}

export default Footer