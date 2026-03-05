import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { Gift, Utensils, Heart, ExternalLink, Ship, Anchor, Waves, RotateCcw, Syringe } from 'lucide-react';

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [showSteps, setShowSteps] = useState(false); // ステップアニメーション用のステート

  // ギフトURLをセット
  const giftUrl = "https://www.google.com/"; 

  const handleOpen = () => {
    setIsOpen(true);
    setTimeout(() => {
      setShowContent(true);
      // コンテンツ表示の少し後にステップアニメーションを開始
      setTimeout(() => setShowSteps(true), 500); 
    }, 1000);
  };

  const handleBack = () => {
    setShowContent(false);
    setIsOpen(false);
    setShowSteps(false); // ステップアニメーションもリセット
  };

  // ステップの定義（マッピング用）
  const steps = [
    { id: 'start', iconOpen: '🍲', iconClosed: '🚢', labelOpen: 'START', labelClosed: 'START', color: 'blue', activeColor: 'orange' },
    { id: 'energy', icon: '🍜', label: 'ENERGY', color: 'sky', activeColor: 'red' },
    { id: 'exams', icon: '✍️', label: 'EXAMS', color: 'sky', activeColor: 'orange' },
    { id: '4th', icon: '🎓', label: <>4TH<br/>GRADE</>, color: 'sky', activeColor: 'orange' },
    { id: '5th', icon: '🏫', label: <>OH,,, <br/>5TH GRADE</>, color: 'sky', activeColor: 'orange' },
    { id: 'smile', icon: '🍌', label: 'SMILE', color: 'sky', activeColor: 'orange', final: true }
  ];

  return (
    <div className={`h-screen flex flex-col items-center justify-center p-2 font-sans transition-colors duration-1000 overflow-hidden ${isOpen ? 'bg-orange-50' : 'bg-blue-50'}`}>
      
      {/* メインカード */}
      <div className={`max-w-md w-full bg-white rounded-3xl shadow-2xl overflow-hidden relative border-4 mb-3 transition-colors duration-1000 ${isOpen ? 'border-orange-300' : 'border-blue-200'}`}>
        
        {/* 背景の装飾：ヘッダー部分 */}
        <div className={`absolute top-0 left-0 w-full h-24 sm:h-32 flex items-center justify-center overflow-hidden transition-colors duration-1000 ${isOpen ? 'bg-red-600' : 'bg-sky-600'}`}>
          <div className="flex space-x-12 opacity-20">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="text-white transform -rotate-12">
                {isOpen ? <Utensils size={40} strokeWidth={3} /> : <Ship size={40} strokeWidth={3} />}
              </div>
            ))}
          </div>
          {/* 右上のリボン */}
          <div className={`absolute top-4 right-[-30px] font-black py-1 px-10 transform rotate-45 shadow-md text-[10px] sm:text-sm transition-colors duration-500 ${isOpen ? 'bg-yellow-400 text-red-800' : 'bg-white text-blue-800'}`}>
            {isOpen ? '召し上がれ！' : '合格祈願'}
          </div>
        </div>

        <div className="pt-14 sm:pt-20 pb-4 sm:pb-8 px-5 text-center">
          {!isOpen ? (
            // 1ページ目：青系の爽やかな航海デザイン
            <div className="space-y-4 sm:space-y-6 animate-in fade-in duration-700">
              <div className="relative inline-block">
                <div className="absolute -top-10 left-1/2 -translate-x-1/2 flex space-x-2">
                  <div className="w-1 h-6 bg-blue-200 rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
                  <div className="w-1 h-10 bg-white rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  <div className="w-1 h-6 bg-blue-100 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                </div>
                
                <div className="relative cursor-pointer hover:scale-105 transition-transform" onClick={handleOpen}>
                  <svg viewBox="0 0 200 150" className="w-32 h-32 sm:w-48 sm:h-48 mx-auto drop-shadow-xl">
                    <path d="M20 80 Q100 80 180 80 L160 140 Q100 150 40 140 Z" fill="#e11d48" />
                    <path d="M15 75 Q100 20 185 75 Z" fill="#f43f5e" className="animate-pulse" />
                    <rect x="85" y="30" width="30" height="10" rx="5" fill="#be123c" />
                    <circle cx="100" cy="110" r="25" fill="white" fillOpacity="0.1" />
                    <text x="100" y="118" textAnchor="middle" fontSize="20" fill="white" fillOpacity="0.8">⚓</text>
                  </svg>
                </div>
              </div>

              <div>
                <h1 className="text-xl sm:text-2xl font-black text-blue-900 mb-1 flex items-center justify-center gap-2">
                    ええなあああ
                </h1>
                <p className="text-gray-600 leading-relaxed text-[12px] sm:text-sm px-2">
                  試験の勉強おつかれさま！<br />
                  あと少し！おいしいもの食べて元気だしてねー<br />
                  ラーメンのギフトを送ります🍜
                </p>
              </div>

              <button 
                onClick={handleOpen}
                className="w-full bg-sky-600 hover:bg-sky-700 text-white font-bold py-3 sm:py-4 rounded-2xl shadow-lg transform active:scale-95 transition-all flex items-center justify-center space-x-2 text-sm sm:text-base"
              >
                <Anchor size={18} />
                <span>ギフトを開ける</span>
              </button>
            </div>
          ) : (
            // 2ページ目：オレンジ・赤系の食欲をそそるデザイン
            <div className={`space-y-3 sm:space-y-5 ${showContent ? 'animate-in zoom-in fade-in duration-1000' : 'opacity-0'}`}>
              <div className="relative">
                <div className="text-6xl sm:text-8xl mb-2 relative z-10 drop-shadow-lg">🍜</div>
                <div className="absolute top-2 left-1/2 -translate-x-1/2 w-full flex justify-around opacity-40">
                  <Waves className="text-orange-500 animate-pulse" />
                  <Waves className="text-red-500 animate-pulse delay-75" />
                </div>
              </div>

              <div className="bg-orange-50 p-4 sm:p-6 rounded-2xl border-2 border-dashed border-red-400 relative">
                <h2 className="text-lg sm:text-2xl font-black text-red-700 mb-1 leading-tight">栄養バランス満点の<br/>スタミナらーめん</h2>
                <div className="w-12 h-1 bg-red-600 mx-auto mb-3 rounded-full opacity-50"></div>
                
                <p className="text-[13px] sm:text-[16px] text-gray-800 mb-3 font-bold leading-tight italic">
                  「試験、全力で応援してるよ！<br />
                  温かいラーメンを食べて、心も体もホカホカに！🚢✨」
                </p>
                
                <p className="text-md sm:text-lg text-red-600 font-black mb-4 animate-bounce">
                  試験終わったら飲みいこうね🍺
                </p>
                
                <div className="grid grid-cols-3 gap-1.5 mb-4 text-[9px] sm:text-[10px] text-red-600 font-black uppercase tracking-wider">
                  <div className="flex flex-col items-center p-1.5 bg-white rounded-xl shadow-sm border border-orange-100">
                    <Utensils size={14} className="mb-1" />
                    <span>権利自由</span>
                  </div>
                  <div className="flex flex-col items-center p-1.5 bg-white rounded-xl shadow-sm border border-orange-100">
                    <Ship size={14} className="mb-1" />
                    <span>独立自治</span>
                  </div>
                  <div className="flex flex-col items-center p-1.5 bg-white rounded-xl shadow-sm border border-orange-100">
                    <Syringe size={14} className="mb-1" />
                    <span>精神注入</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <a 
                    href={giftUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-gradient-to-r from-red-600 to-orange-500 hover:from-red-700 hover:to-orange-600 text-white font-black py-3 rounded-xl shadow-lg transform hover:scale-[1.02] transition-all flex items-center justify-center space-x-2 text-sm sm:text-base"
                  >
                    <span>ラーメンを受け取る</span>
                    <ExternalLink size={18} />
                  </a>

                  <p className="text-[9px] text-orange-800 leading-tight">
                    うまく表示されないときはLINEで教えてください。
                  </p>

                  <button 
                    onClick={handleBack}
                    className="w-full text-orange-700 font-bold py-1 flex items-center justify-center space-x-1 opacity-60 hover:opacity-100 transition-opacity text-[12px]"
                  >
                    <RotateCcw size={12} />
                    <span>戻る</span>
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
        
        <div className={`p-2 sm:p-4 border-t transition-colors duration-1000 ${isOpen ? 'bg-orange-100 border-orange-200' : 'bg-sky-50 border-sky-100'}`}>
           <div className="grid grid-cols-6 gap-0.5">
             {/* ステップをループで表示し、アニメーションを適用 */}
             {steps.map((step, index) => {
               // 1つ目のステップは常に表示
               if (index === 0) {
                 return (
                   <div key={step.id} className="flex flex-col items-center z-10 relative">
                     <div className={`w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-white flex items-center justify-center shadow-sm mb-1 text-[12px] sm:text-sm transition-all duration-500 ${!isOpen ? `ring-2 ring-${step.color}-500 scale-110 shadow-md` : ''}`}>
                       {isOpen ? step.iconOpen : step.iconClosed}
                     </div>
                     <span className={`text-[6px] sm:text-[7px] font-black transition-colors duration-500 ${isOpen ? `text-${step.activeColor}-600` : `text-${step.color}-700 scale-105`}`}>{isOpen ? step.labelOpen : step.labelClosed}</span>
                   </div>
                 );
               }
               
               // 2つ目以降のステップにアニメーションを適用
               return (
                 <div key={step.id} className={`flex flex-col items-center relative ${showSteps ? 'animate-step-flow' : 'opacity-0'}`} style={{ animationDelay: `${index * 0.15}s` }}>
                   <div className={`w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-white flex items-center justify-center shadow-sm mb-1 text-[12px] sm:text-sm transition-all duration-500 ${isOpen && step.final && showSteps ? `ring-2 ring-${step.activeColor}-400 scale-110 shadow-md` : ''} ${step.id === 'energy' && isOpen ? `ring-2 ring-${step.activeColor}-500 scale-110 shadow-md` : ''}`}>
                     {step.icon}
                   </div>
                   <span className={`text-[6px] sm:text-[7px] font-bold text-center leading-tight transition-colors duration-500 ${isOpen && step.final && showSteps ? `text-${step.activeColor}-700 font-black` : `text-${step.activeColor}-600`}`}>
                     {step.label}
                   </span>
                   {/* ステップ間の線（任意） */}
                   {index < steps.length - 1 && showSteps && (
                      <div className={`absolute top-3 -right-1/2 w-full h-0.5 bg-${step.activeColor}-200 animate-line-flow`} style={{ animationDelay: `${index * 0.15 + 0.1}s` }}></div>
                   )}
                 </div>
               );
             })}
           </div>
        </div>
      </div>

      {/* クレジット */}
      <div className="bg-white/50 backdrop-blur-sm px-4 py-1 rounded-full border border-gray-200 shadow-sm">
        <p className="text-gray-600 text-[9px] sm:text-xs font-semibold tracking-wide">
          This page is made by ゆーち with Gemini.
        </p>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes bounce {
          0%, 100% { transform: translateY(0); opacity: 0.3; }
          50% { transform: translateY(-10px); opacity: 0.8; }
        }
        /* ステップが流れるアニメーション */
        @keyframes step-flow {
          0% { opacity: 0; transform: translateX(-10px); }
          100% { opacity: 1; transform: translateX(0); }
        }
        .animate-step-flow {
          animation: step-flow 0.5s ease-out forwards;
        }
        /* ステップ間の線のアニメーション（任意） */
        @keyframes line-flow {
            0% { width: 0; opacity: 0; }
            100% { width: 100%; opacity: 1; }
        }
        .animate-line-flow {
            animation: line-flow 0.3s ease-out forwards;
            transform-origin: left;
        }
      `}} />
    </div>
  );
};

export default App;

// マウント処理（GitHub Pagesなど実際の環境で動かすために必要）
const container = document.getElementById('root');
if (container) {
  const root = ReactDOM.createRoot(container);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
