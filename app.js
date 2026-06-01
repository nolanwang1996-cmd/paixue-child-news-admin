const topics = [
  { name: "体育", icon: "⚽", color: "#d7f6d7", desc: "比赛、训练和团队合作里的新闻。" },
  { name: "科技", icon: "🚀", color: "#d7f0ff", desc: "机器人、人工智能和新发明。" },
  { name: "天文", icon: "🪐", color: "#e7dcff", desc: "星星、月亮和宇宙探索。" },
  { name: "国际时政", icon: "🌍", color: "#d9e9ff", desc: "用孩子能懂的话看世界。" },
  { name: "生活", icon: "🏠", color: "#ffe9b8", desc: "天气、城市和身边发现。" },
  { name: "动物自然", icon: "🐼", color: "#d8f8e8", desc: "动物、森林和自然保护。" },
];

const statusMap = {
  draft: "草稿",
  rewrite: "改写中",
  audio: "音频字幕",
  review: "待审核",
  published: "已发布",
  offline: "已下架",
};

const pipelineSteps = [
  { key: "source", title: "原始新闻", hint: "记录来源、事实点和敏感风险" },
  { key: "story", title: "故事播报", hint: "鸢尾花姐姐口吻，形成 paragraphs" },
  { key: "decode", title: "新闻揭秘", hint: "故事词到现实词，形成 decodeClues/revealText" },
  { key: "qa", title: "语音问答", hint: "预设 questions，接入 NewsAiService" },
  { key: "express", title: "表达打卡", hint: "prompt 引导孩子说出自己的想法" },
  { key: "audio", title: "音频字幕", hint: "storyAudio、字幕行、cueEndMs" },
  { key: "publish", title: "审核发布", hint: "进入热点台或专题台" },
];

const seedArticles = [
  {
    id: "import-hot-swim",
    assetKey: "import-hot-swim",
    channel: "hot",
    topic: "国际时政",
    title: "七岁男孩的蓝色冒险",
    intro: "一个7岁男孩，在安全陪伴下游过了一条长长的海上道路，完成了一次勇敢的蓝色冒险。",
    thought: "很难的挑战，为什么要先准备好再出发？",
    keywords: ["7岁男孩", "蓝色长廊", "海上穿越"],
    paragraphs: [
      "小朋友们好呀，我是鸢尾花姐姐。今天要讲的，是一个7岁男孩和大海之间的真实故事。",
      "这个男孩特别喜欢游泳，心里藏着一个大胆的愿望：有一天，我要游过一条真正通向远方的海上道路。",
      "他不是随便出发的。大海里有浪，也有看不见的水流，所以身边一直有海上守护队陪伴着他。",
      "他游了很久，累了也没有慌张，只是告诉自己：我只要再向前一点点。",
      "真正的勇敢，是懂得准备，也懂得保护自己。你也会遇到自己的小挑战，认真准备，再坚持一点点。",
    ],
    revealText:
      "故事里的“蓝色长廊”，现实中叫作保克海峡。故事里的“海上穿越”，现实中叫作横渡。故事里的“七十圈的水上跑道”，说的是真实距离大约29公里。故事里的“海上守护队”，指的是专业安全陪护。小朋友不能自己到海里尝试远距离游泳。",
    decodeClues: [
      { key: "blue-corridor", word: "蓝色长廊", answer: "保克海峡", speechText: "保克海峡不是走路的长廊，而是夹在两片陆地之间的一条海水通道。" },
      { key: "crossing", word: "海上穿越", answer: "横渡", speechText: "横渡的意思，是从一片水域的一边出发，靠自己的力量穿过水面，到达另一边。" },
      { key: "distance", word: "七十圈的水上跑道", answer: "约29公里", speechText: "如果学校操场一圈是400米，29公里差不多要跑72圈半。" },
      { key: "safety", word: "海上守护队", answer: "安全陪护", speechText: "海里会有浪和水流，远距离游泳必须有专业人员一路保护。" },
      { key: "record", word: "最小勇士成绩单", answer: "世界纪录", speechText: "纪录就是被记下来的特别成绩，比如谁跑得最快，或谁在最小年龄完成了很难的事情。" },
    ],
    questions: ["我也能去游大海吗？", "不会游泳怎么办？", "他为什么能坚持？"],
    prompt: "说说你想挑战的一件事，怎样先做好安全准备。",
    storyAudio: "news_import_story_hot_swim_iris_sister.wav",
    cover: "news_import_cover_hot_swim.png",
    storySubtitleLines: ["小朋友们好呀，我是鸢尾花姐姐。", "今天要讲的，是一个7岁男孩和大海之间的真实故事。", "真正的勇敢，是懂得准备，也懂得保护自己。"],
    storySubtitleCueEndMs: [5535, 14500, 264896],
    host: "鸢尾花姐姐",
    duration: "04:25",
    status: "published",
    recommended: true,
    reviewNote: "来自儿童端 imported_kids_news.json 的结构化示例。",
    plays: 12840,
    updatedAt: "2026-06-01 10:20",
  },
  {
    id: "import-hot-snack",
    assetKey: "import-hot-snack",
    channel: "hot",
    topic: "生活",
    title: "小蚂蚁的香香问号",
    intro: "一包香香的小肉片让小蚂蚁倒下，也让大家开始留心包装背后的秘密小名单。",
    thought: "挑零食时，我们可以先看看包装背后的什么？",
    keywords: ["小蚂蚁", "香香小肉片", "秘密小名单"],
    paragraphs: [
      "小朋友们好呀，我是鸢尾花姐姐。今天的故事，要从几只寻找食物的小蚂蚁说起。",
      "一个小朋友打开了一包香香小肉片，不小心有几小块掉到了地上。没过多久，小蚂蚁发现了它们。",
      "奇怪的事情发生了：这些小蚂蚁竟然陆续倒了下来。于是大人们拿起袋子，翻到背面，找到了一张秘密小名单。",
      "这段新闻提醒我们：买零食时，不光要看包装漂不漂亮，也可以和爸爸妈妈一起看看配料表。",
    ],
    revealText:
      "故事里的“秘密小名单”，现实中叫作配料表。故事里的“香气小喇叭”和“小小保鲜员”对应食品添加剂名称。蚂蚁倒下不能直接说明小朋友吃了同样零食就一定有危险，更重要的是选择正规食品，不长期大量吃味道特别重的零食。",
    decodeClues: [
      { key: "island", word: "椰风小岛", answer: "海南", speechText: "海南是一座气候温暖、能看到很多椰子树的海岛省份。" },
      { key: "meat-slice", word: "香香小肉片", answer: "手撕肉干零食", speechText: "新闻中的小朋友吃的是一种肉干零食，碎渣吸引了蚂蚁。" },
      { key: "ingredients", word: "秘密小名单", answer: "配料表", speechText: "配料表通常印在包装背面，会写出这份食物使用了哪些原料和成分。" },
    ],
    questions: ["秘密小名单是什么？", "陌生名字都是坏东西吗？", "怎样挑选零食？"],
    prompt: "说说下一次挑零食时，你准备和爸爸妈妈一起看看什么。",
    storyAudio: "news_import_story_hot_snack_iris_sister.wav",
    cover: "news_import_cover_hot_snack.png",
    storySubtitleLines: ["今天的故事，要从几只寻找食物的小蚂蚁说起。", "买零食时，可以和爸爸妈妈一起看看配料表。"],
    storySubtitleCueEndMs: [9252, 121421],
    host: "鸢尾花姐姐",
    duration: "03:10",
    status: "review",
    recommended: false,
    reviewNote: "审核重点：食品安全表述不要绝对化。",
    plays: 0,
    updatedAt: "2026-06-01 10:18",
  },
  {
    id: "middle-east-2026",
    assetKey: "middle-east-2026",
    channel: "hot",
    topic: "国际时政",
    title: "阳光沙丘的风暴与和平",
    intro: "中东冲突牵动能源、航运和许多普通家庭，停火与谈判正在艰难推进。",
    thought: "远方发生的冲突，为什么也可能影响我们身边的生活？",
    keywords: ["和平", "安全", "世界"],
    paragraphs: [
      "我们的地球村呀，是一个超级大花园。今天，鸢尾花姐姐要带大家飞到地球村里一个叫阳光沙丘的地方。",
      "在那里，小刺猬、大狮子和大老鹰因为安全、能源和信任发生了大争吵。",
      "当大个子们打起架来，最倒霉的是住在沙丘里的其他小动物。",
      "故事想告诉大家：遇到分歧时，用拳头和石头解决不了问题，坐下来倾听和沟通才更了不起。",
    ],
    revealText: "故事里的阳光沙丘、水上走廊、黑糖浆，现实中分别对应中东地区、霍尔木兹海峡和石油运输。",
    decodeClues: [
      { key: "sun-dune", word: "阳光沙丘", answer: "中东地区", speechText: "阳光沙丘其实指的是中东地区。这里有大片沙漠，也连接着重要的能源和航运路线。" },
      { key: "water-corridor", word: "水上走廊", answer: "霍尔木兹海峡", speechText: "水上走廊的真实名字叫霍尔木兹海峡。许多装着石油的船会从这条海路经过。" },
      { key: "black-syrup", word: "黑糖浆", answer: "石油", speechText: "黑糖浆其实就是石油。运输发生变化时，也可能影响大家的生活成本。" },
      { key: "hedgehog", word: "小刺猬", answer: "以色列", speechText: "故事里的小刺猬代表以色列。" },
      { key: "lion", word: "大狮子", answer: "伊朗", speechText: "大狮子代表伊朗。" },
      { key: "eagle", word: "大老鹰", answer: "美国", speechText: "大老鹰代表美国。" },
    ],
    questions: ["远方打架，东西为什么会变贵？", "害怕别人，可以先打他吗？", "大家为什么要坐下来商量？"],
    prompt: "说说你觉得遇到矛盾时，怎样才能让伤害少一点。",
    storyAudio: "news_sun_dune_sweet_sister.wav",
    cover: "news_story_middle_east_cover.png",
    storySubtitleLines: ["我们的地球村呀，是一个超级大花园。", "当大个子们打起架来，最倒霉的是住在沙丘里的其他小动物。", "坐下来倾听和沟通，才是很了不起的魔法。"],
    storySubtitleCueEndMs: [524, 122353, 410700],
    host: "甜甜姐姐",
    duration: "06:50",
    status: "audio",
    recommended: false,
    reviewNote: "需要复核国际时政风险提示和字幕 cue。",
    plays: 0,
    updatedAt: "2026-06-01 10:16",
  },
];

const state = {
  articles: [],
  page: "dashboard",
  search: "",
  statusFilter: "all",
  categoryFilter: "all",
};

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => Array.from(document.querySelectorAll(selector));
const escapeHtml = (value) =>
  String(value ?? "").replace(/[&<>"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;" })[char]);

function splitLines(value) {
  return String(value || "")
    .split(/\n+/)
    .map((item) => item.trim())
    .filter(Boolean);
}

function splitCsv(value) {
  return String(value || "")
    .split(/[，,\n]/)
    .map((item) => item.trim())
    .filter(Boolean);
}

function parseCueMs(value) {
  return String(value || "")
    .split(/[，,\s]+/)
    .map((item) => Number.parseInt(item, 10))
    .filter((item) => Number.isFinite(item));
}

function decodeCluesToText(clues) {
  return (clues || []).map((clue) => `${clue.word} = ${clue.answer} | ${clue.speechText || ""}`).join("\n");
}

function parseDecodeClues(value, articleId) {
  return splitLines(value).map((line, index) => {
    const [left, speechText = ""] = line.split("|").map((part) => part.trim());
    const [word, answer = ""] = left.split("=").map((part) => part.trim());
    return {
      key: `${articleId || "news"}-${index + 1}`,
      word: word || `线索${index + 1}`,
      answer: answer || "待补充",
      speechText,
    };
  });
}

function nowText() {
  const date = new Date();
  const pad = (value) => String(value).padStart(2, "0");
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())} ${pad(date.getHours())}:${pad(date.getMinutes())}`;
}

function formatNumber(value) {
  return new Intl.NumberFormat("zh-CN").format(value);
}

function statusBadge(status) {
  return `<span class="status-pill status-${status}">${statusMap[status] || status}</span>`;
}

function topicIcon(topicName) {
  return topics.find((topic) => topic.name === topicName)?.icon || "📰";
}

function channelName(channel) {
  return channel === "theme" ? "专题台" : "热点台";
}

function completion(article) {
  const checks = [
    Boolean(article.title && article.intro),
    (article.paragraphs || []).length > 0,
    Boolean(article.revealText),
    (article.decodeClues || []).length >= 3,
    (article.questions || []).length >= 3,
    Boolean(article.prompt),
    Boolean(article.storyAudio),
    (article.storySubtitleLines || []).length > 0,
  ];
  return Math.round((checks.filter(Boolean).length / checks.length) * 100);
}

function readyForChild(article) {
  return completion(article) >= 88 && ["review", "published"].includes(article.status);
}

function loadArticles() {
  const stored = localStorage.getItem("kids-news-admin-v2");
  state.articles = stored ? JSON.parse(stored) : seedArticles;
  persist();
}

function persist() {
  localStorage.setItem("kids-news-admin-v2", JSON.stringify(state.articles));
}

function filteredArticles() {
  return state.articles.filter((article) => {
    const term = state.search.trim().toLowerCase();
    const haystack = [
      article.title,
      article.intro,
      article.thought,
      article.topic,
      article.channel,
      ...(article.keywords || []),
    ].join(" ").toLowerCase();
    return (
      (!term || haystack.includes(term)) &&
      (state.statusFilter === "all" || article.status === state.statusFilter) &&
      (state.categoryFilter === "all" || article.topic === state.categoryFilter)
    );
  });
}

function renderAll() {
  renderMetrics();
  renderRecent();
  renderTables();
  renderPipeline();
  renderDecode();
  renderQa();
  renderAudio();
  renderReview();
  renderHomepage();
  renderSettings();
}

function renderMetrics() {
  $("#publishedCount").textContent = state.articles.filter((item) => item.status === "published").length;
  $("#reviewCount").textContent = state.articles.filter((item) => item.status === "review").length;
  $("#readyCount").textContent = state.articles.filter(readyForChild).length;
  $("#playCount").textContent = formatNumber(state.articles.reduce((sum, item) => sum + Number(item.plays || 0), 0));
}

function renderRecent() {
  $("#recentList").innerHTML = [...state.articles]
    .sort((a, b) => b.updatedAt.localeCompare(a.updatedAt))
    .slice(0, 5)
    .map((article) => `
      <article class="compact-item">
        <div>
          <strong>${topicIcon(article.topic)} ${escapeHtml(article.title)}</strong>
          <span class="muted">${channelName(article.channel)} · ${escapeHtml(article.topic)} · 完整度 ${completion(article)}%</span>
        </div>
        ${statusBadge(article.status)}
      </article>
    `)
    .join("");
}

function renderTables() {
  const rows = filteredArticles()
    .map((article) => `
      <tr>
        <td class="row-title">
          <strong>${topicIcon(article.topic)} ${escapeHtml(article.title)}</strong>
          <span class="muted">${escapeHtml(article.intro)}</span>
        </td>
        <td>${channelName(article.channel)}</td>
        <td>${escapeHtml(article.topic)}</td>
        <td>${statusBadge(article.status)}</td>
        <td><div class="progress-line"><span style="width:${completion(article)}%"></span></div><small>${completion(article)}%</small></td>
        <td>${escapeHtml(article.updatedAt)}</td>
        <td>
          <div class="row-actions">
            <button class="text-button" data-action="edit" data-id="${article.id}">编辑</button>
            <button class="text-button" data-action="copy" data-id="${article.id}">复制</button>
            <button class="text-button danger" data-action="delete" data-id="${article.id}">删除</button>
          </div>
        </td>
      </tr>
    `)
    .join("");
  $("#newsRows").innerHTML = rows || `<tr><td colspan="7" class="muted">没有找到匹配内容。</td></tr>`;
}

function renderPipeline() {
  $("#pipelineBoard").innerHTML = pipelineSteps
    .map((step) => {
      const count = state.articles.filter((article) => stepReady(article, step.key)).length;
      return `
        <article class="pipeline-card">
          <span>${count}/${state.articles.length}</span>
          <strong>${step.title}</strong>
          <p>${step.hint}</p>
        </article>
      `;
    })
    .join("");
}

function stepReady(article, key) {
  const checks = {
    source: Boolean(article.assetKey && article.topic),
    story: (article.paragraphs || []).length > 0,
    decode: Boolean(article.revealText) && (article.decodeClues || []).length >= 3,
    qa: (article.questions || []).length >= 3,
    express: Boolean(article.prompt),
    audio: Boolean(article.storyAudio) && (article.storySubtitleLines || []).length > 0,
    publish: article.status === "published",
  };
  return checks[key];
}

function renderDecode() {
  $("#decodeBoard").innerHTML = state.articles
    .map((article) => `
      <article class="review-card">
        <strong>${escapeHtml(article.title)}</strong>
        <span class="muted">${escapeHtml(article.topic)} · ${article.decodeClues?.length || 0} 条线索</span>
        <p>${escapeHtml(article.revealText || "还没有填写新闻揭秘文案。")}</p>
        <div class="clue-list">${(article.decodeClues || []).map((clue) => `<span>${escapeHtml(clue.word)} → ${escapeHtml(clue.answer)}</span>`).join("")}</div>
        <div class="review-actions"><button class="secondary-button" data-action="edit" data-id="${article.id}">编辑线索</button></div>
      </article>
    `)
    .join("");
}

function renderQa() {
  $("#qaBoard").innerHTML = state.articles
    .map((article) => `
      <article class="review-card">
        <strong>${escapeHtml(article.title)}</strong>
        <span class="muted">NewsAiService conversation_id: news_radio_${escapeHtml(article.id)}</span>
        <p>${escapeHtml(article.prompt || "还没有表达打卡 prompt。")}</p>
        <div class="clue-list">${(article.questions || []).map((question) => `<span>${escapeHtml(question)}</span>`).join("")}</div>
        <div class="review-actions"><button class="secondary-button" data-action="edit" data-id="${article.id}">编辑问答</button></div>
      </article>
    `)
    .join("");
}

function renderAudio() {
  $("#audioBoard").innerHTML = state.articles
    .map((article) => `
      <article class="review-card">
        <strong>${escapeHtml(article.title)}</strong>
        <span class="muted">${escapeHtml(article.host || "鸢尾花姐姐")} · ${escapeHtml(article.duration || "未填时长")}</span>
        <p>故事音频：${escapeHtml(article.storyAudio || "未配置")}<br>封面：${escapeHtml(article.cover || "未配置")}</p>
        <div class="clue-list">
          <span>字幕 ${article.storySubtitleLines?.length || 0} 行</span>
          <span>cueEndMs ${article.storySubtitleCueEndMs?.length || 0} 个</span>
        </div>
        <div class="review-actions"><button class="secondary-button" data-action="edit" data-id="${article.id}">编辑音频字幕</button></div>
      </article>
    `)
    .join("");
}

function renderReview() {
  const queue = state.articles.filter((article) => article.status === "review");
  $("#reviewQueue").innerHTML =
    queue.map((article) => `
      <article class="review-card">
        <strong>${escapeHtml(article.title)}</strong>
        <span class="muted">${channelName(article.channel)} · ${escapeHtml(article.topic)} · 完整度 ${completion(article)}%</span>
        <p>${escapeHtml(article.intro)}</p>
        <div class="review-actions">
          <button class="primary-button" data-action="publish" data-id="${article.id}">通过发布</button>
          <button class="secondary-button" data-action="back-draft" data-id="${article.id}">退回改写</button>
        </div>
      </article>
    `).join("") || `<article class="review-card"><strong>暂无待审核内容</strong><p>音频字幕完成后提交审核。</p></article>`;
}

function renderHomepage() {
  const published = state.articles.filter((article) => article.status === "published");
  $("#homepageList").innerHTML = published
    .map((article) => `
      <article class="compact-item">
        <div>
          <strong>${topicIcon(article.topic)} ${escapeHtml(article.title)}</strong>
          <span class="muted">${channelName(article.channel)} · ${escapeHtml(article.topic)} · ${escapeHtml(article.duration || "未填时长")}</span>
        </div>
        <label class="checkbox-label">
          <input type="checkbox" data-action="toggle-recommended" data-id="${article.id}" ${article.recommended ? "checked" : ""} />
          推荐
        </label>
      </article>
    `)
    .join("") || `<article class="compact-item"><strong>暂无已发布内容</strong><span class="muted">审核通过后会显示在这里。</span></article>`;

  const recommended = published.filter((article) => article.recommended);
  $("#miniPreview").innerHTML =
    recommended.map((article) => `
      <article class="mini-card">
        <strong>${topicIcon(article.topic)} ${escapeHtml(article.title)}</strong>
        <p class="muted">${escapeHtml(article.intro)}</p>
        <div class="mini-meta"><span>${channelName(article.channel)}</span><span>${escapeHtml(article.duration || "待上传")}</span></div>
      </article>
    `).join("") || `<article class="mini-card"><strong>今日推荐待配置</strong><p class="muted">已发布并勾选推荐后，会进入儿童端预览。</p></article>`;
}

function renderSettings() {
  $("#categoryTags").innerHTML = topics.map((topic) => `<span>${topic.icon} ${topic.name}</span>`).join("");
  $("#voiceTags").innerHTML = ["鸢尾花姐姐", "甜甜姐姐", "cosyvoice-v3-flash", "longyingxiao_v3", "speech_rate 0.82"].map((tag) => `<span>${tag}</span>`).join("");
}

function switchPage(page) {
  state.page = page;
  $$(".nav-item").forEach((item) => item.classList.toggle("is-active", item.dataset.page === page));
  $$("[data-page-panel]").forEach((panel) => panel.classList.toggle("is-active", panel.dataset.pagePanel === page));
  $("#pageTitle").textContent = $(".nav-item.is-active").textContent;
}

function fillControls() {
  const topicOptions = topics.map((topic) => `<option value="${topic.name}">${topic.icon} ${topic.name}</option>`).join("");
  $('[name="topic"]').innerHTML = topicOptions;
  $("#categoryFilter").innerHTML = `<option value="all">全部专题</option>${topicOptions}`;
}

function openEditor(article = null) {
  const form = $("#articleForm");
  form.reset();
  const nextId = article?.id || `news-${Date.now()}`;
  $("#dialogTitle").textContent = article ? "编辑新闻" : "新建新闻";
  form.elements.id.value = nextId;
  form.elements.assetKey.value = article?.assetKey || nextId;
  form.elements.channel.value = article?.channel || "hot";
  form.elements.topic.value = article?.topic || "生活";
  form.elements.status.value = article?.status || "draft";
  form.elements.title.value = article?.title || "";
  form.elements.intro.value = article?.intro || "";
  form.elements.thought.value = article?.thought || "";
  form.elements.keywords.value = (article?.keywords || []).join("，");
  form.elements.paragraphs.value = (article?.paragraphs || []).join("\n");
  form.elements.revealText.value = article?.revealText || "";
  form.elements.decodeClues.value = decodeCluesToText(article?.decodeClues);
  form.elements.questions.value = (article?.questions || []).join("\n");
  form.elements.prompt.value = article?.prompt || "";
  form.elements.storyAudio.value = article?.storyAudio || "";
  form.elements.cover.value = article?.cover || "";
  form.elements.storySubtitleLines.value = (article?.storySubtitleLines || []).join("\n");
  form.elements.storySubtitleCueEndMs.value = (article?.storySubtitleCueEndMs || []).join(",");
  form.elements.host.value = article?.host || "鸢尾花姐姐";
  form.elements.duration.value = article?.duration || "";
  form.elements.recommended.checked = Boolean(article?.recommended);
  form.elements.reviewNote.value = article?.reviewNote || "";
  $("#editorDialog").showModal();
}

function formToArticle(statusOverride) {
  const form = $("#articleForm");
  const id = form.elements.id.value || `news-${Date.now()}`;
  const existing = state.articles.find((article) => article.id === id);
  return {
    id,
    assetKey: form.elements.assetKey.value.trim() || id,
    channel: form.elements.channel.value,
    topic: form.elements.topic.value,
    title: form.elements.title.value.trim(),
    intro: form.elements.intro.value.trim(),
    thought: form.elements.thought.value.trim(),
    keywords: splitCsv(form.elements.keywords.value),
    paragraphs: splitLines(form.elements.paragraphs.value),
    revealText: form.elements.revealText.value.trim(),
    decodeClues: parseDecodeClues(form.elements.decodeClues.value, id),
    questions: splitLines(form.elements.questions.value),
    prompt: form.elements.prompt.value.trim(),
    storyAudio: form.elements.storyAudio.value.trim(),
    cover: form.elements.cover.value.trim(),
    storySubtitleLines: splitLines(form.elements.storySubtitleLines.value),
    storySubtitleCueEndMs: parseCueMs(form.elements.storySubtitleCueEndMs.value),
    host: form.elements.host.value.trim(),
    duration: form.elements.duration.value.trim(),
    status: statusOverride || form.elements.status.value,
    recommended: form.elements.recommended.checked,
    reviewNote: form.elements.reviewNote.value.trim(),
    plays: existing?.plays || 0,
    updatedAt: nowText(),
  };
}

function saveArticle(statusOverride = null) {
  const article = formToArticle(statusOverride);
  const index = state.articles.findIndex((item) => item.id === article.id);
  if (index >= 0) state.articles[index] = article;
  else state.articles.unshift(article);
  persist();
  renderAll();
  $("#editorDialog").close();
}

function updateArticle(id, patch) {
  state.articles = state.articles.map((article) => article.id === id ? { ...article, ...patch, updatedAt: nowText() } : article);
  persist();
  renderAll();
}

function copyArticle(id) {
  const source = state.articles.find((article) => article.id === id);
  if (!source) return;
  const nextId = `${source.id}-copy-${Date.now()}`;
  state.articles.unshift({ ...source, id: nextId, assetKey: nextId, title: `${source.title} 副本`, status: "draft", recommended: false, plays: 0, updatedAt: nowText() });
  persist();
  renderAll();
}

function deleteArticle(id) {
  if (!confirm("确定删除这条儿童新闻吗？")) return;
  state.articles = state.articles.filter((article) => article.id !== id);
  persist();
  renderAll();
}

function exportData() {
  const payload = state.articles.map((article) => ({
    id: article.id,
    assetKey: article.assetKey,
    channel: article.channel,
    topic: article.topic,
    title: article.title,
    intro: article.intro,
    thought: article.thought,
    keywords: article.keywords,
    paragraphs: article.paragraphs,
    revealText: article.revealText,
    decodes: (article.decodeClues || []).map((clue) => [`故事里：${clue.word}`, `现实中：${clue.answer}`]),
    questions: article.questions,
    prompt: article.prompt,
    decodeClues: article.decodeClues,
    storySubtitleLines: article.storySubtitleLines,
    storySubtitleCueEndMs: article.storySubtitleCueEndMs,
  }));
  const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `imported_kids_news_${Date.now()}.json`;
  link.click();
  URL.revokeObjectURL(url);
}

function bindEvents() {
  $("#loginForm").addEventListener("submit", (event) => {
    event.preventDefault();
    $('[data-view="login"]').classList.add("is-hidden");
    $('[data-view="workspace"]').classList.remove("is-hidden");
  });
  $$(".nav-item").forEach((item) => item.addEventListener("click", () => switchPage(item.dataset.page)));
  $("#newArticle").addEventListener("click", () => openEditor());
  $("#closeDialog").addEventListener("click", () => $("#editorDialog").close());
  $("#articleForm").addEventListener("submit", (event) => {
    event.preventDefault();
    saveArticle();
  });
  $("#saveDraft").addEventListener("click", () => saveArticle("draft"));
  $("#searchInput").addEventListener("input", (event) => {
    state.search = event.target.value;
    renderTables();
  });
  $("#statusFilter").addEventListener("change", (event) => {
    state.statusFilter = event.target.value;
    renderTables();
  });
  $("#categoryFilter").addEventListener("change", (event) => {
    state.categoryFilter = event.target.value;
    renderTables();
  });
  $("#exportData").addEventListener("click", exportData);
  $("#resetDemo").addEventListener("click", () => {
    localStorage.removeItem("kids-news-admin-v2");
    loadArticles();
    renderAll();
  });
  document.addEventListener("click", (event) => {
    const actionTarget = event.target.closest("[data-action]");
    if (!actionTarget) return;
    const { action, id } = actionTarget.dataset;
    const article = state.articles.find((item) => item.id === id);
    if (action === "edit") openEditor(article);
    if (action === "copy") copyArticle(id);
    if (action === "delete") deleteArticle(id);
    if (action === "publish") updateArticle(id, { status: "published", recommended: true, reviewNote: "审核通过，可进入儿童端新闻电台。" });
    if (action === "back-draft") updateArticle(id, { status: "rewrite", reviewNote: "退回改写，请补充故事/揭秘/问答。" });
  });
  document.addEventListener("change", (event) => {
    const target = event.target;
    if (target.dataset.action === "toggle-recommended") {
      updateArticle(target.dataset.id, { recommended: target.checked });
    }
  });
}

fillControls();
loadArticles();
bindEvents();
renderAll();
