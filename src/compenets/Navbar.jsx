import { useState } from "react"
import { Link } from "react-router-dom"
import CustomButton from "./CustomButton"
import {Menu} from "@headlessui/react"

function MenuList({user ,onClick }) {
  const handleLogOut = () => {

  }
  return (
    <div>
      <Menu as="div" className="inline-block text-left">
        <div className="flex">
          <Menu.Button className="inline-flex gap-2 w-full rounded-md bg-white md:px-4 py-2 text-sm font-medium text-slate-700 hover:bg-opacity-20">
         <div className="leading[80px] flex flex-col items-start">
          <p className="text-sm font-semibold">{user?.firstName ?? user?.name}</p>
          <span className="text-sm text-blue-600">{user?.jobTitle ?? user?.email}</span>
         </div>
          </Menu.Button>
        </div>
      </Menu>
    </div>
  )
}
const Navbar = () => {
  const user = {}
  const [isOpen , setIsOpen] = useState(false)
  
  const handleCloseNavbar = () => {
    setIsOpen((prev) => !prev)
  }
  return (
    <div className="relative bg-[#f7fdfd] z-50">
       <nav className="container mx-auto flex items-center justify-center p-6" >
        <div>
          <Link to="/" className="text-blue-600">
            Job <span className="text-[#1677ccb]">Finder</span>
          </Link>
        </div>
        <ul className="hidden lg:flex gap-10 text-base">
          <li>
            <Link to="/">Find Job</Link>
          </li>
          <li>
            <Link to="/">Companies</Link>
          </li>

          <li>
            <Link to="/upload-job">Upload Job</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
        <div className=" lg:block">
        {
          !user?.token ? (
            <Link to="/user-auth">
              <CustomButton title="Sign In" contaiterStyles="text-blue-600 py-1.5 px-5 focus:outline-none hover:bg-blue-700 hover:text-white rounded-full text-base border border-blue-600"/>
            </Link>
          ) : (
          <div>
               <MenuList />
          </div>
          )
        }
        </div>
       </nav>
    </div>
  )
}

export default Navbar