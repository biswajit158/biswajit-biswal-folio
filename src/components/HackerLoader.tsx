import { useEffect, useState } from 'react';

const HackerLoader = ({ onLoadComplete }: { onLoadComplete: () => void }) => {
  const [loadingText, setLoadingText] = useState('');
  const [consoleLines, setConsoleLines] = useState<string[]>([]);
  const [progress, setProgress] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  const [matrixChars, setMatrixChars] = useState<string[]>([]);

  const loadingSequence = [
    '$ ssh root@portfolio.secure.dev',
    '> Connecting to 192.168.1.42:8080...',
    '> Authenticating credentials...',
    '> [OK] Connection established',
    '$ npm run initialize --mode=secure',
    '> Building production bundle...',
    '> Webpack 5.89.0 compiled successfully',
    '$ docker-compose up -d',
    '> Starting services... [████████] 100%',
    '> Database migration complete',
    '$ systemctl status portfolio.service',
    '> ✓ Active (running) since ' + new Date().toLocaleTimeString(),
    '> Loading React components...',
    '> Mounting virtual DOM...',
    '> Initializing state management...',
    '> ✓ All systems operational',
    '$ clear && echo "ACCESS GRANTED"',
    '> Welcome to the portfolio'
  ];

  // Generate matrix characters
  useEffect(() => {
    const chars = 'ｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜﾝ0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const newChars = Array(50).fill(0).map(() => chars[Math.floor(Math.random() * chars.length)]);
    setMatrixChars(newChars);
  }, []);

  useEffect(() => {
    let currentStep = 0;
    let currentChar = 0;
    let interval: NodeJS.Timeout;
    const allLines: string[] = [];

    const typeText = () => {
      if (currentStep < loadingSequence.length) {
        if (currentChar <= loadingSequence[currentStep].length) {
          setLoadingText(loadingSequence[currentStep].substring(0, currentChar));
          currentChar++;
          const stepProgress = currentChar / loadingSequence[currentStep].length;
          setProgress(((currentStep + stepProgress) / loadingSequence.length) * 100);
        } else {
          // Add completed line to console
          allLines.push(loadingSequence[currentStep]);
          setConsoleLines([...allLines]);
          
          currentStep++;
          currentChar = 0;
          
          if (currentStep < loadingSequence.length) {
            setTimeout(() => {
              setLoadingText('');
            }, 100);
          }
        }
      } else {
        clearInterval(interval);
        setTimeout(() => {
          onLoadComplete();
        }, 800);
      }
    };

    interval = setInterval(typeText, 30);

    // Cursor blink effect
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => {
      clearInterval(interval);
      clearInterval(cursorInterval);
    };
  }, [onLoadComplete]);

  return (
    <div className="fixed inset-0 z-[100] bg-black flex items-center justify-center overflow-hidden">
      {/* Matrix rain background */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        {matrixChars.map((char, i) => (
          <div
            key={i}
            className="absolute text-green-500 font-mono text-sm animate-matrix-fall"
            style={{
              left: `${(i * 2)}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          >
            {char}
          </div>
        ))}
      </div>

      {/* Scanline effect */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="scanline"></div>
      </div>

      {/* CRT screen effect */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-radial from-transparent via-transparent to-black/50"></div>

      {/* Terminal window */}
      <div className="relative z-10 w-full max-w-4xl mx-4 h-[600px]">
        <div className="bg-black/95 backdrop-blur-sm border-2 border-green-500/50 rounded-lg shadow-[0_0_80px_rgba(34,197,94,0.4)] h-full flex flex-col">
          {/* Terminal header */}
          <div className="flex items-center justify-between px-6 py-3 border-b border-green-500/30 bg-gradient-to-r from-green-950/50 to-black/50">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.8)]"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500 shadow-[0_0_8px_rgba(234,179,8,0.8)]"></div>
              <div className="w-3 h-3 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.8)]"></div>
            </div>
            <div className="text-green-500 text-xs font-mono flex items-center gap-2">
              <span className="animate-pulse">●</span>
              <span>root@portfolio:~$</span>
            </div>
            <div className="text-green-700 text-xs font-mono">
              {new Date().toLocaleTimeString()}
            </div>
          </div>

          {/* Console output */}
          <div className="flex-1 overflow-hidden px-6 py-4">
            <div className="h-full overflow-y-auto space-y-1 custom-scrollbar">
              {/* System info header */}
              <div className="text-green-600 text-xs font-mono mb-4 border-b border-green-900 pb-2">
                <div>System: Linux portfolio-server 5.15.0-89</div>
                <div>Node: v20.11.0 | NPM: 10.2.4 | React: 18.3.1</div>
                <div>Memory: 2048MB | CPU: 4 cores @ 3.2GHz</div>
              </div>

              {/* Previous console lines */}
              {consoleLines.slice(-10).map((line, i) => (
                <div 
                  key={i} 
                  className={`font-mono text-sm ${
                    line.includes('✓') || line.includes('[OK]') 
                      ? 'text-green-400' 
                      : line.includes('$') 
                      ? 'text-green-300' 
                      : 'text-green-500'
                  } animate-fade-in`}
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  {line}
                </div>
              ))}

              {/* Current typing line */}
              <div className="font-mono text-sm text-green-400 flex items-center min-h-[20px]">
                <span className="glitch-text">{loadingText}</span>
                {showCursor && <span className="ml-1 text-green-400 animate-pulse">▊</span>}
              </div>
            </div>
          </div>

          {/* Status bar */}
          <div className="px-6 py-3 border-t border-green-500/30 bg-gradient-to-r from-black/50 to-green-950/50">
            <div className="flex items-center justify-between mb-2">
              <div className="text-green-500 font-mono text-xs flex items-center gap-4">
                <span>STATUS: <span className="text-green-400">LOADING</span></span>
                <span>LATENCY: <span className="text-green-400">{Math.floor(Math.random() * 20 + 10)}ms</span></span>
                <span>UPTIME: <span className="text-green-400">00:00:{Math.floor(progress / 5).toString().padStart(2, '0')}</span></span>
              </div>
              <div className="text-green-500 font-mono text-xs">
                {Math.floor(progress)}%
              </div>
            </div>

            {/* Progress bar */}
            <div className="w-full h-1.5 bg-gray-900 rounded-full overflow-hidden border border-green-500/30">
              <div
                className="h-full bg-gradient-to-r from-green-600 via-green-400 to-green-600 transition-all duration-300 shadow-[0_0_10px_rgba(34,197,94,0.6)]"
                style={{ width: `${progress}%` }}
              >
                <div className="h-full w-full bg-gradient-to-r from-transparent via-white/40 to-transparent animate-shimmer"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Glowing corners with circuit-like design */}
        <div className="absolute -top-2 -left-2 w-12 h-12 border-t-2 border-l-2 border-green-500 animate-pulse shadow-[0_0_10px_rgba(34,197,94,0.5)]">
          <div className="absolute top-0 left-0 w-1 h-1 bg-green-500 rounded-full shadow-[0_0_5px_rgba(34,197,94,0.8)]"></div>
        </div>
        <div className="absolute -top-2 -right-2 w-12 h-12 border-t-2 border-r-2 border-green-500 animate-pulse delay-75 shadow-[0_0_10px_rgba(34,197,94,0.5)]">
          <div className="absolute top-0 right-0 w-1 h-1 bg-green-500 rounded-full shadow-[0_0_5px_rgba(34,197,94,0.8)]"></div>
        </div>
        <div className="absolute -bottom-2 -left-2 w-12 h-12 border-b-2 border-l-2 border-green-500 animate-pulse delay-150 shadow-[0_0_10px_rgba(34,197,94,0.5)]">
          <div className="absolute bottom-0 left-0 w-1 h-1 bg-green-500 rounded-full shadow-[0_0_5px_rgba(34,197,94,0.8)]"></div>
        </div>
        <div className="absolute -bottom-2 -right-2 w-12 h-12 border-b-2 border-r-2 border-green-500 animate-pulse delay-200 shadow-[0_0_10px_rgba(34,197,94,0.5)]">
          <div className="absolute bottom-0 right-0 w-1 h-1 bg-green-500 rounded-full shadow-[0_0_5px_rgba(34,197,94,0.8)]"></div>
        </div>
      </div>

      <style>{`
        @keyframes matrix-fall {
          0% { 
            transform: translateY(-100vh);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% { 
            transform: translateY(100vh);
            opacity: 0;
          }
        }

        .animate-matrix-fall {
          animation: matrix-fall linear infinite;
        }

        .scanline {
          position: absolute;
          width: 100%;
          height: 3px;
          background: linear-gradient(90deg, transparent, rgba(34, 197, 94, 0.6), transparent);
          animation: scan 6s linear infinite;
          box-shadow: 0 0 10px rgba(34, 197, 94, 0.5);
        }

        @keyframes scan {
          0% { top: 0; }
          100% { top: 100%; }
        }

        .glitch-text {
          position: relative;
          animation: glitch 3s infinite;
        }

        @keyframes glitch {
          0%, 96%, 100% { 
            transform: translate(0);
            text-shadow: 0 0 5px rgba(34, 197, 94, 0.5);
          }
          97% { 
            transform: translate(-2px, 2px);
            text-shadow: -2px 0 rgba(255, 0, 0, 0.5), 2px 0 rgba(0, 255, 0, 0.5);
          }
          98% { 
            transform: translate(2px, -2px);
            text-shadow: 2px 0 rgba(0, 255, 0, 0.5), -2px 0 rgba(255, 0, 0, 0.5);
          }
          99% { 
            transform: translate(-1px, -1px);
            text-shadow: -1px 0 rgba(255, 0, 0, 0.5), 1px 0 rgba(0, 255, 0, 0.5);
          }
        }

        .animate-shimmer {
          animation: shimmer 1.5s infinite;
        }

        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }

        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }

        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(0, 0, 0, 0.5);
          border-radius: 4px;
        }

        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(34, 197, 94, 0.5);
          border-radius: 4px;
          border: 1px solid rgba(34, 197, 94, 0.3);
        }

        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(34, 197, 94, 0.7);
        }

        .delay-75 { animation-delay: 75ms; }
        .delay-100 { animation-delay: 100ms; }
        .delay-150 { animation-delay: 150ms; }
        .delay-200 { animation-delay: 200ms; }

        @keyframes fade-in {
          from { opacity: 0; transform: translateY(-5px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .animate-fade-in {
          animation: fade-in 0.3s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default HackerLoader;
