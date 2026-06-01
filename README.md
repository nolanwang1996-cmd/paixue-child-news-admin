# 儿童新闻电台后台原型

这是一个可直接部署的后台管理前端。新版已经支持连接真实后端：新闻流程数据保存在数据库中，封面和音频通过后端上传到本地存储或 OSS，多人编辑通过账号身份、编辑锁和版本号防覆盖。

后台流程已经按儿童端新闻电台生产后台补齐：

- 第一步：上传原始新闻稿件/链接、新闻题目、关键词、所属频道、具体专题和新闻封面。原始稿只用于后台，不进入儿童前端。
- 第二步：上传儿童化改写后的新闻稿，以及对应语音播报音频。
- 第三步：配置新闻揭秘卡片。每张卡片包含封面图、`xxx -> xxx` 词条、一段鸢尾花姐姐口吻解释，以及对应音频。
- 第四步：配置固定问题；儿童端可录音，语音转文字进入对话框，再调用大模型实时问答。
- 第五步：配置打卡界面，审核后发布到儿童端新闻电台。

## 本地预览

```bash
python3 -m http.server 4173
```

然后访问：

```text
http://127.0.0.1:4173
```

## 默认登录

```text
后端地址：http://127.0.0.1:8000
账号：editor
密码：demo123
```

公网 GitHub Pages 只能托管前端页面，真正上传和多人编辑需要同时部署 `backend/`。部署后在登录页填写你的后端地址，例如：

```text
https://api.example.com
```

## 后端配置

后端新增接口前缀：

```text
/admin/kids-news
```

关键环境变量：

```text
KIDS_NEWS_ADMIN_PASSWORD=你的后台密码
KIDS_NEWS_AUTH_SECRET=一段足够长的随机字符串
ADMIN_CORS_ORIGINS=https://nolanwang1996-cmd.github.io,https://你的后台前端域名
STORAGE_MODE=local
LOCAL_STORAGE_ROOT=/data/storage
PUBLIC_BASE_URL=https://你的后端域名
```

如果要用 OSS，沿用仓库现有 OSS 配置：

```text
STORAGE_MODE=oss
OSS_BUCKET=你的 bucket
OSS_ENDPOINT=oss-cn-hangzhou.aliyuncs.com
OSS_ACCESS_KEY_ID=...
OSS_ACCESS_KEY_SECRET=...
```

## 部署方式

推荐任选一种：

- Vercel：适合快速生成公网预览地址。
- Netlify：适合静态站托管和后续表单/函数扩展。
- GitHub Pages：适合代码托管后自动发布。

当前项目已经包含 `vercel.json` 和 `netlify.toml`，可以直接作为静态站发布。

## 已实现

- 新闻稿、改写稿、揭秘卡、问答、打卡流程保存到后端数据库。
- 封面图、播报音频、揭秘卡封面和音频走真实文件上传。
- 多人编辑时打开文章会加编辑锁；保存时带版本号，避免覆盖别人刚保存的内容。
- 静态前端可以部署在 GitHub Pages/Vercel/Netlify，后端独立部署。
