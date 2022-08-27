import BasicInfo1 from "./formSteps/BasicInfo1"
import BasicInfo3 from "./formSteps/BasicInfo3";
import BasicInfo2 from "./formSteps/Basicinfo2";
import StepIndicator from "./formSteps/StepIndicator";
import BasicFee from "./formSteps/BasicFee";
import Total from "./Total";
import { useState } from "react";

const CreateToken = () => {

    //state for steps
  const [step, setstep] = useState(1);

  //state for form data
  const [formData, setFormData] = useState({
    tokenName: "",
    tokenSymbol: "",
    decimal: "",
    description: '',
    website: '',
    twitter: '',
    telegram: '',
    supply: '',
    fee: true,
    mint: false,
    burn: false


  })

  // function for going to next step by increasing step state by 1
  const nextStep = () => {
    setstep(step + 1);
  };

  // function for going to previous step by decreasing step state by 1
  const prevStep = () => {
    setstep(step - 1);
  };

  // handling form input data by taking onchange value and updating our previous form data state
  const handleInputData = input => e => {
    // input value from the form
    const {value } = e.target;

    //updating for data state taking previous state and then adding new value to create new object
    setFormData(prevState => ({
      ...prevState,
      [input]: value
  }));
  }

  switch (step) {
    case 1:
        return (
            <>
            <div className="w-full max-w-xl mx-auto my-10">
            <div className="px-4 md:px-10 pb-6  bg-[#fff] rounded-xl">
            <BasicInfo1 formData={formData} setFormData={setFormData} nextStep={nextStep} />
            </div>
        </div>
            </>
        )
    case 2:
        return (
            <>
            <div className="w-full max-w-xl mx-auto my-10">
            <div className="px-4 md:px-10 pb-6  bg-[#fff] rounded-xl">
            <BasicInfo2 formData={formData} setFormData={setFormData} nextStep={nextStep} prevStep={prevStep} />
            </div>
        </div>
            </>
        )
    case 3:
        return (
            <>
            <div className="w-full max-w-xl mx-auto my-10">
            <div className="px-4 md:px-10 pb-6  bg-[#fff] rounded-xl">
            <Total formData={formData} />
            </div>
        </div>
            </>
        )

        default:
      return (
        <>
            <div className="w-full max-w-xl mx-auto my-10">
            <div className="px-4 md:px-10 pb-6  bg-[#fff] rounded-xl">
            <BasicInfo1 nextStep={nextStep} handleFormData={handleInputData} values={formData} />
            </div>
        </div>
            </>
      );
  }

}

export default CreateToken;