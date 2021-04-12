import 'style/global.scss'

export default function MyApp(App: any) {
    const { Component, pageProps } = App
    return <Component {...pageProps} />
}