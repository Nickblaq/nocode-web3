import { useState, useEffect } from "react";
import { ethers, Signer } from "ethers";
import CustomFactory from '../abi/CustomFactory.json'
import { useAccount, useProvider, useSigner } from "wagmi";
// const provider = 'https://data-seed-prebsc-1-s1.binance.org:8545/';
// let provider = 'https://polygon-mumbai.g.alchemy.com/v2/ej5WjrTNfIunsEYL4M_89XRgLAZTZhIP';
const FactoryAddress = "0xbd29e6a18cef0649c5e67749a1a059d05f07d80c";
const Contracts = () => {
    const {address} = useAccount();
    const provider = useProvider()
    const { data: signer} = useSigner()
    const [isName, setName] = useState();
    const [isAddress, setAddress] = useState();
    const [isSymbol, setSymbol] = useState();
    const [isDecimal, setDecimal] = useState();
    // const [contracts, setContracts] = useState();
    const [loading, setLoading] = useState(true);

    
    const addToken = async () => {
        try {
  const wasAdded = await ethereum.request({
    method: 'wallet_watchAsset',
    params: {
      type: 'ERC20', // Initially only supports ERC20, but eventually more!
      options: {
        address: isAddress, // The address that the token is at.
        symbol: isSymbol, // A ticker symbol or shorthand, up to 5 chars.
        decimals: isDecimal, // The number of decimals in the token
        image: 'https://cryptologos.cc/logos/bnb-bnb-logo.svg?v=023', // A string url of the token logo
      },
    },
  });

  if (wasAdded) {
    console.log('Thanks for your interest!');
  } else {
    console.log('Your loss!');
  }
} catch (error) {
  console.log(error);
}
    };


    const getContracts = async () => {

        try {
            setLoading(true);
            const contract = new ethers.Contract(
                FactoryAddress,
                CustomFactory.abi,
                signer
            );
            const tokens = await contract.getAll();
            const [lastToken] = tokens.slice(-1);
            console.log('this is contract', tokens);
            // setSymbol(lastToken.symbol);
            // setAddress(lastToken[6])
            // setDecimal(lastToken.decimals)
            
            
            setLoading(false);
            // console.log('this is contract', );
        } catch (error) {
            setLoading(false);
            console.log(error);
        }
        
    }

    useEffect(() => {
            getContracts();
    }, []);

    
    const truncateAddress = (oxAddress) => {
        // This help solves the null error
        if (oxAddress == null) return '';
        return oxAddress.slice(0, 6) + "..." + oxAddress.slice(-5);
      };
    

    // const get = () => {
    //     return contracts.map((contract, index) => {
    //         return (
    //             <div key={index}>
    //                 <p>{contract}</p>
    //             </div>
    //         )
    //     })
    // }


            

    


    return (
        <>
        {loading ? (
            <div className="flex justify-center items-center">
                <div className="loader ease-linear rounded-full border-8 border-t-8 border-[#1ab675] h-12 w-12 mb-4"></div>
                </div>
                ) : (
                    <div>
        
               <div 
               className="text-center grid grid-cols-1 gap-4 sm:grid-cols-2 mt-20 md:mt-32 px-2">
            <div>
            <div className="w-full block border-[#1ab675] py-2 px-4 rounded-lg border">
            <div className="flex items-center justify-between ">
                <p className="text-sm font-semibold">{isName}</p>
                <div className="flex items-center px-2 py-1 rounded-lg border border-[#1ab675]">
                <img src="/binance.png" alt="arrow" className="w-4 h-4 mr-1" />
                    <p className="text-sm font-semibold">{isSymbol}</p>
                    
                </div>
            </div>
            <div className="">
            <div className="flex gap-2">
            <p className="text-xs">Address: {" "} {truncateAddress(isAddress)}</p>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 7.5V6.108c0-1.135.845-2.098 1.976-2.192.373-.03.748-.057 1.123-.08M15.75 18H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08M15.75 18.75v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5A3.375 3.375 0 006.375 7.5H5.25m11.9-3.664A2.251 2.251 0 0015 2.25h-1.5a2.251 2.251 0 00-2.15 1.586m5.8 0c.065.21.1.433.1.664v.75h-6V4.5c0-.231.035-.454.1-.664M6.75 7.5H4.875c-.621 0-1.125.504-1.125 1.125v12c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V16.5a9 9 0 00-9-9z" />
</svg>
            </div>
            <button 
            onClick={addToken}
            className="ml-auto bg-[#1ab675] text-white px-2 py-1 rounded-lg w-full mt-3">Add to metamask</button>
            </div>
            </div>
            </div>
          </div>
            </div>
          )}
        </>
    )
}

export default Contracts


{/* <svg viewBox="0 0 288 288" fill="none" aria-hidden="true" class="absolute inset-0 h-full w-full overflow-visible"><path fill-rule="evenodd" clip-rule="evenodd" d="M232.213 29.661a6.75 6.75 0 0 1 8.659 4.019 293.104 293.104 0 0 1 4.671 13.82 293.554 293.554 0 0 1 12.249 63.562c6.142 6.107 9.958 14.579 9.958 23.938 0 9.359-3.816 17.831-9.958 23.938a293.551 293.551 0 0 1-12.249 63.562 293.143 293.143 0 0 1-4.671 13.82 6.75 6.75 0 0 1-12.678-4.64c.937-2.56 1.838-5.137 2.702-7.731a279.258 279.258 0 0 0-88.553-26.124 207.662 207.662 0 0 0 8.709 22.888c4.285 9.53 1.151 21.268-8.338 26.747l-7.875 4.547c-9.831 5.675-22.847 2.225-27.825-8.542a256.906 256.906 0 0 1-16.74-48.337C60.857 190.897 38.25 165.588 38.25 135c0-33.551 27.199-60.75 60.75-60.75h9c8.258 0 16.431-.356 24.505-1.052 35.031-3.023 68.22-12.466 98.391-27.147a278.666 278.666 0 0 0-2.702-7.73 6.75 6.75 0 0 1 4.019-8.66Zm2.681 29.45a292.862 292.862 0 0 1-96.423 27.083c-3.74 15.652-5.721 31.994-5.721 48.806 0 16.812 1.981 33.154 5.721 48.806a292.884 292.884 0 0 1 96.423 27.083 280.39 280.39 0 0 0 9.636-55.608c.477-6.697.72-13.46.72-20.281 0-6.821-.243-13.584-.72-20.281a280.396 280.396 0 0 0-9.636-55.608ZM124.37 182.697A223.556 223.556 0 0 1 119.25 135c0-16.365 1.766-32.325 5.12-47.697a299.37 299.37 0 0 1-16.37.447h-9c-26.096 0-47.25 21.155-47.25 47.25S72.904 182.25 99 182.25h9c5.492 0 10.95.15 16.37.447Zm-20.039 13.053a243.387 243.387 0 0 0 14.937 42.049c1.434 3.103 5.418 4.481 8.821 2.516l7.875-4.547c3.054-1.763 4.429-5.84 2.775-9.519a221.156 221.156 0 0 1-10.907-29.811A285.523 285.523 0 0 0 108 195.75h-3.669Z" fill="#A78BFA" fill-opacity=".1" stroke="#8B5CF6" stroke-width="2"></path><g mask="url(#cc)"><path opacity=".1" d="M-69 287.5h445" stroke="url(#e)" stroke-width="1.5"></path><path opacity=".1" d="M-69 0h445" stroke="url(#f)" stroke-width="1.5"></path><path opacity=".1" d="M.25 355V-90" stroke="url(#g)" stroke-width="1.5"></path><path opacity=".1" d="M287.75 355V-90" stroke="url(#h)" stroke-width="1.5"></path></g><defs><linearGradient id="e" x1="375.75" y1="296.754" x2="-69.25" y2="296.754" gradientUnits="userSpaceOnUse"><stop stop-color="#0F172A" stop-opacity="0"></stop><stop offset=".258" stop-color="#0F172A" stop-opacity=".6"></stop><stop offset=".521" stop-color="#0F172A"></stop><stop offset=".784" stop-color="#0F172A" stop-opacity=".6"></stop><stop offset="1" stop-color="#0F172A" stop-opacity="0"></stop></linearGradient><linearGradient id="f" x1="375.75" y1="9.254" x2="-69.25" y2="9.254" gradientUnits="userSpaceOnUse"><stop stop-color="#0F172A" stop-opacity="0"></stop><stop offset=".258" stop-color="#0F172A" stop-opacity=".6"></stop><stop offset=".521" stop-color="#0F172A"></stop><stop offset=".784" stop-color="#0F172A" stop-opacity=".6"></stop><stop offset="1" stop-color="#0F172A" stop-opacity="0"></stop></linearGradient><linearGradient id="g" x1="9.504" y1="-89.75" x2="9.504" y2="355.25" gradientUnits="userSpaceOnUse"><stop stop-color="#0F172A" stop-opacity="0"></stop><stop offset=".258" stop-color="#0F172A" stop-opacity=".6"></stop><stop offset=".521" stop-color="#0F172A"></stop><stop offset=".784" stop-color="#0F172A" stop-opacity=".6"></stop><stop offset="1" stop-color="#0F172A" stop-opacity="0"></stop></linearGradient><linearGradient id="h" x1="297.004" y1="-89.75" x2="297.004" y2="355.25" gradientUnits="userSpaceOnUse"><stop stop-color="#0F172A" stop-opacity="0"></stop><stop offset=".258" stop-color="#0F172A" stop-opacity=".6"></stop><stop offset=".521" stop-color="#0F172A"></stop><stop offset=".784" stop-color="#0F172A" stop-opacity=".6"></stop><stop offset="1" stop-color="#0F172A" stop-opacity="0"></stop></linearGradient><mask id="cc" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="-333" y="-242" width="956" height="927"><path fill="url(#b)" d="M-333-242h956v927h-956z"></path></mask></defs></svg> */}