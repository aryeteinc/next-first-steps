import { HomeIcon } from "@primer/octicons-react"
import Link from "next/link"
import { ActiveLink } from "../active-link/ActiveLink";

const navItems = [  
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
  { name: 'Pricing', href: '/pricing' },
];

export const Navbar = () => {
  return (
    <nav className="flex bg-blue-800 bg-opacity-30 p-2 m-2 rounded text-white">
      <Link href={'/'} className="flex items-center">
      <HomeIcon />
        <span className="mx-2">Home</span>
      </Link>
      <div className="flex flex-1"></div>

      {
        navItems.map((item) => (
         <ActiveLink key={item.name} {...item} />          
        ))
      }
    </nav>
  )
}
