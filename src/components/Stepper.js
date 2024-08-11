import React, { useEffect, useRef, useState } from 'react'
import { steps } from '../constants/config'

const Stepper = () => {
    const [currStep,setCurrStep] = useState(1);
    const [isCompleted, setIsCompleted] = useState(false);
    const stepRef = useRef([]);
    const [margins, setMargins] = useState({
        marginLeft: 0,
        marginRight: 0
    })

    useEffect(() => {
        setMargins({
            marginLeft: stepRef.current[0].offsetWidth/2,
            marginRight: stepRef.current[steps.length - 1].offsetWidth/2
        })

    }, [stepRef])

    const handleNext = () => {
        setCurrStep(prevStep => {
            if(prevStep === steps.length){
                setIsCompleted(true);
                return prevStep;
            }
            else{
                return prevStep + 1;
            }
        });
    }

    const calculateWidth = () => {
        let width = ((currStep - 1)/(steps.length - 1))*100;
        return width;
    }

    const ActiveComponent = steps[currStep - 1]?.Component;

  return (
    <div>
    <div className='stepper'>
        {
            steps?.map((step, index) => {
                return  <div key={step.name} className='step_div'>
                    <div ref={(ele) => (stepRef.current[index]= ele)}
                    className={`step ${currStep > index + 1 || isCompleted ? "complete" : ""}  ${currStep === index + 1 ? "active" : "" }`} > {currStep > index + 1 || isCompleted ? (<span>&#10003;</span>) : step.count}
                    </div>
                    <div className='step_name'>{step.name}</div>
                </div>
            })
            
        }
        <div className='progress' 
            style=
            {{
                width: `calc(100% - ${margins.marginLeft + margins.marginRight + 30}px)`,
                marginLeft: margins.marginLeft,
                marginRight: margins.marginRight
            }}>
            <div className='progress_bar' style={{"width": `${calculateWidth()}%`}}></div>
        </div>
       
    </div>
    <ActiveComponent/>
    {!isCompleted && <button onClick={handleNext}> {currStep === steps.length ? "Finish" : "Next"}</button>}
    </div>
  )
}

export default Stepper