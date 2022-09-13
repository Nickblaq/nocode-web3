import { useState,useEffect } from 'react';
import CustomFactory from '../abi/CustomFactory.json';
import { ethers, Contract } from 'ethers';
import { useAccount, useSigner } from "wagmi";
import { useRouter } from 'next/router'


const FactoryAddress = "0xbd29e6a18cef0649c5e67749a1a059d05f07d80c";

const TokenData = ({ tokenData, nextStep}) => {
    const {tokenName, tokenSymbol, decimal, mint, burn, supply} = tokenData
    console.log(tokenData);
const [isLoaded, setIsLoaded] = useState(false);
    // const [state, setState] = useState(false)
    // const { chain, chains } = useNetwork()
    const {address} = useAccount()
    const { data: signer } = useSigner()
    const router = useRouter()
    
    const [isAddress, setAddress] = useState();
    const [isSymbol, setSymbol] = useState();
    const [isDecimal, setDecimal] = useState();

    const contract = new Contract(FactoryAddress, CustomFactory.abi, signer);

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

    const setTokenDetails = async () => {
        try {
            const tokens = await contract.getAll();
        const [lastToken] = await tokens.slice(-1);
        setSymbol(lastToken.symbol);
        setSymbol(lastToken.symbol);
        setAddress(lastToken[6])
        } catch {
            console.log(error)
        }
        
    }


      async function claim () {
    try {
      if (!address) return null
        setIsLoaded(true)
      const {tokenName, tokenSymbol, decimal, mint, burn, supply} = tokenData
       
        const gas = contract.estimateGas.create(tokenName, tokenSymbol, decimal, mint, burn, supply);
        let amount = ethers.utils.parseEther('0.01');
        let response = await contract.create(tokenName, tokenSymbol, decimal, mint, burn, supply,
           { 
            value: amount,
            gasLimit: 2134638
            });
        setIsLoaded(false)
        let hash = await response.hash
        router.push(`https://testnet.bscscan.com/tx/${hash}`)
        console.log(hash)
        } catch (error) {
        setIsLoaded(false)
        }
        }
        
    return (
        <>
        {isLoaded ? 
        <div className="border border-blue-300 shadow rounded-md p-4 max-w-sm w-full mx-auto">
       <div className="flex justify-center items-center">
  <div className="spinner-border animate-spin inline-block w-16 h-16 border-4 border-[#1ab675] rounded-full">
  </div>
  <div>
    <p className="text-2xl font-bold text-[#1ab675]">Creating Token</p>
  </div>
</div>
      </div>
        : 
            
        <div className="animate__animated animate__fadeIn flex flex-col items-center p-4 gap-8 bg-white border rounded-md shadow-sm">
        <div>
                <h1 className="text-xl font-bold text-gray-800">Just one step away! Confirm your feature settings.</h1>
            </div>
        <div className="flex  gap-16 items-center">
            <span className="text-sm font-semibold text-gray-500">Token Name</span>
            <span className="text-lg font-semibold text-gray-900">{tokenName}</span>
        </div>
        <div className="flex gap-16 items-center">
            <span className="text-sm font-semibold text-gray-500">Symbol</span>
            <span className="text-lg font-semibold text-gray-900">{tokenSymbol}</span>
        </div>
        <div className="flex  gap-16 items-center">
            <span className="text-sm font-semibold text-gray-500">Decimal</span>
            <span className="text-lg font-semibold text-gray-900">{decimal}</span>
        </div>
        <div className="flex  gap-16 items-center">
            <span className="text-sm font-semibold text-gray-500">Supply</span>
            <span className="text-lg font-semibold text-gray-900">{supply}</span>
        </div>
        <div className="flex gap-16 items-center">
            <span className="text-sm font-semibold text-gray-500">Mintable</span>
            <span className="text-lg font-semibold text-gray-900">{mint ? 'Yes' : 'No'}</span>
        </div>
        <div className="flex gap-16 items-center">
            <span className="text-sm font-semibold text-gray-500">Burnable</span>
            <span className="text-lg font-semibold text-gray-900">{burn ? 'Yes' : 'No'}</span>
        </div>

<div className="w-full gap-4">

        <div className="flex">
        <button
            onClick={nextStep}
            className="flex items-center transition-colors duration-200 rounded text-gray-900 px-4 py-2 w-full mr-4 border"
        >
            Back
            
        </button>
        <button
        disabled={isLoaded || !address}
            onClick={claim}
            className="flex items-center  text-gray-400 transition-colors duration-200 rounded hover:text-gray-500 bg-gray-900 px-4 py-2 w-full">
                Create
                </button>
        </div>
</div>
        </div>
        }
        </>
    )
}

export default TokenData;