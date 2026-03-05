import React, { useState } from 'react';
import { Gift, Utensils, Heart, ExternalLink, Ship, Anchor, Waves, RotateCcw } from 'lucide-react';

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showContent, setShowContent] = useState(false);

  // ギフトURLをセット
  const giftUrl = "https://www.google.com/"; 

  const handleOpen = () => {
    setIsOpen(true);
    setTimeout(() => setShowContent(true), 1000);
  };

  const handleBack = () => {
    setShowContent(false);
    setIsOpen(false);
  };

  return (
    <div className={`min-h-screen flex flex-col items-center justify-center p-4 font-sans transition-colors duration-1000 ${isOpen ? 'bg-orange-50' : 'bg-blue-50'}`}>
      
      {/* メインカード */}
      <div className={`max-w-md w-full bg-white rounded-3xl shadow-2xl overflow-hidden relative border-4 mb-6 transition-colors duration-1000 ${isOpen ? 'border-orange-300' : 'border-blue-200'}`}>
        
        {/* 背景の装飾：ヘッダー部分 */}
        <div className={`absolute top-0 left-0 w-full h-32 flex items-center justify-center overflow-hidden transition-colors duration-1000 ${isOpen ? 'bg-red-600' : 'bg-sky-600'}`}>
          <div className="flex space-x-12 opacity-20">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="text-white transform -rotate-12">
                {isOpen ? <Utensils size={48} strokeWidth={3} /> : <Ship size={48} strokeWidth={3} />}
              </div>
            ))}
          </div>
          {/* 右上のリボン */}
          <div className={`absolute top-4 right-[-30px] font-black py-1 px-10 transform rotate-45 shadow-md text-sm transition-colors duration-500 ${isOpen ? 'bg-yellow-400 text-red-800' : 'bg-white text-blue-800'}`}>
            {isOpen ? '召し上がれ！' : '合格祈願'}
          </div>
        </div>

        <div className="pt-20 pb-10 px-6 text-center">
          {!isOpen ? (
            // 1ページ目：青系の爽やかな航海デザイン
            <div className="space-y-8 animate-in fade-in duration-700">
              <div className="relative inline-block">
                <div className="absolute -top-12 left-1/2 -translate-x-1/2 flex space-x-2">
                  <div className="w-1 h-8 bg-blue-200 rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
                  <div className="w-1 h-12 bg-white rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  <div className="w-1 h-8 bg-blue-100 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                </div>
                
                <div className="relative cursor-pointer hover:scale-105 transition-transform" onClick={handleOpen}>
                  <svg viewBox="0 0 200 150" className="w-48 h-48 mx-auto drop-shadow-xl">
                    <path d="M20 80 Q100 80 180 80 L160 140 Q100 150 40 140 Z" fill="#e11d48" />
                    <path d="M15 75 Q100 20 185 75 Z" fill="#f43f5e" className="animate-pulse" />
                    <rect x="85" y="30" width="30" height="10" rx="5" fill="#be123c" />
                    <circle cx="100" cy="110" r="25" fill="white" fillOpacity="0.1" />
                    <text x="100" y="118" textAnchor="middle" fontSize="20" fill="white" fillOpacity="0.8">⚓</text>
                  </svg>
                </div>
              </div>

              <div>
                <h1 className="text-2xl font-black text-blue-900 mb-2 flex items-center justify-center gap-2">
                   ええなあああ
                </h1>
                <p className="text-gray-600 leading-relaxed text-sm px-4">
                  試験の勉強おつかれさま！<br />
                  あと約1週間だと思うけど、おいしいもの食べて元気だしてねー<br />
                  ラーメンのギフトを送ります🍜
                </p>
              </div>

              <button 
                onClick={handleOpen}
                className="w-full bg-sky-600 hover:bg-sky-700 text-white font-bold py-4 rounded-2xl shadow-lg transform active:scale-95 transition-all flex items-center justify-center space-x-2"
              >
                <Anchor size={20} />
                <span>ギフトを開ける</span>
              </button>
            </div>
          ) : (
            // 2ページ目：オレンジ・赤系の食欲をそそるデザイン
            <div className={`space-y-6 ${showContent ? 'animate-in zoom-in fade-in duration-1000' : 'opacity-0'}`}>
              <div className="relative">
                <div className="text-8xl mb-4 relative z-10 drop-shadow-lg">🍜</div>
                <div className="absolute top-4 left-1/2 -translate-x-1/2 w-full flex justify-around opacity-40">
                  <Waves className="text-orange-500 animate-pulse" />
                  <Waves className="text-red-500 animate-pulse delay-75" />
                </div>
              </div>

              <div className="bg-orange-50 p-6 rounded-2xl border-2 border-dashed border-red-400 relative">
                <h2 className="text-2xl font-black text-red-700 mb-2 leading-tight">栄養バランス満点の<br/>スタミナらーめん</h2>
                <div className="w-16 h-1 bg-red-600 mx-auto mb-4 rounded-full opacity-50"></div>
                
                <p className="text-[16px] text-gray-800 mb-4 font-bold leading-relaxed italic">
                  「試験、全力で応援してるよ！<br />
                  温かいラーメンを食べて、心も体もホカホカにしてもう一踏ん張り！🚢✨」
                </p>
                
                {/* 追加メッセージ */}
                <p className="text-lg text-red-600 font-black mb-6 animate-bounce">
                  試験終わったら飲みいこうね🍺
                </p>
                
                <div className="grid grid-cols-3 gap-2 mb-6 text-[10px] text-red-600 font-black uppercase tracking-wider">
                  <div className="flex flex-col items-center p-2 bg-white rounded-xl shadow-sm border border-orange-100">
                    <Utensils size={16} className="mb-1" />
                    <span>権利自由</span>
                  </div>
                  <div className="flex flex-col items-center p-2 bg-white rounded-xl shadow-sm border border-orange-100">
                    <Ship size={16} className="mb-1" />
                    <span>独立自治</span>
                  </div>
                  <div className="flex flex-col items-center p-2 bg-white rounded-xl shadow-sm border border-orange-100">
                    <Heart size={16} className="mb-1" />
                    <span>精神注入</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <a 
                    href={giftUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-gradient-to-r from-red-600 to-orange-500 hover:from-red-700 hover:to-orange-600 text-white font-black py-4 rounded-xl shadow-lg transform hover:scale-[1.02] transition-all flex items-center justify-center space-x-2"
                  >
                    <span className="text-lg">ラーメンを受け取る</span>
                    <ExternalLink size={20} />
                  </a>

                  {/* リンクに関する注記 */}
                  <p className="text-[10px] text-orange-800 leading-tight">
                    もしうまくリンクが表示されないときは<br/>LINEで教えてください。
                  </p>

                  <button 
                    onClick={handleBack}
                    className="w-full text-orange-700 font-bold py-2 flex items-center justify-center space-x-1 opacity-60 hover:opacity-100 transition-opacity text-sm"
                  >
                    <RotateCcw size={14} />
                    <span>戻る</span>
                  </button>
                </div>
              </div>

              <p className="text-xs text-orange-600 font-bold">
                ※最高の一杯が待っています！
              </p>
            </div>
          )}
        </div>
        
        {/* フッター：6つのステップ */}
        <div className={`p-4 border-t transition-colors duration-1000 ${isOpen ? 'bg-orange-100 border-orange-200' : 'bg-sky-50 border-sky-100'}`}>
           <div className="grid grid-cols-6 gap-1">
             <div className="flex flex-col items-center">
               <div className={`w-7 h-7 rounded-full bg-white flex items-center justify-center shadow-sm mb-1 text-sm transition-all duration-500 ${!isOpen ? 'ring-2 ring-blue-500 scale-110 shadow-md' : ''}`}>
                 {isOpen ? '🍲' : '🚢'}
               </div>
               <span className={`text-[7px] font-black transition-colors duration-500 ${isOpen ? 'text-orange-600' : 'text-blue-700 scale-105'}`}>START</span>
             </div>
             <div className="flex flex-col items-center">
               <div className={`w-7 h-7 rounded-full bg-white flex items-center justify-center shadow-sm mb-1 text-sm transition-all duration-500 ${isOpen ? 'ring-2 ring-red-500 scale-110 shadow-md' : ''}`}>
                 🍜
               </div>
               <span className={`text-[7px] font-black transition-colors duration-500 ${isOpen ? 'text-red-600 scale-105' : 'text-sky-400'}`}>ENERGY</span>
             </div>
             <div className="flex flex-col items-center">
               <div className="w-7 h-7 rounded-full bg-white flex items-center justify-center shadow-sm mb-1 text-sm">
                 ✍️
               </div>
               <span className={`text-[7px] font-bold ${isOpen ? 'text-orange-600' : 'text-sky-400'}`}>EXAMS</span>
             </div>
             <div className="flex flex-col items-center">
               <div className="w-7 h-7 rounded-full bg-white flex items-center justify-center shadow-sm mb-1 text-sm">
                 🎓
               </div>
               <span className={`text-[7px] font-bold text-center leading-tight ${isOpen ? 'text-orange-600' : 'text-sky-400'}`}>
                 4TH<br/>GRADE
               </span>
             </div>
             <div className="flex flex-col items-center">
               <div className="w-7 h-7 rounded-full bg-white flex items-center justify-center shadow-sm mb-1 text-sm">
                 🏫
               </div>
               <span className={`text-[7px] font-bold text-center leading-tight ${isOpen ? 'text-orange-600' : 'text-sky-400'}`}>
                 OH,,, <br/>5TH GRADE
               </span>
             </div>
             <div className="flex flex-col items-center">
               <div className={`w-7 h-7 rounded-full bg-white flex items-center justify-center shadow-sm mb-1 text-sm transition-all duration-500 ${isOpen && showContent ? 'ring-2 ring-orange-400 scale-110 shadow-md' : ''}`}>
                 🍌
               </div>
               <span className={`text-[7px] font-bold transition-colors duration-500 ${isOpen && showContent ? 'text-orange-700 font-black' : 'text-sky-400'}`}>SMILE</span>
             </div>
           </div>
        </div>
      </div>

      {/* 常時表示のクレジット */}
      <div className="bg-white/50 backdrop-blur-sm px-4 py-1.5 rounded-full border border-gray-200 shadow-sm">
        <p className="text-gray-600 text-[10px] sm:text-xs font-semibold tracking-wide">
          This page is made by ゆーち with Gemini.
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
