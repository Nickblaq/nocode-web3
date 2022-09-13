import { useState, useEffect } from "react";
import TokenSteps from "../components/TokenSteps";
import { useIsMounted } from "../hooks/useIsMounted";
const CreateCoin = () => {
    const isMouinted = useIsMounted()
    const [step, setStep] = useState(1);
    return (
        <>
        {isMouinted && 
        <div className="flex justify-center items-center md:h-screen mx-auto px-4">
        <TokenSteps step={step} setStep={setStep} />
    </div>
    }
        </>
    )
}

export default CreateCoin