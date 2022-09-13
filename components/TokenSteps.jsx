import { useState, useEffect } from "react";
import TokenData from "./TokenData";
import TokenInput from "./TokenInput";


const TokenSteps = ({step, setStep}) => {
  

  const [tokenData, setTokenData] = useState({
    tokenName: "",
    tokenSymbol: "",
    decimal: "",
    supply: '',
    mint: false,
    burn: false
  })

  // function for going to next step by increasing step state by 1
  const nextStep = () => {
    setStep(step + 1);
  };

  // function for going to previous step by decreasing step state by 1
  const prevStep = () => {
    setStep(step - 1);
  };

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
        setTokenData((prevState) => ({ ...prevState, [name]: value }));
  };


  switch (step) {
    case 1:
        return (
            <>
            <div className="w-full max-w-xl mx-auto my-10">
            <div className="px-4 md:px-10 pb-6 rounded-xl">
            <TokenInput tokenData={tokenData} setTokenData={setTokenData} nextStep={nextStep}  />
            </div>
        </div>
            </>
        )
    case 2:
        return (
            <>
            <div className="w-full max-w-xl mx-auto my-10">
            <div className="px-4 md:px-10 pb-6 rounded-xl">
            <TokenData tokenData={tokenData} nextStep={nextStep} />
            </div>
        </div>
            </>
        )

        default:
      return (
        <>
            <div className="w-full max-w-xl mx-auto my-10">
            <div className="px-4 md:px-10 pb-6 rounded-xl">
            <TokenInput nextStep={nextStep} handleFormData={handleInputData} values={formData} onChangeHandler={onChangeHandler} />
            </div>
        </div>
            </>
      );
  }

}

export default TokenSteps;