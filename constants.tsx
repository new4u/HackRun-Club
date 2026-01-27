
import React from 'react';
import { HackathonIntel, Achievement, MembershipTier } from './types';
import { Award, Zap, Users, Code, Target, Map, ShieldCheck, Database } from 'lucide-react';

export const INTEL_DATA: HackathonIntel[] = [
  {
    name: 'Monad',
    rating: 5,
    tags: ['EVM 性能之王', '极速响应'],
    description: '并行 EVM 的领军者。黑客松奖金极高，侧重于高并发、高性能应用。社区文化硬核且狂热。',
    category: 'Chain'
  },
  {
    name: 'HackQuest',
    rating: 5,
    tags: ['开发者教育', '全栈资源'],
    description: '优秀的开发者教育平台，与多家公链合作，提供系统的黑客松参与路径和项目孵化支持。',
    category: 'Platform'
  },
  {
    name: 'OpenBuild',
    rating: 5,
    tags: ['开发者友好', '国内顶尖'],
    description: '资源对接极其精准，评审客观，是起步的最佳选择。其线下 Builder House 体验极佳。',
    category: 'Platform'
  },
  {
    name: 'Scroll',
    rating: 4,
    tags: ['zkEVM', '以太坊原生'],
    description: '注重技术底层创新。如果你是密码学或 EVM 极客，Scroll 是展示实力的绝佳舞台。',
    category: 'Chain'
  },
  {
    name: 'Mantle',
    rating: 4,
    tags: ['生态活跃', '奖励丰厚'],
    description: '对 AI Agent 和 RWA 赛道支持力度大，生态基金极其雄厚，适合追求商业落地的项目。',
    category: 'Chain'
  },
  {
    name: 'ETHGlobal',
    rating: 5,
    tags: ['国际视野', '高含金量'],
    description: '竞争激烈，但一旦拿奖，含金量是通往全球 Web3 的通行证。交付标准极高。',
    category: 'Platform'
  }
];

export const ACHIEVEMENTS: Achievement[] = [
  { title: '实操交付率', metric: '90%+', description: '绝不让 Idea 死在草稿纸上' },
  { title: '开发时间', metric: '3-6 hrs', description: '从 0 到 Demo 的最快路径' },
  { title: '获奖率', metric: 'TOP 3', description: '多次实战第一名/第二名经验' }
];

export const MEMBERSHIPS: MembershipTier[] = [
  {
    id: 'free',
    name: '入门 Starter',
    price: '0 RMB',
    benefits: [
      'AI 工具地图（基础版）',
      '入门 Prompt Pack',
      '黑客松情报站快照',
      '选题/README 模板'
    ],
    type: 'Free'
  },
  {
    id: 'premium',
    name: 'HackAround AI Power Pack',
    price: '199 RMB',
    limit: '限量 30 席',
    benefits: [
      '核心私密社交群席位',
      '进阶 AI 地图 (JSON+Web)',
      '全流程 Prompt (Cloud Code)',
      '每周 1 次 60min 实战训练',
      '导师 1 对 1 交付陪跑'
    ],
    type: 'Premium'
  }
];
