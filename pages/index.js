import Image from 'next/image'
import {MdLocationOn} from 'react-icons/md';
import {BsWhatsapp} from 'react-icons/bs';
import {MdLocalPharmacy} from 'react-icons/md';


export default function Home() {
  return (
    <div className='bg-emerald-500'>
    <nav  className=" bg-green-500 border-gray-200 flex flex-wrap justify-center">
      <div  className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      <a>
          <img  />
          <span  className="flex items-center self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            <MdLocalPharmacy className='mr-3' />
          Farmacia Adriana Battistel
            <MdLocalPharmacy className='ml-3' />
          </span>
      </a>
      </div>
      <div  className="flex md:order-2">
      </div>
    </nav>

    <div className="flex flex-wrap justify-center">
    <div className="max-w-md py-10 px-6 bg-emerald-200 shadow-lg rounded-lg my-10 mx-4">
        <div className="grid justify-content md:justify-end -mt-6">
          <div>
            <h2 className="text-violet-800 text-2xl font-semibold">Atencion personalizada</h2>
            <p className="mt-2 text-black text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae dolores deserunt ea doloremque natus error, rerum quas odio quaerat nam ex commodi hic, suscipit in a veritatis pariatur minus consequuntur!
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-md py-10 px-6 bg-emerald-200 shadow-lg rounded-lg my-10 mx-4">
        <div className="grid justify-content md:justify-end -mt-6">
          <div>
            <h2 className="text-violet-800 text-2xl font-semibold">Perfumeria</h2>
            <div className="mt-2 text-black text-sm">
              <ul>
                <li>Estuches de perfume para hombre y mujer</li>
                <li>Variedad de marcas</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-md py-10 px-6 bg-emerald-200 shadow-lg rounded-lg my-10 mx-4">
        <div className="grid justify-content md:justify-end -mt-6">
          <div>
            <h2 className="text-violet-800 text-2xl font-semibold">Cosmetica</h2>
            <div className="mt-2 text-black text-sm">
              <ul>
                <li>Cremas para rostro y cuerpo</li>
                <li>Encontra todo para tu rutina Skin Care</li>
                <li>Maquilajes linea tejar, pink 21, ruby rose y otras...</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-md py-10 px-6 bg-emerald-200 shadow-lg rounded-lg my-10 mx-4">
        <div className="grid justify-content md:justify-end -mt-6">
          <div>
            <h2 className="text-violet-800 text-2xl font-semibold">Regaleria</h2>
            <div className="mt-2 text-black text-sm">
              <ul>
                <li>Matermos</li>
                <li>Juguetes</li>
                <li>Mochilas y carteras</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

    </div> 
    
    <footer className="bg-emerald-200 rounded-lg shadow m-4">
  <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
    <span className="text-sm text-gray-950 sm:text-center">
      © 1999-2023 <a href="" className="hover:underline"></a>. All Rights Reserved.
    </span>
    <div className="flex items-center"> {/* Contenedor para el icono y el texto */}
      <MdLocationOn />
      <span className="text-sm ml-2 text-gray-950 sm:text-center">
        <a  href="https://www.google.com/maps/search/Córdoba,+Argentina"
            className="hover:underline hover:text-violet-800 "
            target="_blank">Córdoba, Argentina</a>
      </span>
    </div>
    <div className="flex items-center"> {/* Contenedor para el icono y el texto */}
    <BsWhatsapp /> 
    <ul className="flex flex-wrap items-center ml-2 mt-3 text-sm font-medium text-gray-950 sm:mt-0">
      <li>
        <a href="https://api.whatsapp.com/send?phone=54351758057" className="hover:underline  hover:text-violet-800">
           Contacto 
        </a>
      </li>
    </ul>
    </div>
  </div>
</footer>

    </div>
   
  )
}
