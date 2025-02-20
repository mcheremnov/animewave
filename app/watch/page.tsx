'use client'
import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import { IEpisode } from '../types'
import { Breadcrumbs } from '../components/bradcrumbs'
import { ListView } from '../components/list-view'
import { GridView } from '../components/grid-view'

export default function Watch() {
    const [episodes, setEpisodes] = useState<IEpisode[]>([])
    const params = useSearchParams().get('name') || ''
    const name = useSearchParams().get('series') || ''
    useEffect(() => {
        const fetchEpisodes = async (name: string) => {
            const episodesResponse = await fetch(`/api/stream?name=${name}`)
            if (!episodesResponse.ok) {
                throw new Error(
                    `Failed to fetch: ${episodesResponse.status} ${episodesResponse.statusText}`
                )
            }
            const { data } = await episodesResponse.json()
            console.log(data)
            setEpisodes(data.episodes)
        }
        fetchEpisodes(params)
    }, [params])
    return (
        <div>
            <Breadcrumbs name={name} />
            <div className="grid grid-cols-4 pl-10">
                {episodes.length > 0 && episodes.length < 30 ? (
                    <ListView episodes={episodes} />
                ) : episodes.length > 0 && episodes.length > 30 ? (
                    <GridView episodes={episodes} />
                ) : <h1>No anime have been found</h1>}
                <div>
                    <h1>Watch</h1>
                </div>
            </div>
        </div>
    )
}
//// 1200 fullscrean. 1199 medium. 1023 small fullscrean