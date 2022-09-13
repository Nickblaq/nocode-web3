import { useState, useEffect } from "react";
import {ethers, Contract} from 'ethers'
import { useAccount, useNetwork, useSwitchNetwork, useSigner } from "wagmi";
import CustomFactory from '../abi/CustomFactory.json'


const TokenInput = ({ tokenData, setTokenData, nextStep}) => {

  function onChangemint () {
    const {mint} = tokenData
    setTokenData((prevState) => ({ ...prevState, mint: !mint }));
  }
  function onChangeburn () {
    const {burn} = tokenData
    setTokenData((prevState) => ({ ...prevState, burn: !burn }));
  }

  

    return (
        <>

<div className="animate__animated animate__fadeIn block p-6 rounded-lg bg-gray-200 shadow-lg max-w-xl">
  <div>
    <div className="mb-6">
      <label  className="form-label inline-block mb-2 text-gray-700">Token name</label>
      <input className="block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" type="text" name="tokenName" value={tokenData.tokenName} onChange={(e) => setTokenData((prevState) => ({ ...prevState, [e.target.name]: e.target.value }))}
        aria-describedby="token name" placeholder="e.g PISSAR" />
    </div>
    <div className="mb-6">
      <label  className="form-label inline-block mb-2 text-gray-700">Token symbol</label>
      <input className="block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" type="text" name="tokenSymbol" value={tokenData.tokenSymbol} onChange={(e) => setTokenData((prevState) => ({ ...prevState, [e.target.name]: e.target.value }))}
        aria-describedby="token symbol" placeholder="e.g PSR"  />
    </div>
    <div className="mb-6">
      <label  className="form-label inline-block mb-2 text-gray-700">Token decimal</label>
      <input className="block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" type="text" name="decimal" value={tokenData.decimal} onChange={(e) => setTokenData((prevState) => ({ ...prevState, [e.target.name]: e.target.value }))}
        aria-describedby="token decimal" placeholder="e.g 8-18" />
    </div>
    
    <div className="mb-6">
        <label  className="form-label inline-block mb-2 text-gray-700">Token supply</label> 
        <input className="block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" type="text" name="supply" value={tokenData.supply} onChange={(e) => setTokenData((prevState) => ({ ...prevState, [e.target.name]: e.target.value }))}
        aria-describedby="token supply" placeholder="0" />
    </div>
    
    <div className="flex gap-6 mb-6">
        <div>
      <input type="checkbox"
        name="mint"
        value={tokenData.mint}
        onChange={onChangemint}
        aria-describedby="token mint"
        className="appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
     />
      <label className="inline-block text-gray-800">Mintanle</label>
      </div>


      <div>
      <input type="checkbox"
        name="burn"
        value={tokenData.burn}
        onChange={onChangeburn}
        aria-describedby="token burn"
        className="appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" />
      <label className="inline-block text-gray-800">Burnable</label>
      </div>

    </div>
    
    <button className="flex items-center justify-center text-gray-400 transition-colors ease-in-out duration-200 rounded hover:text-gray-500 bg-gray-900 px-4 py-2 w-full"
    onClick={nextStep}
    >Continue</button>
  </div>
</div>

        </>
    )
}

export default TokenInput;