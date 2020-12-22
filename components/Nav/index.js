import Link from 'next/link';
import React, {useState, useEffect} from 'react';
import api from '../../Services/api'

const Nav = ({fixed}) => {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  const [account, setAccount] = useState();

  useEffect(() => {
    api.get('accounts').then(response => setAccount(
      response.data[0].value,
    ));
   },[]);
  return(
    <>
      <nav className="fixed w-full z-10 flex flex-wrap bg-white items-center shadow-md  px-2 py-3  ">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full  flex justify-between lg:w-auto text-pink lg:static lg:block lg:justify-start">
          
              <a className="cursor-pointer" href="#home">
                <img className="w-6/12" src="./logo.svg" alt=""/>
              
              </a>
           
            
            <button
              className=" cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
               <svg class="fill-current  h-6 w-6" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
            </button>
          </div>
          <div className="flex flex-row space-x-2">
            <div className="flex flex-row space-x-2">
              <h1 className="text-blue2 font-bold">Objetivo: </h1>
              <span className="text-pink font-bold"> R$ 12.000.000,00</span>
            </div>
            <div className="flex flex-row space-x-2">
              <h1 className="text-blue2 font-bold">Faltam: </h1>
              <span className="text-pink font-bold">{Intl.NumberFormat('pt-BR', 
                {style: 'currency', currency: 'BRL'}).format(12000000 - account)}</span>
            </div>
          </div>
        
          <div
            className={
              "lg:flex flex-grow items-center  " +
              (navbarOpen ? " flex h-auto " : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none sm:space-x-2 text-pink lg:ml-auto">
              <li className="nav-item ">
                <a
                  className="py-2 flex items-center text-xl leading-snug text-green2 hover:opacity-75"
                  href="#about"
                >
                 <span className="ml-2">SOBRE</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className=" py-2 flex items-center text-xl  leading-snug  text-green2 hover:opacity-75"
                  href="#faqs"
                >
                 <span className="ml-2">DOE</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className=" py-2 flex items-center text-xl leading-snug  text-green2 hover:opacity-75"
                  href="#doe"
                >
                 <span className="ml-2">DÚVIDAS</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className=" py-2 flex items-center text-xl leading-snug  text-green2 hover:opacity-75"
                  href="#faqs"
                >
                 <span className="ml-2">CONTATOS</span>
                </a>
              </li>
              
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Nav;