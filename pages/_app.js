import '../styles/globals.css'
import { ThemeProvider } from "@material-tailwind/react";
import NavMenu from '../components/NavMenu'
import Footer from '../components/Footer';




function MyApp({ Component, pageProps }) {
  return (
    <>
    <ThemeProvider>
    <NavMenu />
    <Component {...pageProps} />
    <Footer />
    </ThemeProvider>
    </>
  ) 
}

export default MyApp
