import { useState } from "react"
import logo from "/assets/log02.png"
import {FaBarsStaggered, FaXmark} from "react-icons/fa6"

function App() {

  const [mobileNav, setMobileNav] =  useState(false)

  const toggleNav = () => {
    setMobileNav(!mobileNav)
  }

  return (
    <div className="App">
      <header className="max-w-4xl w-full mx-auto flex justify-end items-center p-3 relative">
        <a className="me-auto" href="#">
          <img className="w-28" src={logo} alt="Top Property" />
        </a>
        <nav
          className={"absolute top-0 right-0 min-h-screen w-44 bg-gray-500/75 p-4 transition-all duration-300" + (!mobileNav && " right-[-11rem]") + " sm:gap-4 sm:right-0 sm:bg-transparent sm:w-[70%] sm:min-h-0 sm:flex sm:items-center sm:justify-end" }
        >

          <FaXmark className="cursor-pointer sm:hidden" size={"25"} onClick={toggleNav}/>

          <ul className="text-center sm:flex sm:gap-4 me-auto">
            <li className="mt-3 text-lg hover:border-black hover:border-2 hover:rounded-md sm:m-0 sm:hover:border-none sm:text-md">
                <a href="#">Home</a>
            </li>
            <li className="mt-3 text-lg hover:border-black hover:border-2 hover:rounded-md sm:m-0 sm:hover:border-none sm:text-md">
              <a href="#">Tech</a>
            </li>
            <li className="mt-3 text-lg hover:border-black hover:border-2 hover:rounded-md sm:m-0 sm:hover:border-none sm:text-md">
              <a href="#">Policy</a>
            </li>
            <li className="mt-3 text-lg hover:border-black hover:border-2 hover:rounded-md sm:m-0 sm:hover:border-none sm:text-md">
              <a href="#">Support</a>
            </li>
            <li className="mt-3 text-lg hover:border-black hover:border-2 hover:rounded-md sm:m-0 sm:hover:border-none sm:text-md">
              <a href="#">About</a>
            </li>
          </ul>

          <ul className="text-center">
            <li className="mt-5 text-lg p-2 border-black border-2 rounded-full hover:bg-black hover:text-white transition-background duration-200 sm:m-0 sm:px-7">
              <a className="font-medium" href="#">Register</a>
            </li>
          </ul>
        </nav>

        <FaBarsStaggered className={"cursor-pointer" + (mobileNav && " hidden") + " sm:hidden"} size="25" onClick={toggleNav} />
      </header>

      <main>

      </main>
    </div>
  )
}

export default App
