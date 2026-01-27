
import React, { useState } from 'react';
import { X, Send, CheckCircle } from 'lucide-react';

interface SurveyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SurveyModal: React.FC<SurveyModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [purpose, setPurpose] = useState('找工作');
  const [timeCommit, setTimeCommit] = useState<string | null>(null);
  const [codeLevel, setCodeLevel] = useState('完全不会');
  const [aiLevel, setAiLevel] = useState('只会聊天');
  const [wechatId, setWechatId] = useState('');
  const [submitMode, setSubmitMode] = useState<'github' | 'db'>('github');
  const [error, setError] = useState<string | null>(null);
  
  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    try {
      const endpoint = import.meta.env.VITE_SURVEY_ENDPOINT;
      if (endpoint) {
        const res = await fetch(endpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            purpose,
            timeCommit,
            codeLevel,
            aiLevel,
            wechatId
          })
        });
        if (!res.ok) throw new Error('submit_failed');
        setSubmitMode('db');
      } else {
        const owner = 'new4u';
        const repo = 'HackRun-Club';
        const title = `Join Survey: ${wechatId || 'anonymous'}`;
        const body = [
          `Purpose: ${purpose}`,
          `Time: ${timeCommit || '未选择'}`,
          `Code Level: ${codeLevel}`,
          `AI Level: ${aiLevel}`,
          `WeChat: ${wechatId}`
        ].join('\n');
        const url = new URL(`https://github.com/${owner}/${repo}/issues/new`);
        url.searchParams.set('title', title);
        url.searchParams.set('body', body);
        window.open(url.toString(), '_blank');
        setSubmitMode('github');
      }
    } catch (err) {
      setSubmitted(false);
      setError('提交失败，请稍后重试');
      return;
    }
    setTimeout(() => {
      onClose();
      setSubmitted(false);
      setPurpose('找工作');
      setTimeCommit(null);
      setCodeLevel('完全不会');
      setAiLevel('只会聊天');
      setWechatId('');
      setSubmitMode('github');
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div className="bg-[#121212] border border-white/10 w-full max-w-xl rounded-3xl overflow-hidden relative shadow-2xl">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-white transition-colors"
        >
          <X size={24} />
        </button>

        {submitted ? (
          <div className="p-12 text-center flex flex-col items-center gap-4">
            <CheckCircle size={64} className="text-green-500 animate-bounce" />
            <h3 className="text-2xl font-bold">{submitMode === 'db' ? '提交成功！' : '已打开 GitHub Issue 页面'}</h3>
            <p className="text-gray-400">{submitMode === 'db' ? '已写入数据库，稍后会联系您。' : '请在新页面确认并提交。'}</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-8 space-y-6">
            <div className="space-y-2">
              <h2 className="text-2xl font-bold">加入松友团调研（Powered by Github）</h2>
              <p className="text-sm text-gray-400">填写即刻获取《Starter Pack》干货资源</p>
            </div>

            <div className="space-y-4 max-h-[60vh] overflow-y-auto pr-2 custom-scrollbar">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">1. 参加黑客松的目的？</label>
                <select value={purpose} onChange={e => setPurpose(e.target.value)} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-white focus:ring-2 focus:ring-cyan-500 outline-none">
                  <option value="找工作">找工作</option>
                  <option value="学技术">学技术</option>
                  <option value="创业验证">创业验证</option>
                  <option value="高质量社交">高质量社交</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">2. 每周可投入时间？</label>
                <div className="grid grid-cols-3 gap-2">
                  {['2h', '5h', '10h+'].map(t => (
                    <button
                      key={t}
                      type="button"
                      onClick={() => setTimeCommit(t)}
                      className={`bg-white/5 border ${timeCommit===t?'border-cyan-500 bg-cyan-500/20':'border-white/10'} py-2 rounded-lg text-sm hover:bg-cyan-500/20 hover:border-cyan-500 transition-all`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">3. 代码水平？</label>
                <select value={codeLevel} onChange={e => setCodeLevel(e.target.value)} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-white outline-none">
                  <option value="完全不会">完全不会</option>
                  <option value="能改小 Bug">能改小 Bug</option>
                  <option value="能写简单 Demo">能写简单 Demo</option>
                  <option value="资深开发">资深开发</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">4. AI 水平？</label>
                <select value={aiLevel} onChange={e => setAiLevel(e.target.value)} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-white outline-none">
                  <option value="只会聊天">只会聊天</option>
                  <option value="会写 Prompt">会写 Prompt</option>
                  <option value="会用 IDE/Agent 工具">会用 IDE/Agent 工具</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">5. 微信号 (用于拉群)</label>
                <input value={wechatId} onChange={e => setWechatId(e.target.value)} type="text" required placeholder="WeChat ID" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-white outline-none focus:ring-2 focus:ring-cyan-500" />
              </div>
            </div>

            <button type="submit" className="w-full bg-cyan-600 hover:bg-cyan-500 text-white font-bold py-3 rounded-xl flex items-center justify-center gap-2 transition-all">
              <Send size={18} />
              提交调研获取 Starter Pack
            </button>
            {error ? (
              <div className="text-xs text-red-400 pt-2">{error}</div>
            ) : (
              <div className="text-xs text-gray-500 pt-2">默认会打开 GitHub Issue 页面；配置后将写入数据库</div>
            )}
          </form>
        )}
      </div>
    </div>
  );
};

export default SurveyModal;
