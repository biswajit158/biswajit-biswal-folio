import { useState, useEffect } from 'react';
import { Clock, Battery, BatteryLow, Zap } from 'lucide-react';

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
          <span className="text-xs text-muted-foreground">{formatDate(currentTime)}</span>
        </div>
      </div>

    </div>
  );
};

export default DeviceStatus;