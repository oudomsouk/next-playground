import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query'
import { MantineProvider } from '@mantine/core'
import { Provider } from 'react-redux'
import { store } from '../features/store/post-list-variables'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchInterval: false,
    },
  },
})

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <MantineProvider
            theme={{
              fontFamily: 'Open Sans, sans serif',
              spacing: { xs: 15, sm: 20, md: 25, lg: 30, xl: 40 },
            }}
          >
            <Component {...pageProps} />
          </MantineProvider>
        </Hydrate>
      </QueryClientProvider>
    </Provider>
  )
}

export default MyApp
