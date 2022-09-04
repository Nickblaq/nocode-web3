import { Input, Button } from "@material-tailwind/react";
import { useState } from "react";

const BasicInfo1 = ({formData, nextStep, onChangeHandler }) => {
    const {tokenName, tokenSymbol, decimal} = formData

    const [error, setError] = useState(false);
   

    return (

        <>
        {/* <button onClick={check} className="p-4 cursor-pointer bg-gray-800">Clik me</button> */}
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
                    value={tokenName}
                    required
                    className="placeholder:opacity-0 focus:placeholder:opacity-100" color="indigo" label="Token Name" placeholder="e.g Guild" />
                    <p className="font-semibold text-xs leading-tight">Choose a name for your token</p>
                </div>
                <div className="flex flex-col gap-2">
                    <label className="text-lg font-medium leading-3 sr-only">Symbol</label>
                    <Input
                     name="tokenSymbol"
                     onChange={onChangeHandler}
                    value={tokenSymbol}
                    required
                    className="placeholder:opacity-0 focus:placeholder:opacity-100" color="indigo" label="Symbol" placeholder="e.g GLD" />
                    <p className="font-semibold text-xs leading-tight">Choose symbol for your token</p>
                </div>
                <div className="flex flex-col gap-2">
                    <label className="text-lg font-medium leading-3 sr-only">Decimal</label>
                    <Input
                     name="decimal"
                     onChange={onChangeHandler}
                    value={decimal}
                    required
                    className="placeholder:opacity-0 focus:placeholder:opacity-100" color="indigo" label="Decimals" placeholder="e.g 18" />
                    <p className="font-semibold text-xs leading-tight">Choose symbol for your token</p>
                </div>
            </div>
            </div>


      <Button
      onClick={nextStep}
      ripple={true} color="green" className="flex items-center justify-center text-sm gap-4 w-full ">
        <p>Continue</p>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8.688c0-.864.933-1.405 1.683-.977l7.108 4.062a1.125 1.125 0 010 1.953l-7.108 4.062A1.125 1.125 0 013 16.81V8.688zM12.75 8.688c0-.864.933-1.405 1.683-.977l7.108 4.062a1.125 1.125 0 010 1.953l-7.108 4.062a1.125 1.125 0 01-1.683-.977V8.688z" />
</svg>
        </Button>
            </div>
        </>
    )
}

export default BasicInfo1;