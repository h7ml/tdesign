<p style="display:flex; justify-content: center">

</p>
<p align="center">
  <a href="https://tdesign.tencent.com/starter/vue/#/dashboard/base" target="_blank">
    <img alt="TDesign Logo" width="200" src="https://tdesign.gtimg.com/starter/brand-logo.svg">
  </a>
</p>

<p align="center">
  <a href="https://github.com/h7ml/tdesign/actions/workflows/bash.yml" target="_blank">
    <img src="https://github.com/h7ml/tdesign/actions/workflows/bash.yml/badge.svg?branch=bash" alt="bash">
  </a>
  <a href="https://github.com/h7ml/tdesign/actions/workflows/vue.yml" target="_blank">
    <img src="https://github.com/h7ml/tdesign/actions/workflows/vue.yml/badge.svg?branch=vue" alt="vue">
  </a>
  <a href="https://github.com/h7ml/tdesign/actions/workflows/vue2.yml" target="_blank">
    <img src="https://github.com/h7ml/tdesign/actions/workflows/vue2.yml/badge.svg?branch=vue2" alt="vue2">
  </a>
  <a href="https://tdesign.vercel.app" target="_blank">
    <img src="https://img.shields.io/badge/vercel-success-3000000" alt="vercel">
  </a>
  <a href="http://tdesign.surge.sh">
    <img src="https://img.shields.io/badge/surge-success-3000000" alt="surge">
  </a>
  <a href="https://tdesign-vue.netlify.app" target="_blank">
    <img src="https://img.shields.io/netlify/209f6bf5-9dea-4d9a-9d9a-e37e2f922675?color=3000000&label=netlify" alt="netlify">
  </a>
</p>


### 项目简介

TDesign Vue Starter 是一个基于 tdesign-vue，使用 `Vue2`、`Vite2`开发，可进行个性化主题配置，旨在提供项目开箱即用的、配置式的中后台项目。

<p>
  <a href="http://tdesign.tencent.com/starter/vue/">在线预览</a>
  .
  <a href="https://tdesign.tencent.com/starter/">使用文档</a>

</p>

<img src="docs/docs-starter.png">

### 特性

- 内置多种常用的中后台页面
- 完善的目录结构
- 完善的代码规范配置
- 支持暗黑模式
- 自定义主题颜色
- 多种空间布局
- 内置 Mock 数据方案

### 使用

> 通过 [tdesign-starter-cli](https://www.npmjs.com/package/tdesign-starter-cli) 初始化项目仓库

```bash
## 1、安装 tdesign-starter-cli
npm i tdesign-starter-cli@latest -g

## 2、创建项目
td-starter init
```

### 开发

```bash
## 安装依赖
npm install

## 启动项目
npm run dev
```

### 构建

```bash
## 构建正式环境
npm run build

## 构建测试环境
npm run build:test
```

### 其他

```bash
## 预览构建产物
npm run preview

## 代码格式检查
npm run lint

## 代码格式检查与自动修复
npm run lint:fix

## style格式检查
npm run stylelint

## style格式检查与自动修复
npm run stylelint:fix
```

### 如何贡献

非常欢迎您的贡献！提交您的 [Issue](https://github.com/tencent/tdesign-vue-starter/issues/new/choose) 或者提交 [Pull Request](https://github.com/Tencent/tdesign-vue-starter/pulls)。

#### Pull Request

1. Fork 代码!
2. 创建自己的分支: `git checkout -b feat/xxxx`
3. 提交你的修改: `git commit -a 'feat(project): describe'`
4. 推送您的分支: `git push origin feat/xxxx`
5. 提交 `pull request`

#### 贡献提交规范

- [Angular Convention](https://github.com/conventional-changelog/conventional-changelog/tree/master/packages/conventional-changelog-angular)
- [Vue Style Guide](https://v3.vuejs.org/style-guide/#rule-categories)

### 兼容性

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="IE / Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br> IE / Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Safari |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Edge >=79                                                                                                                                                                                                        | Firefox >=83                                                                                                                                                                                                      | Chrome >=69                                                                                                                                                                                                   | Safari >=12                                                                                                                                                                                                   |

### License

[MIT](./LICENSE)
