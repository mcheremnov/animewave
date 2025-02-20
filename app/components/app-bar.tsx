import { Disclosure } from '@headlessui/react'
import Image from 'next/image'
import Link from 'next/link'
import logo from '../../public/white_on_trans.png'

export const AppBar = () => {
    return (
        <Disclosure as="nav" className="bg-gray-800 sticky top-0 z-50">
            <div className="mx-auto max-w-7xl px-2 md:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-between">
                    <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                        <div className="flex shrink-0 items-center">
                            <Link href="/"><Image
                                alt="AnimeWave"
                                height={100}
                                width={70}
                                src={logo}
                                className="w-auto"
                            /></Link>
                        </div>
                    </div>
                </div>
            </div>
        </Disclosure>
    )
}
