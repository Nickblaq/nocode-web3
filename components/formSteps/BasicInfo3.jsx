import { useState } from 'react'
import { Input, Button, Switch, Radio } from '@material-tailwind/react'


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
  

const BasicInfo3 = ({ formData, setFormData, nextStep, prevStep}) => {
  const {fee, mb} = formData

    function onChangeFees (e) {
      setFormData((prevState) => ({ ...prevState, fee: !fee }));
      setFormData((prevState) => ({ ...prevState, mb: !mb }));
    }

    return (
        <>

<div
className="mb-10">
        <div>
            <h1 className="font-bold text-3xl leading-10 py-6 text-center">Select features for your coin.</h1>
            <p className="text-center text-base font-normal">Choose the additional functionality you want added to your smart contract code.</p>
        </div>

            <div className=" md:w-11/12 mx-auto mt-8">
        <div className='flex flex-col gap-4 pb-8 pt-6'>
        
        <div
        onClick={onChangeFees} 
        className={`rounded-lg  border-2 py-2 px-4 ${
            fee ? 'border-green-900' : 'border-gray-500'
        }`} >
        <div className='flex justify-between items-center'>
        <img src='/feeslogo.svg' />
        <div className='flex flex-col  gap-2'>
            <p className='text-lg font-medium leading-tight'>Transaction Fee</p>
            <p className='text-sm font-normal leading-tight'>Charge a fee for each transaction that takes place.</p>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"  
        className={fee ? 
            'fill-green-900 w-10 h-10 text-white' : 'fill-gray-500 w-10 h-10 text-white'}
        >
            <path strokeLinecap="round" strokeLinejoin="round" d="M14.563 9.75a12.014 12.014 0 00-3.427 5.136L9 12.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        </div>


        <div onClick={onChangeFees} className={`rounded-lg  border py-2 px-4 ${
           mb ? 'border-green-900' : 'border-gray-500'
        }`} >
        <div className='flex justify-between items-center'>
        <img src='/feeslogo.svg' />
        <div className='flex flex-col gap-2'>
            <p className='text-lg font-medium leading-tight'>Mint and Burn Function</p>
            <p className='text-sm font-normal leading-tight'>Add the ability to mint and burn tokens.</p>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"  
        className={mb ? 
                'fill-green-900 w-10 h-10 text-white' : 'fill-gray-500 w-10 h-10 text-white'}
                >
            <path strokeLinecap="round" strokeLinejoin="round" d="M14.563 9.75a12.014 12.014 0 00-3.427 5.136L9 12.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        </div>

        
        <div className="flex justify-between items-center mx-1">
      <Button onClick={prevStep} ripple={true} color="amber" className="flex items-center justify-center text-sm gap-4 ">
        <p className=''>Back</p>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
  <path strokeLinecap="round" strokeLinejoin="round" d="M21 16.811c0 .864-.933 1.405-1.683.977l-7.108-4.062a1.125 1.125 0 010-1.953l7.108-4.062A1.125 1.125 0 0121 8.688v8.123zM11.25 16.811c0 .864-.933 1.405-1.683.977l-7.108-4.062a1.125 1.125 0 010-1.953L9.567 7.71a1.125 1.125 0 011.683.977v8.123z" />
</svg>

        </Button>
      <Button onClick={nextStep} ripple={true} color="green" className="flex items-center justify-center text-sm gap-4 ">
        <p>Continue</p>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8.688c0-.864.933-1.405 1.683-.977l7.108 4.062a1.125 1.125 0 010 1.953l-7.108 4.062A1.125 1.125 0 013 16.81V8.688zM12.75 8.688c0-.864.933-1.405 1.683-.977l7.108 4.062a1.125 1.125 0 010 1.953l-7.108 4.062a1.125 1.125 0 01-1.683-.977V8.688z" />
</svg>
        </Button>
        </div>
        </div>
        </div>
        </div>

        </>
    )
}

export default BasicInfo3;