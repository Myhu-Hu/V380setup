import { AlertTriangle, Clock, Info } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";

interface WarningAlertProps {
  message: string;
  type?: 'warning' | 'info' | 'timing';
}

export default function WarningAlert({ message, type = 'warning' }: WarningAlertProps) {
  const getIcon = () => {
    switch (type) {
      case 'timing':
        return <Clock className="h-4 w-4" />;
      case 'info':
        return <Info className="h-4 w-4" />;
      default:
        return <AlertTriangle className="h-4 w-4" />;
    }
  };

  const getVariant = () => {
    switch (type) {
      case 'info':
        return 'default';
      default:
        return 'destructive';
    }
  };

  return (
    <Alert variant={getVariant()} className="mt-3">
      {getIcon()}
      <AlertDescription className="text-sm">
        {message}
      </AlertDescription>
    </Alert>
  );
}