
import posthog from 'posthog-js';

// 获取 UA 类型（如 WeChat）
const getUAType = () => {
  const ua = navigator.userAgent.toLowerCase();
  if (ua.match(/MicroMessenger/i)) {
    return 'wechat';
  }
  if (ua.match(/Alipay/i)) {
    return 'alipay';
  }
  return 'web'; // 默认为普通 web
};

// 安全调用 PostHog 的包装器
export const safeCapture = (eventName: string, properties?: Record<string, any>) => {
  if (typeof window !== 'undefined' && posthog) {
    posthog.capture(eventName, properties);
  }
};

export const safeRegister = (properties: Record<string, any>) => {
  if (typeof window !== 'undefined' && posthog) {
    posthog.register(properties);
  }
};

// 初始化 PostHog
export const initPostHog = () => {
  if (typeof window !== 'undefined') {
    // 替换为您的 PostHog Project API Key 和 Host
    // 建议从环境变量获取，这里为了演示直接使用或留空待填
    const POSTHOG_KEY = import.meta.env.VITE_POSTHOG_KEY || 'phc_PLACEHOLDER_KEY_HERE';
    const POSTHOG_HOST = import.meta.env.VITE_POSTHOG_HOST || 'https://us.i.posthog.com';

    if (POSTHOG_KEY && POSTHOG_KEY !== 'phc_PLACEHOLDER_KEY_HERE') {
      posthog.init(POSTHOG_KEY, {
        api_host: POSTHOG_HOST,
        autocapture: true, // 开启自动捕获
        capture_pageview: true,
        loaded: (ph) => {
          // 注册全局属性
          ph.register({
            region: 'CN', // 默认地区，可根据需要调整逻辑
            ua_type: getUAType(),
          });
        },
      });
    }
  }
};

export default posthog;
