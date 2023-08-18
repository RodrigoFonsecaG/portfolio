import React from 'react'
import { Link } from 'react-router-dom'
import { FaBeer, FaHome } from 'react-icons/fa'

const Nav = () => {

  const navData = [
    {
      id: '#home',
      name: 'Home',
      path: '/',
      icon: <FaHome />,
    },
    {
      id: '#skills',
      name: 'Habilidades',
      path: '/skills',
      icon: <FaBeer />,
    },
    {
      id: '#skills',
      name: 'Habilidades',
      path: '/skills',
      icon: <FaBeer />,
    },
    {
      id: '#skills',
      name: 'Habilidades',
      path: '/skills',
      icon: <FaBeer />,
    },
    {
      id: '#skills',
      name: 'Habilidades',
      path: '/skills',
      icon: <FaBeer />,
    },
  ]

  
  return (
    <nav className="flex flex-col items-center xl:justify-center gap-y-4 fixed h-max bottom-0 mt-auto xl:right-[2%] top-0 z-50 w-full xl:w-16 xl:max-w-md xl:h-screen">
      <div className="flex w-full xl:flex-col items-center justify-between xl:justify-center gap-y-10 px-4 md:px-40 xl:px-0 h-[80px] xl:h-max py-8 bg-white/10 backdrop-blur-sm text-3xl xl:text-xl xl:rounded-full">

        {navData.map((link) => {
          return (
            <Link
              to={link.path}
              className="relative flex items-center group hover:text-accent transition-all duration-300"
            >
                <div className="absolute pr-14 right-0 hidden xl:group-hover:flex">
                  <div className="bg-white relative flex text-primary items-center p-[6px] rounded-[3px]">
                    <div className="text-[12px] leading-none font-semibold capitalize">
                      {link.name}
                    </div>

                    <div
                      className="border-solid border-l-white border-l-8 border-y-transparent border-y-[6px] border-r-0 
                absolute -right-2"
                    ></div>
                  </div>
                </div>

                <div>{link.icon}</div>
            </Link>
          )
        })}

      </div>
    </nav>
  )
}

export default Nav
