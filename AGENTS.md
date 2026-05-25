# 项目关键信息

## 项目背景

- 项目名称：`净履衣橱洗护店`
- 项目类型：Next.js 单页官网
- 页面语言：中文，HTML 语言标记为 `zh-CN`
- 业务定位：衣物、鞋履、皮具、家纺一站式专业洗护服务官网
- 主要能力：展示洗护项目、流程、价目表、客户评价、门店信息，并提供预约表单

## 协作者信息

- 姓名：孙建波
- 学校：中国科学院大学
- 擅长：编程、打篮球

## 技术栈

- Next.js：`16.2.6`
- React：`19.2.6`
- React DOM：`19.2.6`
- TypeScript：`6.0.3`
- 样式方案：全局 CSS，主文件为 `app/globals.css`
- 包管理：npm，锁文件为 `package-lock.json`

## 常用命令

- 安装依赖：`npm install`
- 本地开发：`npm run dev`
- 生产构建：`npm run build`
- 启动生产服务：`npm run start`
- 类型检查：`npm run typecheck`

## 目录结构

- `app/layout.tsx`：根布局，设置页面元信息并引入全局样式
- `app/page.tsx`：首页主逻辑和全部页面内容，包含导航、Hero、服务卡片、流程、价目表、预约表单、评价、门店信息和页脚
- `app/globals.css`：全局样式、响应式布局、颜色变量、组件样式和动效
- `public/assets/`：本地静态图片资源，包括 Hero 轮播图和门店位置图
- `package.json`：项目脚本、依赖和版本信息
- `tsconfig.json`：TypeScript 与 Next.js 编译配置
- `.gitignore`：忽略依赖、构建产物、缓存、日志、本地环境文件和编辑器文件

## 页面内容概要

- 顶部固定导航包含品牌名、页面锚点和预约入口
- Hero 区使用三张本地图片轮播：门店接待、鞋履护理、衣物护理
- 服务项目包括衣物精洗、鞋履清洁、皮具养护、家纺除螨
- 洗护流程包括拍照建档、分检预处理、精洗与定型、质检封装
- 价目表展示常用洗护项目的适用范围和参考价格
- 预约表单收集姓名、手机、洗护项目、取送方式、期望时间和备注
- 门店信息包含地址、电话、营业时间、取送范围和到店提示

## 交互行为

- 首页组件是客户端组件，文件顶部使用 `"use client"`
- 移动端导航通过 `isMenuOpen` 状态展开和关闭
- 预约表单提交后会阻止默认提交、重置表单，并显示短暂 Toast 提示
- 页面内部导航使用锚点跳转，`html` 设置了平滑滚动

## 样式与设计约定

- 主色为绿色系，辅助色包括陶土色、柠檬黄和浅薄荷色
- 大部分 UI 元素使用 `8px` 圆角
- 布局以 `1160px` 最大内容宽度为主
- 断点主要在 `980px` 和 `680px`
- 移动端会将多列网格收敛为单列，并隐藏桌面预约按钮
- Hero 背景轮播支持 `prefers-reduced-motion: reduce`，在减少动态效果时关闭动画

## 静态资源

- `public/assets/hero-reception.png`：Hero 轮播门店接待图
- `public/assets/hero-shoe-care.png`：Hero 轮播鞋履护理图
- `public/assets/hero-garment-care.png`：Hero 轮播衣物护理图
- `public/assets/location-map-ai.png`：门店位置示意图
- 页面中也使用了多张 Unsplash 远程图片作为服务、流程和图库图片

## 开发注意事项

- 修改页面内容优先编辑 `app/page.tsx`
- 修改视觉样式优先编辑 `app/globals.css`
- 本项目没有单独的组件目录，当前页面逻辑集中在首页文件中
- 保持 TypeScript 严格模式通过，提交前建议运行 `npm run typecheck`
- 不要提交 `node_modules/`、`.next/`、`*.tsbuildinfo`、`.DS_Store`、`.idea/` 等本地或生成文件
