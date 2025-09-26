import WarningAlert from '../WarningAlert'

export default function WarningAlertExample() {
  return (
    <div className="space-y-4 p-4">
      <WarningAlert 
        message="請確保 WiFi 設備電源已開啟並等待至少 1 分鐘。"
        type="warning"
      />
      
      <WarningAlert 
        message="加載過程通常需要 10-15 秒，請耐心等待。"
        type="timing"
      />
      
      <WarningAlert 
        message="記得要選這台 'TP-LINK_990930' 網路名稱。"
        type="info"
      />
    </div>
  );
}