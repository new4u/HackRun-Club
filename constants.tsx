
import React from 'react';
import { HackathonIntel, Achievement, MembershipTier } from './types';
import { Award, Zap, Users, Code, Target, Map, ShieldCheck, Database } from 'lucide-react';

export const INTEL_DATA: HackathonIntel[] = [
  {
    name: 'OpenBuild',
    rating: 5,
    tags: ['开发者友好', '国内顶尖'],
    description: '资源对接极其精准，评审客观，是起步的最佳选择。',
    category: 'Platform'
  },
  {
    name: 'Monad',
    rating: 4,
    tags: ['生态活跃', '奖励丰厚'],
    description: '对AI Agent赛道支持力度大，适合RWA/DeFi开发者。',
    category: 'Chain'
  },
  {
    name: 'ETHGlobal',
    rating: 5,
    tags: ['国际视野', '高含金量'],
    description: '竞争激烈，但一旦拿奖，含金量是通往全球Web3的通行证。',
    category: 'Platform'
  },
  {
    name: 'Tencent Cloud AI',
    rating: 4,
    tags: ['大厂背书', '资源厚'],
    description: '适合To B或大型架构项目，偏好实际落地能力。',
    category: 'Platform'
  }
];

export const ACHIEVEMENTS: Achievement[] = [
  { title: '实操交付率', metric: '90%+', description: '绝不让Idea死在草稿纸上' },
  { title: '开发时间', metric: '3-6 hrs', description: '从0到Demo的最快路径' },
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
    priceNote: '满勤可获得现金奖励',
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
