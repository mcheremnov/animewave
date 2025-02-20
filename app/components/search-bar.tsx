'use client'
import { useRouter } from 'next/navigation'
import { ChangeEvent, KeyboardEvent, useState } from 'react'
import { Search } from 'iconoir-react'
import { Button } from '@headlessui/react'

export const SearchBar = (item: { defaultValue: string }) => {
    const [inputValue, setInput] = useState(item.defaultValue)

    const router = useRouter()

    const handleSearch = () => {
        if (inputValue) return router.push(`/search?name=${inputValue}`)
        if (!inputValue) return router.push('/')
    }

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const inputString = event.target.value
        setInput(inputString)
    }

    const handleKeyPress = (event: KeyboardEvent) => {
        if (event.key === 'Enter') return handleSearch()
    }

    return (
        <>
            <div className="search__input mt-4 border-[2px] border-solid border-slate-500 flex flex-row items-center p-2 rounded-[15px]">
                <label htmlFor="inputId" className="mx-4">
                    <Search />
                </label>
                <input type="text"
                    id="inputId"
                    placeholder="Enter your keywords"
                    value={inputValue ?? item.defaultValue}
                    onChange={handleChange}
                    onKeyDown={handleKeyPress}
                    className="bg-[transparent] outline-none border-none w-full pl-2 pr-3" />
                <Button
                    className="rounded bg-transparent py-2 px-4 mx-2 text-white data-[hover]:bg-cyan-500 data-[active]:bg-cyan-700"
                    onClick={handleSearch}>
                    Search
                </Button>
            </div>
        </>
    )
}