import ProgressIndicator from '../ProgressIndicator'

export default function ProgressIndicatorExample() {
  const stepTitles = [
    "WiFi 電源",
    "WiFi 設定", 
    "開啟應用程式",
    "即時觀看",
    "畫面調整",
    "錄影回放",
    "日期選擇",
    "時段選擇"
  ];

  return (
    <ProgressIndicator 
      currentStep={3} 
      totalSteps={8} 
      stepTitles={stepTitles}
    />
  );
}