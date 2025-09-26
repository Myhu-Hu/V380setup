import { Menu, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";

interface AppHeaderProps {
  title?: string;
  onMenuClick?: () => void;
  onSettingsClick?: () => void;
}

export default function AppHeader({ 
  title = "V380 Pro 操作指南",
  onMenuClick,
  onSettingsClick 
}: AppHeaderProps) {
  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="flex h-14 items-center justify-between px-4">
        <div className="flex items-center gap-3">
          <Button
            variant="ghost"
            size="icon"
            onClick={onMenuClick}
            className="md:hidden"
            data-testid="button-menu"
          >
            <Menu className="h-5 w-5" />
          </Button>
          <h1 className="font-bold text-lg text-foreground">{title}</h1>
        </div>
        
        <Button
          variant="ghost"
          size="icon"
          onClick={onSettingsClick}
          data-testid="button-settings"
        >
          <Settings className="h-4 w-4" />
        </Button>
      </div>
    </header>
  );
}