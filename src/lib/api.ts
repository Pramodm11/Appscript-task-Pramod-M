import { Product } from '../types'

const API_URL = 'https://fakestoreapi.com'

export async function getProducts(): Promise<Product[]> {
  const response = await fetch(`${API_URL}/products`)
  if (!response.ok) {
    throw new Error('Failed to fetch products')
  }
  const data = await response.json()
  return data.map(transformProduct)
}

export async function getProduct(id: number): Promise<Product> {
  const response = await fetch(`${API_URL}/products/${id}`)
  if (!response.ok) {
    throw new Error(`Failed to fetch product with id ${id}`)
  }
  const data = await response.json()
  return transformProduct(data)
}

export async function getCategories(): Promise<string[]> {
  const response = await fetch(`${API_URL}/products/categories`)
  if (!response.ok) {
    throw new Error('Failed to fetch categories')
  }
  return response.json()
}

export async function getProductsByCategory(category: string): Promise<Product[]> {
  const response = await fetch(`${API_URL}/products/category/${category}`)
  if (!response.ok) {
    throw new Error(`Failed to fetch products in category ${category}`)
  }
  const data = await response.json()
  return data.map(transformProduct)
}

function transformProduct(apiProduct: any): Product {
  return {
    id: apiProduct.id,
    name: apiProduct.title,
    description: apiProduct.description,
    price: apiProduct.price,
    image: apiProduct.image,
    category: apiProduct.category,
    rating: apiProduct.rating.rate,
    reviewCount: apiProduct.rating.count
  }
}

export async function searchProducts(query: string): Promise<Product[]> {
  const allProducts = await getProducts()
  return allProducts.filter(product => 
    product.name.toLowerCase().includes(query.toLowerCase()) ||
    product.description.toLowerCase().includes(query.toLowerCase())
  )
}

export async function getFilteredProducts(filters: {
  category?: string,
  minPrice?: number,
  maxPrice?: number,
  minRating?: number
}): Promise<Product[]> {
  let products = await getProducts()

  if (filters.category) {
    products = products.filter(product => product.category === filters.category)
  }

  if (filters.minPrice !== undefined) {
    products = products.filter(product => product.price >= filters.minPrice)
  }

  if (filters.maxPrice !== undefined) {
    products = products.filter(product => product.price <= filters.maxPrice)
  }

  if (filters.minRating !== undefined) {
    products = products.filter(product => product.rating >= filters.minRating)
  }

  return products
}