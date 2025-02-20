'use client'
import { useSearchParams } from 'next/navigation'
import { IAnime } from '../types'
import { useEffect, useState } from 'react'
import { SearchBar } from '../components/search-bar'
import { Card } from '../components/card'
import spinner from '@/public/spinner.svg'
import Image from 'next/image'

export default function Search() {
    const queryName = useSearchParams().get('name') ?? ''
    const [anime, setAnime] = useState<IAnime[]>([])

    const fetchData = async (name: string) => {
        const animeResponse = await fetch(`/api/search?name=${name}&page=1`)
        if (!animeResponse.ok) {
            throw new Error(
                `Failed to fetch: ${animeResponse.status} ${animeResponse.statusText}`
            )
        }
        const data = await animeResponse.json() as IAnime[]
        return data
    }

    useEffect(() => {
        fetchData(queryName).then(myData => setAnime(myData))
    }, [queryName])

    return (
        <>
            <SearchBar defaultValue={queryName} />
            <div className="grid md:grid-cols-6 sm:grid-cols-3 gap-5 m-4">
                {anime ? anime.map((item: IAnime) => (
                    <Card key={item.id} anime={item} />
                )) : <h1 className='grid h-screen place-items-center'><Image src={spinner} width={100} height={100} alt='Loading....' /></h1>}
            </div>
        </>
    )
}