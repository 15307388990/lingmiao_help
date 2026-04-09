const translations = {
  zh: {
    htmlLang: "zh-CN",
    title: "台球辅助软件帮助中心",
    brand: {
      name: "台球辅助软件",
      sub: "帮助中心 / Help Center"
    },
    topbar: {
      badge: "GitHub Pages Ready"
    },
    hero: {
      eyebrow: "Billiards Assistant Docs",
      title: "让用户一眼看懂怎么用，也能迅速排查问题",
      text: "这个页面专门为 GitHub 静态部署设计，支持中英文双切、图片/GIF 展示、搜索、目录定位和 FAQ 折叠，适合做成产品官网里的帮助文档首页。",
      primary: "快速上手",
      secondary: "查看常见问题",
      pill1: "中英文切换",
      pill2: "支持图片 / GIF",
      pill3: "移动端友好"
    },
    search: {
      caption: "Quick Find",
      label: "搜索帮助内容",
      tip: "建议优先搜索“校准 / 辅助线 / 识别 / 卡顿”",
      placeholder: "输入关键词，例如：校准、辅助线、识别、卡顿",
      clear: "清空",
      statusIdle: "可以按关键词筛选功能卡片和常见问题。",
      statusHit: "关键词“{keyword}”匹配到 {count} 项内容。",
      noResults: "没有找到匹配内容，可以试试“校准”“识别”“辅助线”这类关键词。"
    },
    tag: {
      calibration: "校准",
      aiming: "辅助线",
      detection: "识别",
      performance: "卡顿",
      permission: "权限"
    },
    toc: {
      title: "目录导航",
      quickstart: "快速上手",
      features: "功能说明",
      notices: "注意事项",
      faq: "常见问题",
      media: "图片与 GIF",
      deploy: "部署建议"
    },
    quickstart: {
      kicker: "Start Here",
      title: "快速上手",
      intro: "建议把新用户第一次打开软件最需要知道的步骤，固定放在页面最前面。",
      step1: {
        title: "先完成球桌校准",
        text: "确认球桌四角、边线和当前视角，后续辅助线和落点预测才会稳定。"
      },
      step2: {
        title: "选择当前使用模式",
        text: "练习模式适合训练，演示模式适合讲解，简洁模式适合日常快速查看。"
      },
      step3: {
        title: "先看路线，再看建议",
        text: "推荐把瞄准路线作为第一参考，把力度和走位提示作为补充信息。"
      }
    },
    features: {
      kicker: "Feature Guide",
      title: "功能说明",
      intro: "按用户真实使用顺序组织内容，比按技术模块分类更容易找到。",
      item1: {
        title: "实时瞄准辅助",
        text: "在画面中显示推荐击球方向，帮助用户快速确认进球线路。",
        b1: "适合新手建立基础瞄准感觉",
        b2: "适合教学演示典型球型",
        b3: "建议配合固定机位使用"
      },
      item2: {
        title: "路线预测与落点参考",
        text: "显示目标球入袋方向、母球碰撞后的大致走向，以及可能落点区域。",
        b1: "适合复盘和讲解走位逻辑",
        b2: "适合观察多种球路变化",
        b3: "校准误差会直接影响结果"
      },
      item3: {
        title: "训练记录与简洁模式",
        text: "支持记录练习结果，并在熟悉后切换到更简洁的显示界面，减少干扰。",
        b1: "训练记录适合长期练习用户",
        b2: "简洁模式适合小屏幕和快速查看",
        b3: "建议把进阶功能放到页面靠后位置"
      }
    },
    notices: {
      kicker: "Important Notes",
      title: "注意事项",
      intro: "这一部分最好单独强调，因为大部分“为什么不准”都能在这里提前解决。",
      hero: {
        label: "最重要的提醒",
        title: "校准、光线、机位固定，这三项决定了辅助结果是否稳定。",
        text: "如果用户反馈识别偏差、辅助线不准、落点异常，优先检查这三项，通常比改参数更有效。"
      },
      item1: {
        title: "使用前先校准",
        text: "只要球桌位置、镜头角度或设备摆放方式发生变化，就建议重新校准一次。"
      },
      item2: {
        title: "保持光线稳定",
        text: "过暗、过曝、强反光或有人影遮挡时，都可能影响球体和袋口识别效果。"
      },
      item3: {
        title: "设备尽量固定",
        text: "建议使用支架或固定机位，避免画面抖动和视角位移造成结果偏差。"
      },
      item4: {
        title: "参考结果不是绝对结果",
        text: "线路、力度和走位属于辅助参考，真实效果还会受到杆法、球速、台呢和个人手感影响。"
      },
      item5: {
        title: "遵守场地规则",
        text: "如果比赛、场馆或教学环境对辅助工具有限制，请以现场规则为准。"
      },
      item6: {
        title: "确保权限开启",
        text: "摄像头和存储权限未开启时，可能出现无法识别、无法截图或无法保存记录的问题。"
      }
    },
    faq: {
      kicker: "Frequently Asked Questions",
      title: "常见问题",
      intro: "把用户最容易搜的词写进问题标题里，搜索体验会明显更好。",
      item1: {
        q: "为什么我看不到辅助线？",
        a: "先检查是否完成球桌校准，再确认摄像头权限是否开启。如果当前模式设置为隐藏辅助，也会导致辅助线不显示。"
      },
      item2: {
        q: "为什么预测线路偏差很大？",
        a: "最常见原因是校准不准确、设备角度变化或光线不稳定。建议重新校准，并保持摄像头位置固定后再测试。"
      },
      item3: {
        q: "为什么识别不到球或者袋口？",
        a: "请检查画面是否过暗、是否有强反光、球桌边缘是否完整进入画面。必要时可以拉远机位，确保桌面区域完整可见。"
      },
      item4: {
        q: "力度建议是不是必须完全照做？",
        a: "不是。力度建议更适合帮助用户建立感觉，不同球桌、台呢速度和个人发力方式都会让结果发生变化，建议结合实际击打调整。"
      },
      item5: {
        q: "软件卡顿怎么办？",
        a: "可以先关闭其他后台应用，降低同时显示的辅助内容，或者切换到简洁显示模式。旧设备建议优先使用基础功能。"
      },
      item6: {
        q: "每次都要重新校准吗？",
        a: "如果设备位置、角度和球桌环境没有变化，一般不需要每次都重新校准。但只要有明显移动，建议重新执行一次。"
      }
    },
    media: {
      kicker: "Visual Content",
      title: "图片与 GIF 建议放法",
      intro: "你后续把素材传到 GitHub 时，直接替换 assets/ 里的对应文件名就可以。",
      hero: {
        alt: "台球辅助软件演示画面",
        fallback: "把演示 GIF 放到 assets/hero-demo.gif",
        caption: "首页大图位置，建议放软件主界面截图或 6-10 秒演示 GIF。"
      },
      aiming: {
        alt: "实时瞄准辅助示意图",
        fallback: "把功能演示 GIF 放到 assets/feature-aiming.gif",
        caption: "这里建议放“辅助线如何显示”的动态图。"
      },
      calibration: {
        alt: "路线预测和校准示意图",
        fallback: "把校准或路线预测 GIF 放到 assets/feature-calibration.gif",
        caption: "这里建议放“校准界面”或“走位预测”的截图。"
      },
      training: {
        alt: "训练记录和简洁模式示意图",
        fallback: "把训练记录截图放到 assets/feature-training.gif",
        caption: "这里建议放“训练统计”或“简洁界面”截图。"
      },
      card1: {
        title: "首页主图",
        text: "建议使用 16:10 或 16:9 的软件演示图，或者一段 6-10 秒循环 GIF，放在 assets/hero-demo.gif。"
      },
      card2: {
        title: "功能说明配图",
        text: "每个核心功能建议至少配 1 张图，优先展示“开关前后”“辅助线效果”“校准界面”。"
      },
      card3: {
        title: "FAQ 问题截图",
        text: "如果有典型报错、识别失败画面、权限弹窗，建议在 FAQ 下方加一张说明图，用户会更容易自助排查。"
      }
    },
    deploy: {
      kicker: "Deploy Tips",
      title: "放到 GitHub 上时的建议方案",
      card1: {
        title: "目录结构尽量简单",
        text: "保持 index.html、styles.css、script.js 和 assets/ 在同一层级，最适合 GitHub Pages 直接部署。"
      },
      card2: {
        title: "图片统一放 assets",
        text: "后续新增 JPG、PNG、WEBP 或 GIF 时，统一放进 assets/，页面路径管理会更清楚。"
      },
      card3: {
        title: "帮助页继续扩展",
        text: "下一步可以继续加“更新日志”“下载说明”“联系我们”“版本差异”这几个模块。"
      }
    }
  },
  en: {
    htmlLang: "en",
    title: "Billiards Assistant Help Center",
    brand: {
      name: "Billiards Assistant",
      sub: "Help Center / Documentation"
    },
    topbar: {
      badge: "GitHub Pages Ready"
    },
    hero: {
      eyebrow: "Billiards Assistant Docs",
      title: "Help users understand the product fast and solve issues even faster",
      text: "This page is designed for GitHub static hosting, with bilingual switching, image/GIF support, search, sticky navigation, and accordion FAQs for a cleaner documentation experience.",
      primary: "Quick Start",
      secondary: "View FAQ",
      pill1: "Chinese / English",
      pill2: "Image / GIF Ready",
      pill3: "Mobile Friendly"
    },
    search: {
      caption: "Quick Find",
      label: "Search Help Content",
      tip: "Try keywords like calibration, aiming, detection, or performance",
      placeholder: "Search for calibration, aiming, detection, performance...",
      clear: "Clear",
      statusIdle: "Use keywords to filter feature cards and FAQ entries.",
      statusHit: "\"{keyword}\" matched {count} items.",
      noResults: "No matching content found. Try keywords like calibration, aiming, or detection."
    },
    tag: {
      calibration: "Calibration",
      aiming: "Aiming",
      detection: "Detection",
      performance: "Performance",
      permission: "Permission"
    },
    toc: {
      title: "Navigation",
      quickstart: "Quick Start",
      features: "Features",
      notices: "Notes",
      faq: "FAQ",
      media: "Images & GIFs",
      deploy: "Deploy Tips"
    },
    quickstart: {
      kicker: "Start Here",
      title: "Quick Start",
      intro: "Keep the most important first-run instructions at the top so new users do not need to scan the whole page.",
      step1: {
        title: "Complete table calibration first",
        text: "Confirm the table corners, rails, and camera perspective so the guide line and landing prediction stay accurate."
      },
      step2: {
        title: "Choose the current usage mode",
        text: "Practice mode is for training, demo mode is for explaining shots, and simple mode is for quick daily use."
      },
      step3: {
        title: "Read the line before the suggestion",
        text: "Use the aiming path as the primary reference and treat power or cue-ball hints as secondary guidance."
      }
    },
    features: {
      kicker: "Feature Guide",
      title: "Features",
      intro: "Organizing by user flow is usually easier to scan than organizing by internal technical modules.",
      item1: {
        title: "Real-time aiming assistance",
        text: "Displays the recommended shot direction on screen so users can quickly understand the basic potting line.",
        b1: "Great for beginners building aiming intuition",
        b2: "Useful for coaching and shot explanation",
        b3: "Works best with a fixed camera angle"
      },
      item2: {
        title: "Path prediction and landing reference",
        text: "Shows the target ball route, the cue-ball travel after contact, and an estimated landing region.",
        b1: "Useful for replay and position-play teaching",
        b2: "Helps compare different route options",
        b3: "Calibration accuracy directly affects the result"
      },
      item3: {
        title: "Training records and simple mode",
        text: "Track practice results and switch to a cleaner interface once users are familiar with the software.",
        b1: "Training logs help long-term users improve",
        b2: "Simple mode fits small screens and quick checks",
        b3: "Advanced features should appear later on the page"
      }
    },
    notices: {
      kicker: "Important Notes",
      title: "Important Notes",
      intro: "This section deserves strong emphasis because most accuracy complaints can be prevented here.",
      hero: {
        label: "Top Reminder",
        title: "Calibration, lighting, and camera stability determine whether the guidance feels reliable.",
        text: "When users report recognition drift or inaccurate lines, check these three first before changing any parameters."
      },
      item1: {
        title: "Calibrate before use",
        text: "If the table position, camera angle, or device placement changes, recalibrate before using the guide again."
      },
      item2: {
        title: "Keep lighting stable",
        text: "Low light, overexposure, glare, or shadows can all hurt ball and pocket recognition."
      },
      item3: {
        title: "Keep the device steady",
        text: "A tripod or fixed mount helps prevent view shifts and improves consistency."
      },
      item4: {
        title: "Suggestions are references, not guarantees",
        text: "Line, power, and route suggestions are guidance only. Real outcomes still depend on stroke, cloth speed, and player feel."
      },
      item5: {
        title: "Respect venue rules",
        text: "If a match, venue, or teaching environment restricts assistive tools, follow the local rules."
      },
      item6: {
        title: "Make sure permissions are enabled",
        text: "Without camera or storage permissions, the app may fail to detect the table or save screenshots and records."
      }
    },
    faq: {
      kicker: "Frequently Asked Questions",
      title: "FAQ",
      intro: "Put the words users actually search for directly into the question title to improve findability.",
      item1: {
        q: "Why can't I see the aiming line?",
        a: "Check whether table calibration is complete and whether camera permission is enabled. Hidden overlay mode can also make the guide line disappear."
      },
      item2: {
        q: "Why is the predicted path far off?",
        a: "The most common causes are inaccurate calibration, camera movement, or unstable lighting. Recalibrate and keep the device fixed before testing again."
      },
      item3: {
        q: "Why can't the app detect balls or pockets?",
        a: "Check for dim light, strong glare, or an incomplete table view. Pull the camera back if needed so the full table area stays visible."
      },
      item4: {
        q: "Do I have to follow the power suggestion exactly?",
        a: "No. Power suggestions are meant to build feel. Different tables, cloth speed, and player stroke styles will change the actual result."
      },
      item5: {
        q: "What should I do if the app feels slow?",
        a: "Close background apps, reduce the amount of on-screen assistance, or switch to simple mode. Older devices should prioritize basic features."
      },
      item6: {
        q: "Do I need to recalibrate every time?",
        a: "Not if the device position, angle, and environment stay the same. Recalibration is recommended whenever anything clearly moves."
      }
    },
    media: {
      kicker: "Visual Content",
      title: "How to place images and GIFs",
      intro: "When you upload assets to GitHub, you can simply replace the matching filenames inside the assets folder.",
      hero: {
        alt: "Billiards assistant demo screen",
        fallback: "Place your demo GIF at assets/hero-demo.gif",
        caption: "Use this hero slot for a main UI screenshot or a short 6-10 second looping demo GIF."
      },
      aiming: {
        alt: "Real-time aiming assistance example",
        fallback: "Place your aiming GIF at assets/feature-aiming.gif",
        caption: "A short animation showing how the aiming line appears works well here."
      },
      calibration: {
        alt: "Calibration and path prediction example",
        fallback: "Place your calibration or prediction GIF at assets/feature-calibration.gif",
        caption: "A calibration screen or route prediction screenshot fits this section well."
      },
      training: {
        alt: "Training records and simple mode example",
        fallback: "Place your training screenshot at assets/feature-training.gif",
        caption: "Use this for training stats or the simplified UI."
      },
      card1: {
        title: "Hero visual",
        text: "Use a 16:10 or 16:9 product visual, or a short 6-10 second looping GIF, and store it as assets/hero-demo.gif."
      },
      card2: {
        title: "Feature visuals",
        text: "Each core feature should ideally have at least one image, especially for guide lines, before/after states, and calibration screens."
      },
      card3: {
        title: "FAQ screenshots",
        text: "If you have common error states, failed detection examples, or permission prompts, adding screenshots below the FAQ helps self-service troubleshooting."
      }
    },
    deploy: {
      kicker: "Deploy Tips",
      title: "Recommended structure for GitHub deployment",
      card1: {
        title: "Keep the file structure simple",
        text: "Place index.html, styles.css, script.js, and assets/ at the same level for the easiest GitHub Pages deployment."
      },
      card2: {
        title: "Store all visuals in assets/",
        text: "Keep JPG, PNG, WEBP, and GIF files inside assets/ so the page stays easy to maintain."
      },
      card3: {
        title: "Extend the help center later",
        text: "You can add release notes, download instructions, contact info, and version comparisons as the next step."
      }
    }
  }
};

const searchInput = document.querySelector("#help-search");
const clearButton = document.querySelector("#clear-search");
const searchStatus = document.querySelector("#search-status");
const searchableItems = [...document.querySelectorAll(".searchable")];
const tagButtons = [...document.querySelectorAll(".tag")];
const sections = [...document.querySelectorAll(".content-section")];
const tocLinks = [...document.querySelectorAll(".toc-link")];
const faqItems = [...document.querySelectorAll(".faq-item")];
const languageButtons = [...document.querySelectorAll(".lang-button")];
const mediaAssets = [...document.querySelectorAll(".media-asset")];

let currentLanguage = localStorage.getItem("help-doc-language");
let noResultsNode = null;

if (!currentLanguage || !translations[currentLanguage]) {
  currentLanguage = navigator.language && navigator.language.toLowerCase().startsWith("zh") ? "zh" : "en";
}

function getMessage(path) {
  return path.split(".").reduce((value, key) => value?.[key], translations[currentLanguage]);
}

function setSearchStatus(keyword, count) {
  if (!keyword) {
    searchStatus.textContent = getMessage("search.statusIdle");
    return;
  }

  const template = getMessage("search.statusHit");
  searchStatus.textContent = template
    .replace("{keyword}", keyword)
    .replace("{count}", String(count));
}

function ensureNoResultsNode() {
  if (!noResultsNode) {
    noResultsNode = document.createElement("div");
    noResultsNode.className = "no-results hidden-by-search";
    document.querySelector(".main-content").appendChild(noResultsNode);
  }

  noResultsNode.textContent = getMessage("search.noResults");
}

function applyTranslations() {
  document.documentElement.lang = translations[currentLanguage].htmlLang;
  document.title = translations[currentLanguage].title;

  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const value = getMessage(node.dataset.i18n);
    if (typeof value === "string") {
      node.textContent = value;
    }
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((node) => {
    const value = getMessage(node.dataset.i18nPlaceholder);
    if (typeof value === "string") {
      node.setAttribute("placeholder", value);
    }
  });

  document.querySelectorAll("[data-i18n-alt]").forEach((node) => {
    const value = getMessage(node.dataset.i18nAlt);
    if (typeof value === "string") {
      node.setAttribute("alt", value);
    }
  });

  languageButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.lang === currentLanguage);
  });

  ensureNoResultsNode();
  applySearch(searchInput.value);
}

function applySearch(keyword) {
  const normalized = keyword.trim().toLowerCase();
  let matchCount = 0;

  searchableItems.forEach((item) => {
    const text = item.textContent.toLowerCase();
    const matched = !normalized || text.includes(normalized);
    item.classList.toggle("hidden-by-search", !matched);

    if (matched) {
      matchCount += 1;
      if (item.tagName === "DETAILS" && normalized) {
        item.open = true;
      }
    } else if (item.tagName === "DETAILS") {
      item.open = false;
    }
  });

  sections.forEach((section) => {
    const visibleChildren = section.querySelectorAll(".searchable:not(.hidden-by-search)");
    const hasVisible = visibleChildren.length > 0 || !normalized;
    section.classList.toggle("hidden-by-search", !hasVisible);
  });

  ensureNoResultsNode();
  noResultsNode.classList.toggle("hidden-by-search", matchCount > 0 || !normalized);
  setSearchStatus(keyword, matchCount);
}

function activateToc() {
  let currentId = sections[0]?.id;

  sections.forEach((section) => {
    if (section.classList.contains("hidden-by-search")) {
      return;
    }

    const rect = section.getBoundingClientRect();
    if (rect.top <= 140 && rect.bottom >= 140) {
      currentId = section.id;
    }
  });

  tocLinks.forEach((link) => {
    const isActive = link.getAttribute("href") === `#${currentId}`;
    link.classList.toggle("active", isActive);
  });
}

function setLanguage(language) {
  currentLanguage = language;
  localStorage.setItem("help-doc-language", language);
  applyTranslations();
}

function wireMediaFallbacks() {
  mediaAssets.forEach((img) => {
    const shell = img.closest(".media-shell");
    if (!shell) {
      return;
    }

    if (img.complete && img.naturalWidth > 0) {
      shell.classList.add("has-media");
    }

    img.addEventListener("load", () => {
      shell.classList.add("has-media");
    });

    img.addEventListener("error", () => {
      shell.classList.remove("has-media");
    });
  });
}

searchInput.addEventListener("input", (event) => {
  applySearch(event.target.value);
});

clearButton.addEventListener("click", () => {
  searchInput.value = "";
  applySearch("");
  searchInput.focus();
});

tagButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const keyword = currentLanguage === "zh"
      ? button.dataset.keywordZh || ""
      : button.dataset.keywordEn || "";

    searchInput.value = keyword;
    applySearch(keyword);
  });
});

languageButtons.forEach((button) => {
  button.addEventListener("click", () => {
    setLanguage(button.dataset.lang);
  });
});

faqItems.forEach((item) => {
  item.addEventListener("toggle", () => {
    if (!item.open) {
      return;
    }

    faqItems.forEach((other) => {
      if (other !== item) {
        other.open = false;
      }
    });
  });
});

window.addEventListener("scroll", activateToc, { passive: true });
window.addEventListener("load", () => {
  wireMediaFallbacks();
  applyTranslations();
  activateToc();
});
