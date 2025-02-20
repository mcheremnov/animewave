async function getAnimePreview(name: string) {
    const getResponse = await fetch(`${process.env.HIANIME}/api/v2/hianime/anime/${name}`, { method: 'GET' })
    if (!getResponse.ok) {
        throw new Error(
            `Failed to fetch: ${getResponse.status} ${getResponse.statusText}`
        )
    }
    return await getResponse.json()
} 

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url)
    const name = searchParams.get('name')
    if(name) {
        const animeResponse = await getAnimePreview(name)
        return Response.json(animeResponse)
    }
}