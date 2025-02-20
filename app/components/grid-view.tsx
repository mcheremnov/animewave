import { Button } from '@headlessui/react'
import { IEpisode } from '../types'

export const GridView = ({ episodes }: { episodes: IEpisode[] }) => {
    return (
        <>
            <div className='border rounded grid-cols-subgrid justify-items-left'>
                {
                    episodes.length > 0 && episodes.map((episode) => (
                        <Button key={episode.number} className='rounded bg-transparent text-white data-[hover]:bg-fuchsia-500 data-[active]:bg-fuchsia-700'>{episode.number}</Button>
                    ))
                }
            </div>
        </>
    )
}