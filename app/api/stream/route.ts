async function getAnimeEpisodes(name: string) {
    const getResponse = await fetch(`${process.env.HIANIME}/api/v2/hianime/anime/${name}/episodes`, { method: 'GET' })
    if (!getResponse.ok) {
        throw new Error(
            `Failed to fetch: ${getResponse.status} ${getResponse.statusText}`
        )
    }
    return await getResponse.json()
}

// async function getServers(name: string, episode: string) {

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url)
    const name = searchParams.get('name') || ''
    const animeResponse = await getAnimeEpisodes(name)
    console.log(animeResponse.data.episodes[0].title)
    return Response.json(animeResponse)
    
}