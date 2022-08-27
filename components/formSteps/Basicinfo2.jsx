import { Input, Button, Select, Option } from "@material-tailwind/react";
import { useState, useRef, useEffect } from "react";

const Basicinfo2 = ({ formData, setFormData, nextStep, prevStep }) => {

    const [isInitialSupply, setInitialSupply] = useState();
    
    // const handleChange = event => {
    //     setInitialSupply(event.target.value);
    //   };

      useEffect(() => {
        setInitialSupply(formData.supply)
      },[formData.supply])


        //creating error state for validation
  const [error, setError] = useState(false);

  // after form submit validating the form data using validator
const submitFormData = (e) => {
  e.preventDefault();

   // checking if value of first name and last name is empty show error else take to next step
  if (!values.supply) {
    setError(true);
    window.alert('error')
  } else {
    nextStep();
  }
};

    return (
        <>
        <div
        className="mb-10">
        <div>
            <h1 className="font-bold text-3xl leading-10 pb-6">Let’s set up your Tokenomics.</h1>
            <p>Create the rules around supply and limits of your token.</p>
        </div>

            <div className="w-11/12 mx-auto mt-8">
            <div className="flex flex-col gap-4 pb-6">
          
                <div className="flex flex-col gap-2">
                    <label className="text-lg font-medium leading-3 sr-only">Initial Supply</label>
                    <Input
                    name="supply"
                   onChange={(e) => {
                    setFormData({
                        ...formData,
                        name: e.target.value
                    })
                }}
                defaultValue={formData.supply}
                required
                      className="placeholder:opacity-0 hover:placeholder:opacity-100" color="green" label="Initial Supply" placeholder="Your token initial supply" />
                    <p className="text-sm font-normal leading-tight">Insert the initial of tokens available. Will be put in your account.</p>
                </div>
                 <div className="flex flex-col gap-2">
                    <label className="text-lg font-medium leading-3 sr-only">Maximum Supply</label>
                    <Input 
                    className="" value={formData.supply} color="green" label="Maximum Supply" disabled />
                    <p className="text-sm font-normal leading-tight">Choose symbol for your token</p>
                </div>
                <div className="flex flex-col gap-4">
                <Select
                label="Fixed Supply" disabled>
                <Option>Fixed</Option>
                </Select>
                <p className="text-sm font-normal leading-tight -mt-1">Your Token Supply Type.</p>
                </div>
                
            </div>
            </div>

        <div className="flex justify-between items-center">
      <Button
      onClick={prevStep}
      ripple={true} color="amber" className="flex items-center justify-center text-lg gap-4 ">
        <p>Back</p>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
  <path strokeLinecap="round" strokeLinejoin="round" d="M21 16.811c0 .864-.933 1.405-1.683.977l-7.108-4.062a1.125 1.125 0 010-1.953l7.108-4.062A1.125 1.125 0 0121 8.688v8.123zM11.25 16.811c0 .864-.933 1.405-1.683.977l-7.108-4.062a1.125 1.125 0 010-1.953L9.567 7.71a1.125 1.125 0 011.683.977v8.123z" />
</svg>

        </Button>
      <Button
       onClick={nextStep}
      ripple={true} color="green" className="flex items-center justify-center text-lg gap-4 ">
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

export default Basicinfo2