import NavigationControls from '../NavigationControls'

export default function NavigationControlsExample() {
  const handlePrevious = () => console.log('Previous step triggered');
  const handleNext = () => console.log('Next step triggered');
  const handleHome = () => console.log('Home triggered');

  return (
    <div className="min-h-screen bg-background">
      <div className="p-4 pb-20">
        <p className="text-center text-muted-foreground">
          頁面內容區域...
        </p>
      </div>
      
      <NavigationControls
        currentStep={3}
        totalSteps={8}
        onPrevious={handlePrevious}
        onNext={handleNext}
        onHome={handleHome}
      />
    </div>
  );
}