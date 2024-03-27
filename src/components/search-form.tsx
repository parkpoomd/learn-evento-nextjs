'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'

export default function SearchForm() {
  const router = useRouter()
  const [searchText, setSearchText] = useState('')

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (!searchText.trim()) return

    router.push(`/events/${searchText}`)
  }

  return (
    <form onSubmit={handleSubmit} className="w-full sm:w-[580px]">
      <input
        className="w-full h-16 rounded-lg bg-white/[7%] px-6 outline-none ring-accent/50 transition focus:ring-2 focus:bg-white/10"
        placeholder="Search events in any city..."
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        spellCheck={false}
      />
    </form>
  )
}
