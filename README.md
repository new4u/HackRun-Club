# HackRun Club | 松友团

在线部署地址  
https://hackrun-club-production.up.railway.app/

## 快速开始（本地）

前置：安装 Node.js

```bash
npm install
npm run dev
```

Vite 前端可选配置（用于直接写入数据库）：

```env
VITE_SURVEY_ENDPOINT=https://your-railway-service.up.railway.app/api/survey
```


> 当前代码未直接读取该变量，仅通过 `vite.config.ts` 注入到 `process.env`，后续如需调用可在业务代码中使用。

## 构建与预览

```bash
npm run build
npm run preview
```

## Railway Postgres 后端（可选）

启动后端服务：

```bash
npm install
npm run start
```

必需环境变量：

```env
DATABASE_URL=postgresql://user:password@host:port/db
```

接口路径：

```
POST /api/survey
```

请求体示例：

```json
{
  "purpose": "找工作",
  "timeCommit": "5h",
  "codeLevel": "能写简单 Demo",
  "aiLevel": "会用 IDE/Agent 工具",
  "wechatId": "your_wechat"
}
```

成功响应：

```json
{ "ok": true }
```

## 项目结构

```
HackRun-Club/
├─ index.html           # 入口 HTML（importmap + module）
├─ index.tsx            # React 应用入口，挂载到 #root
├─ App.tsx              # 应用主组件
├─ components/          # 业务组件
│  ├─ Retrospective.tsx
│  └─ SurveyModal.tsx
├─ constants.tsx        # 业务常量与数据
├─ types.ts             # 类型定义
├─ vite.config.ts       # Vite 配置（端口、env 注入、别名等）
├─ package.json         # 脚本与依赖
└─ tsconfig.json        # TypeScript 配置
```

## 架构总览 (ASCII)

```
[Browser]
  └─ index.html
       ├─ importmap (ESM CDN)
       └─ <script type="module"> → import('/index.tsx')

[App]
  └─ index.tsx → ReactDOM.createRoot(#root) → <App/>
       └─ App.tsx → components/*

[Build]
  └─ Vite (dev/build/preview)
       └─ server: 3000, env define in vite.config.ts
```

## 部署（Railway）

- 当前部署地址：`https://hackrun-club-production.up.railway.app/`
- Railway 一般流程：安装依赖 → 构建静态资源（`npm run build`） → 通过适配的静态托管/预览方式提供页面
- 若需自定义启动命令，可在 Railway 的服务设置中指定（例如 `npm run preview`），并开放端口与健康检查

## 许可证

本仓库仅用于演示与开发，版权归原作者与贡献者所有。若需商用或二次分发，请遵循相应许可证与条款。
