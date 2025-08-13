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

  // Battery API setup
  useEffect(() => {
    const initBattery = async () => {
      if ('getBattery' in navigator) {
        try {
          const battery = await navigator.getBattery!();
          setBatteryLevel(Math.round(battery.level * 100));
          setIsCharging(battery.charging);
          setBatterySupported(true);

          const updateBattery = () => {
            setBatteryLevel(Math.round(battery.level * 100));
            setIsCharging(battery.charging);
          };

          battery.addEventListener('levelchange', updateBattery);
          battery.addEventListener('chargingchange', updateBattery);

          return () => {
            battery.removeEventListener('levelchange', updateBattery);
            battery.removeEventListener('chargingchange', updateBattery);
          };
        } catch (error) {
          console.log('Battery API not supported');
        }
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
    if (isCharging) return Zap;
    if (batteryLevel !== null && batteryLevel < 20) return BatteryLow;
    return Battery;
  };

  const getBatteryColor = () => {
    if (isCharging) return 'text-green-500';
    if (batteryLevel !== null && batteryLevel < 20) return 'text-red-500';
    if (batteryLevel !== null && batteryLevel < 50) return 'text-yellow-500';
    return 'text-foreground';
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

      {/* Battery Display */}
      {batterySupported && batteryLevel !== null && (
        <div className="flex items-center space-x-2 bg-background/10 backdrop-blur-sm rounded-lg px-3 py-2 border border-border/20">
          <BatteryIcon size={14} className={`${getBatteryColor()} ${isCharging ? 'animate-pulse' : ''}`} />
          <div className="flex flex-col leading-none">
            <span className={`font-medium ${getBatteryColor()}`}>{batteryLevel}%</span>
            <span className="text-xs text-muted-foreground">
              {isCharging ? 'Charging' : 'Battery'}
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default DeviceStatus;