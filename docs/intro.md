---
sidebar_position: 1
slug: /
---

# Introduction

![Header](/img/header.jpg)

<div align="center">

[![GitHub Actions](https://img.shields.io/github/workflow/status/booster-labs/rocket-booster/Node.js%20Test%20and%20Build?style=for-the-badge&logo=github)](https://github.com/booster-labs/rocket-booster/actions)
[![Codecov Coverage](https://img.shields.io/codecov/c/github/booster-labs/rocket-booster?style=for-the-badge&logo=codecov)](https://app.codecov.io/gh/booster-labs/rocket-booster/)
[![Package version](https://img.shields.io/npm/v/rocket-booster?style=for-the-badge&logo=npm&color=red)](https://www.npmjs.com/package/rocket-booster)
[![Bundle size](https://img.shields.io/bundlephobia/min/rocket-booster?style=for-the-badge&logo=webpack)](https://www.npmjs.com/package/rocket-booster)

[![forthebadge](https://forthebadge.com/images/badges/made-with-typescript.svg)](https://forthebadge.com)
[![forthebadge](https://forthebadge.com/images/badges/ctrl-c-ctrl-v.svg)](https://forthebadge.com)
[![forthebadge](https://forthebadge.com/images/badges/built-with-love.svg)](https://forthebadge.com)
</div>

🚀 **rocket-booster** is a serverless reverse proxy and load balancing library built for [Cloudflare Workers](https://workers.cloudflare.com). It sits in front of web servers (e.g. web application, storage platform, or RESTful API), forwards HTTP requests or WebSocket traffics from clients to upstream servers and transforms responses with several optimizations to improve page loading time.

- ⚡ Serverless: Deploy instantly to the auto-scaling serverless platform built by Cloudflare. No virtual machines, servers, or containers to manage.
- ✈️ Load Balancing: Distribute incoming traffics evenly among different upstream servers.
- ⚙️ Hackable: Deliver unique content based on visitor attributes, conduct A/B testing, or build custom middleware to hook into the lifecycle. (Experimental)
- 📄 TypeScript: Extensive type declaration with TSDoc.
