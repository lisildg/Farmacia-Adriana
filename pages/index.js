import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
    <nav  className=" bg-green-500 border-gray-200">
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

    <div className='text-center ml-3 mr-3'>Lorem ipsum dolor sit amet consectetur adipiscing elit proin volutpat, augue suscipit hendrerit phasellus magnis arcu nulla a cubilia, turpis sociosqu porta aliquam fringilla malesuada dui urna. Laoreet nam platea nibh metus tincidunt dui ullamcorper, luctus eleifend arcu non nostra malesuada gravida, per dignissim iaculis curae potenti a. Orci sem nulla at pulvinar metus vivamus diam congue, conubia non suscipit ornare massa nec.

Mus pulvinar ad nullam mollis posuere mauris curabitur natoque ultrices risus, luctus leo sed eros a aliquet vitae velit. Faucibus a habitasse vestibulum cum cubilia, scelerisque maecenas semper magna pretium massa, justo nisi laoreet venenatis. Pulvinar placerat velit nunc dis phasellus cum dignissim eu, mollis nulla litora commodo iaculis feugiat cras, rhoncus odio praesent scelerisque eget nostra sollicitudin.</div>
    
<footer className="bg-white rounded-lg shadow m-4">
    <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
      <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 1999-2023 <a href="" className="hover:underline"></a>. All Rights Reserved.
    </span>
    <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500  sm:mt-0">
        
        <li>
            <a href="https://api.whatsapp.com/send?phone=54351758057" className="hover:underline">Contacto</a>
        </li>
    </ul>
    </div>
</footer>

    </div>
   
  )
}
