import {ThemeProvider} from 'next-themes';
import '../styles/globals.css';
import {StarsBgImage} from '@gordo-d/d-d-ui-components';


function MyApp({Component, pageProps}) {
  return (
    <ThemeProvider
      forcedTheme={
        Component.theme || null
      }
      attribute="class"
      defaultTheme="dark">
            <article className="relative h-screen w-screen overflow-hidden bg-neutral-900 ">
      <div
        className="absolute left-0 top-0 z-0 h-[800vh]
      w-screen">
        <StarsBgImage className="h-full w-screen"></StarsBgImage>
      </div>

      <div className="from-primary-black top-0 z-10 w-full bg-gradient-to-b to-neutral-900 pb-60">
      <Component {...pageProps} />
      </div>
    </article>
    </ThemeProvider>
  );
}

export default MyApp;
