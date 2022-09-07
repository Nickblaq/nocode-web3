// import { useState, useEffect } from "react";
// import CustomFactory from '../abi/CustomFactory.json'
// import { ethers, utils, Contract } from "ethers";
// import { useSigner} from "wagmi";
// let provider = 'https://polygon-mumbai.g.alchemy.com/v2/ej5WjrTNfIunsEYL4M_89XRgLAZTZhIP'
// const FactoryAddress = "0x1ab65cc75eb985e8dcf07e0c848805c5fe992d18";





// export default function useCustomFactory() {
  // const [customFactory, setcustomFactory] = useState(null);
  // const {data: signer} = useSigner();
  // useEffect(() => {
  //   if (signer) {
  //     setcustomFactory(new ethers.Contract(FactoryAddress, CustomFactory.abi, signer));
  //   } else if (provider) {
  //     setcustomFactory(new ethers.Contract(FactoryAddress, CustomFactory.abi, provider));
  //   }
  // }, [signer, provider]);


//   async function readFactory() {
//     let contract = await new Contract(FactoryAddress, CustomFactory.abi, provider)
//     return contract;
//   }
//   return [readFactory]
// }




  // const customFactory = useCustomFactory()
    // const createToken = async () => { 
    //     const { tokenName, tokenSymbol, decimal, supply, mint, burn } = formData
    //    const tx = await  customFactory.createToken(tokenName, tokenSymbol, decimal, mint, burn, supply)
    //      console.log(tx)
    //      return tx

    // }


    // const [readFactory] = useCustomFactory();
    // const createToken = async (name, symbol, decimals, supply, fee) => {
    //     const tx = await customFactory.createToken(name, symbol, decimals, supply, fee);
    //     const receipt = await tx.wait();
    //     return receipt;
    // }