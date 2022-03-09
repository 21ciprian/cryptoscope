import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
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
		getCryptos: builder.query<any, void>({
			query: () => createRequest('/coins'),
		}),
	}),
})
export const {useGetCryptosQuery} = cryptoApi
