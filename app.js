const topics = [
  { name: "体育", icon: "⚽", color: "#d7f6d7", desc: "比赛、训练和团队合作里的新闻。" },
  { name: "科技", icon: "🚀", color: "#d7f0ff", desc: "机器人、人工智能和新发明。" },
  { name: "天文", icon: "🪐", color: "#e7dcff", desc: "星星、月亮和宇宙探索。" },
  { name: "国际时政", icon: "🌍", color: "#d9e9ff", desc: "用孩子能懂的话看世界。" },
  { name: "生活", icon: "🏠", color: "#ffe9b8", desc: "天气、城市和身边发现。" },
  { name: "动物自然", icon: "🐼", color: "#d8f8e8", desc: "动物、森林和自然保护。" },
];

const statusMap = {
  source: "原始入库",
  rewrite: "改写播报",
  decode: "揭秘制作",
  qa: "问答配置",
  checkin: "打卡配置",
  review: "待审核",
  published: "已发布",
  offline: "已下架",
};

const pipelineSteps = [
  { key: "source", title: "原始稿件", hint: "原始新闻稿件/链接、题目、关键词、频道、专题、封面。仅后台可见。" },
  { key: "rewrite", title: "改写播报", hint: "上传儿童化改写稿，并绑定对应语音播报音频。" },
  { key: "decode", title: "揭秘卡片", hint: "一张卡包含封面、故事词到现实词、解释文案和音频。" },
  { key: "qa", title: "问答环节", hint: "固定问题，也支持录音转文字后进入实时大模型问答。" },
  { key: "checkin", title: "打卡界面", hint: "孩子完成表达打卡后进入完成页。" },
  { key: "publish", title: "发布", hint: "审核通过后进入儿童端新闻电台。" },
];

const seedArticles = [
  {
    id: "import-hot-swim",
    sourceTitle: "7岁男孩横渡保克海峡创纪录",
    sourceUrl: "https://example.com/news/paik-strait-record",
    sourceText: "一名7岁男孩在专业安全团队陪同下完成保克海峡横渡，成为该路线最年轻完成者。",
    keywords: ["7岁男孩", "蓝色长廊", "海上穿越"],
    channel: "hot",
    topic: "国际时政",
    cover: "news_import_cover_hot_swim.png",
    title: "七岁男孩的蓝色冒险",
    intro: "一个7岁男孩，在安全陪伴下游过了一条长长的海上道路，完成了一次勇敢的蓝色冒险。",
    rewrittenText:
      "小朋友们好呀，我是鸢尾花姐姐。今天要讲的，是一个7岁男孩和大海之间的真实故事。\n\n他特别喜欢游泳，心里藏着一个愿望：有一天，我要游过一条真正通向远方的海上道路。\n\n他不是随便出发的。大海里有浪，也有看不见的水流，所以身边一直有海上守护队陪伴着他。\n\n真正的勇敢，是懂得准备，也懂得保护自己。",
    storyAudio: "news_import_story_hot_swim_iris_sister.wav",
    host: "鸢尾花姐姐",
    duration: "04:25",
    revealCards: [
      {
        cover: "news_import_cover_hot_swim.png",
        from: "蓝色长廊",
        to: "保克海峡",
        explanation: "故事里的蓝色长廊，现实中叫作保克海峡。它不是走路的长廊，而是夹在两片陆地之间的一条海水通道。",
        audio: "news_import_reveal_hot_swim_blue_corridor_iris_sister.wav",
      },
      {
        cover: "news_import_cover_hot_swim.png",
        from: "海上穿越",
        to: "横渡",
        explanation: "横渡的意思，是从一片水域的一边出发，靠自己的力量穿过水面，到达另一边。",
        audio: "news_import_reveal_hot_swim_crossing_iris_sister.wav",
      },
      {
        cover: "news_import_cover_hot_swim.png",
        from: "七十圈的水上跑道",
        to: "约29公里",
        explanation: "如果学校操场一圈是400米，29公里差不多要跑72圈半。",
        audio: "news_import_reveal_hot_swim_distance_iris_sister.wav",
      },
    ],
    fixedQuestions: ["我也能去游大海吗？", "不会游泳怎么办？", "他为什么能坚持？"],
    asrEnabled: true,
    llmEnabled: true,
    qaPrompt: "请基于这条儿童新闻，用孩子能懂的话回答。只使用中文，语气像鸢尾花姐姐一样温柔、清楚。",
    checkinPrompt: "说说你想挑战的一件事，怎样先做好安全准备。",
    checkinFeedback: "你说得真认真，勇敢也要记得保护自己。",
    status: "published",
    recommended: true,
    reviewNote: "完整流程示例，可进入儿童端。",
    updatedAt: "2026-06-01 10:40",
  },
  {
    id: "import-hot-snack",
    sourceTitle: "小朋友零食碎屑引发蚂蚁死亡讨论",
    sourceUrl: "https://example.com/news/snack-ants",
    sourceText: "一段蚂蚁接触零食碎屑后死亡的视频引发关注，讨论集中在食品配料表和添加剂。",
    keywords: ["小蚂蚁", "香香小肉片", "配料表"],
    channel: "hot",
    topic: "生活",
    cover: "news_import_cover_hot_snack.png",
    title: "小蚂蚁的香香问号",
    intro: "一包香香的小肉片让小蚂蚁倒下，也让大家开始留心包装背后的秘密小名单。",
    rewrittenText:
      "小朋友们好呀，我是鸢尾花姐姐。今天的故事，要从几只寻找食物的小蚂蚁说起。\n\n一包香香小肉片掉了几块碎屑，几只小蚂蚁发现后围了上来。过了一会儿，奇怪的事情发生了。\n\n这段新闻提醒我们：买零食时，可以和爸爸妈妈一起看看包装背后的配料表。",
    storyAudio: "news_import_story_hot_snack_iris_sister.wav",
    host: "鸢尾花姐姐",
    duration: "03:10",
    revealCards: [
      {
        cover: "news_import_cover_hot_snack.png",
        from: "秘密小名单",
        to: "配料表",
        explanation: "配料表通常印在食品包装背面，会写出这份食物使用了哪些原料和成分。",
        audio: "news_import_reveal_hot_snack_ingredients_iris_sister.wav",
      },
      {
        cover: "news_import_cover_hot_snack.png",
        from: "香香小肉片",
        to: "手撕肉干零食",
        explanation: "新闻中的小朋友吃的是一种肉干零食，掉在地上的碎渣吸引了蚂蚁。",
        audio: "news_import_reveal_hot_snack_meat_slice_iris_sister.wav",
      },
    ],
    fixedQuestions: ["秘密小名单是什么？", "陌生名字都是坏东西吗？", "怎样挑选零食？"],
    asrEnabled: true,
    llmEnabled: true,
    qaPrompt: "回答时避免绝对化食品安全判断，引导孩子和家长一起查看正规标签。",
    checkinPrompt: "说说下一次挑零食时，你准备和爸爸妈妈一起看看什么。",
    checkinFeedback: "你已经像小小食物侦探一样开始观察啦。",
    status: "review",
    recommended: false,
    reviewNote: "审核重点：食品安全表述不要绝对化。",
    updatedAt: "2026-06-01 10:38",
  },
  {
    id: "middle-east-2026",
    sourceTitle: "中东局势影响能源与航运",
    sourceUrl: "https://example.com/news/middle-east-energy",
    sourceText: "中东冲突牵动能源、航运和许多普通家庭，停火与谈判正在艰难推进。",
    keywords: ["和平", "安全", "世界"],
    channel: "hot",
    topic: "国际时政",
    cover: "news_story_middle_east_cover.png",
    title: "阳光沙丘的风暴与和平",
    intro: "中东冲突牵动能源、航运和许多普通家庭，停火与谈判正在艰难推进。",
    rewrittenText:
      "我们的地球村呀，是一个超级大花园。今天，鸢尾花姐姐要带大家飞到地球村里一个叫阳光沙丘的地方。\n\n在那里，小刺猬、大狮子和大老鹰因为安全、能源和信任发生了大争吵。\n\n故事想告诉大家：遇到分歧时，用拳头和石头解决不了问题，坐下来倾听和沟通才更了不起。",
    storyAudio: "news_sun_dune_sweet_sister.wav",
    host: "甜甜姐姐",
    duration: "06:50",
    revealCards: [
      {
        cover: "news_story_middle_east_cover.png",
        from: "阳光沙丘",
        to: "中东地区",
        explanation: "阳光沙丘其实指的是中东地区。这里有大片沙漠，也连接着重要的能源和航运路线。",
        audio: "news_decode_sun_dune_sweet_sister.wav",
      },
      {
        cover: "news_story_middle_east_cover.png",
        from: "黑糖浆",
        to: "石油",
        explanation: "黑糖浆其实就是石油。运输发生变化时，也可能影响大家的生活成本。",
        audio: "news_decode_black_syrup_sweet_sister.wav",
      },
    ],
    fixedQuestions: ["远方打架，东西为什么会变贵？", "害怕别人，可以先打他吗？", "大家为什么要坐下来商量？"],
    asrEnabled: true,
    llmEnabled: true,
    qaPrompt: "回答国际时政问题时要避免刺激性表达，强调安全、沟通、和平和普通人的感受。",
    checkinPrompt: "说说你觉得遇到矛盾时，怎样才能让伤害少一点。",
    checkinFeedback: "你愿意认真想一想和平，这很珍贵。",
    status: "decode",
    recommended: false,
    reviewNote: "还需要补齐更多揭秘卡片和问答录音。",
    updatedAt: "2026-06-01 10:36",
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
  return String(value || "").split(/\n+/).map((item) => item.trim()).filter(Boolean);
}

function splitCsv(value) {
  return String(value || "").split(/[，,\n]/).map((item) => item.trim()).filter(Boolean);
}

function boolText(value) {
  return value === true || String(value || "").trim() === "" || ["开", "开启", "true", "1", "yes"].includes(String(value).trim().toLowerCase());
}

function revealCardsToText(cards) {
  return (cards || []).map((card) => `${card.cover || ""} | ${card.from || ""} -> ${card.to || ""} | ${card.explanation || ""} | ${card.audio || ""}`).join("\n");
}

function parseRevealCards(value) {
  return splitLines(value).map((line, index) => {
    const [cover = "", pair = "", explanation = "", audio = ""] = line.split("|").map((part) => part.trim());
    const [from = "", to = ""] = pair.split(/->|➡️|→/).map((part) => part.trim());
    return {
      id: `reveal-${index + 1}`,
      cover,
      from: from || `故事词${index + 1}`,
      to: to || "现实词待补充",
      explanation,
      audio,
    };
  });
}

function paragraphs(article) {
  return splitLines(article.rewrittenText);
}

function nowText() {
  const date = new Date();
  const pad = (value) => String(value).padStart(2, "0");
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())} ${pad(date.getHours())}:${pad(date.getMinutes())}`;
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
    Boolean(article.sourceTitle && (article.sourceText || article.sourceUrl)),
    Boolean(article.title && article.rewrittenText && article.storyAudio),
    (article.revealCards || []).length > 0 && (article.revealCards || []).every((card) => card.cover && card.from && card.to && card.explanation && card.audio),
    (article.fixedQuestions || []).length > 0 && article.asrEnabled && article.llmEnabled,
    Boolean(article.checkinPrompt),
  ];
  return Math.round((checks.filter(Boolean).length / checks.length) * 100);
}

function stageReady(article, key) {
  const checks = {
    source: Boolean(article.sourceTitle && (article.sourceText || article.sourceUrl) && article.cover && article.topic),
    rewrite: Boolean(article.title && article.rewrittenText && article.storyAudio),
    decode: (article.revealCards || []).length > 0 && (article.revealCards || []).every((card) => card.cover && card.from && card.to && card.explanation && card.audio),
    qa: (article.fixedQuestions || []).length > 0 && article.asrEnabled && article.llmEnabled,
    checkin: Boolean(article.checkinPrompt),
    publish: article.status === "published",
  };
  return checks[key];
}

function readyForReview(article) {
  return completion(article) >= 100;
}

function loadArticles() {
  const stored = localStorage.getItem("kids-news-admin-v3");
  state.articles = stored ? JSON.parse(stored) : seedArticles;
  persist();
}

function persist() {
  localStorage.setItem("kids-news-admin-v3", JSON.stringify(state.articles));
}

function filteredArticles() {
  return state.articles.filter((article) => {
    const term = state.search.trim().toLowerCase();
    const haystack = [article.sourceTitle, article.title, article.topic, article.channel, ...(article.keywords || [])].join(" ").toLowerCase();
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
  renderSourceRows();
  renderRewrite();
  renderDecode();
  renderQa();
  renderCheckin();
  renderPreview();
  renderSettings();
}

function renderMetrics() {
  $("#sourceCount").textContent = state.articles.filter((item) => stageReady(item, "source")).length;
  $("#reviewCount").textContent = state.articles.filter((item) => item.status === "review").length;
  $("#readyCount").textContent = state.articles.filter(readyForReview).length;
  $("#publishedCount").textContent = state.articles.filter((item) => item.status === "published").length;
}

function renderRecent() {
  $("#recentList").innerHTML = [...state.articles]
    .sort((a, b) => b.updatedAt.localeCompare(a.updatedAt))
    .slice(0, 5)
    .map((article) => `
      <article class="compact-item">
        <div>
          <strong>${topicIcon(article.topic)} ${escapeHtml(article.sourceTitle)}</strong>
          <span class="muted">${channelName(article.channel)} · ${escapeHtml(article.topic)} · 完整度 ${completion(article)}%</span>
        </div>
        ${statusBadge(article.status)}
      </article>
    `)
    .join("");
}

function renderSourceRows() {
  const rows = filteredArticles().map((article) => `
    <tr>
      <td class="row-title">
        <strong>${escapeHtml(article.sourceTitle)}</strong>
        <span class="muted">${escapeHtml(article.sourceUrl || "未填原始链接")}</span>
      </td>
      <td>${channelName(article.channel)}</td>
      <td>${topicIcon(article.topic)} ${escapeHtml(article.topic)}</td>
      <td>${(article.keywords || []).map((item) => `<span class="mini-tag">${escapeHtml(item)}</span>`).join("")}</td>
      <td>${statusBadge(article.status)}</td>
      <td><div class="progress-line"><span style="width:${completion(article)}%"></span></div><small>${completion(article)}%</small></td>
      <td>
        <div class="row-actions">
          <button class="text-button" data-action="edit" data-id="${article.id}">编辑</button>
          <button class="text-button" data-action="copy" data-id="${article.id}">复制</button>
          <button class="text-button danger" data-action="delete" data-id="${article.id}">删除</button>
        </div>
      </td>
    </tr>
  `).join("");
  $("#newsRows").innerHTML = rows || `<tr><td colspan="7" class="muted">没有找到匹配内容。</td></tr>`;
}

function renderRewrite() {
  $("#rewriteBoard").innerHTML = state.articles.map((article) => `
    <article class="review-card">
      <strong>${escapeHtml(article.title || article.sourceTitle)}</strong>
      <span class="muted">${escapeHtml(article.storyAudio || "未上传播报音频")} · ${escapeHtml(article.host || "未设置主播")}</span>
      <p>${escapeHtml(article.intro || "还没有填写儿童端导语。")}</p>
      <div class="review-actions"><button class="secondary-button" data-action="edit" data-id="${article.id}">编辑改写稿</button></div>
    </article>
  `).join("");
}

function renderDecode() {
  $("#decodeBoard").innerHTML = state.articles.map((article) => `
    <article class="review-card">
      <strong>${escapeHtml(article.title || article.sourceTitle)}</strong>
      <span class="muted">${article.revealCards?.length || 0} 张揭秘卡片</span>
      <div class="reveal-card-list">
        ${(article.revealCards || []).map((card) => `
          <div class="reveal-card-row">
            <strong>${escapeHtml(card.from)} ➡ ${escapeHtml(card.to)}</strong>
            <span>${escapeHtml(card.explanation || "未填写解释")}</span>
            <small>${escapeHtml(card.audio || "未上传音频")}</small>
          </div>
        `).join("") || `<p class="muted">还没有揭秘卡片。</p>`}
      </div>
      <div class="review-actions"><button class="secondary-button" data-action="edit" data-id="${article.id}">编辑揭秘卡</button></div>
    </article>
  `).join("");
}

function renderQa() {
  $("#qaBoard").innerHTML = state.articles.map((article) => `
    <article class="review-card">
      <strong>${escapeHtml(article.title || article.sourceTitle)}</strong>
      <span class="muted">录音转文字：${article.asrEnabled ? "开启" : "关闭"} · 实时问答：${article.llmEnabled ? "开启" : "关闭"}</span>
      <p>${escapeHtml(article.qaPrompt || "未设置问答提示词。")}</p>
      <div class="clue-list">${(article.fixedQuestions || []).map((question) => `<span>${escapeHtml(question)}</span>`).join("")}</div>
      <div class="review-actions"><button class="secondary-button" data-action="edit" data-id="${article.id}">编辑问答</button></div>
    </article>
  `).join("");
}

function renderCheckin() {
  $("#checkinBoard").innerHTML = state.articles.map((article) => `
    <article class="review-card">
      <strong>${escapeHtml(article.title || article.sourceTitle)}</strong>
      <span class="muted">${statusMap[article.status] || article.status} · 完整度 ${completion(article)}%</span>
      <p>${escapeHtml(article.checkinPrompt || "还没有配置打卡引导语。")}</p>
      <p class="muted">${escapeHtml(article.checkinFeedback || "还没有配置完成反馈。")}</p>
      <div class="review-actions">
        <button class="primary-button" data-action="submit-review" data-id="${article.id}">提交审核</button>
        <button class="secondary-button" data-action="publish" data-id="${article.id}">直接发布</button>
      </div>
    </article>
  `).join("");
}

function renderPreview() {
  const published = state.articles.filter((article) => article.status === "published");
  $("#homepageList").innerHTML = published.map((article) => `
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
  `).join("") || `<article class="compact-item"><strong>暂无已发布内容</strong><span class="muted">通过审核后会显示在这里。</span></article>`;

  $("#miniPreview").innerHTML = published.filter((article) => article.recommended).map((article) => `
    <article class="mini-card">
      <strong>${topicIcon(article.topic)} ${escapeHtml(article.title)}</strong>
      <p class="muted">${escapeHtml(article.intro)}</p>
      <div class="mini-meta"><span>揭秘 ${article.revealCards?.length || 0} 张</span><span>${escapeHtml(article.duration || "待上传")}</span></div>
    </article>
  `).join("") || `<article class="mini-card"><strong>今日推荐待配置</strong><p class="muted">发布并勾选推荐后进入这里。</p></article>`;
}

function renderSettings() {
  $("#categoryTags").innerHTML = topics.map((topic) => `<span>${topic.icon} ${topic.name}</span>`).join("");
  $("#voiceTags").innerHTML = ["ASR 语音转文字", "LLM 实时问答", "鸢尾花姐姐口吻", "中文回答", "打卡完成反馈"].map((tag) => `<span>${tag}</span>`).join("");
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
  $("#dialogTitle").textContent = article ? "编辑新闻流程" : "新建新闻";
  form.elements.id.value = nextId;
  form.elements.sourceTitle.value = article?.sourceTitle || "";
  form.elements.sourceUrl.value = article?.sourceUrl || "";
  form.elements.sourceText.value = article?.sourceText || "";
  form.elements.keywords.value = (article?.keywords || []).join("，");
  form.elements.cover.value = article?.cover || "";
  form.elements.channel.value = article?.channel || "hot";
  form.elements.topic.value = article?.topic || "生活";
  form.elements.title.value = article?.title || "";
  form.elements.intro.value = article?.intro || "";
  form.elements.rewrittenText.value = article?.rewrittenText || "";
  form.elements.storyAudio.value = article?.storyAudio || "";
  form.elements.host.value = article?.host || "鸢尾花姐姐";
  form.elements.duration.value = article?.duration || "";
  form.elements.status.value = article?.status || "source";
  form.elements.revealCards.value = revealCardsToText(article?.revealCards);
  form.elements.fixedQuestions.value = (article?.fixedQuestions || []).join("\n");
  form.elements.asrEnabled.value = article?.asrEnabled === false ? "关闭" : "开启";
  form.elements.llmEnabled.value = article?.llmEnabled === false ? "关闭" : "开启";
  form.elements.qaPrompt.value = article?.qaPrompt || "请基于这条儿童新闻，用孩子能懂的话回答。只使用中文，语气像鸢尾花姐姐一样温柔、清楚。";
  form.elements.checkinPrompt.value = article?.checkinPrompt || "";
  form.elements.checkinFeedback.value = article?.checkinFeedback || "";
  form.elements.reviewNote.value = article?.reviewNote || "";
  form.elements.recommended.checked = Boolean(article?.recommended);
  $("#editorDialog").showModal();
}

function formToArticle(statusOverride) {
  const form = $("#articleForm");
  const id = form.elements.id.value || `news-${Date.now()}`;
  const existing = state.articles.find((article) => article.id === id);
  return {
    id,
    sourceTitle: form.elements.sourceTitle.value.trim(),
    sourceUrl: form.elements.sourceUrl.value.trim(),
    sourceText: form.elements.sourceText.value.trim(),
    keywords: splitCsv(form.elements.keywords.value),
    channel: form.elements.channel.value,
    topic: form.elements.topic.value,
    cover: form.elements.cover.value.trim(),
    title: form.elements.title.value.trim(),
    intro: form.elements.intro.value.trim(),
    rewrittenText: form.elements.rewrittenText.value.trim(),
    storyAudio: form.elements.storyAudio.value.trim(),
    host: form.elements.host.value.trim(),
    duration: form.elements.duration.value.trim(),
    status: statusOverride || form.elements.status.value,
    revealCards: parseRevealCards(form.elements.revealCards.value),
    fixedQuestions: splitLines(form.elements.fixedQuestions.value),
    asrEnabled: boolText(form.elements.asrEnabled.value),
    llmEnabled: boolText(form.elements.llmEnabled.value),
    qaPrompt: form.elements.qaPrompt.value.trim(),
    checkinPrompt: form.elements.checkinPrompt.value.trim(),
    checkinFeedback: form.elements.checkinFeedback.value.trim(),
    reviewNote: form.elements.reviewNote.value.trim(),
    recommended: form.elements.recommended.checked,
    updatedAt: nowText(),
    createdAt: existing?.createdAt || nowText(),
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
  state.articles.unshift({ ...source, id: nextId, sourceTitle: `${source.sourceTitle} 副本`, title: `${source.title} 副本`, status: "source", recommended: false, updatedAt: nowText() });
  persist();
  renderAll();
}

function deleteArticle(id) {
  if (!confirm("确定删除这条新闻流程吗？")) return;
  state.articles = state.articles.filter((article) => article.id !== id);
  persist();
  renderAll();
}

function exportData() {
  const payload = state.articles
    .filter((article) => article.status === "published")
    .map((article) => ({
      id: article.id,
      channel: article.channel,
      topic: article.topic,
      title: article.title,
      intro: article.intro,
      keywords: article.keywords,
      paragraphs: paragraphs(article),
      storyAudio: article.storyAudio,
      cover: article.cover,
      decodes: (article.revealCards || []).map((card) => [`故事里：${card.from}`, `现实中：${card.to}`]),
      revealCards: article.revealCards,
      questions: article.fixedQuestions,
      qa: {
        asrEnabled: article.asrEnabled,
        llmEnabled: article.llmEnabled,
        prompt: article.qaPrompt,
      },
      checkin: {
        prompt: article.checkinPrompt,
        feedback: article.checkinFeedback,
      },
    }));
  const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `kids_news_frontend_${Date.now()}.json`;
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
  $("#saveDraft").addEventListener("click", () => saveArticle("source"));
  $("#searchInput").addEventListener("input", (event) => {
    state.search = event.target.value;
    renderSourceRows();
  });
  $("#statusFilter").addEventListener("change", (event) => {
    state.statusFilter = event.target.value;
    renderSourceRows();
  });
  $("#categoryFilter").addEventListener("change", (event) => {
    state.categoryFilter = event.target.value;
    renderSourceRows();
  });
  $("#exportData").addEventListener("click", exportData);
  $("#resetDemo").addEventListener("click", () => {
    localStorage.removeItem("kids-news-admin-v3");
    loadArticles();
    renderAll();
  });
  document.addEventListener("click", (event) => {
    const target = event.target.closest("[data-action]");
    if (!target) return;
    const { action, id } = target.dataset;
    const article = state.articles.find((item) => item.id === id);
    if (action === "edit") openEditor(article);
    if (action === "copy") copyArticle(id);
    if (action === "delete") deleteArticle(id);
    if (action === "submit-review") updateArticle(id, { status: "review" });
    if (action === "publish") updateArticle(id, { status: "published", recommended: true });
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
