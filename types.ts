
export interface HackathonIntel {
  name: string;
  rating: number;
  tags: string[];
  description: string;
  category: 'Platform' | 'Chain' | 'Community';
}

export interface Achievement {
  title: string;
  metric: string;
  description: string;
}

export interface MembershipTier {
  id: string;
  name: string;
  price: string;
  priceNote?: string;
  benefits: string[];
  limit?: string;
  type: 'Free' | 'Premium';
}
