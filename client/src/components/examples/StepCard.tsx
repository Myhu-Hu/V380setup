import StepCard from '../StepCard'
import { Wifi } from 'lucide-react'

export default function StepCardExample() {
  return (
    <div className="space-y-4 p-4">
      <StepCard
        stepNumber={1}
        title="打開 WiFi 電源"
        description="如果還沒去開那台 WiFi 的電源，先去打開然後等 1 分鐘讓設備完全啟動。"
        isActive={true}
        icon={<Wifi className="w-4 h-4 text-primary" />}
      />
      
      <StepCard
        stepNumber={2}
        title="WiFi 網路設定"
        description="進入手機設定尋找 WiFi 選項，連接到指定的網路名稱。"
        isCompleted={true}
        icon={<Wifi className="w-4 h-4 text-chart-2" />}
      />
    </div>
  );
}