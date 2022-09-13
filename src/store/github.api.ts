import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import { transform } from 'typescript'
import { IUser, ServerResponse } from '../moduls/moduls'
import { IRepo } from '../moduls/moduls'

export const githubApi = createApi({
 reducerPath:'github/api',
 baseQuery: fetchBaseQuery({
    baseUrl:'https://api.github.com/'
 }),
 refetchOnFocus:true,
 endpoints:build => ({
   searchUsers:build.query<IUser[], string>({
    query: (search: string) => ({
        url: `search/users`,
        params:{
            q: search,
            par_page:10
        }
    }),
    transformResponse:(response:ServerResponse<IUser>) => response.items
   }),
   getUserRepos: build.query<IRepo[], string>({
    query: (username:string) => ({
        url: `users/${username}/repos`
    })
   }),
   createUser: build.mutation<any, void>({
    query: () => ``
   })
 })
})


export const {useSearchUsersQuery, useLazyGetUserReposQuery} = githubApi