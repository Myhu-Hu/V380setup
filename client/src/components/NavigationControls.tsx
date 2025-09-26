import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Home } from "lucide-react";

interface NavigationControlsProps {
  currentStep: number;
  totalSteps: number;
  onPrevious: () => void;
  onNext: () => void;
  onHome: () => void;
  canGoNext?: boolean;
  canGoPrevious?: boolean;
}

export default function NavigationControls({
  currentStep,
  totalSteps,
  onPrevious,
  onNext,
  onHome,
  canGoNext = true,
  canGoPrevious = true
}: NavigationControlsProps) {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-background border-t border-border p-4">
      <div className="flex items-center justify-between max-w-md mx-auto gap-3">
        <Button
          variant="outline"
          size="sm"
          onClick={onPrevious}
          disabled={currentStep === 1 || !canGoPrevious}
          className="flex items-center gap-2"
          data-testid="button-previous"
        >
          <ChevronLeft className="w-4 h-4" />
          上一步
        </Button>

        <Button
          variant="ghost"
          size="icon"
          onClick={onHome}
          className="flex-shrink-0"
          data-testid="button-home"
        >
          <Home className="w-4 h-4" />
        </Button>

        <Button
          onClick={onNext}
          disabled={currentStep === totalSteps || !canGoNext}
          className="flex items-center gap-2"
          data-testid="button-next"
        >
          {currentStep === totalSteps ? '完成' : '下一步'}
          {currentStep < totalSteps && <ChevronRight className="w-4 h-4" />}
        </Button>
      </div>
    </div>
  );
}