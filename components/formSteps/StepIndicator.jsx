import { Progress } from "@material-tailwind/react";
import { useEffect } from "react";



const StepIndicator = ({step, setstep}) => {

    function calcaPercent() {
        const percentCalculation = (step * 25).toFixed(2);
        return percentCalculation;
      }
      const estimatedValue = calcaPercent();




    return (
        <>
        <div>
        
        <div className="w-full max-w-xl mx-auto mt-10">
            <div className="px-4 md:px-10 py-6  bg-[#fff] rounded-xl">
            <Progress value={estimatedValue} label="Completed" />
            </div>
        </div>
        </div>
        </>
    )
}


export default StepIndicator;