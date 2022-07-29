import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import { Intialization } from '../core/intialization'

function MyApp({ Component, pageProps }: AppProps) {
    return <>
        {/*All initialization will be done inside Intialization component*/}
        <Intialization/>
        <Component {...pageProps} />
    </>
}


export default MyApp
