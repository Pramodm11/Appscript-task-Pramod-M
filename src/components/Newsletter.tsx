
'use client';

import { useState } from 'react'

export default function Newsletter() {
  const [email, setEmail] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Implement newsletter signup logic
    console.log('Newsletter signup:', email)
    setEmail('')
  }

  return (
    <form onSubmit={handleSubmit} className="flex">
      <input
        type="email"
        placeholder="Enter your e-mail..."
        className="flex-grow p-2 text-black"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <button type="submit" className="bg-white text-black p-2">
        Subscribe
      </button>
    </form>
  )
}