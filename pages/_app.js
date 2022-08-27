import '../styles/globals.css'
import { ThemeProvider } from "@material-tailwind/react";
import NavMenu from '../components/NavMenu'




function MyApp({ Component, pageProps }) {
  return (
    <>
    <ThemeProvider>
    <NavMenu />
    <Component {...pageProps} />
    </ThemeProvider>
    </>
  ) 
}

export default MyApp
