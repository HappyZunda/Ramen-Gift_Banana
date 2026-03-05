import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { Gift, Utensils, Heart, ExternalLink, Ship, Anchor, Waves, RotateCcw, Syringe } from 'lucide-react';

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [showSteps, setShowSteps] = useState(false);
  
  // ギフトURLを管理するステート
  // 初期値としてURLパラメーター "?url=..." をチェックします
  const [giftUrl, setGiftUrl] = useState("https://www.google.com/"); 

  useEffect(() => {
    // ブラウザのURLからパラメーターを取得
    const params = new URLSearchParams(window.location.search);
    const urlParam = params.get('url');
    
    // パラメーターが存在すれば、ステートを更新
    if (urlParam) {
      // 安全のためデコードされることを期待（ブラウザが自動で行うことが多いです）
      setGiftUrl(urlParam);
    }
  }, []);

  const handleOpen = () => {
    setIsOpen(true);
    setTimeout(() => {
      setShowContent(true);
      setTimeout(() => setShowSteps(true), 400); 
    }, 1000);
  };

  const handleBack = () => {
    setShowContent(false);
    setIsOpen(false);
    setShowSteps(false);
  };

  return (
    <div className={`h-screen w-full flex flex-col items-center justify-between p-4 font-sans transition-colors duration-1000 overflow-hidden ${isOpen ? 'bg-orange-50' : 'bg-blue-50'}`}>
      
      <div className="flex-grow-0 h-1"></div>

      <div className={`max-w-md w-full bg-white rounded-[2.5rem] shadow-2xl overflow-hidden relative border-4 mb-4 transition-all duration-1000 flex flex-col ${isOpen ? 'border-orange-300' : 'border-blue-200'}`}>
        
        <div className={`shrink-0 w-full h-20 sm:h-28 flex items-center justify-center overflow-hidden transition-colors duration-1000 ${isOpen ? 'bg-red-600' : 'bg-sky-600'}`}>
          <div className="flex space-x-12 opacity-20">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="text-white transform -rotate-12">
                {isOpen ? <Utensils size={36} strokeWidth={3} /> : <Ship size={36} strokeWidth={3} />}
              </div>
            ))}
          </div>
          <div className={`absolute top-4 right-[-35px] font-black py-1 px-12 transform rotate-45 shadow-md text-[10px] sm:text-sm transition-colors duration-500 ${isOpen ? 'bg-yellow-400 text-red-800' : 'bg-white text-blue-800'}`}>
            {isOpen ? '召し上がれ！' : '合格祈願'}
          </div>
        </div>

        <div className="flex-grow overflow-hidden flex flex-col justify-center px-6 py-4 sm:py-6 text-center">
          {!isOpen ? (
            <div className="space-y-5 sm:space-y-8 animate-in fade-in duration-700">
              <div className="relative inline-block">
                <div className="absolute -top-10 left-1/2 -translate-x-1/2 flex space-x-2">
                  <div className="w-1.5 h-6 bg-blue-200 rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
                  <div className="w-1.5 h-10 bg-white rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  <div className="w-1.5 h-6 bg-blue-100 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                </div>
                
                <div className="relative cursor-pointer hover:scale-105 transition-transform" onClick={handleOpen}>
                  <svg viewBox="0 0 200 150" className="w-32 h-32 sm:w-44 sm:h-44 mx-auto drop-shadow-xl">
                    <path d="M20 80 Q100 80 180 80 L160 140 Q100 150 40 140 Z" fill="#e11d48" />
                    <path d="M15 75 Q100 20 185 75 Z" fill="#f43f5e" className="animate-pulse" />
                    <rect x="85" y="30" width="30" height="10" rx="5" fill="#be123c" />
                    <circle cx="100" cy="110" r="25" fill="white" fillOpacity="0.1" />
                    <text x="100" y="118" textAnchor="middle" fontSize="20" fill="white" fillOpacity="0.8">⚓</text>
                  </svg>
                </div>
              </div>

              <div>
                <h1 className="text-2xl sm:text-3xl font-black text-blue-900 mb-2 tracking-tight">ええなあああ</h1>
                <p className="text-gray-600 leading-relaxed text-[15px] sm:text-lg font-medium">
                  試験勉強おつかれさま！あと少し！<br />おいしいもの食べて元気だしてねー🍜
                </p>
              </div>

              <button 
                onClick={handleOpen}
                className="w-full bg-sky-600 hover:bg-sky-700 text-white font-bold py-3.5 sm:py-4 rounded-2xl shadow-lg transform active:scale-95 transition-all flex items-center justify-center space-x-2 text-base sm:text-lg"
              >
                <Anchor size={20} />
                <span>ギフトを開ける</span>
              </button>
            </div>
          ) : (
            <div className={`space-y-4 sm:space-y-6 ${showContent ? 'animate-in zoom-in fade-in duration-1000' : 'opacity-0'}`}>
              <div className="relative">
                <div className="text-6xl sm:text-8xl mb-1 relative z-10 drop-shadow-lg">🍜</div>
                <div className="absolute top-2 left-1/2 -translate-x-1/2 w-full flex justify-around opacity-30">
                  <Waves className="text-orange-500 animate-pulse" />
                  <Waves className="text-red-500 animate-pulse delay-75" />
                </div>
              </div>

              <div className="bg-orange-50 p-4 sm:p-6 rounded-3xl border-2 border-dashed border-red-300 relative shadow-inner">
                <h2 className="text-xl sm:text-3xl font-black text-red-700 leading-tight">栄養バランス満点の<br/>スタミナらーめん</h2>
                <div className="w-14 h-1 bg-red-600 mx-auto my-3 opacity-30 rounded-full"></div>
                
                <p className="text-[14px] sm:text-[18px] text-gray-800 mb-3 font-bold leading-tight italic">
                  「試験応援してるよ！<br />マシマシのらーめんで元気つけてねー<br />ええなあ🚢✨」
                </p>
                
                <p className="text-base sm:text-xl text-red-600 font-black mb-4 animate-bounce">
                  終わったら飲みいこうね🍺
                </p>
                
                <div className="grid grid-cols-3 gap-1.5 mb-4 text-[9px] sm:text-[10px] text-red-700 font-black">
                  <div className="flex flex-col items-center p-2 bg-white rounded-xl shadow-sm border border-orange-100">
                    <Utensils size={14} className="mb-1" />
                    <span>権利自由</span>
                  </div>
                  <div className="flex flex-col items-center p-2 bg-white rounded-xl shadow-sm border border-orange-100">
                    <Ship size={14} className="mb-1" />
                    <span>独立自治</span>
                  </div>
                  <div className="flex flex-col items-center p-2 bg-white rounded-xl shadow-sm border border-orange-100">
                    <Syringe size={14} className="mb-1" />
                    <span>精神注入</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <a 
                    href={giftUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-gradient-to-r from-red-600 to-orange-500 hover:from-red-700 hover:to-orange-600 text-white font-black py-3 sm:py-4 rounded-xl shadow-lg transform hover:scale-[1.02] transition-all flex items-center justify-center space-x-2 text-base sm:text-lg"
                  >
                    <span>ラーメンを受け取る</span>
                    <ExternalLink size={20} />
                  </a>

                  <p className="text-[10px] sm:text-[12px] text-orange-800 leading-tight font-bold">
                    URLが読み込めないときはデフォルトのブラウザで。<br/>
                    Gifteeリンクは必ず保存してね
                  </p>

                  <button onClick={handleBack} className="text-orange-700 font-bold py-1 flex items-center justify-center w-full space-x-1 opacity-50 text-[11px] hover:opacity-100 transition-opacity">
                    <RotateCcw size={12} />
                    <span>戻る</span>
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
        
        <div className={`p-3 sm:p-5 shrink-0 border-t transition-colors duration-1000 ${isOpen ? 'bg-orange-100 border-orange-200' : 'bg-sky-50 border-sky-100'}`}>
           <div className="grid grid-cols-6 gap-0.5">
             <div className="flex flex-col items-center relative z-10">
               <div className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white flex items-center justify-center shadow-sm mb-1 text-[12px] sm:text-base transition-all duration-500 ${!isOpen ? 'ring-2 ring-blue-500 scale-110 shadow-md' : ''}`}>
                 {isOpen ? '🍲' : '🚢'}
               </div>
               <span className={`text-[6px] sm:text-[8px] font-black ${isOpen ? 'text-orange-600' : 'text-blue-700'}`}>START</span>
             </div>

             {[
               { id: 'energy', icon: '🍜', label: 'ENERGY', active: isOpen, color: 'text-red-600' },
               { id: 'exams', icon: '✍️', label: 'EXAMS', active: isOpen && showSteps, color: 'text-orange-600' },
               { id: '4th', icon: '🎓', label: <>4TH<br/>GRADE</>, active: isOpen && showSteps, color: 'text-orange-600' },
               { id: '5th', icon: '🏫', label: <>OH,,, <br/>5TH GRADE</>, active: isOpen && showSteps, color: 'text-orange-600' },
               { id: 'smile', icon: '🍌', label: 'SMILE', active: isOpen && showSteps, color: 'text-orange-700' }
             ].map((step, idx) => (
               <div key={step.id} 
                    className={`flex flex-col items-center relative transition-all duration-500 ${step.active ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2'}`}
                    style={{ transitionDelay: `${idx * 150}ms` }}>
                 <div className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white flex items-center justify-center shadow-sm mb-1 text-[12px] sm:text-base transition-all duration-500 ${step.active ? 'ring-2 ring-orange-300' : ''} ${step.id === 'energy' && isOpen ? 'ring-2 ring-red-400 scale-110 shadow-md' : ''}`}>
                   {step.icon}
                 </div>
                 <span className={`text-[6px] sm:text-[8px] font-bold text-center leading-tight ${step.color}`}>{step.label}</span>
                 <div className={`absolute top-4 -left-1/2 w-full h-px bg-current opacity-10 -z-10`}></div>
               </div>
             ))}
           </div>
        </div>
      </div>

      <div className="bg-white/60 backdrop-blur-md px-6 py-2.5 rounded-full border border-gray-100 shadow-md mb-2 shrink-0">
        <p className="text-gray-700 text-[11px] sm:text-[13px] font-bold tracking-wide">
          This page is built by ゆーち with Gemini.
        </p>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes bounce {
          0%, 100% { transform: translateY(0); opacity: 0.3; }
          50% { transform: translateY(-10px); opacity: 0.8; }
        }
      `}} />
    </div>
  );
};

export default App;

const container = document.getElementById('root');
if (container) {
  const root = ReactDOM.createRoot(container);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
