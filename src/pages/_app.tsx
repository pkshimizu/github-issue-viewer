import '../styles/globals.css'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import PageLayout from '@/components/layout/PageLayout'
import store, { persistor } from '@/store'
import { theme } from '@/styles/theme'

import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <PageLayout>
            <Component {...pageProps} />
          </PageLayout>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  )
}

export default MyApp
