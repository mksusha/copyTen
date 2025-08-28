'use client'

import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const navItems = [
    { name: "Как это работает", href: "#how-it-works" },
    { name: "Почему это работает", href: "#why-it-works" },
    { name: "Доходность", href: "#stats" },
    { name: "Безопасность", href: "#security" },
    { name: "Отбор", href: "#bonds-selection" },


    { name: "Риски", href: "#risk-minimization" },
    { name: "Стоимость", href: "#pricing" },
    { name: "Поддержка", href: "#support" },


    { name: "Кейсы", href: "#cases" },
    { name: "FAQ", href: "#faq" },
];

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)
    const closeTimer = useRef<NodeJS.Timeout | null>(null)

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50)
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const handleMouseEnter = () => {
        if (closeTimer.current) clearTimeout(closeTimer.current)
        setMenuOpen(true)
    }

    const handleMouseLeave = () => {
        closeTimer.current = setTimeout(() => setMenuOpen(false), 200)
    }

    return (
        <motion.header
            initial={false}
            animate={scrolled ? 'scrolled' : 'top'}
            variants={{
                top: { height: 80, width: '100%', top: 0, borderRadius: '0rem', backgroundColor: 'rgba(255,255,255,0.9)' },
                scrolled: { height: 78, width: '90%', top: 16, borderRadius: '100.5rem', backgroundColor: 'rgba(255,255,255,0.2)', border: '1px solid rgba(0,0,0,0.08)' },
            }}
            transition={{ type: 'tween', duration: 0.4, ease: 'easeOut' }}
            style={{
                WebkitBackdropFilter: scrolled ? 'blur(12px)' : 'none',
                backdropFilter: scrolled ? 'blur(12px)' : 'none',
                margin: '0 auto',
                padding: '0 24px',
            }}
            className="fixed left-0 right-0 m-auto z-50 flex items-center px-6 lg:px-0"
        >
            <nav className="w-full max-w-[1350px] mx-4  flex items-center justify-between h-full">
                <a href="#" className="block sm:h-10 h-6  w-auto">
                    <img src="/Logo.svg" alt="Логотип компании" className="sm:h-10 h-8 w-auto object-contain" />
                </a>


                <div className="hidden lg:flex gap-x-6 items-center font-medium text-gray-700 relative">
                    <div
                        className="relative"
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    >
                        <div
                            className="flex items-center gap-1 font-semibold cursor-pointer text-gray-800 hover:text-emerald-500 transition-colors">
                            Меню
                            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/>
                            </svg>
                        </div>

                        {menuOpen && (
                            <motion.div
                                initial={{opacity: 0, y: -10}}
                                animate={{opacity: 1, y: 0}}
                                exit={{opacity: 0, y: -10}}
                                transition={{duration: 0.2}}
                                className="absolute left-1/2 -translate-x-1/2 mt-2 w-48 bg-white/70 backdrop-blur-md rounded-xl shadow-lg ring-1 ring-gray-200 z-50"
                            >
                                <ul className="divide-y divide-gray-100">
                                    {navItems.map(item => (
                                        <li key={item.href}>
                                            <a
                                                href={item.href}
                                                className="block px-4 py-2 text-gray-800 hover:bg-emerald-100 hover:text-emerald-600 transition-colors rounded-lg"
                                            >
                                                {item.name}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        )}
                    </div>


                    <a
                        href="https://t.me/copyten_in_bot?start=1"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ml-4 px-6 py-2 rounded-4xl font-semibold border-2 border-emerald-500 text-emerald-500 bg-white hover:bg-emerald-500 hover:text-white transition-all shadow-md flex items-center justify-center gap-2"
                    >
                        Подключить счёт
                        {/* SVG Телеграма справа */}
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 240 240"
                            className="w-5 h-5"
                            fill="currentColor"
                        >
                            <path
                                d="M120,0C53.7,0,0,53.7,0,120s53.7,120,120,120s120-53.7,120-120S186.3,0,120,0z M178.3,84.2l-20.4,96.2 c-1.5,6.9-5.5,8.7-11.1,5.4l-30.7-22.7l-14.8,14.3c-1.6,1.6-3,3-6.1,3l2.2-31.6l57.5-52.1c2.5-2.2-0.5-3.5-3.9-1.3 l-71.1,44.9l-30.6-9.6c-6.7-2.1-6.8-6.7,1.4-9.9l119.8-46.1C176.1,72.3,181,76.5,178.3,84.2z"/>
                        </svg>
                    </a>

                </div>


                <button
                    type="button"
                    className="lg:hidden p-2 text-gray-700"
                    onClick={() => setMobileMenuOpen(true)}
                    aria-label="Открыть меню"
                >
                    <Bars3Icon className="h-8 w-8"/>
                </button>
            </nav>


            <Dialog open={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} className="lg:hidden">
                <DialogPanel className="fixed inset-0 z-50 bg-white p-6 overflow-y-auto">
                    <div className="flex items-center justify-between mb-8">
                        <a href="#" className="block h-8 w-auto">
                            <img src="/Logo.svg" alt="Логотип компании" className="h-8 w-auto object-contain"/>
                        </a>
                        <button type="button" className="p-2 text-gray-700" onClick={() => setMobileMenuOpen(false)}>
                            <XMarkIcon className="h-8 w-8"/>
                        </button>
                    </div>
                    <nav>
                        <ul className="space-y-6 text-lg font-medium text-gray-700">
                            {navItems.map(item => (
                                <li key={item.href} className="border-b border-gray-200 pb-2">
                                    <a href={item.href} onClick={() => setMobileMenuOpen(false)}>
                                        {item.name}
                                    </a>
                                </li>
                            ))}
                            <li>
                                <a href="https://t.me/copyten_in_bot?start=1" className="block mt-4 px-6 py-2 rounded-4xl font-semibold border-2 border-emerald-500 text-emerald-500 bg-white hover:bg-emerald-500 hover:text-white transition-all shadow-md text-center">
                                    Подключить счёт
                                </a>
                            </li>
                        </ul>
                    </nav>
                </DialogPanel>
            </Dialog>
        </motion.header>
    )
}
