import { Button } from '@headlessui/react'
import { IEpisode } from '../types'

export const ListView = ({ episodes }: { episodes: IEpisode[] }) => {
    return (
        <div className='border rounded grid grid-cols-subgrid h-2/3 overflow-y-auto'>
            <ol>
                {episodes ? episodes.map((episode) => (
                    <li key={episode.number} className='odd:bg-gray-800 even:bg-gray-900'><Button className='w-full rounded bg-transparent text-white data-[hover]:bg-fuchsia-400 data-[active]:bg-fuchsia-700 p-3 text-left'>{episode.number}. {episode.title.length > 25 ? episode.title.substring(0, 25) + '...' : episode.title}</Button></li>
                )) : null}
            </ol>
        </div>
    )
}