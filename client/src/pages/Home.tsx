import { useState, useCallback } from "react";
import AppHeader from "@/components/AppHeader";
import ProgressIndicator from "@/components/ProgressIndicator";
import ScrollableStepsList from "@/components/ScrollableStepsList";

export default function Home() {
  const [currentStep, setCurrentStep] = useState(1);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);
  
  const stepTitles = [
    "WiFi 電源",
    "WiFi 設定", 
    "開啟應用程式",
    "載入等待",
    "即時觀看",
    "畫面調整",
    "錄影回放",
    "日期時間選擇"
  ];

  const totalSteps = stepTitles.length;

  const handleStepProgress = useCallback((completed: number[], current: number) => {
    setCompletedSteps(completed);
    setCurrentStep(current);
  }, []);

  const handleMenuClick = () => {
    console.log('Menu clicked - could open sidebar');
  };

  const handleSettingsClick = () => {
    console.log('Settings clicked - could open settings modal');
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    console.log('Scrolling to top');
  };

  return (
    <div className="min-h-screen bg-background">
      <AppHeader 
        onMenuClick={handleMenuClick}
        onSettingsClick={handleSettingsClick}
      />
      
      <ProgressIndicator
        currentStep={currentStep}
        totalSteps={totalSteps}
        stepTitles={stepTitles}
      />
      
      <main className="px-4 py-6">
        <div className="max-w-2xl mx-auto">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-3">
              監控錄影操作指南
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              向下滾動閱讀每個步驟，完成的步驟會自動標記為已完成。
              按照以下步驟操作，即可成功觀看和尋找 V380 Pro 監控錄影記錄。
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-2 bg-primary/10 text-primary rounded-full text-xs font-medium">
              <span>👇</span>
              向下滾動開始閱讀
            </div>
          </div>
          
          <ScrollableStepsList onStepProgress={handleStepProgress} />
        </div>
      </main>
      
      {/* 回到頂部按鈕 */}
      {currentStep > 2 && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 w-12 h-12 bg-primary text-primary-foreground rounded-full shadow-lg hover-elevate active-elevate-2 flex items-center justify-center text-sm font-bold z-50"
          data-testid="button-scroll-top"
        >
          ↑
        </button>
      )}
    </div>
  );
}