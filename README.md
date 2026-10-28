# a-rookie Personal Blog

个人主页 + 作品集 + 静态博客页面。首页定位围绕 `a-rookie-of-C-language`：全栈工程、AI Agent、Java Spring、Rust、TypeScript、C++。

[![star · owner/admin](https://img.shields.io/github/stars/a-rookie-of-C-language?affiliations=OWNER&label=star%20%C2%B7%20owner%2Fadmin&color=fe7d37)](https://github.com/a-rookie-of-C-language)
[![star · collaborator](https://img.shields.io/github/stars/a-rookie-of-C-language?affiliations=COLLABORATOR&label=star%20%C2%B7%20collaborator&color=a371f7)](https://github.com/a-rookie-of-C-language)
[![followers](https://img.shields.io/github/followers/a-rookie-of-C-language?style=flat&label=followers)](https://github.com/a-rookie-of-C-language)

## 技术栈

- 前端：React + TypeScript + Vite

## 本地开发

```powershell
cd frontend
npm install
npm run dev
```

访问：http://localhost:5173

## 前端部署

```powershell
cd frontend
npm run build
```

将 `frontend/dist` 作为静态站点部署即可，例如 Nginx、Vercel、Netlify、GitHub Pages 或任意静态文件服务。

当前 GitHub Pages 使用自定义域名 `arookieofc.site`，Vite `base` 保持 `/`。

## 已实现

- 个人主页
- 在线简历
- 项目作品集与项目详情
- 静态文章列表与文章详情路由
- GitHub 身份入口：https://github.com/a-rookie-of-C-language

## 说明

当前只部署前端，不需要启动 `backend`。站点内容来自 `frontend/src/siteContent.ts` 的静态数据。
