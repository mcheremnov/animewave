import { Button } from '@headlessui/react'
import { IAnime } from '../types'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

export const Card = ({ anime }: { anime: IAnime }) => {
    const router = useRouter()
    function handleButtonClick(name: string) {
        router.push(`/preview?name=${name}`)


    }
    return (
        <div className="relative items-center">
            <Image src={anime.poster} alt={anime.name} className="thumbnail" height={400} width={300} />
            <div className="p-3 hide border-2 border-solid border-indigo-500 -top-1 rounded-[20px]">
                <h2><b>Title</b>: {anime.name}</h2>
                <h2><b>Japanese Title</b>: {anime.jname}</h2>
                <p><b>Type</b>: {anime.type}</p>
                <p><b>Rating</b>: {anime.rating ? anime.rating : 'N/A'}</p>
                <p><b>Duration</b>: {anime.duration}</p>
                <p><b>Episodes</b>: SUB: {anime.episodes.sub} | DUB: {anime.episodes.dub}</p>
                <Button className='rounded bg-transparent p-1 my-1 text-white data-[hover]:bg-indigo-500 data-[active]:bg-indigo-700 float-right' onClick={() => handleButtonClick(anime.id)}>Previewanime</Button>
            </div>
        </div>
    )
}