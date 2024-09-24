'use client'

import { useState } from 'react'
import ProductCard from './ProductCard'

interface Product {
  id: number
  name: string
  price: number
  image: string
}

interface ProductGridProps {
  products: Product[]
}

export default function ProductGrid({ products }: ProductGridProps) {
  const [sortBy, setSortBy] = useState('recommended')

  const sortedProducts = [...products].sort((a, b) => {
    switch (sortBy) {
      case 'price-low-high':
        return a.price - b.price
      case 'price-high-low':
        return b.price - a.price
      default:
        return 0
    }
  })

  return (
    <div className="flex-grow">
      <div className="flex justify-between items-center mb-4">
        <p>{products.length} items</p>
        <select
          className="border p-2"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value="recommended">RECOMMENDED</option>
          <option value="newest">NEWEST FIRST</option>
          <option value="popular">POPULAR</option>
          <option value="price-high-low">PRICE : HIGH TO LOW</option>
          <option value="price-low-high">PRICE : LOW TO HIGH</option>
        </select>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
        {sortedProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}