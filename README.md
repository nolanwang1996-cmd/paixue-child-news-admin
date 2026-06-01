# 儿童新闻电台后台原型

这是一个可直接部署的静态后台原型，当前数据保存在浏览器 `localStorage` 中。

后台流程已经按儿童端新闻电台的 `KidsNews` 结构补齐：

- 频道：热点新闻台 `hot`、专题新闻台 `theme`
- 专题：体育、科技、天文、国际时政、生活、动物自然
- 故事播报：`intro`、`thought`、`keywords`、`paragraphs`
- 新闻揭秘：`revealText`、`decodeClues`
- 语音问答：`questions`，对应儿童端 `NewsAiService`
- 表达打卡：`prompt`
- 音频字幕：`storyAudio`、`cover`、`storySubtitleLines`、`storySubtitleCueEndMs`
- 发布导出：可导出接近 `app/src/main/assets/imported_kids_news.json` 的 JSON 结构

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
账号：editor
密码：demo123
```

## 部署方式

推荐任选一种：

- Vercel：适合快速生成公网预览地址。
- Netlify：适合静态站托管和后续表单/函数扩展。
- GitHub Pages：适合代码托管后自动发布。

当前项目已经包含 `vercel.json` 和 `netlify.toml`，可以直接作为静态站发布。

## 后续升级方向

- 把 `localStorage` 换成真实数据库。
- 接入对象存储，用于上传封面图和音频。
- 增加账号权限、审核记录和操作日志。
- 给小程序提供只读内容接口。
