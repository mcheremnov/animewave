export async function GET(request: Request) {
    const { searchParams } = new URL(request.url)
    const name = searchParams.get('name')
    const getResponse = await fetch(
        `${process.env.HIANIME}/api/v2/hianime/search?q=${name}&page=1`,
    )
    const data = await getResponse.json()

    return data
}
