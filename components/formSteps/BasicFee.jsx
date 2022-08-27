import { Input, Button } from "@material-tailwind/react";


const BasicFee = () => {

    return(
        <>
      <div className="mb-10">
        <div>
            <h1 className="font-bold text-3xl leading-10 pb-6">Configure your Feature settings.</h1>
            <p>Here you can edit the details regarding your coins’ features.</p>
        </div>

            <div className="w-11/12 mx-auto mt-8">
            <div className="flex flex-col gap-4 pb-6">
          
            <div className='rounded-lg  border-2 py-2 px-4
            border-green-900'>
        <div className='flex gap-4 md:gap-0 md:justify-between  items-center '>
        <img src='/feeslogo.svg' />
        <div className='flex flex-col p-2'>
            <p className="text-lg font-medium leading-3 pb-4">Transaction Fee</p>
            <p className="text-sm font-normal leading-tight">Charge a fee for each transaction that takes place.</p>
        </div>
        </div>
        </div>
                 <div className="flex flex-col gap-4">
                    <label className="text-lg font-medium leading-3 sr-only">Tax Percentage</label>
                    <Input className="placeholder:opacity-0 hover:placeholder:opacity-100" color="green" label="Tax Percentage" placeholder="1" />
                    <p className="text-sm font-normal leading-tight">The percentage of fees you want to charge for each transfer transaction.</p>
                </div>
            </div>
            </div>

        <div className="flex justify-between items-center">
      <Button ripple={true} color="amber" className="flex items-center justify-center text-lg gap-4 ">
        <p>Back</p>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
  <path strokeLinecap="round" strokeLinejoin="round" d="M21 16.811c0 .864-.933 1.405-1.683.977l-7.108-4.062a1.125 1.125 0 010-1.953l7.108-4.062A1.125 1.125 0 0121 8.688v8.123zM11.25 16.811c0 .864-.933 1.405-1.683.977l-7.108-4.062a1.125 1.125 0 010-1.953L9.567 7.71a1.125 1.125 0 011.683.977v8.123z" />
</svg>

        </Button>
      <Button ripple={true} color="green" className="flex items-center justify-center text-lg gap-4 ">
        <p>Next</p>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8.688c0-.864.933-1.405 1.683-.977l7.108 4.062a1.125 1.125 0 010 1.953l-7.108 4.062A1.125 1.125 0 013 16.81V8.688zM12.75 8.688c0-.864.933-1.405 1.683-.977l7.108 4.062a1.125 1.125 0 010 1.953l-7.108 4.062a1.125 1.125 0 01-1.683-.977V8.688z" />
</svg>
        </Button>
        </div>
            </div>
        </>
    )
}

export default BasicFee;