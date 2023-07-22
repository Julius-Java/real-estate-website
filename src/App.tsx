import { useState } from "react"
import logo from "/assets/log02.png"
import {FaBarsStaggered, FaXmark,} from "react-icons/fa6"
import {BsArrowRight} from "react-icons/bs"

function App() {

  const [mobileNav, setMobileNav] =  useState(false)

  const toggleNav = () => {
    setMobileNav(!mobileNav)
  }

  return (
    <div className="App">
      <header className="max-w-6xl w-full mx-auto flex justify-end items-center p-3 relative">
        <a className="me-auto" href="#">
          <img className="w-28" src={logo} alt="Top Property" />
        </a>
        <nav
          className={"absolute top-0 right-0 min-h-screen w-44 bg-gray-500/100 p-4 transition-all duration-300" + (!mobileNav && " right-[-11rem]") + " sm:gap-4 sm:right-0 sm:bg-transparent sm:w-[70%] sm:min-h-0 sm:flex sm:items-center sm:justify-end" }
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

      <main className="max-w-6xl w-full mx-auto text-md mt-[3rem] px-3 text-center">
        <h1 className="uppercase font-bold text-[1.2rem] text-center lg:max-w-[800px] sm:max-w-[500px] mx-auto sm:text-3xl md:text-4xl lg:text-6xl">growing for a better tomorrow</h1>
        <p className="text-center mt-3 sm:mt-5 max-w-[600px] mx-auto font-light sm:text-md md:text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi libero, odit tempore vero sint maiores sapiente quae iste qui nesciunt!</p>
        <button className="border-2 border-black rounded-full h-10 sm:h-12 px-6 mt-5 font-medium transition-all duration-200 hover:bg-black hover:text-white group">Contact now <BsArrowRight size="25" className="inline-block text-white transition-all duration-200 w-0 group-hover:w-auto" /></button>
      </main>
    </div>
  )
}

export default App
