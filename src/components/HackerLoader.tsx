import { useEffect, useState } from 'react';

const HackerLoader = ({ onLoadComplete }: { onLoadComplete: () => void }) => {
  const [loadingText, setLoadingText] = useState('');
  const [progress, setProgress] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  const loadingSequence = [
    '> INITIALIZING SYSTEM...',
    '> LOADING MODULES...',
    '> ESTABLISHING CONNECTION...',
    '> DECRYPTING DATA...',
    '> COMPILING INTERFACE...',
    '> ACCESS GRANTED'
  ];

  useEffect(() => {
    let currentStep = 0;
    let currentChar = 0;
    let interval: NodeJS.Timeout;

    const typeText = () => {
      if (currentStep < loadingSequence.length) {
        if (currentChar <= loadingSequence[currentStep].length) {
          setLoadingText(loadingSequence[currentStep].substring(0, currentChar));
          currentChar++;
          setProgress(((currentStep + currentChar / loadingSequence[currentStep].length) / loadingSequence.length) * 100);
        } else {
          currentStep++;
          currentChar = 0;
          if (currentStep < loadingSequence.length) {
            setTimeout(() => {
              setLoadingText('');
            }, 300);
          }
        }
      } else {
        clearInterval(interval);
        setTimeout(() => {
          onLoadComplete();
        }, 500);
      }
    };

    interval = setInterval(typeText, 50);

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
      {/* Matrix-style background */}
      <div className="absolute inset-0 opacity-10">
        <div className="matrix-rain"></div>
      </div>

      {/* Scanline effect */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="scanline"></div>
      </div>

      {/* Terminal window */}
      <div className="relative z-10 w-full max-w-2xl mx-4">
        <div className="bg-black/80 backdrop-blur-sm border-2 border-green-500/50 rounded-lg p-8 shadow-[0_0_50px_rgba(34,197,94,0.3)]">
          {/* Terminal header */}
          <div className="flex items-center justify-between mb-6 pb-4 border-b border-green-500/30">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <div className="text-green-500 text-sm font-mono">SYSTEM.TERMINAL</div>
          </div>

          {/* Loading text */}
          <div className="space-y-4">
            <div className="font-mono text-green-500 text-lg min-h-[2rem] flex items-center">
              <span className="glitch-text">{loadingText}</span>
              {showCursor && <span className="ml-1 animate-pulse">▊</span>}
            </div>

            {/* Progress bar */}
            <div className="w-full h-2 bg-gray-900 rounded-full overflow-hidden border border-green-500/30">
              <div
                className="h-full bg-gradient-to-r from-green-600 via-green-400 to-green-600 transition-all duration-300 shadow-[0_0_10px_rgba(34,197,94,0.5)]"
                style={{ width: `${progress}%` }}
              >
                <div className="h-full w-full bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer"></div>
              </div>
            </div>

            {/* Progress percentage */}
            <div className="text-green-500 font-mono text-sm text-right">
              {Math.floor(progress)}%
            </div>
          </div>

          {/* Binary code decoration */}
          <div className="mt-6 pt-6 border-t border-green-500/30 flex justify-between text-xs font-mono text-green-700 overflow-hidden">
            <span className="animate-pulse">01001000 01000001 01000011</span>
            <span className="animate-pulse delay-100">01001011 01000101 01010010</span>
          </div>
        </div>

        {/* Glowing corners */}
        <div className="absolute -top-4 -left-4 w-8 h-8 border-t-2 border-l-2 border-green-500 animate-pulse"></div>
        <div className="absolute -top-4 -right-4 w-8 h-8 border-t-2 border-r-2 border-green-500 animate-pulse delay-75"></div>
        <div className="absolute -bottom-4 -left-4 w-8 h-8 border-b-2 border-l-2 border-green-500 animate-pulse delay-150"></div>
        <div className="absolute -bottom-4 -right-4 w-8 h-8 border-b-2 border-r-2 border-green-500 animate-pulse delay-200"></div>
      </div>

      <style>{`
        .matrix-rain {
          background: linear-gradient(180deg, transparent 0%, rgba(34, 197, 94, 0.1) 100%);
          animation: matrix 20s linear infinite;
        }

        @keyframes matrix {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100%); }
        }

        .scanline {
          position: absolute;
          width: 100%;
          height: 2px;
          background: linear-gradient(90deg, transparent, rgba(34, 197, 94, 0.8), transparent);
          animation: scan 4s linear infinite;
        }

        @keyframes scan {
          0% { top: 0; }
          100% { top: 100%; }
        }

        .glitch-text {
          animation: glitch 2s infinite;
        }

        @keyframes glitch {
          0%, 90%, 100% { transform: translate(0); }
          92% { transform: translate(-2px, 2px); }
          94% { transform: translate(2px, -2px); }
          96% { transform: translate(-2px, -2px); }
          98% { transform: translate(2px, 2px); }
        }

        .animate-shimmer {
          animation: shimmer 2s infinite;
        }

        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }

        .delay-75 { animation-delay: 75ms; }
        .delay-100 { animation-delay: 100ms; }
        .delay-150 { animation-delay: 150ms; }
        .delay-200 { animation-delay: 200ms; }
      `}</style>
    </div>
  );
};

export default HackerLoader;
