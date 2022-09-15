import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {ChakraProvider, theme} from "@chakra-ui/react";
import Head from "next/head";
import {Provider} from "react-redux";
import store, {persistor} from "../store";
import {PersistGate} from "redux-persist/integration/react";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <Head>
          <title>GitHub Issue Viewer</title>
        </Head>
        <ChakraProvider theme={theme}>
          <Component {...pageProps} />
        </ChakraProvider>
      </PersistGate>
    </Provider>
  )
}

export default MyApp
