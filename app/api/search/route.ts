import { IResponse } from '@/app/types'

const getAnimeByName = async (name: string, page: string) => {
    const getResponse = await fetch(`${process.env.HIANIME}/api/v2/hianime/search?q=${name}&page=${page}`, {method: 'GET'})
    if (!getResponse.ok) {
        throw new Error(
          `Failed to fetch: ${getResponse.status} ${getResponse.statusText}`
        )
      }
    return await getResponse.json() as IResponse
}

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url)
    const name = searchParams.get('name')
    const page = searchParams.get('page') ?? '1'
    if(name) {
        const animeResponse = await getAnimeByName(name, page)
        return Response.json(animeResponse.data.animes)
    }
    return Response.error()
}
