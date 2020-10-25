import '../styles/main.scss'
import React from "react"
export  default function MyApp({ Component, pageProps}) {
    return (
        <>
            <Component {...pageProps} />
            {/*<style jsx global>*/}
            {/*    {`*/}
            {/*    body {*/}
            {/*    font-family: 'Roboto', sans-serif;*/}
            {/*    }*/}
            {/*    `}*/}
            {/*</style>*/}
            </>
    )
}