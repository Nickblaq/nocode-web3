import { useState, useEffect } from "react";
// import CreateToken from "../components/CreateToken"
// import StepIndicator from "../components/formSteps/StepIndicator"
import TokenForm from "../components/TokenForm";


const CreateCoin = () => {
    const [step, setstep] = useState(1);
    return (
        <>
        <div className="flex flex-col justify-center mx-auto px-4">
        <TokenForm />
    </div>
        </>
    )
}

export default CreateCoin