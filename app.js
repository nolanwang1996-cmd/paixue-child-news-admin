const categories = ["世界", "科技", "自然", "校园", "历史", "人物", "健康"];

const statusMap = {
  draft: "草稿",
  review: "待审核",
  published: "已发布",
  offline: "已下架",
};

const seedArticles = [
  {
    id: crypto.randomUUID(),
    title: "科学家发现一种会发光的深海鱼",
    summary: "在很深很深的海里，科学家记录到一种能用微光交流的小鱼。",
    content:
      "今天的自然新闻来自深海。科学家借助无人潜水设备，观察到一种小鱼会在身体边缘发出柔和的光。研究人员认为，这种光可能帮助它们寻找同伴，也能提醒自己躲开危险。",
    category: "自然",
    ageGroup: "7-9 岁",
    difficulty: "标准",
    status: "published",
    coverUrl: "",
    audioUrl: "https://example.com/audio/deep-sea-fish.mp3",
    host: "鸢尾花姐姐",
    duration: "02:36",
    recommended: true,
    reviewNote: "表达清楚，适合发布。",
    plays: 12840,
    updatedAt: "2026-05-30 09:22",
  },
  {
    id: crypto.randomUUID(),
    title: "校园里的节水挑战开始了",
    summary: "很多学校正在用小游戏提醒大家珍惜每一滴水。",
    content:
      "本周，几所小学发起了节水挑战。孩子们会记录自己一天里关紧水龙头、重复使用清洁水的次数。老师说，节水不是少用水，而是把每一滴水用得更认真。",
    category: "校园",
    ageGroup: "3-6 岁",
    difficulty: "轻松",
    status: "review",
    coverUrl: "",
    audioUrl: "",
    host: "小鹿老师",
    duration: "",
    recommended: false,
    reviewNote: "",
    plays: 0,
    updatedAt: "2026-05-31 14:05",
  },
  {
    id: crypto.randomUUID(),
    title: "一颗新气象卫星开始工作",
    summary: "新的气象卫星能帮助人们更早知道台风和暴雨的消息。",
    content:
      "科技新闻时间到。一颗新的气象卫星进入工作状态，它会从太空观察云层、海面温度和风的变化。天气预报员可以用这些信息，更早提醒大家准备雨具或调整出行。",
    category: "科技",
    ageGroup: "10-12 岁",
    difficulty: "进阶",
    status: "draft",
    coverUrl: "",
    audioUrl: "",
    host: "星星主播",
    duration: "",
    recommended: false,
    reviewNote: "补充一句对孩子生活的影响。",
    plays: 0,
    updatedAt: "2026-06-01 10:18",
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

function loadArticles() {
  const stored = localStorage.getItem("kids-news-admin-articles");
  state.articles = stored ? JSON.parse(stored) : seedArticles;
  persist();
}

function persist() {
  localStorage.setItem("kids-news-admin-articles", JSON.stringify(state.articles));
}

function formatNumber(value) {
  return new Intl.NumberFormat("zh-CN").format(value);
}

function nowText() {
  const date = new Date();
  const pad = (value) => String(value).padStart(2, "0");
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())} ${pad(date.getHours())}:${pad(date.getMinutes())}`;
}

function statusBadge(status) {
  return `<span class="status-pill status-${status}">${statusMap[status]}</span>`;
}

function filteredArticles() {
  return state.articles.filter((article) => {
    const term = state.search.trim().toLowerCase();
    const matchesSearch =
      !term ||
      [article.title, article.summary, article.category, article.host]
        .join(" ")
        .toLowerCase()
        .includes(term);
    const matchesStatus = state.statusFilter === "all" || article.status === state.statusFilter;
    const matchesCategory = state.categoryFilter === "all" || article.category === state.categoryFilter;
    return matchesSearch && matchesStatus && matchesCategory;
  });
}

function renderAll() {
  renderMetrics();
  renderRecent();
  renderTables();
  renderReview();
  renderHomepage();
  renderSettings();
}

function renderMetrics() {
  $("#publishedCount").textContent = state.articles.filter((item) => item.status === "published").length;
  $("#reviewCount").textContent = state.articles.filter((item) => item.status === "review").length;
  $("#recommendCount").textContent = state.articles.filter((item) => item.recommended).length;
  $("#playCount").textContent = formatNumber(state.articles.reduce((sum, item) => sum + Number(item.plays || 0), 0));
}

function renderRecent() {
  $("#recentList").innerHTML = [...state.articles]
    .sort((a, b) => b.updatedAt.localeCompare(a.updatedAt))
    .slice(0, 5)
    .map(
      (article) => `
        <article class="compact-item">
          <div>
            <strong>${article.title}</strong>
            <span class="muted">${article.category} · ${article.updatedAt}</span>
          </div>
          ${statusBadge(article.status)}
        </article>
      `,
    )
    .join("");
}

function renderTables() {
  const rows = filteredArticles()
    .map(
      (article) => `
        <tr>
          <td class="row-title">
            <strong>${article.title}</strong>
            <span class="muted">${article.summary}</span>
          </td>
          <td>${article.category}</td>
          <td>${article.ageGroup}</td>
          <td>${statusBadge(article.status)}</td>
          <td>${article.audioUrl ? article.duration || "已配置" : "未配置"}</td>
          <td>${article.updatedAt}</td>
          <td>
            <div class="row-actions">
              <button class="text-button" data-action="edit" data-id="${article.id}">编辑</button>
              <button class="text-button" data-action="copy" data-id="${article.id}">复制</button>
              <button class="text-button danger" data-action="delete" data-id="${article.id}">删除</button>
            </div>
          </td>
        </tr>
      `,
    )
    .join("");
  $("#newsRows").innerHTML = rows || `<tr><td colspan="7" class="muted">没有找到匹配内容。</td></tr>`;
}

function renderReview() {
  const queue = state.articles.filter((article) => article.status === "review");
  $("#reviewQueue").innerHTML =
    queue
      .map(
        (article) => `
          <article class="review-card">
            <strong>${article.title}</strong>
            <span class="muted">${article.category} · ${article.ageGroup} · ${article.host || "未设置主播"}</span>
            <p>${article.summary}</p>
            <div class="review-actions">
              <button class="primary-button" data-action="publish" data-id="${article.id}">通过发布</button>
              <button class="secondary-button" data-action="back-draft" data-id="${article.id}">退回草稿</button>
            </div>
          </article>
        `,
      )
      .join("") || `<article class="review-card"><strong>暂无待审核内容</strong><p>编辑提交后会出现在这里。</p></article>`;
}

function renderHomepage() {
  $("#homepageList").innerHTML = state.articles
    .filter((article) => article.status === "published")
    .map(
      (article) => `
        <article class="compact-item">
          <div>
            <strong>${article.title}</strong>
            <span class="muted">${article.category} · ${article.duration || "未填时长"}</span>
          </div>
          <label class="checkbox-label">
            <input type="checkbox" data-action="toggle-recommended" data-id="${article.id}" ${article.recommended ? "checked" : ""} />
            推荐
          </label>
        </article>
      `,
    )
    .join("");

  const recommended = state.articles.filter((article) => article.status === "published" && article.recommended);
  $("#miniPreview").innerHTML =
    recommended
      .map(
        (article) => `
          <article class="mini-card">
            <strong>${article.title}</strong>
            <p class="muted">${article.summary}</p>
            <div class="mini-meta">
              <span>${article.host || "儿童新闻电台"}</span>
              <span>${article.duration || "待上传"}</span>
            </div>
          </article>
        `,
      )
      .join("") || `<article class="mini-card"><strong>今日推荐待配置</strong><p class="muted">发布内容并勾选推荐后会显示在这里。</p></article>`;
}

function renderSettings() {
  $("#categoryTags").innerHTML = categories.map((category) => `<span>${category}</span>`).join("");
}

function switchPage(page) {
  state.page = page;
  $$(".nav-item").forEach((item) => item.classList.toggle("is-active", item.dataset.page === page));
  $$("[data-page-panel]").forEach((panel) => panel.classList.toggle("is-active", panel.dataset.pagePanel === page));
  $("#pageTitle").textContent = $(".nav-item.is-active").textContent;
}

function fillCategoryControls() {
  const options = categories.map((category) => `<option>${category}</option>`).join("");
  $('[name="category"]').innerHTML = options;
  $("#categoryFilter").innerHTML = `<option value="all">全部栏目</option>${categories
    .map((category) => `<option value="${category}">${category}</option>`)
    .join("")}`;
}

function openEditor(article = null) {
  const form = $("#articleForm");
  form.reset();
  $("#dialogTitle").textContent = article ? "编辑新闻" : "新建新闻";
  form.elements.id.value = article?.id || "";
  form.elements.title.value = article?.title || "";
  form.elements.category.value = article?.category || categories[0];
  form.elements.ageGroup.value = article?.ageGroup || "7-9 岁";
  form.elements.difficulty.value = article?.difficulty || "标准";
  form.elements.status.value = article?.status || "draft";
  form.elements.summary.value = article?.summary || "";
  form.elements.content.value = article?.content || "";
  form.elements.coverUrl.value = article?.coverUrl || "";
  form.elements.audioUrl.value = article?.audioUrl || "";
  form.elements.host.value = article?.host || "鸢尾花姐姐";
  form.elements.duration.value = article?.duration || "";
  form.elements.recommended.checked = Boolean(article?.recommended);
  form.elements.reviewNote.value = article?.reviewNote || "";
  $("#editorDialog").showModal();
}

function formToArticle(statusOverride) {
  const form = $("#articleForm");
  const id = form.elements.id.value || crypto.randomUUID();
  const existing = state.articles.find((article) => article.id === id);
  return {
    id,
    title: form.elements.title.value.trim(),
    category: form.elements.category.value,
    ageGroup: form.elements.ageGroup.value,
    difficulty: form.elements.difficulty.value,
    status: statusOverride || form.elements.status.value,
    summary: form.elements.summary.value.trim(),
    content: form.elements.content.value.trim(),
    coverUrl: form.elements.coverUrl.value.trim(),
    audioUrl: form.elements.audioUrl.value.trim(),
    host: form.elements.host.value.trim(),
    duration: form.elements.duration.value.trim(),
    recommended: form.elements.recommended.checked,
    reviewNote: form.elements.reviewNote.value.trim(),
    plays: existing?.plays || 0,
    updatedAt: nowText(),
  };
}

function saveArticle(statusOverride = null) {
  const article = formToArticle(statusOverride);
  const index = state.articles.findIndex((item) => item.id === article.id);
  if (index >= 0) {
    state.articles[index] = article;
  } else {
    state.articles.unshift(article);
  }
  persist();
  renderAll();
  $("#editorDialog").close();
}

function updateArticle(id, patch) {
  state.articles = state.articles.map((article) =>
    article.id === id ? { ...article, ...patch, updatedAt: nowText() } : article,
  );
  persist();
  renderAll();
}

function copyArticle(id) {
  const source = state.articles.find((article) => article.id === id);
  if (!source) return;
  state.articles.unshift({
    ...source,
    id: crypto.randomUUID(),
    title: `${source.title} 副本`,
    status: "draft",
    recommended: false,
    plays: 0,
    updatedAt: nowText(),
  });
  persist();
  renderAll();
}

function deleteArticle(id) {
  if (!confirm("确定删除这条新闻吗？")) return;
  state.articles = state.articles.filter((article) => article.id !== id);
  persist();
  renderAll();
}

function exportData() {
  const blob = new Blob([JSON.stringify({ articles: state.articles }, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `kids-news-admin-${Date.now()}.json`;
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
    localStorage.removeItem("kids-news-admin-articles");
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
    if (action === "publish") updateArticle(id, { status: "published", recommended: true, reviewNote: "审核通过" });
    if (action === "back-draft") updateArticle(id, { status: "draft", reviewNote: "请编辑修改后重新提交" });
  });

  document.addEventListener("change", (event) => {
    const target = event.target;
    if (target.dataset.action === "toggle-recommended") {
      updateArticle(target.dataset.id, { recommended: target.checked });
    }
  });
}

fillCategoryControls();
loadArticles();
bindEvents();
renderAll();
