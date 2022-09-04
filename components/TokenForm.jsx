import { Input, Button } from "@material-tailwind/react";
import { useState } from "react";

const TokenForm = () => {


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
            <div className="px-1 md:px-4 md:px-10 pb-6  bg-gray-800 rounded-xl">
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
            className="flex" label="Chain" icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 transition ease-in duration-300 cursor-pointer align-middle inline-flex items-center">
<path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
</svg>
} 
disabled
/>
            <p className="text-sm font-normal leading-tight">Current network connected</p>
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