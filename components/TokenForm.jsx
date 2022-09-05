
import { useNetwork } from 'wagmi'
import { useState } from "react";
import {Menu,MenuHandler,MenuList,MenuItem,Button,Input} from "@material-tailwind/react";
const TokenForm = () => {
    
    const [state, setState] = useState(false)
    const { chain, chains } = useNetwork()
    //state for form data
  const [formData, setFormData] = useState({
    tokenName: "",
    tokenSymbol: "",
    decimal: "",
    supply: '',
    fee: true,
    mint: false,
    burn: false
  })

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
        setFormData((prevState) => ({ ...prevState, [name]: value }));
  };



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
        <div className="flex flex-col gap-2">
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
           
        </div>
        <div className="flex flex-col gap-2">
            <label className="text-lg font-medium leading-3 sr-only">Token Name</label>
            <Input
            name="tokenName"
            onChange={onChangeHandler}
            value={formData.tokenName}
            required
            className="placeholder:opacity-0 focus:placeholder:opacity-100 placeholder:text-white" color="green" label="Token Name" placeholder="GUILD" />
            <p className="font-semibold text-xs leading-tight">Choose a name for your token</p>
        </div>
        <div className="flex flex-col gap-2">
            <label className="text-lg font-medium leading-3 sr-only">Symbol</label>
            <Input
             name="tokenSymbol"
             onChange={onChangeHandler}
            value={formData.tokenSymbol}
            required
            className="placeholder:opacity-0 focus:placeholder:opacity-100 placeholder:text-white" color="green" label="Symbol" placeholder="GLD" />
            <p className="font-semibold text-xs leading-tight">Choose symbol for your token</p>
        </div>
        <div className="flex flex-col gap-2">
            <label className="text-lg font-medium leading-3 sr-only">Decimal</label>
            <Input
             name="decimal"
             onChange={onChangeHandler}
            value={formData.decimal}
            required
            className="placeholder:opacity-0 focus:placeholder:opacity-100 placeholder:text-white" color="green" label="Decimals" placeholder="8-18" />
            <p className="font-semibold text-xs leading-tight">Choose symbol for your token</p>
        </div>
        <div className="flex flex-col gap-2">
            <label className="text-lg font-medium leading-3 sr-only">Decimal</label>
            <Input
             name="Supply"
             onChange={onChangeHandler}
            value={formData.supply}
            required
            className="placeholder:opacity-0 focus:placeholder:opacity-100 placeholder:text-white" color="green" label="Supply" placeholder="" />
            <p className="font-semibold text-xs leading-tight">Choose token Supply</p>
        </div>
    </div>
    </div>


<Button
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