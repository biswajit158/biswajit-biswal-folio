import { useState, useEffect } from 'react';
import { Clock, Battery, BatteryLow, Zap, CalendarIcon } from 'lucide-react';
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface BatteryManager {
  charging: boolean;
  level: number;
  addEventListener: (event: string, callback: () => void) => void;
  removeEventListener: (event: string, callback: () => void) => void;
}

declare global {
  interface Navigator {
    getBattery?: () => Promise<BatteryManager>;
  }
}

const DeviceStatus = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [batteryLevel, setBatteryLevel] = useState<number | null>(null);
  const [isCharging, setIsCharging] = useState<boolean>(false);
  const [batterySupported, setBatterySupported] = useState<boolean>(false);
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());

  // Update time every second
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Battery API setup with enhanced accuracy
  useEffect(() => {
    const initBattery = async () => {
      if ('getBattery' in navigator) {
        try {
          const battery = await navigator.getBattery!();
          
          const updateBatteryStatus = () => {
            setBatteryLevel(Math.round(battery.level * 100));
            setIsCharging(battery.charging);
          };

          // Initial update
          updateBatteryStatus();
          setBatterySupported(true);

          // Listen for battery events
          battery.addEventListener('levelchange', updateBatteryStatus);
          battery.addEventListener('chargingchange', updateBatteryStatus);
          battery.addEventListener('chargingtimechange', updateBatteryStatus);
          battery.addEventListener('dischargingtimechange', updateBatteryStatus);

          return () => {
            battery.removeEventListener('levelchange', updateBatteryStatus);
            battery.removeEventListener('chargingchange', updateBatteryStatus);
            battery.removeEventListener('chargingtimechange', updateBatteryStatus);
            battery.removeEventListener('dischargingtimechange', updateBatteryStatus);
          };
        } catch (error) {
          console.log('Battery API not supported on this device');
          setBatterySupported(false);
        }
      } else {
        setBatterySupported(false);
      }
    };

    initBattery();
  }, []);

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
      hour12: false
    });
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString([], {
      month: 'short',
      day: 'numeric'
    });
  };

  const getBatteryIcon = () => {
    if (batteryLevel === null) return Battery;
    if (isCharging) return Zap;
    if (batteryLevel <= 15) return BatteryLow;
    return Battery;
  };

  const getBatteryColor = () => {
    if (batteryLevel === null) return 'text-muted-foreground';
    if (isCharging) return 'text-green-500';
    if (batteryLevel <= 15) return 'text-red-500';
    if (batteryLevel <= 30) return 'text-orange-500';
    if (batteryLevel <= 50) return 'text-yellow-500';
    return 'text-green-600';
  };

  const getBatteryStatus = () => {
    if (batteryLevel === null) return 'Unknown';
    return isCharging ? 'Charging' : '';
  };

  const BatteryIcon = getBatteryIcon();

  return (
    <div className="hidden lg:flex items-center space-x-4 text-sm">
      {/* Time Display */}
      <div className="flex items-center space-x-2 bg-background/10 backdrop-blur-sm rounded-lg px-3 py-2 border border-border/20">
        <Clock size={14} className="text-primary" />
        <div className="flex flex-col leading-none">
          <span className="font-medium text-foreground">{formatTime(currentTime)}</span>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="ghost"
                className="h-auto p-0 text-xs text-muted-foreground hover:text-primary transition-colors cursor-pointer"
              >
                {formatDate(currentTime)}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="end">
              <Calendar
                mode="single"
                selected={selectedDate}
                onSelect={setSelectedDate}
                initialFocus
                className={cn("p-3 pointer-events-auto")}
              />
            </PopoverContent>
          </Popover>
        </div>
      </div>

    </div>
  );
};

export default DeviceStatus;