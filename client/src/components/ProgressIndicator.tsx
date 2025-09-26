import { CheckCircle, Circle } from "lucide-react";

interface ProgressIndicatorProps {
  currentStep: number;
  totalSteps: number;
  stepTitles: string[];
}

export default function ProgressIndicator({ currentStep, totalSteps, stepTitles }: ProgressIndicatorProps) {
  return (
    <div className="w-full bg-background border-b border-border px-4 py-3">
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm font-medium text-muted-foreground">
          步驟 {currentStep} / {totalSteps}
        </span>
        <span className="text-sm text-muted-foreground">
          {Math.round((currentStep / totalSteps) * 100)}%
        </span>
      </div>
      
      <div className="w-full bg-secondary rounded-full h-2 mb-3">
        <div 
          className="bg-primary h-2 rounded-full transition-all duration-300 ease-out"
          style={{ width: `${(currentStep / totalSteps) * 100}%` }}
        />
      </div>
      
      <div className="flex items-center space-x-2 overflow-x-auto pb-1">
        {stepTitles.map((title, index) => {
          const stepNumber = index + 1;
          const isCompleted = stepNumber < currentStep;
          const isCurrent = stepNumber === currentStep;
          
          return (
            <div 
              key={index}
              className={`flex items-center space-x-1 flex-shrink-0 ${
                isCurrent ? 'text-primary font-medium' : 
                isCompleted ? 'text-chart-2' : 'text-muted-foreground'
              }`}
            >
              {isCompleted ? (
                <CheckCircle className="w-4 h-4" />
              ) : (
                <Circle className={`w-4 h-4 ${isCurrent ? 'fill-primary text-primary-foreground' : ''}`} />
              )}
              <span className="text-xs whitespace-nowrap">
                {title}
              </span>
              {index < stepTitles.length - 1 && (
                <div className="w-4 h-0.5 bg-border ml-2" />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}