import { useState, useEffect } from "react";
import {ethers, Contract} from 'ethers'
import { useAccount } from "wagmi";
import CustomFactory from '../abi/CustomFactory.json'
let provider = 'https://polygon-mumbai.g.alchemy.com/v2/ej5WjrTNfIunsEYL4M_89XRgLAZTZhIP'
const FactoryAddress = "0x9EE2Ec43947947B1E2026919fBE48F8F41e95F27";

// create component

const Confam = () => {
    const { address} = useAccount()
    const init = () => {
        const provider = new ethers.providers.JsonRpcProvider(provider);
        const factory = new Contract(FactoryAddress, CustomFactory.abi, provider);
        console.log(factory)
        // const tx = await factory.createToken(tokenName, tokenSymbol, decimal, mint, burn, supply)
        // console.log(tx)
        // return tx
    }


    useEffect(() => {
        let count = 0
        if( count <= 0) {
            count = count + 1
            init()
        }
        else {
            return null
        }
    },[])

    



return (

<>
<div>
<h1>Confam</h1>
</div>
</>

);

};

// export component

export default Confam;
