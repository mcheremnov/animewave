'use client'
import { useRouter, useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import { IPreview } from '../types'
import Image from 'next/image'
import spinner from '@/public/spinner.svg'
import { Button } from '@headlessui/react'

const Preview = () => {
    const router = useRouter()
    const queryName = useSearchParams().get('name') ?? ''
    const [preview, setPreview] = useState<IPreview>()

    const fetchData = async (name: string) => {
        const animeResponse = await fetch(`/api/preview?name=${name}`)
        if (!animeResponse.ok) {
            throw new Error(
                `Failed to fetch: ${animeResponse.status} ${animeResponse.statusText}`
            )
        }
        const data = await animeResponse.json()
        return data as IPreview
    }
    const redirect = (name: string, series: string) => {
        router.push('/watch?name=' + name + '&series=' + series)
    }

    useEffect(() => {
        fetchData(queryName).then(myData => setPreview(myData))
    }, [queryName])

    return (
        <>
            {preview ? <div className="container p-10">
                <div className="inline-grid grid-cols-2">
                    <div className='ml-10'>
                        <Image src={preview.data.anime.info.poster} alt={preview.data.anime.info.name} width={300} height={400} />
                    </div>
                    <div className='mt-20'>
                        <h1>{preview.data.anime.info.name}</h1>
                        <p>{preview.data.anime.info.description}</p>
                        <h2>Rating: {preview.data.anime.info.stats.rating}</h2>
                        <Button className='rounded bg-transparent p-1 my-1 text-white data-[hover]:bg-indigo-500 data-[active]:bg-indigo-700 float-left' onClick={() => redirect(preview.data.anime.info.id, preview.data.anime.info.name)} >Watch anime</Button>
                    </div>
                </div>
            </div> : <>
                <h1 className='grid h-screen place-items-center'><Image src={spinner} width={100} height={100} alt='Loading....' /></h1>
            </>}
        </>

    )
}

export default Preview