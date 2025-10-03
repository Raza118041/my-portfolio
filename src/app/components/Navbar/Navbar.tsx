"use client"
import { Button } from '@/components/ui/button'
import { Menu, X } from 'lucide-react'
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
        <nav className='w-full bg-gray-50 z-50'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-20 py-3 md:py-4 flex items-center justify-between'>
                {/* Logo  */}
                <div className='flex items-center text-xl sm:text-2xl font-bold text-gray-900'>
                    <div className="w-8 h-8 sm:h-10 flex items-center justify-center rounded-full border-3 sm:border-4 border-sidebar-ring text-sidebar-ring mr-2">
                        C
                    </div>
                    <span>
                        reative <span className='text-sidebar-ring'>
                            Services
                        </span>
                    </span>
                </div>

                {/* Links  */}
                <ul className='hidden md:flex items-center gap-6 lg:gap-8 text-gray-700 font-medium'>
                    {navItems.map(({ name, link }) => (
                        <li key={name}>
                            <Link
                                href={link}
                                className='hover:text-sidebar-ring cursor-pointer transition-colors'>
                                {name}
                            </Link>
                        </li>
                    ))}
                </ul>
                <div className='hidden md:block'>
                    <Button
                        onClick={toggleMenu}
                        className='px-4 py-2 sm:px-5 sm:py-2 rounded-lg sm:rounded-xl bg-sidebar-ring text-white font-medium cursor-pointer transition-colors'
                    >
                        Get Started
                    </Button>
                </div>
                {/* Menu  */}
                <div className='md:hidden'>
                    <Button
                        onClick={toggleMenu}
                        className='p-1 rounded-md bg-primary-none focus:outline-none focus:ring-2 focus:ring-sidebar-ring'
                    >
                        {isMenuOpen ? (
                            <X className='!w-5 !h-5 text-gray-700' />
                        ) : (
                            <Menu className='!w-5 !h-5 text-gray-700' />
                        )}

                    </Button>
                </div>
            </div>
            {isMenuOpen && (
                <div className='md:hidden bg-white shadow-lg border-t border-gray-200'>
                    <div className='px-4 py-3 space-y-3'>
                        {navItems.map(({ name, link }) => (
                            <Link
                                key={name}
                                href={link}
                                className='block py-2 px-4 text-gray-700 hover:bg-gray-100 rounded-lg hover:text-green-500 transition-colors'
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {name}
                            </Link>
                        ))}
                        <div className='pt-2'>
                            <Button
                                className='w-full py-2 bg-sidebar-ring text-white font-medium hover:bg-sidebar-ring transition-colors'
                            >
                                Get Started
                            </Button>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    )
}

export default Navbar