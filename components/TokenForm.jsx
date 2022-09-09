import { useState, useEffect } from "react";
import {Tooltip,Button,Input,  Select, Option, Checkbox} from "@material-tailwind/react";



import {ethers, Contract} from 'ethers'
import { useAccount, useNetwork, useSwitchNetwork, useSigner } from "wagmi";
import CustomFactory from '../abi/CustomFactory.json'
// let provider = 'https://polygon-mumbai.g.alchemy.com/v2/ej5WjrTNfIunsEYL4M_89XRgLAZTZhIP'
// const FactoryAddress = "0x9EE2Ec43947947B1E2026919fBE48F8F41e95F27";
const FactoryAddress = "0xaf75b7d3e2109ae7c49fdea6dd91c81c528c95e1";


const TokenForm = () => {
    
    const [state, setState] = useState(false)
    const { chain, chains } = useNetwork()
    const {address} = useAccount()
    const { data: signer } = useSigner()
    const { chains: switchchains, error, isLoading, pendingChainId, switchNetwork } =
    useSwitchNetwork()
    //state for form data
  const [formData, setFormData] = useState({
    tokenName: "",
    tokenSymbol: "",
    decimal: "",
    supply: '',
    mint: false,
    burn: false
  })

  function onChangemint (e) {
    const {mint} = formData
    setFormData((prevState) => ({ ...prevState, mint: !mint }));
  }
  function onChangeburn (e) {
    const {burn} = formData
    setFormData((prevState) => ({ ...prevState, burn: !burn }));
  }

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
        setFormData((prevState) => ({ ...prevState, [name]: value }));
  };


  const switchandclose =(x)=>{
    switchNetwork?.(x.id)
    setState(false)
  }
    
  //   const init = async () => {
  //     if (!address) return null
  //     const contract = new Contract(FactoryAddress, CustomFactory.abi, signer);
  //     const {tokenName, tokenSymbol, decimal, mint, burn, supply} = formData
  //     const factory = init()
  //     const tx = await contract.createToken(tokenName, tokenSymbol, decimal, mint, burn, supply)
  //     console.log(tx)
  // }
  function returnBigNumber (value) {
    return ethers.BigNumber.from(value)
  }

  // calculate percentage on the fly

  function calculatePercentage (percentage, value) {
    return ethers.BigNumber.from(value).mul(percentage).div(100)  
  }




  async function claim () {
    try {
      const {tokenName, tokenSymbol, decimal, mint, burn, supply} = formData
        const contract = await new Contract(FactoryAddress, CustomFactory.abi, signer);
        const gas = contract.estimateGas.create(tokenName, tokenSymbol, decimal, mint, burn, supply);

        let response = await contract.create(tokenName, tokenSymbol, decimal, mint, burn, supply,
           { gasLimit: 2134638  });
        let hash = response.hash
        console.log(hash)

    } catch (error) {
        console.log(error)
    }
}


    return (
        <>
        <div className="w-full max-w-xl mx-auto my-10">
            <div className="px-1 md:px-4 md:px-10 pb-6  bg-gray-900 rounded-xl">
       <div

className="mb-10">
<div>
    <h1 className="font-bold text-3xl leading-10 py-6 text-center">Basic token information.</h1>
    <p className="text-center text-base font-normal">Tell us the basics about the token you are building.</p>
</div>

    <div className="w-11/12 mx-auto mt-8">
    <div className="flex flex-col gap-4 pb-8 pt-6">
        {/* <div className="flex flex-col gap-2">
            <label className="text-lg font-medium leading-3 sr-only">Target Chain</label>
            <Input
            className="flex" label="Chain" icon={ <Menu
                open= {state}
                animate={{
                  mount: { y: 0 },
                  unmount: { y: 25 },
                }}
                >
<div onClick={()=>setState(!state)}>
<MenuHandler

>
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
</svg>


</MenuHandler>
</div>
<MenuList className="bg-gray-900">
{chains && (
chains.map((chain, idx) => (
    // <Link href={item.path} key={idx}>
    <MenuItem
    key={idx}
    onClick={()=>setState(false)}
    className="hover:bg-gray-700 active:bg-gray-700 ">
    {chain.name}
    </MenuItem>
    // </Link>
))
)}

</MenuList>
</Menu>


} 
disabled
/>
{chain ?
<div className='flex items-center gap-1'>
<p className="text-sm font-normal leading-tight">Connected to {chain.name}</p>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 fill-[#6f6] text-[#6f6] animate-pulse">
  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
</svg>
</div> :
 <p className="text-sm font-normal leading-tight">No network connected</p>
}
           
        </div> */}
        <div className=''>
        <Select
        className=''
        label='Active network'
        color='green'
        >
            {chains && (
                chains.map((chain, idx) => (
                    <Option
                    key={idx}
                    onClick={()=>switchandclose(chain)}
                    className=""
                    >
                         {chain.name}
                    </Option>
                ))
                )}
      </Select>
      {chain ?
<div className='flex items-center gap-1 pt-1'>
<p className="text-sm font-normal leading-tight">Connected to {chain.name}</p>
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 fill-[#6f6] text-[#6f6] animate-pulse mr-2">
  <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
</svg>

<Tooltip content="Make sure wallet is connected to target chain">
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
  <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
</svg>

</Tooltip>
</div> :
 <p className="text-sm font-normal leading-tight">No network connected</p>
}
</div>
        <div>

        </div>

        <div className="flex flex-col gap-2">
            <label className="text-lg font-medium leading-3 sr-only">Token Name</label>
            <Input
            name="tokenName"
            onChange={onChangeHandler}
            value={formData.tokenName}
            required
            className="placeholder:opacity-0 focus:placeholder:opacity-100 placeholder:text-gray-500" color="green" label="Token Name" placeholder="GUILD" />
            <p className="font-semibold text-xs leading-tight">Choose a name for your token</p>
        </div>
        <div className="flex flex-col gap-2">
            <label className="text-lg font-medium leading-3 sr-only">Symbol</label>
            <Input
             name="tokenSymbol"
             onChange={onChangeHandler}
            value={formData.tokenSymbol}
            required
            className="placeholder:opacity-0 focus:placeholder:opacity-100 placeholder:text-gray-500" color="green" label="Symbol" placeholder="GLD" />
            <p className="font-semibold text-xs leading-tight">Choose symbol for your token</p>
        </div>
        <div className="flex flex-col gap-2">
            <label className="text-lg font-medium leading-3 sr-only">Decimal</label>
            <Input
             name="decimal"
             onChange={onChangeHandler}
            value={formData.decimal}
            required
            className="placeholder:opacity-0 focus:placeholder:opacity-100 placeholder:text-gray-500" color="green" label="Decimals" placeholder="8-18" />
            <p className="font-semibold text-xs leading-tight">Choose symbol for your token</p>
        </div>
        <div className="flex flex-col gap-2">
            <label className="text-lg font-medium leading-3 sr-only">Decimal</label>
            <Input
             name="supply"
             onChange={onChangeHandler}
            value={formData.supply}
            required
            className="placeholder:opacity-0 focus:placeholder:opacity-100 placeholder:text-gray-500" color="green" label="Supply" placeholder="" />
            <p className="font-semibold text-xs leading-tight">Choose token supply</p>
        </div>

        <div className='flex gap-8'>
        {/* <div className='flex items-center'> */}
            <Tooltip content="Ability to mint more tokens">
            <Checkbox
            label="mint"
            color="green"
            className='-ml-1'
            name="mint"
             onChange={onChangemint}
            value={formData.mint}
            required
             />
            </Tooltip>
        {/* </div> */}
        {/* <div className='flex items-center'> */}
            <Tooltip content="Ability to burn tokens">
            <Checkbox
             label="burn"
             color="green"
            className='-ml-1'
            name="burn"
             onChange={onChangeburn}
            value={formData.burn}
            required
             />
            </Tooltip>
        {/* </div> */}
        </div>
    </div>
    </div>


<Button
onClick={claim}
ripple={true} color="green" className="">
<p>Create</p>
</Button>
    </div>
    </div>
    </div>
        </>
    )
}


export default TokenForm;