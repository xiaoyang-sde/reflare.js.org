---
title: Summer 2021 of Open Source Promotion Plan
type: docs
---

# "开源软件供应链点亮计划 - 暑期2021" 项目提案

## 项目简介

今年，中科院软件所与华为 openEuler 项目共同举办 "[开源软件供应链点亮计划 - 暑期2021](https://summer.iscas.ac.cn/#/?lang=chi)" 项目. 该项目与 Google Summer of Code 形式类似: 开源社区提供项目需求并提供导师, 在校学生利用暑期时间进行开发, 主办方为顺利完成的项目提供一定额度的奖金. 无论 GSoC 还是这次的 "点亮计划", 都是一种非常好的开源实践范式, 能够有效地增进高校学生对开源的理解, 增加与真实社区的接触, 并积累宝贵的经验. 详细安排请查阅官网的[活动日程](https://summer.iscas.ac.cn/help/timeline/)与[学生指南](https://summer.iscas.ac.cn/help/student/).

- Rocket Booster 有意作为社区加入这一计划, 提供若干项目需求. 你可以在本页面或在活动官网查看[需求列表](https://summer.iscas.ac.cn/#/org/orgdetail/rocketbooster).
- 决定报名后, 建议先发邮件与导师联系, 介绍一下自己的背景.
- 我们将使用 [Telegram](https://telegram.org/) 群组来协调本次活动, 建议先注册并[加入我们的群组](https://t.me/rocket_booster_chat).

## 需求列表

### HTML Rewriter

- 项目描述: Rocket Booster 目前无法修改源站返回的静态资源. 本项目的目标是使用 Cloudflare Workers 提供的 HTMLRewriter API, 根据用户配置在边缘节点修改源站返回的 HTML 文件, 并使用 Cloudflare Cache API 或 Workers KV 对修改后的文件进行缓存.
- 项目难度: 中
- 项目社区导师: [Xiaoyang Liu](https://github.com/xiaoyang-liu-cs)
- 导师联系方式: xiaoyang.liu@ucla.edu

- 项目产出要求:
  - 使用 HTMLRewriter API 修改网页内容 (文本替换, 删除元素, etc.)
  - 使用 Cache API 或 Workers KV 缓存修改结果
  - 使用 Google Cloud Translation API 翻译网页的文本
  - 根据用户配置, 为网页添加组件, 例如 GDPR Cookie Consent, Scroll back to top button, etc.

- 项目技术要求:
  - 了解前端开发的相关知识 (HTML, CSS, JavaScript, TypeScript)
  - 使用 Git 协作开发

- 相关的开源软件仓库列表:
  - https://github.com/rocket-booster/rocket-booster (MIT License)

### 网站与 CI/CD 优化

- 项目描述: Rocket Booster 的官方网站 booster.js.org 目前使用 Hugo 作为静态页面生成引擎, 难以实现对语法和页面的定制. 因此, Rocket Booster 计划将网站迁移到基于 React 的 Docusaurus 页面生成框架, 实现对页面的深度定制. 此外, 我们还希望利用 GitHub Actions 来优化开发流程, 实现自动部署.
- 项目难度: 中
- 项目社区导师: [Xiaoyang Liu](https://github.com/xiaoyang-liu-cs)
- 导师联系方式: xiaoyang.liu@ucla.edu
- 项目产出要求:
  - 使用 React 与 Docusaurus 开发 booster.js.org 文档网站
  - 使用 GitHub Actions 实现 Rocket Booster Template 自动部署
  - 使用 Jest 与 Codecov 为 Rocket Booster 编写单元测试, 生成覆盖率报告

- 项目技术要求:
  - 了解前端开发的相关知识 (HTML, CSS, JavaScript, TypeScript, React)
  - 使用 Git 协作开发

- 相关的开源软件仓库列表:
  - https://github.com/rocket-booster/rocket-booster (MIT License)
  - https://github.com/rocket-booster/rocket-booster-template (MIT License)
  - https://github.com/rocket-booster/booster.js.org (MIT License)
