# 快速开始

## 本地开发

1. 克隆项目到本地：
```bash
git clone https://github.com/UNNC-Fab/2025-1-YANBING.git
cd 2025-1-YANBING
```

2. 安装依赖：
```bash
npm install
```

3. 启动开发服务器：
```bash
npm run docs:dev
```

## 部署到 GitHub Pages

1. 构建文档：
```bash
npm run docs:build
```

2. 将构建后的文件推送到 GitHub：
```bash
git add docs/.vitepress/dist
git commit -m "更新文档"
git push
```

3. 在 GitHub 仓库设置中，将 GitHub Pages 的源设置为你的部署分支和目录。

## 编写文档

- 所有文档都在 `docs` 目录下
- 使用 Markdown 语法编写内容
- 图片等资源文件可以放在 `docs/public` 目录下
- 修改 `docs/.vitepress/config.js` 来更新网站配置

## 注意事项

- 确保所有链接都是相对路径
- 提交前先在本地预览更改
- 定期备份你的文档内容