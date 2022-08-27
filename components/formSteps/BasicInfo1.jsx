import { Input, Button } from "@material-tailwind/react";
import { useState } from "react";

const BasicInfo1 = ({formData, setFormData, nextStep }) => {

    const [error, setError] = useState(false);

    // const submitFormData = (e) => {
    //     e.preventDefault();
    
    //     // checking if value of first name and last name is emty show error else take to step 2
    //     if (
    //      !values.tokenName || !values.tokenSymbol || !values.decimal || values.description 
    //     ) {
    //       setError(true);
    //       window.alert(error)
    //     } else {
    //       nextStep();
    //     }
    //   };

   

    return (

        <>
        {/* <button onClick={check} className="p-4 cursor-pointer bg-gray-800">Clik me</button> */}
        <div

        className="mb-10">
        <div>
            <h1 className="font-bold text-3xl leading-10 pb-6">Basic token information.</h1>
            <p>Tell us the basics about the token you are building.</p>
        </div>

            <div className="w-11/12 mx-auto mt-8">
            <div className="flex flex-col gap-4">
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
                    {formData.tokenName}
                    <label className="text-lg font-medium leading-3 sr-only">Token Name</label>
                    <Input
                    name="tokenName"
                    onChange={(e) => {
                        setFormData({
                            ...formData,
                            name: e.target.value
                        })
                        console.log('name', formData.tokenName)
                    }}
                    defaultValue={formData.tokenName}
                    required
                    className="placeholder:opacity-0 hover:placeholder:opacity-100" color="indigo" label="Token Name" placeholder="Guild" />
                    <p className="text-sm font-normal leading-tight">Choose a name for your token</p>
                </div>
                <div className="flex flex-col gap-2">
                    <label className="text-lg font-medium leading-3 sr-only">Symbol</label>
                    <Input
                     name="tokenSymbol"
                     onChange={(e) => {
                        setFormData({
                            ...formData,
                            name: e.target.value
                        })
                    }}
                    defaultValue={formData.tokenSymbol}
                    required
                    className="placeholder:opacity-0 hover:placeholder:opacity-100" color="indigo" label="Symbol" placeholder="GLD" />
                    <p className="text-sm font-normal leading-tight">Choose symbol for your token</p>
                </div>
                <div className="flex flex-col gap-2">
                    <label className="text-lg font-medium leading-3 sr-only">Decimal</label>
                    <Input
                     name="decimal"
                     onChange={(e) => {
                        setFormData({
                            ...formData,
                            name: e.target.value
                        })
                    }}
                    defaultValue={formData.decimal}
                    required
                    className="placeholder:opacity-0 hover:placeholder:opacity-100" color="indigo" label="Decimals" placeholder="GLD" />
                    <p className="text-sm font-normal leading-tight">Choose symbol for your token</p>
                </div>


                {/* <div className="flex justify-center my-8 text-center">
    <div class="rounded-lg shadow-xl bg-gray-50 lg:w-1/2">
                <div className="m-4">
            <label className="inline-block mb-2 ">coin
                image {" "}(jpg,png,svg,jpeg)</label>
            <div className="flex items-center justify-center w-full">
                <label className="flex flex-col w-full h-32 border-4 border-dashed hover:bg-gray-100 hover:border-gray-300">
                    <div className="flex flex-col items-center justify-center pt-7">
                        <svg xmlns="http://www.w3.org/2000/svg"
                            className="w-12 h-12 text-gray-400 group-hover:text-gray-600" viewBox="0 0 20 20"
                            fill="currentColor">
                            <path fill-rule="evenodd"
                                d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                                clip-rule="evenodd" />
                        </svg>
                        <p className="pt-1 text-sm tracking-wider group-hover:text-black">
                            Select a photo</p>
                    </div>
                    <input 
                    onChange={handleFormData("firstName")}
                    type="file" className="opacity-0" />
                </label>
            </div>
            </div>
            </div>
            </div> */}



            <div className="flex flex-col gap-2">
                    <label className="text-lg font-medium leading-3 sr-only"></label>
                    <Input
                    name="description"
                    onChange={(e) => {
                        setFormData({
                            ...formData,
                            name: e.target.value
                        })
                    }}
                    defaultValue={formData.description}
                    required
                    className="placeholder:opacity-0 hover:placeholder:opacity-100" color="green" label="Description" placeholder="A defi yield farming token..." />
                    <p className="text-sm font-normal leading-tight">Add description for your token</p>
                </div>
            <div className="flex flex-col gap-2">
                    <label className="text-lg font-medium leading-3 sr-only">Website (Optional)</label>
                    <Input
                     name="website"
                    onChange={(e) => {
                        setFormData({
                            ...formData,
                            name: e.target.value
                        })
                    }}
                    defaultValue={formData.website}
                    required
                    className="placeholder:opacity-0 hover:placeholder:opacity-100" color="green" label="Website" placeholder="https://www.pissar.xyz/" />
                    <p className="text-sm font-normal leading-tight">Add website url for your token</p>
                </div>
            <div className="flex flex-col gap-2">
                    <label className="text-lg font-medium leading-3 sr-only">Twitter (Optional)</label>
                    <Input
                    name="twitter"
                    onChange={(e) => {
                        setFormData({
                            ...formData,
                            name: e.target.value
                        })
                    }}
                    defaultValue={formData.twitter}
                    required
                    className="placeholder:opacity-0 hover:placeholder:opacity-100" color="green" label="Twitter" placeholder="https://www.twiiter.com/usepissar/" />
                    <p className="text-sm font-normal leading-tight">Add twitter page url for your token</p>
                </div>
            <div className="flex flex-col gap-2 pb-6">
                    <label className="text-lg font-medium leading-3 sr-only">Telegram (Optional)</label>
                    <Input
                     name="telegram"
                    onChange={(e) => {
                        setFormData({
                            ...formData,
                            name: e.target.value
                        })
                    }}
                    defaultValue={formData.telegram}
                    required
                    className="placeholder:opacity-0 hover:placeholder:opacity-100" color="green" label="Telegram" placeholder="https://www.t.me/usepissar/" />
                    <p className="text-sm font-normal leading-tight">Add telegram group url for your token</p>
                </div>
            </div>
            </div>


      <Button
      onClick={nextStep}
      ripple={true} color="green" className="flex items-center justify-center text-lg gap-4 w-full ">
        <p>Continue</p>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8.688c0-.864.933-1.405 1.683-.977l7.108 4.062a1.125 1.125 0 010 1.953l-7.108 4.062A1.125 1.125 0 013 16.81V8.688zM12.75 8.688c0-.864.933-1.405 1.683-.977l7.108 4.062a1.125 1.125 0 010 1.953l-7.108 4.062a1.125 1.125 0 01-1.683-.977V8.688z" />
</svg>
        </Button>
            </div>
        </>
    )
}

export default BasicInfo1;