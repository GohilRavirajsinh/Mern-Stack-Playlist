import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (
        <footer className='flex justify-around bg-slate-800 text-white py-4 text-xsS'>
            <div className='text-center '>Copyright c facebook | All rights reserved</div>
            <ul className='flex gap-2 text-sm'>
                <Link href="/"><li>Home</li></Link>
                <Link href="/about"><li>About</li></Link>
                <Link href="/contact"><li>Contact</li></Link>
            </ul>
        </footer>
    )
}

export default Footer
