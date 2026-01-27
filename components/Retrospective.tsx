
import React from 'react';
import { Award, Clock, Brain, Trophy } from 'lucide-react';

const Retrospective: React.FC = () => {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="flex items-center gap-3 mb-4">
        <Trophy className="text-yellow-400" size={32} />
        <h2 className="text-3xl font-bold">复盘：从GameOfLife到 "我死了吗"</h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Story Section */}
        <div className="lg:col-span-8 space-y-4">
          <div className="glass p-6 rounded-2xl border-l-4 border-cyan-500">
            <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
              <Clock size={20} className="text-cyan-400" />
              关键 3 小时：不仅是开发，更是交付热爱
            </h3>
            <p className="text-gray-400 leading-relaxed mb-4">
              在深圳的 Monad 赛场，我意识到：<span className="text-white font-medium">竞争对手不是用来打败的，而是用来超越自我的。</span> 当其他人沉迷于口嗨社交和连不上测试链时，我用了 3 小时完成了最核心的交付：
            </p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <li className="flex items-start gap-2 bg-white/5 p-3 rounded-xl">
                <div className="mt-1"><div className="w-1.5 h-1.5 rounded-full bg-cyan-500" /></div>
                <div>
                  <div className="font-semibold text-sm">极致命名</div>
                  <div className="text-xs text-gray-500">“我死了吗” (WOW silema) - 击穿用户心理预期。</div>
                </div>
              </li>
              <li className="flex items-start gap-2 bg-white/5 p-3 rounded-xl">
                <div className="mt-1"><div className="w-1.5 h-1.5 rounded-full bg-cyan-500" /></div>
                <div>
                  <div className="font-semibold text-sm">AI 协同开发</div>
                  <div className="text-xs text-gray-500">多 AI 配合，但不要掉入Vibe的陷阱，美工第二，功能先行。</div>
                </div>
              </li>
              <li className="flex items-start gap-2 bg-white/5 p-3 rounded-xl">
                <div className="mt-1"><div className="w-1.5 h-1.5 rounded-full bg-cyan-500" /></div>
                <div>
                  <div className="font-semibold text-sm">现场应变</div>
                  <div className="text-xs text-gray-500">投票系统崩溃？手写选票反而成就了“第一名”的记忆点。</div>
                </div>
              </li>
              <li className="flex items-start gap-2 bg-white/5 p-3 rounded-xl">
                <div className="mt-1"><div className="w-1.5 h-1.5 rounded-full bg-cyan-500" /></div>
                <div>
                  <div className="font-semibold text-sm">0.5 步领先</div>
                  <div className="text-xs text-gray-500">不做完美的巨型产品，只做解决痛点的最小闭环。</div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Stats Section */}
        <div className="lg:col-span-4 flex flex-col gap-4">
          <div className="glass p-5 rounded-2xl flex-1 flex flex-col justify-center items-center text-center">
            <div className="text-4xl font-black text-cyan-400 mb-1">500U</div>
            <div className="text-sm text-gray-500 uppercase tracking-widest">奖金回馈</div>
            <div className="text-xs text-gray-600 mt-2">我将拿出部分奖金注入社区<br/>与大家共建松友团</div>
          </div>
          <div className="glass p-5 rounded-2xl flex-1 flex flex-col justify-center items-center text-center">
            <div className="text-4xl font-black text-white mb-1">1st</div>
            <div className="text-sm text-gray-500 uppercase tracking-widest">冠军交付</div>
            <div className="text-xs text-gray-600 mt-2">证明了：一个人+AI<br/>足以对抗整支团队</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Retrospective;
