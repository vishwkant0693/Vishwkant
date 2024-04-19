"use client"
import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'


export default function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <div className="bg-black">
            <header className="">
                <nav className="flex items-center justify-between p-4 lg:px-8" aria-label="Global">
                    <div className="flex lg:flex-1">
                        <div className='text-2xl'>
                            Vishw<b>kant.</b>
                        </div>
                    </div>
                    <div className="flex lg:hidden">
                        <button
                            type="button"
                            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-600"
                            onClick={() => setMobileMenuOpen(true)}
                        >
                            <span className="sr-only">Open main menu</span>
                            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>
                    <div className="hidden lg:flex lg:gap-x-12">
                        <ul className='flex gap-6 max-sm:hidden'>
                            <li><Link href="/" className="text-sm font-semibold leading-6 transition hover:text-gray-500" >Home</Link></li>
                            <li><Link href="/about" className="text-sm font-semibold leading-6 transition hover:text-gray-500" >About</Link></li>
                            <li><Link href="/qualification" className="text-sm font-semibold leading-6 transition hover:text-gray-500" >Qualification</Link></li>
                            <li><Link href="/experience" className="text-sm font-semibold leading-6 transition hover:text-gray-500" >Experience</Link></li>
                            <li><Link href="/skills" className="text-sm font-semibold leading-6 transition hover:text-gray-500" >Skills</Link></li>
                            <li><Link href="/project" className="text-sm font-semibold leading-6 transition hover:text-gray-500" >Projects</Link></li>
                        </ul>

                    </div>
                </nav>
                <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                    <div className="fixed inset-0 z-50" />
                    <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-black text-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                        <div className="flex items-center justify-between">
                            <a href="/" className="-m-1.5 p-1.5">
                                <div className="flex lg:flex-1">
                                    <div className='text-2xl'>
                                        Vishw<b>kant.</b>
                                    </div>
                                </div>
                            </a>
                            <button
                                type="button"
                                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                <span className="sr-only">Close menu</span>
                                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                            </button>
                        </div>
                        <div className="flex items-center justify-center my-24">
                            <div className="-my-6 divide-y divide-gray-500/10">
                                <ul className="space-y-2 py-6 list-none text-center text-2xl">
                                    <li><a href="/" className="-mx-3 block rounded-lg px-3 py-2 leading-7 hover:text-gray-700" >Home</a></li>
                                    <li><a href="/about" className="-mx-3 block rounded-lg px-3 py-2 leading-7 hover:text-gray-700" >About</a></li>
                                    <li><a href="/qualification" className="-mx-3 block rounded-lg px-3 py-2 leading-7 hover:text-gray-700" >Qualification</a></li>
                                    <li><a href="/experience" className="-mx-3 block rounded-lg px-3 py-2 leading-7 hover:text-gray-700" >Experience</a></li>
                                    <li><a href="/skills" className="-mx-3 block rounded-lg px-3 py-2 leading-7 hover:text-gray-700" >Skills</a></li>
                                    <li><a href="/project" className="-mx-3 block rounded-lg px-3 py-2 leading-7 hover:text-gray-700" >Projects</a></li>
                                </ul>
                            </div>
                        </div>
                    </Dialog.Panel>
                </Dialog>
            </header>
        </div>
    )
}
