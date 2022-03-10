import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import {Coin} from '../components/Cryptocurrencies'
export type Query = {
	data: {
		stats: any
		coins: Coin[]
		status: string
	}
}
const cryptoApiHeaders = {
	'x-rapidapi-host': process.env.REACT_APP_RCHOST,
	'x-rapidapi-key': process.env.REACT_APP_RCKEY,
}
const baseUrl = 'https://coinranking1.p.rapidapi.com'

const createRequest = (url: string) => ({url, headers: cryptoApiHeaders})
export const cryptoApi = createApi({
	reducerPath: 'cryptoApi',
	baseQuery: fetchBaseQuery({baseUrl}),
	endpoints: builder => ({
		getCryptos: builder.query<Query, void | undefined | number>({
			query: count => createRequest(`/coins?limit=${count}`),
		}),
	}),
})
export const {useGetCryptosQuery} = cryptoApi
