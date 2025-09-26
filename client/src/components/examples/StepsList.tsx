import StepsList from '../StepsList'

export default function StepsListExample() {
  const handleStepClick = (stepNumber: number) => {
    console.log(`Jumping to step ${stepNumber}`);
  };

  return (
    <div className="p-4">
      <StepsList 
        currentStep={3} 
        onStepClick={handleStepClick}
      />
    </div>
  );
}