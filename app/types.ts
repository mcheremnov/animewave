export interface IAnime {
    id: string,
    name: string,
    jname: string,
    duration: string,
    poster: string,
    type: string,
    rating: string | null,
    episodes: {
        dub: number,
        sub: number
    }
}

export interface IResponse {
    data: {
        animes: IAnime[],
        searchQuery: string,
        totalPages: number,
        hasNextPage: boolean,
        currentPage: number
    }
}

export type IPreview = {
        success: true,
        data: {
          anime: {
            info: {
              id: string,
              name: string,
              poster: string,
              description: string,
              stats: {
                rating: string,
                quality: string,
                episodes: {
                  sub: number,
                  dub: number
                },
                type: string,
                duration: string
              },
              promotionalVideos: [
                {
                  title: string | undefined,
                  source: string | undefined,
                  thumbnail: string | undefined
                },
              ],
            },
            moreInfo: {
              aired: string,
              genres: string[],
              status: string,
              studios: string,
              duration: string
            }
        },
          seasons: [
            {
              id: string,
              name: string,
              title: string,
              poster: string,
              isCurrent: boolean
            },
          ]
        }
      }

 export type IEpisode = {
        title: string,
        episodeId: string,
        number: number,
        isFiller: boolean,
      }