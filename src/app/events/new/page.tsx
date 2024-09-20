"use client";

import React, { useState } from 'react';
import styles from './styles.module.scss';
import NewEventStep03 from './new-event-03';
import NewEventStep01 from './new-event-01';
import NewEventStep02 from './new-event-02';


const NewEventPage = () => {
  const [previousStep, setPreviousStep] = useState(0)
  const [currentStep, setCurrentStep] = useState(1)
  const delta = currentStep - previousStep

  const submit = () => {}

  const nextStep = () => {
    setPreviousStep(currentStep)
    setCurrentStep(currentStep + 1)
  }

  const prevStep = () => {
    setPreviousStep(currentStep)
    setCurrentStep(currentStep - 1)
  }

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        { 
          currentStep === 1 && <div className={`${styles.step} ${delta >= 0 ? styles.right : styles.left}`}><NewEventStep01 /></div> 
        }
        { 
          currentStep === 2 && <div className={`${styles.step} ${delta >= 0 ? styles.right : styles.left}`}><NewEventStep02 /></div> 
        }
        { 
          currentStep === 3 && <div className={`${styles.step} ${delta >= 0 ? styles.right : styles.left}`}><NewEventStep03 /></div> 
        }
      </div>
      <div>
        { currentStep > 1 && <button onClick={prevStep}>Back</button> }
        { currentStep < 3 && <button onClick={nextStep}>Next</button> }
        { currentStep === 3 && <button onClick={submit}>Submit</button> }
      </div>
    </div>
  )
}

export default NewEventPage