import { useState } from 'react'
import { Input, Button } from '@material-tailwind/react'


const fees = [
    {
      name: 'Transaction Fees',
      ram: 'Charge a fee for each transaction that takes place.',
      disk: '160 GB SSD disk',
    },
  ]
const burnandmint = [
    {
      name: 'Startup',
      ram: '12GB',
      disk: '160 GB SSD disk',
    },
    {
      name: 'Business',
      ram: '16GB',
      disk: '512 GB SSD disk',
    },
  ]
  

const BasicInfo3 = ({ nextStep, handleFormData,  prevStep, values }) => {

    const [isFees, setFees] = useState(true);
    const [isMB, setMB] = useState(false);

    function onChangeFees () {
        setFees(!isFees);
        setMB(!isMB)
        console.log(isFees, isMB)
      }


        //creating error state for validation
  const [error, setError] = useState(false);

  // after form submit validating the form data using validator
const submitFormData = (e) => {
  e.preventDefault();

   // checking if value of first name and last name is empty show error else take to next step
  if (validator.isEmpty(values.age) || validator.isEmpty(values.email)) {
    setError(true);
  } else {
    nextStep();
  }
};


    return (
        <>

<form
onSubmit={submitFormData}
className="mb-10">
        <div>
            <h1 className="font-bold text-3xl leading-10 pb-6">Let’s set up your Tokenomics.</h1>
            <p>Create the rules around supply and limits of your token.</p>
        </div>

            <div className="w-11/12 mx-auto mt-8">
        <div className='flex flex-col gap-4 pb-6'>
        
        <div onClick={onChangeFees} className={`rounded-lg  border-2 py-2 px-4 ${
            isFees ? 'border-green-900' : 'border-gray-500'
        }`} >
        <div className='flex justify-between items-center'>
        <img src='/feeslogo.svg' />
        <div className='flex flex-col  gap-4'>
            <p>Transaction Fee</p>
            <p>Charge a fee for each transaction that takes place.</p>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"  
        className={isFees ? 
            'fill-green-900 w-10 h-10 text-white' : 'fill-gray-500 w-10 h-10 text-white'}
        >
            <path strokeLinecap="round" strokeLinejoin="round" d="M14.563 9.75a12.014 12.014 0 00-3.427 5.136L9 12.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        </div>


        <div onClick={onChangeFees} className={`rounded-lg  border py-2 px-4 ${
           isMB ? 'border-green-900' : 'border-gray-500'
        }`} >
        <div className='flex justify-between items-center'>
        <img src='/feeslogo.svg' />
        <div className='flex flex-col gap-4'>
            <p>Mint Function</p>
            <p>Add the ability to mint additional tokens.</p>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"  
        className={isMB ? 
                'fill-green-900 w-10 h-10 text-white' : 'fill-gray-500 w-10 h-10 text-white'}
                >
            <path strokeLinecap="round" strokeLinejoin="round" d="M14.563 9.75a12.014 12.014 0 00-3.427 5.136L9 12.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        </div>

        <div>
        <div onClick={onChangeFees} className={`rounded-lg  border py-2 px-4 ${
            isMB ? 'border-green-500' : 'border-gray-500'
        }`} >
        <div className='flex justify-between items-center'>
        <img src='/feeslogo.svg' />
        <div className='flex flex-col gap-4'>
            <p>Burn Function</p>
            <p>Add the ability to burn your tokens. This is great for creating deflation.</p>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"  
        className={isMB ? 
            'fill-green-900 w-10 h-10 text-white' : 'fill-gray-500 w-10 h-10 text-white'}
        >
            <path strokeLinecap="round" strokeLinejoin="round" d="M14.563 9.75a12.014 12.014 0 00-3.427 5.136L9 12.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        </div>
        <p className='text-sm font-normal leading-tight pt-1'>Please note, to ensure healthy tokenomics not all combinations are allowed.</p>
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
        </div>
        </form>

        </>
    )
}

export default BasicInfo3;