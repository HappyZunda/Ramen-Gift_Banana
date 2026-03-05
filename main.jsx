import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { Gift, Utensils, Heart, ExternalLink, Ship, Anchor, Waves, RotateCcw, Syringe } from 'lucide-react';

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [showSteps, setShowSteps] = useState(false);

  // ギフトURLをセット
  const giftUrl = "https://www.google.com/"; 

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
    <div className={`h-screen w-full flex flex-col items-center justify-center p-2 font-sans transition-colors duration-1000 overflow-hidden ${isOpen ? 'bg-orange-50' : 'bg-blue-50'}`}>
      
      {/* メインカード */}
      <div className={`max-w-md w-full bg-white rounded-[2rem] shadow-2xl overflow-hidden relative border-4 mb-2 transition-colors duration-1000 flex flex-col ${isOpen ? 'border-orange-200' : 'border-blue-100'}`}>
        
        {/* 背景の装飾：ヘッダー部分 */}
        <div className={`shrink-0 w-full h-20 sm:h-28 flex items-center justify-center overflow-hidden transition-colors duration-1000 ${isOpen ? 'bg-red-600' : 'bg-sky-600'}`}>
          <div className="flex space-x-12 opacity-20">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="text-white transform -rotate-12">
                {isOpen ? <Utensils size={32} strokeWidth={3} /> : <Ship size={32} strokeWidth={3} />}
              </div>
            ))}
          </div>
          {/* 右上のリボン */}
          <div className={`absolute top-3 right-[-35px] font-black py-1 px-12 transform rotate-45 shadow-md text-[9px] sm:text-xs transition-colors duration-500 ${isOpen ? 'bg-yellow-400 text-red-800' : 'bg-white text-blue-800'}`}>
            {isOpen ? '召し上がれ！' : '合格祈願'}
          </div>
        </div>

        {/* コンテンツエリア */}
        <div className="flex-grow overflow-hidden flex flex-col justify-center px-5 py-4 text-center">
          {!isOpen ? (
            /* 1ページ目 */
            <div className="space-y-3 sm:space-y-5 animate-in fade-in duration-700">
              <div className="relative inline-block">
                <div className="absolute -top-8 left-1/2 -translate-x-1/2 flex space-x-1.5">
                  <div className="w-1 h-5 bg-blue-200 rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
                  <div className="w-1 h-8 bg-white rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  <div className="w-1 h-5 bg-blue-100 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                </div>
                
                <div className="relative cursor-pointer hover:scale-105 transition-transform" onClick={handleOpen}>
                  <svg viewBox="0 0 200 150" className="w-28 h-28 sm:w-40 sm:h-40 mx-auto drop-shadow-xl">
                    <path d="M20 80 Q100 80 180 80 L160 140 Q100 150 40 140 Z" fill="#e11d48" />
                    <path d="M15 75 Q100 20 185 75 Z" fill="#f43f5e" className="animate-pulse" />
                    <rect x="85" y="30" width="30" height="10" rx="5" fill="#be123c" />
                    <circle cx="100" cy="110" r="25" fill="white" fillOpacity="0.1" />
                    <text x="100" y="118" textAnchor="middle" fontSize="20" fill="white" fillOpacity="0.8">⚓</text>
                  </svg>
                </div>
              </div>

              <div>
                <h1 className="text-lg sm:text-xl font-black text-blue-900 mb-0.5">ええなあああ</h1>
                <p className="text-gray-600 leading-tight text-[11px] sm:text-xs">
                  試験勉強おつかれさま！あと少し！<br />おいしいもの食べて元気だしてね🍜
                </p>
              </div>

              <button 
                onClick={handleOpen}
                className="w-full bg-sky-600 hover:bg-sky-700 text-white font-bold py-2.5 sm:py-3.5 rounded-xl shadow-lg transform active:scale-95 transition-all flex items-center justify-center space-x-2 text-sm"
              >
                <Anchor size={16} />
                <span>ギフトを開ける</span>
              </button>
            </div>
          ) : (
            /* 2ページ目 */
            <div className={`space-y-2 sm:space-y-4 ${showContent ? 'animate-in zoom-in fade-in duration-1000' : 'opacity-0'}`}>
              <div className="relative">
                <div className="text-5xl sm:text-7xl mb-1 relative z-10 drop-shadow-lg">🍜</div>
                <div className="absolute top-1 left-1/2 -translate-x-1/2 w-full flex justify-around opacity-30">
                  <Waves className="text-orange-500 animate-pulse" />
                  <Waves className="text-red-500 animate-pulse delay-75" />
                </div>
              </div>

              <div className="bg-orange-50 p-3 sm:p-5 rounded-2xl border-2 border-dashed border-red-300 relative">
                <h2 className="text-base sm:text-xl font-black text-red-700 leading-tight">栄養バランス満点の<br/>スタミナらーめん</h2>
                <div className="w-10 h-0.5 bg-red-600 mx-auto my-2 opacity-30"></div>
                
                <p className="text-[11px] sm:text-[14px] text-gray-800 mb-2 font-bold leading-tight italic">
                  「試験応援してるよ！<br />温かいラーメンで心も体もホカホカに！🚢✨」
                </p>
                
                <p className="text-sm sm:text-base text-red-600 font-black mb-3 animate-bounce">
                  終わったら飲みいこうね🍺
                </p>
                
                <div className="grid grid-cols-3 gap-1 mb-3 text-[8px] sm:text-[9px] text-red-700 font-black">
                  <div className="flex flex-col items-center p-1.5 bg-white rounded-lg shadow-sm border border-orange-100">
                    <Utensils size={12} className="mb-0.5" />
                    <span>権利自由</span>
                  </div>
                  <div className="flex flex-col items-center p-1.5 bg-white rounded-lg shadow-sm border border-orange-100">
                    <Ship size={12} className="mb-0.5" />
                    <span>独立自治</span>
                  </div>
                  <div className="flex flex-col items-center p-1.5 bg-white rounded-lg shadow-sm border border-orange-100">
                    <Syringe size={12} className="mb-0.5" />
                    <span>精神注入</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <a 
                    href={giftUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-gradient-to-r from-red-600 to-orange-500 hover:from-red-700 hover:to-orange-600 text-white font-black py-2.5 rounded-xl shadow-lg transform hover:scale-[1.02] transition-all flex items-center justify-center space-x-2 text-sm"
                  >
                    <span>ラーメンを受け取る</span>
                    <ExternalLink size={16} />
                  </a>
                  <button onClick={handleBack} className="text-orange-700 font-bold py-1 flex items-center justify-center w-full space-x-1 opacity-50 text-[10px]">
                    <RotateCcw size={10} />
                    <span>戻る</span>
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
        
        {/* フッター：ステップ表示 */}
        <div className={`p-2 shrink-0 border-t transition-colors duration-1000 ${isOpen ? 'bg-orange-100 border-orange-200' : 'bg-sky-50 border-sky-100'}`}>
           <div className="grid grid-cols-6 gap-0.5">
             {/* START */}
             <div className="flex flex-col items-center relative z-10">
               <div className={`w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-white flex items-center justify-center shadow-sm mb-0.5 text-[11px] sm:text-sm transition-all duration-500 ${!isOpen ? 'ring-2 ring-blue-500 scale-110' : ''}`}>
                 {isOpen ? '🍲' : '🚢'}
               </div>
               <span className={`text-[6px] sm:text-[7px] font-black ${isOpen ? 'text-orange-600' : 'text-blue-700'}`}>START</span>
             </div>

             {/* ENERGY - SMILE */}
             {[
               { id: 'energy', icon: '🍜', label: 'ENERGY', active: isOpen, color: 'text-red-600' },
               { id: 'exams', icon: '✍️', label: 'EXAMS', active: isOpen && showSteps, color: 'text-orange-600' },
               { id: '4th', icon: '🎓', label: '4TH GR', active: isOpen && showSteps, color: 'text-orange-600' },
               { id: '5th', icon: '🏫', label: '5TH GR', active: isOpen && showSteps, color: 'text-orange-600' },
               { id: 'smile', icon: '🍌', label: 'SMILE', active: isOpen && showSteps, color: 'text-orange-700', final: true }
             ].map((step, idx) => (
               <div key={step.id} 
                    className={`flex flex-col items-center relative transition-all duration-500 ${step.active ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2'}`}
                    style={{ transitionDelay: `${idx * 150}ms` }}>
                 <div className={`w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-white flex items-center justify-center shadow-sm mb-0.5 text-[11px] sm:text-sm transition-all duration-500 ${step.active ? 'ring-2 ring-orange-300' : ''} ${step.id === 'energy' && isOpen ? 'ring-2 ring-red-400 scale-110' : ''}`}>
                   {step.icon}
                 </div>
                 <span className={`text-[6px] sm:text-[7px] font-bold text-center leading-tight ${step.color}`}>{step.label}</span>
                 {/* ステップ間の線 */}
                 <div className={`absolute top-3 -left-1/2 w-full h-px bg-current opacity-10 -z-10`}></div>
               </div>
             ))}
           </div>
        </div>
      </div>

      {/* クレジット */}
      <div className="bg-white/50 backdrop-blur-sm px-4 py-1 rounded-full border border-gray-100 shadow-sm shrink-0">
        <p className="text-gray-500 text-[9px] font-semibold tracking-wide">
          This page is made by ゆーち with Gemini.
        </p>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes bounce {
          0%, 100% { transform: translateY(0); opacity: 0.3; }
          50% { transform: translateY(-8px); opacity: 0.8; }
        }
      `}} />
    </div>
  );
};

export default App;

// マウント処理
const container = document.getElementById('root');
if (container) {
  const root = ReactDOM.createRoot(container);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
