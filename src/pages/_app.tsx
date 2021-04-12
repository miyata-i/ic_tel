import './global.scss';
import next from 'next';
export default function MyApp(App: any) {
  const { Component, pageProps } = App;
  return <Component {...pageProps} />;
}
