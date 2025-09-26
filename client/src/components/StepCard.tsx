import { ReactNode } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle } from "lucide-react";

interface StepCardProps {
  stepNumber: number;
  title: string;
  description: string;
  isCompleted?: boolean;
  isActive?: boolean;
  icon?: ReactNode;
  image?: string;
  children?: ReactNode;
}

export default function StepCard({ 
  stepNumber, 
  title, 
  description, 
  isCompleted = false, 
  isActive = false,
  icon,
  image,
  children 
}: StepCardProps) {
  return (
    <Card className={`
      w-full transition-all duration-300 ease-out
      ${isActive ? 'ring-2 ring-primary ring-offset-2 shadow-lg' : ''}
      ${isCompleted ? 'bg-muted/30 shadow-sm' : ''}
    `}>
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className={`
              flex items-center justify-center w-10 h-10 rounded-full text-sm font-bold transition-all duration-300
              ${isCompleted 
                ? 'bg-chart-2 text-white shadow-sm' 
                : isActive 
                  ? 'bg-primary text-primary-foreground shadow-md' 
                  : 'bg-secondary text-secondary-foreground'
              }
            `}>
              {isCompleted ? (
                <CheckCircle className="w-5 h-5" />
              ) : (
                stepNumber
              )}
            </div>
            
            <div className="flex-1">
              <h3 className={`
                font-semibold text-lg leading-tight transition-colors duration-300
                ${isActive ? 'text-primary' : isCompleted ? 'text-muted-foreground' : ''}
              `}>
                {title}
              </h3>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <div className={`transition-colors duration-300 ${isActive ? 'text-primary' : isCompleted ? 'text-chart-2' : 'text-muted-foreground'}`}>
              {icon}
            </div>
            {isCompleted && (
              <Badge variant="secondary" className="bg-chart-2/10 text-chart-2 text-xs">
                ✓ 完成
              </Badge>
            )}
            {isActive && (
              <Badge variant="default" className="text-xs">
                → 閱讀中
              </Badge>
            )}
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="pt-0">
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
          {description}
        </p>
        
        {image && (
          <div className="mb-4">
            <img 
              src={image} 
              alt={`步驟 ${stepNumber}: ${title}`}
              className="w-full max-w-md mx-auto rounded-lg border shadow-sm"
              loading="lazy"
            />
          </div>
        )}
        
        {children}
      </CardContent>
    </Card>
  );
}