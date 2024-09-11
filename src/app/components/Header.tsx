import React from 'react'
import Link from 'next/link';
const Header = () => {
  return (
    <div className='flex gap-10 rounded-xl p-6 bg-slate-200'>
    <Link href="\">Home page</Link>
    <Link href="\name">Name Page</Link>
    <Link href="\address">Address Page</Link>
</div>
  )
}

export default Header