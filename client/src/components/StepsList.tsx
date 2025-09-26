import { useState } from "react";
import StepCard from "./StepCard";
import WarningAlert from "./WarningAlert";
import { Button } from "@/components/ui/button";
import { 
  Wifi, 
  Smartphone, 
  Play, 
  Move3D, 
  RotateCcw, 
  Calendar,
  Clock,
  Power
} from "lucide-react";

interface Step {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  warnings?: Array<{
    message: string;
    type: 'warning' | 'info' | 'timing';
  }>;
  tips?: string[];
}

interface StepsListProps {
  currentStep: number;
  onStepClick: (stepNumber: number) => void;
}

export default function StepsList({ currentStep, onStepClick }: StepsListProps) {
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);

  const steps: Step[] = [
    {
      id: 1,
      title: "開啟 WiFi 設備電源",
      description: "如果還沒去開那台 WiFi 的電源，先去打開然後等 1 分鐘讓設備完全啟動。",
      icon: <Power className="w-4 h-4" />,
      warnings: [
        { message: "請確保 WiFi 設備電源已開啟並等待至少 1 分鐘。", type: "timing" }
      ]
    },
    {
      id: 2,
      title: "連接 WiFi 網路",
      description: "進入手機設定尋找 WiFi 選項，找到並連接到指定的網路名稱。",
      icon: <Wifi className="w-4 h-4" />,
      warnings: [
        { message: "記得要選這台 'TP-LINK_990930' 網路名稱。", type: "info" }
      ],
      tips: ["確保手機已成功連接到 TP-LINK_990930"]
    },
    {
      id: 3,
      title: "開啟 V380 Pro 應用程式",
      description: "回到主畫面找到並點擊 V380 Pro 應用程式圖標。",
      icon: <Smartphone className="w-4 h-4" />,
      tips: ["如果找不到應用程式，請檢查是否已安裝 V380 Pro"]
    },
    {
      id: 4,
      title: "等待應用程式載入",
      description: "點開應用程式後會看到「加載中」字樣，耐心等待載入完成。",
      icon: <Clock className="w-4 h-4" />,
      warnings: [
        { message: "只要遇到「加載中」就要等它 10 幾秒，請耐心等待。", type: "timing" }
      ]
    },
    {
      id: 5,
      title: "開始即時觀看",
      description: "載入完成後，點擊畫面中間的播放箭頭按鈕即可看到目前的即時畫面。",
      icon: <Play className="w-4 h-4" />,
      tips: ["成功後應該可以看到攝影機的即時畫面"]
    },
    {
      id: 6,
      title: "調整攝影機角度",
      description: "如果畫面偏掉或有死角，可以點擊「方向控制」來調整攝影機角度。",
      icon: <Move3D className="w-4 h-4" />,
      warnings: [
        { message: "如果畫面偏掉有死角可以點「方向控制」調整對準。", type: "info" }
      ]
    },
    {
      id: 7,
      title: "查看錄影回放",
      description: "點選右上角的「回放」按鈕，等待載入完成後就可以查看之前的錄影。",
      icon: <RotateCcw className="w-4 h-4" />,
      warnings: [
        { message: "點選「回放」後同樣需要等待載入，請耐心等候。", type: "timing" }
      ]
    },
    {
      id: 8,
      title: "選擇特定日期和時間",
      description: "要查看某一天的錄影，點擊日期位置會跳出日曆直接選擇。然後拉動錄影檔案選擇白天時段。",
      icon: <Calendar className="w-4 h-4" />,
      tips: [
        "下面的錄影檔要往上拉動去選白天的時段",
        "然後再拉錄影檔捲上來找某一個小時"
      ]
    }
  ];

  const toggleStepCompletion = (stepId: number) => {
    setCompletedSteps(prev => 
      prev.includes(stepId) 
        ? prev.filter(id => id !== stepId)
        : [...prev, stepId]
    );
  };

  return (
    <div className="space-y-4 pb-20">
      {steps.map((step) => (
        <StepCard
          key={step.id}
          stepNumber={step.id}
          title={step.title}
          description={step.description}
          isActive={currentStep === step.id}
          isCompleted={completedSteps.includes(step.id)}
          icon={step.icon}
        >
          {step.warnings?.map((warning, index) => (
            <WarningAlert
              key={index}
              message={warning.message}
              type={warning.type}
            />
          ))}
          
          {step.tips && (
            <div className="mt-3 p-3 bg-muted/50 rounded-md">
              <p className="text-xs font-medium text-muted-foreground mb-2">小提示：</p>
              <ul className="space-y-1">
                {step.tips.map((tip, index) => (
                  <li key={index} className="text-xs text-muted-foreground flex items-start gap-2">
                    <span className="text-primary">•</span>
                    {tip}
                  </li>
                ))}
              </ul>
            </div>
          )}
          
          <div className="flex items-center gap-2 mt-4">
            <Button
              size="sm"
              variant={completedSteps.includes(step.id) ? "secondary" : "default"}
              onClick={() => toggleStepCompletion(step.id)}
              data-testid={`button-toggle-step-${step.id}`}
            >
              {completedSteps.includes(step.id) ? "已完成" : "標記完成"}
            </Button>
            
            <Button
              size="sm"
              variant="outline"
              onClick={() => onStepClick(step.id)}
              data-testid={`button-focus-step-${step.id}`}
            >
              跳到此步驟
            </Button>
          </div>
        </StepCard>
      ))}
    </div>
  );
}