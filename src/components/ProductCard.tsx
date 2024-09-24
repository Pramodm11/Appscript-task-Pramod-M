'use client'

import Image from 'next/image'
import { Heart } from 'lucide-react'

interface Product {
  id: number
  name: string
  price: number
  image: string
}

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="bg-white p-4">
      <Image
        src={product.image}
        alt={product.name}
        width={300}
        height={300}
        className="w-full h-64 object-cover mb-4"
      />
      <h3 className="font-semibold mb-2">{product.name}</h3>
      <p className="text-gray-600 mb-2">${product.price.toFixed(2)}</p>
      <div className="flex justify-between items-center">
        <button className="text-sm underline">View product</button>
        <Heart className="w-5 h-5 text-gray-400 cursor-pointer" />
      </div>
    </div>
  )
}