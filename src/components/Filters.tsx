'use client'

import { useState } from 'react'

const filterCategories = [
  'CUSTOMIZABLE',
  'IDEAL FOR',
  'OCCASION',
  'WORK',
  'FABRIC',
  'SEGMENT',
  'SUITABLE FOR',
  'RAW MATERIALS',
  'PATTERN'
]

interface FiltersProps {
  categories: string[]
}

export default function Filters({ categories }: FiltersProps) {
  const [selectedFilters, setSelectedFilters] = useState<string[]>([])

  const toggleFilter = (filter: string) => {
    setSelectedFilters(prev => 
      prev.includes(filter) ? prev.filter(f => f !== filter) : [...prev, filter]
    )
  }

  return (
    <aside className="w-64 flex-shrink-0">
      <h3 className="font-bold mb-4">SHOP BY</h3>
      <div className="space-y-4">
        {filterCategories.map((category) => (
          <div key={category}>
            <h4 className="font-semibold mb-2">{category}</h4>
            <ul className="space-y-1">
              <li>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    className="mr-2"
                    checked={selectedFilters.includes(category)}
                    onChange={() => toggleFilter(category)}
                  />
                  All
                </label>
              </li>
              {categories.filter(cat => cat.startsWith(category.toLowerCase())).map(subCategory => (
                <li key={subCategory}>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      className="mr-2"
                      checked={selectedFilters.includes(subCategory)}
                      onChange={() => toggleFilter(subCategory)}
                    />
                    {subCategory}
                  </label>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </aside>
  )
}