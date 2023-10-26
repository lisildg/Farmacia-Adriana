import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='bg-emerald-500'>
    <nav  className=" bg-green-500 border-gray-200 flex flex-wrap justify-center">
      <div  className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      <a>
          <img  />
          <span  className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
          Farmacia Adriana Battistel
          </span>
      </a>
      </div>
      <div  className="flex md:order-2">
      </div>
    </nav>

    
    
<footer className="bg-emerald-200 rounded-lg shadow m-4">
    <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
      <span className="text-sm text-gray-950 sm:text-center ">© 1999-2023 <a href="" className="hover:underline"></a>. All Rights Reserved.
    </span>
    <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-950  sm:mt-0">
        
        <li>
            <a href="https://api.whatsapp.com/send?phone=54351758057" className="hover:underline">Contacto</a>
        </li>
    </ul>
    </div>
</footer>

    </div>
   
  )
}
