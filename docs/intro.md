---
sidebar_position: 1
slug: /
---

# 🚀 Reflare

![Header](/img/header.jpg)

<div align="center">

[![GitHub Actions](https://img.shields.io/github/workflow/status/xiaoyang-sde/reflare/Node.js%20Test%20and%20Build?style=for-the-badge&logo=github)](https://github.com/xiaoyang-sde/reflare/actions)
[![Codecov Coverage](https://img.shields.io/codecov/c/github/xiaoyang-sde/reflare?style=for-the-badge&logo=codecov)](https://app.codecov.io/gh/xiaoyang-sde/reflare/)
[![Package Version](https://img.shields.io/npm/v/reflare?style=for-the-badge&logo=npm&color=red)](https://www.npmjs.com/package/reflare)
[![Download Statistics](https://img.shields.io/npm/dt/reflare?style=for-the-badge&logo=npm&color=blue)](https://www.npmjs.com/package/reflare)

[![forthebadge](https://forthebadge.com/images/badges/made-with-typescript.svg)](https://forthebadge.com)
[![forthebadge](https://forthebadge.com/images/badges/ctrl-c-ctrl-v.svg)](https://forthebadge.com)
[![forthebadge](https://forthebadge.com/images/badges/built-with-love.svg)](https://forthebadge.com)
</div>

🚀 **Reflare** is a lightweight and scalable reverse proxy and load balancing library built for [Cloudflare Workers](https://workers.cloudflare.com). It sits in front of web servers (e.g. web application, storage platform, or RESTful API), forwards HTTP requests or WebSocket traffics from clients to upstream servers and transforms responses with several optimizations to improve page loading time.

- ⚡ Serverless: Deploy instantly to the auto-scaling serverless platform built by Cloudflare. There's no need to manage virtual machines or containers.
- ✈️ Load Balancing: Distribute incoming traffics among different upstream services.
- ⚙️ Hackable: Deliver unique content based on visitor attributes, conduct A/B testing, or build custom middleware to hook into the lifecycle. (Experimental)
- 🛳️ Dynamic (Experimental): Store and update route definitions with Workers KV to avoid redundant redeployment.
