import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import {Coin} from '../components/Cryptocurrencies'

export type Query = {
	data: {
		stats: any
		coins: Coin[]
		status: string
	}
}
export type Category = {
	newsCategory: string
	count: number
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
		getCryptoNews: builder.query<Category, Category>({
			query: ({newsCategory, count}) =>
				createRequest(
					`/news/search?=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`
				),
		}),
	}),
})
export const {useGetCryptoNewsQuery} = cryptoNewsApi
