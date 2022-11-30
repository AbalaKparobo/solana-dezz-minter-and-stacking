import type { AppProps } from 'next/app'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'

// import '../styles/globals.css'
import { text } from 'stream/consumers'
import WalletContextProvider from '../components/WalletContextProvider'

const colors = {
  background: '#1F1F1F',
  accent: '#00cc00',
  bodyText: 'rgba(255, 255, 255, .75)'
}

const theme = extendTheme({colors})

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <WalletContextProvider>
        <Component {...pageProps} />
      </WalletContextProvider>
    </ChakraProvider>
  )
}

export default MyApp
