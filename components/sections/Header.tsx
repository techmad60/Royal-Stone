// Header Component
import Navbar from "../ui/Navbar";

export default function Header() {

  return (
    <header className="flex flex-col p-4 sm:px-8 md:px-12 lg:pt-8 lg:px-16 lg:items-center bg-color-two fixed w-full">
        <div className="max-w-[76rem] w-full">
          <Navbar/>
        </div>
    </header>
  )
}