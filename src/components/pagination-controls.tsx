import { ArrowLeftIcon, ArrowRightIcon } from '@radix-ui/react-icons'
import Link from 'next/link'
import React from 'react'

type PaginationControlsProps = {
  previousPath: string
  nextPath: string
}

const btnStyle =
  'text-white flex items-center gap-x-2 px-5 py-3 bg-white/5 rounded-md opacity-75 hover:opacity-100 transition text-sm'

export default function PaginationControls({
  previousPath,
  nextPath,
}: PaginationControlsProps) {
  return (
    <section className="w-full flex justify-between">
      {previousPath ? (
        <Link href={previousPath} className={btnStyle}>
          <ArrowLeftIcon className="w-5 h-5" />
          Previous
        </Link>
      ) : (
        <div />
      )}
      {nextPath ? (
        <Link href={nextPath} className={btnStyle}>
          Next
          <ArrowRightIcon className="w-5 h-5" />
        </Link>
      ) : (
        <div />
      )}
    </section>
  )
}
