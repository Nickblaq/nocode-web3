import {Button } from "@material-tailwind/react";


const Total = ({formData, prevStep}) => {
    const {tokenName, tokenSymbol, supply, decimal, fee, mb} = formData

    return (
        <>

<div
className="mb-10">
        <div>
            <h1 className="font-bold text-3xl leading-10 py-6 text-center"><span>{tokenName}</span> {" "} creation summary</h1>
            <p className="text-center text-base font-normal">Check {tokenName} {" "} features before deploying to newtwork</p>
        </div>


        <div className="flex flex-col px-4 md:px-8 mt-8">
            <div className="flex justify-between border border-gray-500 p-2 rounded-lg">
                <p className=" text-base font- font-semibold">Token Name:</p>
                <p className="text-base font-medium">{tokenName}</p>
            </div>
            <div className="flex justify-between border border-gray-500 p-2 rounded-lg">
                <p className=" text-base font- font-semibold">Symbol:</p>
                <p className="text-base font-medium">{tokenSymbol}</p>
            </div>
            <div className="flex justify-between border border-gray-500 p-2 rounded-lg">
                <p className=" text-base font- font-semibold">Supply:</p>
                <p className="text-base font-medium">{supply}</p>
            </div>
            <div className="flex justify-between border border-gray-500 p-2 rounded-lg">
                <p className=" text-base font- font-semibold">Decimal:</p>
                <p className="text-base font-medium">{decimal}</p>
            </div>
            <div className="flex justify-between border border-gray-500 p-2 rounded-lg">
                <p className=" text-base font- font-semibold">Name:</p>
                <p className="text-base font-medium">{fee ? 'True' : 'False'}</p>
            </div>
            <div className="flex justify-between border border-gray-500 p-2 rounded-lg">
                <p className=" text-base font- font-semibold">Mint & Burn:</p>
                <p className="text-base font-medium">{mb ? 'yes' : 'No'}</p>
            </div>
        </div>

        <div className="flex justify-between items-center mt-8">
      <Button
      onClick={prevStep}
      ripple={true} color="amber" className="flex items-center justify-center text-sm gap-4 ">
        <p>Back</p>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
  <path strokeLinecap="round" strokeLinejoin="round" d="M21 16.811c0 .864-.933 1.405-1.683.977l-7.108-4.062a1.125 1.125 0 010-1.953l7.108-4.062A1.125 1.125 0 0121 8.688v8.123zM11.25 16.811c0 .864-.933 1.405-1.683.977l-7.108-4.062a1.125 1.125 0 010-1.953L9.567 7.71a1.125 1.125 0 011.683.977v8.123z" />
</svg>

        </Button>
      <Button
      ripple={true} color="amber" className="flex items-center justify-center text-sm gap-4 ">
        <p>Submit</p>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
  <path strokeLinecap="round" strokeLinejoin="round" d="M21 16.811c0 .864-.933 1.405-1.683.977l-7.108-4.062a1.125 1.125 0 010-1.953l7.108-4.062A1.125 1.125 0 0121 8.688v8.123zM11.25 16.811c0 .864-.933 1.405-1.683.977l-7.108-4.062a1.125 1.125 0 010-1.953L9.567 7.71a1.125 1.125 0 011.683.977v8.123z" />
</svg>

        </Button>
        </div>

        </div>
        </>
    )
}

export default Total;