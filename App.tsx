
import React, { useState } from 'react';
import { 
  Zap, 
  Users, 
  Target, 
  TrendingUp, 
  ShieldCheck, 
  Map, 
  ChevronRight, 
  Info,
  Layers,
  Sparkles,
  ArrowRight,
  // Added Database and Code to fix missing imports on lines 155 and 162
  Database,
  Code
} from 'lucide-react';
import Retrospective from './components/Retrospective';
import SurveyModal from './components/SurveyModal';
import { INTEL_DATA, ACHIEVEMENTS, MEMBERSHIPS } from './constants';

const App: React.FC = () => {
  const [isSurveyOpen, setIsSurveyOpen] = useState(false);

  return (
    <div className="min-h-screen pb-20 selection:bg-cyan-500 selection:text-white">
      {/* Background Decor */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-[-10%] right-[-5%] w-[40%] h-[40%] rounded-full bg-cyan-500/10 blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[40%] h-[40%] rounded-full bg-blue-600/10 blur-[120px]" />
      </div>

      {/* Hero Section */}
      <header className="container mx-auto px-6 pt-24 pb-16 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-6 animate-bounce">
          <Sparkles size={14} className="text-cyan-400" />
          <span className="text-xs font-semibold tracking-wider uppercase text-cyan-400">HackRun Club | 松友团</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight">
          交付是唯一的 <span className="gradient-text">社交语言</span>
        </h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
          把黑客松当作“跑团”训练：平时实战训练，比赛高效冲刺。<br/>
          在这里，我们不听课，我们只交付。
        </p>
      </header>

      <main className="container mx-auto px-6 space-y-24">
        {/* Retrospective Section */}
        <section id="retrospective">
          <Retrospective />
        </section>

        {/* Intelligence Grid */}
        <section id="intelligence">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold flex items-center gap-3">
              <Map className="text-cyan-400" />
              黑客松情报站
            </h2>
            <div className="text-xs text-gray-500">
              *基于真实交付反馈评级
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {INTEL_DATA.map((item, idx) => (
              <div key={idx} className="glass p-6 rounded-2xl hover:border-cyan-500/50 transition-all group">
                <div className="flex justify-between items-start mb-4">
                  <div className="px-2 py-1 bg-white/5 rounded text-[10px] uppercase font-bold text-gray-400">
                    {item.category}
                  </div>
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <div key={i} className={`w-1 h-3 rounded-full ${i < item.rating ? 'bg-cyan-500' : 'bg-white/10'}`} />
                    ))}
                  </div>
                </div>
                <h3 className="text-lg font-bold mb-2 group-hover:text-cyan-400 transition-colors">{item.name}</h3>
                <p className="text-sm text-gray-500 mb-4 line-clamp-2">{item.description}</p>
                <div className="flex flex-wrap gap-2">
                  {item.tags.map(tag => (
                    <span key={tag} className="text-[10px] bg-white/5 border border-white/10 px-2 py-0.5 rounded-full text-gray-400">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Scenario: The Hackathon Experience */}
        <section className="relative glass rounded-[2.5rem] p-12 overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-10">
            <Layers size={200} />
          </div>
          <div className="relative z-10 max-w-2xl">
            <h2 className="text-3xl font-bold mb-6">你是否也经历过...</h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400 font-bold">1</div>
                <p className="text-gray-400">看到招募广告心痒难耐，报名后发现队友难找、方向不清。</p>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400 font-bold">2</div>
                <p className="text-gray-400">现场熬通宵，却因为 Demo 写不出来，最后变成“吐槽大会”。</p>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400 font-bold">3</div>
                <p className="text-gray-400">松友团的目标只有一个：<span className="text-white font-semibold">交付一个能演示的作品，拿走属于你的奖金。</span></p>
              </div>
            </div>
          </div>
        </section>

        {/* Membership Tiers */}
        <section id="pricing" className="space-y-12">
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-4">加入我们的“跑团”模式</h2>
            <p className="text-gray-500">从免费入门到专业陪跑，匹配你的交付需求。</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {MEMBERSHIPS.map(tier => (
              <div key={tier.id} className={`glass p-10 rounded-[2rem] border-2 transition-all ${tier.type === 'Premium' ? 'border-cyan-500 shadow-[0_0_30px_rgba(6,182,212,0.15)] scale-105' : 'border-white/10 hover:border-white/20'}`}>
                {tier.limit && (
                  <div className="inline-block px-3 py-1 bg-cyan-500 text-black text-[10px] font-black uppercase rounded mb-4">
                    {tier.limit}
                  </div>
                )}
                <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
                <div className="text-4xl font-black mb-8">{tier.price}</div>
                <ul className="space-y-4 mb-10">
                  {tier.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-center gap-3 text-gray-400 text-sm">
                      <ShieldCheck size={18} className="text-cyan-500" />
                      {benefit}
                    </li>
                  ))}
                </ul>
                <button 
                  onClick={() => setIsSurveyOpen(true)}
                  className={`w-full py-4 rounded-2xl font-bold transition-all flex items-center justify-center gap-2 ${tier.type === 'Premium' ? 'bg-cyan-500 text-black hover:bg-cyan-400 shadow-lg' : 'bg-white/10 text-white hover:bg-white/20'}`}
                >
                  {tier.type === 'Premium' ? '立即抢位加入' : '免费获取入门包'}
                  <ArrowRight size={18} />
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Evidence Chain */}
        <section className="text-center pb-20">
          <h2 className="text-2xl font-bold mb-10">证据链：我们不是空谈</h2>
          <div className="flex flex-wrap justify-center gap-6">
            <a href="#" className="glass px-6 py-4 rounded-2xl flex items-center gap-3 hover:bg-white/10 transition-colors">
              <Database size={20} className="text-blue-400" />
              <div className="text-left">
                <div className="text-xs text-gray-500 uppercase">Notion</div>
                <div className="text-sm font-semibold">复盘样板：我死了吗</div>
              </div>
            </a>
            <a href="#" className="glass px-6 py-4 rounded-2xl flex items-center gap-3 hover:bg-white/10 transition-colors">
              <Code size={20} className="text-purple-400" />
              <div className="text-left">
                <div className="text-xs text-gray-500 uppercase">Readme</div>
                <div className="text-sm font-semibold">可复制交付文档</div>
              </div>
            </a>
            <a href="#" className="glass px-6 py-4 rounded-2xl flex items-center gap-3 hover:bg-white/10 transition-colors">
              <TrendingUp size={20} className="text-green-400" />
              <div className="text-left">
                <div className="text-xs text-gray-500 uppercase">Assets</div>
                <div className="text-sm font-semibold">可视化地图资产库</div>
              </div>
            </a>
          </div>
        </section>
      </main>

      {/* Footer Info */}
      <footer className="border-t border-white/5 py-12">
        <div className="container mx-auto px-6 text-center text-gray-600 text-xs">
          <p>© 2026 HackRun Club (松友团). Built with AI for Builders.</p>
          <div className="mt-4 flex justify-center gap-6">
            <a href="#" className="hover:text-white transition-colors">WeChat Group</a>
            <a href="#" className="hover:text-white transition-colors">Notion Wiki</a>
            <a href="#" className="hover:text-white transition-colors">GitHub</a>
          </div>
        </div>
      </footer>

      {/* Modals */}
      <SurveyModal 
        isOpen={isSurveyOpen} 
        onClose={() => setIsSurveyOpen(false)} 
      />

      {/* Floating CTA for Mobile */}
      <div className="fixed bottom-6 left-6 right-6 md:hidden z-40">
        <button 
          onClick={() => setIsSurveyOpen(true)}
          className="w-full bg-cyan-500 text-black font-black py-4 rounded-2xl shadow-2xl flex items-center justify-center gap-2"
        >
          <Zap size={20} />
          加入松友团
        </button>
      </div>
    </div>
  );
};

export default App;
