import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
export type Provider = {
	_type: string
	name: string
	image: {
		thumbnail: {
			contentUrl: string
		}
	}
}
export type Value = {
	url: string
	_type: string
	name: string
	datePublished: string
	description: string
	image: {
		thumbnail: {
			contentUrl: string
		}
	}
	provider: Provider[]
}
export type Category = {
	newsCategory: string
	count: number
	value: Value[]
}
const cryptoNewsHeaders = {
	'x-bingapis-sdk': 'true',
	'x-rapidapi-host': process.env.REACT_APP_RNHOST,
	'x-rapidapi-key': process.env.REACT_APP_RNKEY,
}
const baseUrl = 'https://bing-news-search1.p.rapidapi.com'
const createRequest = (url: string) => ({url, headers: cryptoNewsHeaders})
export const cryptoNewsApi = createApi({
	reducerPath: 'cryptoNewsApi',
	baseQuery: fetchBaseQuery({baseUrl}),
	endpoints: builder => ({
		getCryptoNews: builder.query<Category, Category | undefined | any>({
			query: ({newsCategory, count}) =>
				createRequest(
					`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`
				),
		}),
	}),
})
export const {useGetCryptoNewsQuery} = cryptoNewsApi
