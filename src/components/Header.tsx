import Link from 'next/link'
import { Search, Heart, User, ShoppingCart } from 'lucide-react'

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <div className="w-8 h-8 bg-gray-200"></div>
          <h1 className="text-xl font-bold">LOGO</h1>
        </div>
        <nav>
          <ul className="flex space-x-6">
            <li><Link href="#" className="hover:text-gray-600">SHOP</Link></li>
            <li><Link href="#" className="hover:text-gray-600">SKILLS</Link></li>
            <li><Link href="#" className="hover:text-gray-600">STORIES</Link></li>
            <li><Link href="#" className="hover:text-gray-600">ABOUT</Link></li>
            <li><Link href="#" className="hover:text-gray-600">CONTACT US</Link></li>
          </ul>
        </nav>
        <div className="flex items-center space-x-4">
          <Search className="w-5 h-5 cursor-pointer" />
          <Heart className="w-5 h-5 cursor-pointer" />
          <User className="w-5 h-5 cursor-pointer" />
          <ShoppingCart className="w-5 h-5 cursor-pointer" />
          <select className="border-none text-sm">
            <option>ENG</option>
            <option>FR</option>
            <option>ES</option>
          </select>
        </div>
      </div>
    </header>
  )
}