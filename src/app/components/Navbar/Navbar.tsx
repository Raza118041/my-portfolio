"use client"
import Link from 'next/link'
import React, { useState } from 'react'

const navItems = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Company", link: "/company" },
    { name: "Services", link: "/services" },
    { name: "Contact", link: "/contact" },
]
const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

    return (
        <nav className='fixed'>
            <div className=''>
                {/* Logo  */}
                <div className=''>
                    P
                </div>
                <span>
                    ro <span>
                        Service
                    </span>
                </span>
            </div>
            {/* Links  */}
            <ul className=''>
                {navItems.map(({ name, link }) => (
                    <li key={name}>
                        <Link href={link}>{name}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Navbar