import '../styles/globals.css'
import Head from 'next/head'
import Router from 'next/router';
import NProgress from 'nprogress'; //nprogress module
import 'nprogress/nprogress.css'; //styles of nprogress
import { ThemeProvider } from "@material-tailwind/react";
import NavMenu from '../components/NavMenu'
import Footer from '../components/Footer';

import {WagmiConfig,createClient,defaultChains,configureChains,chain} from 'wagmi'
import { jsonRpcProvider } from 'wagmi/providers/jsonRpc'
import { publicProvider } from 'wagmi/providers/public'
import { alchemyProvider } from 'wagmi/providers/alchemy'
import { CoinbaseWalletConnector } from 'wagmi/connectors/coinbaseWallet'
import { InjectedConnector } from 'wagmi/connectors/injected'
import { MetaMaskConnector } from 'wagmi/connectors/metaMask'
import { WalletConnectConnector } from 'wagmi/connectors/walletConnect'


const smartChainChain = {
  id: 56,
  name: 'Binance',
  network: 'Binance',
  nativeCurrency: {
    decimals: 18,
    name: 'Binance',
    symbol: 'BSC',
  },
  rpcUrls: {
    default: 'https://bsc-dataseed4.binance.org/',
  },
  blockExplorers: {
    default: { name: 'BscScan', url: 'https://bscscan.com' },
  },
  testnet: false,
}

const smartTestChain = {
  id: 97,
  name: 'Binance_Testnet',
  network: 'Binance_Testnet',
  nativeCurrency: {
    decimals: 18,
    name: 'Binance_Testnet',
    symbol: 'BSC_Testnet',
  },
  rpcUrls: {
    default: 'https://data-seed-prebsc-2-s3.binance.org:8545/',
  },
  blockExplorers: {
    default: { name: 'BscTestnetScan', url: 'https://testnet.bscscan.com' },
  },
  testnet: false,
}



// Configure chains & providers with the Alchemy provider.
// Two popular providers are Alchemy (alchemy.com) and Infura (infura.io)
const { chains, provider, webSocketProvider } = configureChains( 
  [
    chain.mainnet,
    chain.polygonMumbai,
    // chain.mainnet,
    chain.polygon,
    smartChainChain,
    smartTestChain,
    // chain.optimism,
    // chain.arbitrum,
    
    // ...(process.env.NEXT_PUBLIC_ENABLE_TESTNETS === 'true'
    //   ? [chain.goerli, chain.kovan, chain.rinkeby, chain.ropsten]
    //   : []),
  ],
  
  [
  alchemyProvider({ apiKey: 'ej5WjrTNfIunsEYL4M_89XRgLAZTZhIP' }),
  publicProvider(),
  jsonRpcProvider({
    rpc: (chain) => {
      // if (chain.id !== smartChainChain.id || chain.id !== smartTestChain) return null
      return { http: chain.rpcUrls.default }
}
  }),
])

// Set up client
const client = createClient({
  autoConnect: true,
  connectors: [
    new MetaMaskConnector({ chains }),
    new CoinbaseWalletConnector({
      chains,
      options: {
        appName: 'wagmi',
      },
    }),
    new WalletConnectConnector({
      chains,
      options: {
        qrcode: true,
      },
    }),
    new InjectedConnector({
      chains,
      options: {
        name: 'Injected',
        shimDisconnect: true,
      },
    }),
  ],
  provider,
  webSocketProvider,
})



//Binding events. 
Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());


function MyApp({ Component, pageProps }) {
  return (
    <>
    <Head>
        <title>Chase Fintoken</title>
      </Head>
     
    <ThemeProvider>
    <WagmiConfig client={client}>
    <NavMenu />
    <Component {...pageProps} />
    <Footer />
    </WagmiConfig>
    </ThemeProvider>
    </>
  ) 
}

export default MyApp
