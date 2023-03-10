import { ApolloClient, InMemoryCache } from '@apollo/client'

export const apolloClient = new ApolloClient({
  uri: process.env.NEXT_PUBLIC_DB_API_URL,
  headers: {
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_AUTH_TOKEN}`,
  },
  cache: new InMemoryCache(),
})
