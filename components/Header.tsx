import Image from "next/image"
import Link from "next/link"
import { prefix } from '@/utils/prefix';


const Header = () => {
  return (
    <header className="w-full h-[120px] bg-white shadow-lg">
         <div className="header-container relative flex flex-row items-center justify-center h-full mx-auto">
            <nav className="nav">
              <ul className="flex flex-row gap-8">
                <li><Link href="/">Home</Link></li>
                <li><Link href="/about">About</Link></li>
                <li><Link href="/services">Services</Link></li>
              </ul>
            </nav>
            <div className="logo relative w-[180px] h-[120px] mx-10">
               <Image src={`${prefix}/laluna-logo.png`} alt="Logo" fill className="object-contain shrink-0" loading="eager"/>
            </div>
            <nav className="nav">
              <ul className="flex flex-row gap-8">
                <li><Link href="/Packages">Packages</Link></li>
                <li><Link href="/contact">Contact</Link></li>
                <li><Link href="/blog">Blog</Link></li>
              </ul>
            </nav>
 
         </div>
    </header>
  )
}

export default Header