import { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'

import { Header } from '../components/Header'
import { queryClient } from '../services/queryClient'
import { SearchProvider } from '../hooks/useSearch'

import { theme } from '../styles/theme'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <SearchProvider>
      <ChakraProvider theme={theme}>
        <Header />
        
        <Component {...pageProps} />
      </ChakraProvider>

      {process.env.NODE_ENV === 'development' && <ReactQueryDevtools />}
      </SearchProvider>
    </QueryClientProvider>
  )
}

export default MyApp
