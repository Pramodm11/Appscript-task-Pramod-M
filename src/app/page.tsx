import { getProducts, getCategories } from '../lib/api'
import ProductGrid from '../components/ProductGrid'
import Filters from '../components/Filters'

export default async function Home() {
  const [products, categories] = await Promise.all([
    getProducts(),
    getCategories()
  ])

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-4">DISCOVER OUR PRODUCTS</h1>
      <p className="text-center mb-8 max-w-2xl mx-auto">
        Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus scelerisque. Dolor integer scelerisque nibh amet mi ut elementum dolor.
      </p>
      <div className="flex flex-col md:flex-row gap-8">
        <Filters categories={categories} />
        <ProductGrid products={products} />
      </div>
    </main>
  )
}