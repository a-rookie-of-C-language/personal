import { Bot, Code2, Cpu, Layers, Server, Terminal } from 'lucide-react'
import type { Post, Profile, Project, SitePayload } from './types'

export const GITHUB_URL = 'https://github.com/a-rookie-of-C-language'

export const organizationMemberships = [
  {
    label: '@ai-cqut',
    name: 'ai-cqut',
    url: 'https://github.com/ai-cqut',
    description: '重庆理工大学两江人工智能学院 GitHub 官方组织。',
    focus: ['学院工程', 'AI 平台', '校园系统'],
  },
  {
    label: '@unixwin',
    name: 'unixwin',
    url: 'https://github.com/unixwin',
    description: '面向 Windows 的 Unix 风格工具链组织，维护 Shell、命令行工具等，持续提升 Windows 下的终端体验。',
    focus: ['Windows CLI', 'Shell', 'Unix-style Tools'],
  },
  {
    label: '@EfficiencAI',
    name: 'EfficiencAI',
    url: 'https://github.com/EfficiencAI',
    description: '围绕 AI 效率、智能学习和工作流辅助的工程组织，探索对话树、MCP 与 AI 应用平台。',
    focus: ['AI Efficiency', 'MCP', 'Learning Tools'],
  },
]

export const emptyProfile: Profile = {
  displayName: 'a-rookie-of-C-language',
  headline: '全栈工程师，专注 AI Agent 系统与后端基础设施。',
  bio: '我长期折腾 Java Spring、Rust、TypeScript 和 C++，关注能真正落地的系统：Agent 工作流、Web 平台、后端服务与开发者工具。',
  avatarUrl: '',
  location: 'China',
  email: '',
}

export const stackHighlights = [
  { label: 'AI Agent', detail: '工作流编排、工具调用、自动化', icon: Bot },
  { label: 'Java Spring', detail: '服务架构、API、业务后端', icon: Server },
  { label: 'Rust', detail: '框架实验、系统编程、性能', icon: Cpu },
  { label: 'TypeScript', detail: 'React 前端、工具链、全栈胶水层', icon: Code2 },
  { label: 'C++', detail: '底层思维、算法、原生代码', icon: Terminal },
  { label: 'Full Stack', detail: '从数据库到交互体验', icon: Layers },
]

export const focusCards = [
  {
    title: 'Agent 原生工程',
    text: '把 AI Agent 当成工程流程的一部分，而不是噱头：规划、工具执行、审查、迭代都能进入闭环。',
  },
  {
    title: '后端优先的产品感',
    text: '熟悉 API 设计、数据建模、认证鉴权、服务边界，以及那些让产品真正稳定运行的细节。',
  },
  {
    title: '多语言构建者视角',
    text: 'Java Spring 做业务系统，Rust 做框架和系统实验，TypeScript 做产品界面，C++ 做底层能力训练。',
  },
]

export const resumeSkillGroups = [
  { title: '后端工程', items: ['Java Spring', 'Rust', 'REST API', 'JWT', 'MySQL', 'DDD'] },
  { title: 'AI Agent', items: ['RAG', 'MCP', 'Tool Calling', 'LLM Gateway', '工作流编排'] },
  { title: '前端与全栈', items: ['React', 'TypeScript', 'Vite', '后台系统', '内容管理'] },
  { title: '系统与工具', items: ['C++', 'Shell', 'Windows CLI', '消息队列', '开发者工具'] },
]

export const resumeTimeline = [
  {
    title: '个人站点与博客后台',
    meta: 'React TypeScript / Vite / 静态部署',
    text: '把个人主页、简历、文章入口和作品案例收敛为可静态托管的前端站点，部署链路更轻。',
  },
  {
    title: 'AI Agent 与 LLM 基础设施',
    meta: 'RAG / MCP / LLM Gateway',
    text: '围绕工具调用、检索增强、协议适配和模型网关做工程化实践，关注 Agent 能否进入真实工作流。',
  },
  {
    title: '多语言工程实践',
    meta: 'Java Spring / Rust / TypeScript / C++',
    text: '用 Java 处理业务系统，用 Rust 做框架和基础设施实验，用 TypeScript 做产品界面，用 C++ 训练系统层能力。',
  },
]

export const deploymentNotes = [
  '当前站点按纯前端静态站部署，构建产物在 frontend/dist。',
  '可用 Nginx、Vercel、Netlify 或任意静态文件服务托管。',
  '不再依赖后端服务、数据库、JWT 或 API 反向代理。',
]

export const curatedProjects: Project[] = [
  {
    id: 1,
    name: 'Personal Blog Studio',
    description: '个人主页与作品集静态站点，使用 React TypeScript 构建，覆盖简历、文章入口、作品列表和项目案例。',
    url: '',
    repoUrl: 'https://github.com/a-rookie-of-C-language',
    techStack: 'React, TypeScript, Vite, Static Site',
    featured: true,
  },
  {
    id: 2,
    name: 'rust-spring',
    description: 'Rust 后端框架实验，围绕 IoC、配置、路由宏、组件注册和 Spring 风格启动体验组织。',
    url: '',
    repoUrl: 'https://github.com/a-rookie-of-C-language/rust-spring',
    techStack: 'Rust, Procedural Macro, IoC, HTTP Server',
    featured: true,
  },
  {
    id: 3,
    name: 'AIGateway',
    description: '面向 AI 模型服务的网关系统，关注 API Key、租户隔离、限流、Provider 路由和流式响应。',
    url: '',
    repoUrl: 'https://github.com/a-rookie-of-C-language/AIGateway',
    techStack: 'Rust, Axum, DDD, LLM Gateway, Streaming',
    featured: true,
  },
  {
    id: 4,
    name: 'ferryllm',
    description: 'LLM 协议中间件，用统一 IR 适配 OpenAI 兼容接口、Anthropic 风格请求、工具调用和流式输出。',
    url: 'https://docs.rs/ferryllm/latest/ferryllm/',
    repoUrl: 'https://github.com/a-rookie-of-C-language/ferryllm',
    techStack: 'Rust, LLM, OpenAI API, Anthropic, Tool Calling',
    featured: true,
  },
  {
    id: 5,
    name: 'cxxmcp',
    description: 'C++ MCP SDK，围绕 JSON-RPC、传输层、协议校验和示例工具构建可集成的 MCP 能力。',
    url: '',
    repoUrl: 'https://github.com/a-rookie-of-C-language/cxxmcp',
    techStack: 'C++, MCP, JSON-RPC, SDK, CMake',
    featured: true,
  },
  {
    id: 6,
    name: 'WinuxCmd',
    description: 'Windows 原生命令行工具集，用 C++ 提供轻量 Linux 风格命令，适合管道组合和日常终端工作流。',
    url: '',
    repoUrl: 'https://github.com/a-rookie-of-C-language/WinuxCmd',
    techStack: 'C++, Windows CLI, File Tools, Terminal',
    featured: false,
  },
  {
    id: 7,
    name: 'WinSH',
    description: 'Rust Windows Shell 实验，覆盖命令解析、补全、脚本、主题和插件化扩展。',
    url: '',
    repoUrl: 'https://github.com/a-rookie-of-C-language/WinSH',
    techStack: 'Rust, Shell, Parser, Plugin, Windows',
    featured: true,
  },
  {
    id: 8,
    name: 'rubash',
    description: '使用 Rust 从零重写 GNU Bash 的 POSIX 兼容 Shell，覆盖词法分析、AST 解析、内建命令、重定向执行和 GNU Bash upstream 测试 runner。',
    url: '',
    repoUrl: 'https://github.com/unixwin/rubash',
    techStack: 'Rust, Shell, Bash, Parser, Executor, POSIX',
    featured: true,
  },
  {
    id: 9,
    name: 'Agentic RAG Tool System',
    description: '面向 Agent 调用的 RAG 工具系统，拆分 DAO、Service、Tool Schema、Runtime 和 Controller。',
    url: '',
    repoUrl: 'https://github.com/a-rookie-of-C-language',
    techStack: 'RAG, MCP, Agent Tool, Vector Search, CLI',
    featured: true,
  },
  {
    id: 10,
    name: 'arookieofcOS',
    description: 'Tauri 桌面环境实验，用 React UI 和 Rust 命令桥接系统信息、文件、终端和监控能力。',
    url: '',
    repoUrl: 'https://github.com/a-rookie-of-C-language/arookieofcOS',
    techStack: 'Tauri, React, Rust, IPC, Desktop',
    featured: false,
  },
  {
    id: 11,
    name: 'arookieofcMQ',
    description: 'Rust 消息队列实现练习，围绕生产消费、FIFO 队列、持久化和消息处理器抽象展开。',
    url: '',
    repoUrl: 'https://github.com/a-rookie-of-C-language/arookieofcMQ',
    techStack: 'Rust, Message Queue, Producer Consumer, Storage',
    featured: false,
  },
  {
    id: 12,
    name: 'Advisor AI Platform',
    description: '全栈智能顾问平台，把前端、业务后端、RAG Agent 服务、向量检索和认证链路组合成完整系统。',
    url: '',
    repoUrl: 'https://github.com/a-rookie-of-C-language',
    techStack: 'React, Spring Boot, Python, RAG, PostgreSQL, pgvector',
    featured: true,
  },
]

export const projectEvidence: Record<string, { label: string; url: string }[]> = {
  'Personal Blog Studio': [
    { label: 'GitHub profile', url: 'https://github.com/a-rookie-of-C-language' },
  ],
  'rust-spring': [
    { label: 'GitHub repository', url: 'https://github.com/a-rookie-of-C-language/rust-spring' },
  ],
  AIGateway: [
    { label: 'GitHub repository', url: 'https://github.com/a-rookie-of-C-language/AIGateway' },
  ],
  ferryllm: [
    { label: 'docs.rs crate', url: 'https://docs.rs/ferryllm/latest/ferryllm/' },
    { label: 'GitHub repository', url: 'https://github.com/a-rookie-of-C-language/ferryllm' },
  ],
  cxxmcp: [
    { label: 'GitHub repository', url: 'https://github.com/a-rookie-of-C-language/cxxmcp' },
  ],
  WinuxCmd: [
    { label: 'GitHub repository', url: 'https://github.com/a-rookie-of-C-language/WinuxCmd' },
  ],
  WinSH: [
    { label: 'GitHub repository', url: 'https://github.com/a-rookie-of-C-language/WinSH' },
  ],
  rubash: [
    { label: 'GitHub repository', url: 'https://github.com/unixwin/rubash' },
  ],
  'Agentic RAG Tool System': [
    { label: 'GitHub profile', url: 'https://github.com/a-rookie-of-C-language' },
  ],
  arookieofcOS: [
    { label: 'GitHub repository', url: 'https://github.com/a-rookie-of-C-language/arookieofcOS' },
  ],
  arookieofcMQ: [
    { label: 'GitHub repository', url: 'https://github.com/a-rookie-of-C-language/arookieofcMQ' },
  ],
  'Advisor AI Platform': [
    { label: 'GitHub profile', url: 'https://github.com/a-rookie-of-C-language' },
  ],
}

export const staticPosts: Post[] = []

export const staticSite: SitePayload = {
  profile: emptyProfile,
  projects: curatedProjects,
  socialLinks: [],
  categories: [],
  tags: [],
}

export type ProjectCaseCopy = {
  focus: string
  challenge: string
  solution: string
  impact: string
  architecture?: string[]
  dataFlow?: string[]
}

export const projectCaseCopy: Record<string, ProjectCaseCopy> = {
  'Advisor AI Platform': {
    focus: '全栈智能顾问平台',
    challenge: '把前端、业务后端、RAG Agent 服务、向量检索和认证链路组合成可演练的完整系统。',
    solution: '用 React 承载交互，Spring Boot 拆分业务边界，Python RAG 服务处理检索增强，PostgreSQL/pgvector 管理知识检索。',
    impact: '体现跨语言系统集成能力，以及从用户入口到 Agent 服务的端到端工程闭环。',
    architecture: ['React 交互层', 'Spring Boot 业务 API', 'RAG Agent 服务', 'PostgreSQL / pgvector'],
    dataFlow: ['用户提问', '业务 API 鉴权与编排', 'Agent 检索知识库', '模型生成回答', '前端呈现结果'],
  },
  'rust-spring': {
    focus: 'Rust 后端框架实验',
    challenge: '在 Rust 里复刻 Spring 式 IoC、配置、路由宏和启动体验，同时保持类型安全和低运行时负担。',
    solution: '用过程宏与容器注册机制组织组件，通过启动器统一配置加载、路由注册和服务运行。',
    impact: '证明对后端框架内部机制、宏系统和服务启动链路有深入理解。',
    architecture: ['过程宏入口', '组件注册表', 'IoC 容器', '配置加载器', 'HTTP 路由运行时'],
    dataFlow: ['扫描注解组件', '注册 Bean 与路由', '注入配置和依赖', '启动 HTTP Server', '分发请求到 Handler'],
  },
  ferryllm: {
    focus: 'LLM 协议中间件',
    challenge: '不同模型服务的消息结构、工具调用和流式输出不一致，业务侧直接接入会变得脆弱。',
    solution: '设计共享 IR 层，把 OpenAI 兼容接口与 Anthropic 风格请求归一，再做路由和适配。',
    impact: '让上层业务可以更稳定地接入多模型 Provider，并保留工具调用与流式能力。',
    architecture: ['兼容 API 入口', '共享请求 IR', 'Provider 路由', '模型适配器', '流式响应转换'],
    dataFlow: ['客户端请求', '解析为统一 IR', '选择 Provider', '转换为目标协议', '归一化响应返回'],
  },
  cxxmcp: {
    focus: 'C++ MCP SDK',
    challenge: 'MCP 生态需要类型可靠、传输清晰、方便集成的 C++ 实现。',
    solution: '围绕 JSON-RPC 模型、传输层、协议校验和包管理集成组织 SDK。',
    impact: '体现 C++ 工程化、协议建模和跨包管理生态适配能力。',
    architecture: ['C++ SDK API', 'JSON-RPC 模型', '传输层', '协议校验', '示例工具/客户端'],
    dataFlow: ['调用 SDK API', '序列化 JSON-RPC', '通过传输层发送', '解析响应/通知', '回调业务处理器'],
  },
  WinuxCmd: {
    focus: 'Windows 命令行工具集',
    challenge: 'Windows 原生命令行缺少轻量 Linux 风格工具链，WSL 又不是所有场景都合适。',
    solution: '用 C++ 实现小体积、快速启动、适合管道组合的命令工具。',
    impact: '展示系统工具开发、终端工作流和 Windows 原生能力。',
    architecture: ['命令入口', '参数解析', '文件/文本处理核心', 'Windows API 适配', '标准输出'],
    dataFlow: ['Shell 调用命令', '解析参数与 stdin', '执行文本/文件操作', '写入 stdout/stderr', '交给管道下游'],
  },
  WinSH: {
    focus: 'Rust Windows Shell',
    challenge: 'Shell 不只是命令执行，还要处理补全、通配符、脚本、主题和插件扩展。',
    solution: '用 Rust 实现解析、补全、命令替换、数组和插件结构，面向现代终端体验组织能力。',
    impact: '体现解析器、交互式 CLI 和插件化架构设计能力。',
    architecture: ['交互式终端', '命令解析器', '补全/主题系统', '执行运行时', '插件扩展'],
    dataFlow: ['用户输入命令', '词法/语法解析', '展开变量与通配符', '执行内置或外部命令', '渲染结果和提示符'],
  },
  rubash: {
    focus: 'Rust 重写 GNU Bash',
    challenge: 'Shell 兼容性牵涉词法、语法、展开、重定向、内建命令和上游行为差异，手写实现很容易在边界场景失真。',
    solution: '用 Rust 拆分 lexer、parser、executor 和 builtins，并引入 GNU Bash upstream runner 追踪兼容性基线。',
    impact: '展示系统软件、解释器/解析器、CLI 执行模型和测试驱动兼容性工程能力。',
    architecture: ['CLI 入口', 'Lexer', 'Parser / AST', 'Executor', 'Builtins / 外部命令'],
    dataFlow: ['用户输入命令', '词法分析生成 token', '解析为 AST', '执行重定向和内建/外部命令', '返回退出码和输出'],
  },
  AIGateway: {
    focus: '模型网关与流量治理',
    challenge: '模型服务需要租户隔离、API Key、流式端点、限流和 Provider 边界。',
    solution: '用 Rust 与 Axum 建立 DDD 分层，把接入、治理和 Provider 集成拆成清晰模块。',
    impact: '体现 AI 基础设施、服务治理和 Rust Web 后端能力。',
    architecture: ['Axum HTTP 入口', '鉴权与租户层', '限流/治理服务', 'Provider 适配层', '模型服务'],
    dataFlow: ['客户端携带 API Key', '网关鉴权和计量', '应用限流策略', '路由到 Provider', '流式/非流式响应回传'],
  },
  'Agentic RAG Tool System': {
    focus: '工具化 RAG 系统',
    challenge: 'RAG 如果只停留在检索问答，很难被 Agent 稳定调用和组合。',
    solution: '拆分 DAO、Service、Tool Schema、Runtime、Controller 层，并提供 CLI 与 MCP 入口。',
    impact: '体现把 AI 能力封装成可调用工具的工程思路。',
    architecture: ['CLI / MCP 入口', 'Controller', 'Tool Schema', 'RAG Runtime', 'DAO / 向量存储'],
    dataFlow: ['Agent 调用工具', '校验 Tool Schema', 'Runtime 执行检索', 'DAO 读取知识片段', '组合结果返回 Agent'],
  },
  arookieofcOS: {
    focus: 'Tauri 桌面环境实验',
    challenge: '桌面环境需要 UI、系统命令、IPC、文件浏览和监控能力协同。',
    solution: '用 React 做界面，用 Rust Tauri 命令桥接系统信息、文件、终端和监控面板。',
    impact: '展示桌面端、系统集成和前后端 IPC 设计能力。',
    architecture: ['React 桌面 UI', 'Tauri IPC', 'Rust Command 层', '系统信息/文件/终端模块', 'Windows OS'],
    dataFlow: ['用户操作桌面组件', '前端发起 IPC', 'Rust 执行系统命令', '返回结构化结果', 'UI 更新面板状态'],
  },
  arookieofcMQ: {
    focus: 'Rust 消息队列实现',
    challenge: '消息队列涉及持久化、生产消费模型、顺序语义和处理器抽象。',
    solution: '从 FIFO 队列、生产者/消费者、消息处理器和文档阶段化逐步实现核心概念。',
    impact: '体现基础设施学习能力和对中间件核心机制的拆解能力。',
    architecture: ['Producer API', 'Topic / Queue', '持久化层', 'Consumer API', 'Message Handler'],
    dataFlow: ['生产者写入消息', '队列分配顺序位置', '持久化消息体', '消费者拉取/订阅', '处理器确认消费'],
  },
  'Personal Blog Studio': {
    focus: '个人主页与作品案例',
    challenge: '个人站需要稳定展示身份、简历、作品和文章入口，同时保持部署足够轻。',
    solution: '用 React TypeScript 和静态内容数据组织页面，Vite 构建后直接托管 dist 目录。',
    impact: '减少运行时依赖，让站点更容易上线、迁移和长期维护。',
    architecture: ['React 页面路由', '静态内容数据', 'Markdown 渲染', 'Vite 构建', '静态文件托管'],
    dataFlow: ['维护 siteContent.ts', '执行前端构建', '生成 dist 静态资源', '静态服务托管', '浏览器加载页面'],
  },
}

export function projectCaseFor(project: Pick<Project, 'name' | 'techStack'>): ProjectCaseCopy {
  const fallbackStack = splitTechStack(project.techStack)
  return projectCaseCopy[project.name] || {
    focus: '工程作品',
    challenge: '围绕真实开发场景沉淀项目能力，并把功能、架构和维护性放在同一张图里考虑。',
    solution: '用清晰的模块边界、稳定的数据模型和可演进的接口组织实现。',
    impact: '用于展示技术选择、实现能力和持续迭代意识。',
    architecture: fallbackStack.length ? fallbackStack : ['用户入口', '应用核心', '数据/外部系统'],
    dataFlow: ['输入请求', '应用层解析', '核心逻辑处理', '读写数据或调用外部服务', '返回结果'],
  }
}

export function emptyPost(): Post {
  return {
    id: 0,
    title: '',
    slug: '',
    summary: '',
    cover_url: '',
    content: '',
    status: 'draft',
    featured: false,
    category_id: null,
    category: null,
    tags: [],
    created_at: '',
    updated_at: '',
  }
}

export function projectSlug(project: Pick<Project, 'id' | 'name'>) {
  const slug = project.name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
  return slug || String(project.id)
}

export function splitTechStack(value: string) {
  return value.split(',').map((item) => item.trim()).filter(Boolean)
}
