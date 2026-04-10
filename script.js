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
      intro: "按“先开游戏、再开辅助、选择进入方式、完成授权、最后对齐桌布”的顺序操作，新用户会更容易一次设置成功。",
      step0: {
        title: "先开启游戏并放到后台",
        text: "请先打开游戏，并将游戏保持在后台运行状态，然后再返回启动辅助。这样后续授权与画面识别会更稳定，也更不容易选错应用。"
      },
      step1: {
        title: "按游戏方向选择进入方式",
        text: "根据游戏当前是横屏还是竖屏，选择对应的“横版进入”或“竖版进入”，避免进入后界面方向不匹配。",
        alt: "横版进入和竖版进入界面示意",
        caption: "根据游戏当前方向，选择对应的进入方式。"
      },
      step2: {
        title: "开启悬浮窗与录屏授权",
        text: "启动悬浮窗前，请先授予悬浮窗权限。开始录制时，如果系统提供“单个应用”授权选项，建议优先选择单个应用，减少无关画面被录入。",
        alt: "录屏单个应用授权界面示意",
        caption: "出现录屏授权时，建议优先选择单个应用授权。"
      },
      step3: {
        title: "进入游戏后完成桌布对齐",
        text: "进入游戏后先进行桌布对齐。对齐时请以球桌内侧边框为准，确认位置无误后再点击“保存”，这样后续辅助线会更稳定。",
        alt: "桌布对齐与保存界面示意",
        caption: "对齐时请以球桌内侧为准，完成后点击保存。"
      }
    },
    features: {
      kicker: "Feature Guide",
      title: "功能说明",
      intro: "这一部分按工具栏按钮的实际使用顺序来讲解，用户可以边看说明边对照配图快速理解各项功能。",
      item1: {
        title: "工具栏移动标",
        text: "点击后可展开或收起工具栏菜单；长按后可拖动工具栏位置，方便根据自己的操作习惯调整到合适区域。",
        b1: "点击可展开或收起工具栏",
        b2: "长按可拖动工具栏位置",
        b3: "适合根据手势习惯调整到顺手区域"
      },
      item2: {
        title: "辅助线隐藏标",
        text: "用于控制辅助线的显示状态，点击后可快速开启或关闭辅助线显示，方便在查看线路和观察原始画面之间灵活切换。",
        b1: "可快速关闭或开启辅助线",
        b2: "方便查看原始击球画面",
        b3: "适合在练习和观察之间快速切换"
      },
      item3: {
        title: "辅助线模式切换",
        text: "点击后可在三种辅助线模式之间循环切换，适用于不同的击球判断场景。",
        b1: "蛛网模式：会向 6 个袋口分别生成直线进袋参考线路，方便快速观察整体可进球方向。",
        b2: "手动翻袋模式：红标移动后会自动吸附到目标球球心，蓝标用于调整辅助线的翻袋方向。",
        b3: "直线模式：会根据当前目标球位置和出杆角度智能推荐线路，并提供直线与一库翻袋线路供选择；其中一库翻袋线路会受到设置中反射方案的影响。"
      },
      item4: {
        title: "通用设置",
        text: "用于调整桌布方案、反射逻辑和辅助线显示效果，是最常用的综合设置面板。",
        b1: "支持保存 3 套桌布方案，方便不同游戏快速切换",
        b2: "一般建议选择镜像反射，也可按需要调整反射补偿比例",
        b3: "可设置辅助线颜色、粗细、蚂蚁线样式，并支持开启调试模式或退出应用"
      },
      item5: {
        title: "图像识别设置",
        text: "用于切换不同游戏对应的识别方案，并调节 P1、P2 阈值，优化识别准确度。",
        b1: "内置“零一”到“零八”8 套识别参数；如果不清楚某款游戏适合使用哪一套参数，可以咨询作者",
        b2: "默认推荐参数为 P1:80、P2:30",
        b3: "如果出现漏球情况，可以尝试适当降低 P2 数值"
      },
      item6: {
        title: "画布设置调试",
        text: "点击该按钮后，可以重新唤起当前桌布的显示界面，方便再次检查和调整当前桌布配置。",
        b1: "可重新显示当前桌布调试界面",
        b2: "适合更换机位或重新检查桌布边界时使用",
        b3: "调整完成后建议再次确认并保存"
      },
      media: {
        toolbar: {
          alt: "工具栏功能说明截图",
          caption: "工具栏各按钮位置说明。"
        },
        general: {
          alt: "通用设置界面截图",
          caption: "通用设置界面示意，包括桌布、反射方案、颜色和调试开关。"
        },
        recognition: {
          alt: "图像识别设置界面截图",
          caption: "图像识别方案与 P1、P2 阈值设置示意。"
        }
      }
    },
    notices: {
      title: "注意事项",
      item1: {
        title: "温馨提示",
        p1: "本辅助线更像是一把用于判断线路的“尺子”。",
        p2: "只要你选择的进袋方向正确，工具提供的参考路径通常就是可靠的；而一杆是否能够真正打进，则还取决于你对力度、时机和杆法的控制。",
        p3: "也就是说，工具负责帮助你确认方向，而真正决定击球质量的，仍然是你的手感与实战经验。",
        p4: "建议把辅助线作为线路参考，而不是完全替代自己的判断。尤其是高难度翻袋球，更需要结合实际练习不断调整和熟悉。多练习，才能真正把方向、力度和杆法结合起来。"
      },
      item2: {
        title: "温馨提示",
        p1: "产品性质说明：本产品为基于纯图像识别技术实现的通用辅助线工具，不属于外挂程序，不修改游戏数据、不侵入游戏进程，也不针对任何单一游戏进行定制开发，主要用于台球线路参考与练习辅助。",
        p2: "平台规则提醒：部分游戏平台，例如天天台球等，可能明确禁止使用辅助线工具。为保障账号安全，请勿在此类平台使用，并建议在使用前先充分了解并遵守对应游戏平台的相关规则。",
        p3: "使用建议：为提高使用过程中的安全性，建议适当隐藏工具界面，并尽量避免向游戏平台授予“获取应用列表”等非必要隐私权限。",
        p4: "责任声明：如因个人原因违反游戏平台规则，或因使用方式不当导致账号受限、封号等问题，不属于本产品责任范围，也不在退款保障范围内。"
      }
    },
    faq: {
      title: "常见问题",
      item1: {
        q: "为什么桌布无法保存？",
        p1: "这种情况通常是因为进入方式选择错误。",
        p2: "竖屏游戏误选了“横版进入”，或者横屏游戏误选了“竖版进入”，都会导致桌布无法正常保存。",
        p3: "建议先确认当前游戏的实际方向，再重新选择对应的进入方式后重新操作。"
      },
      item2: {
        q: "为什么我看不到辅助线？",
        p1: "这种情况通常由以下几种原因导致：",
        p2: "1. 录屏授权时选错了应用。如果系统要求选择“单个应用”，必须选择当前正在运行的游戏，而不是其他界面。建议先打开游戏，再启动辅助；如果之前选错了，退出后重新授权即可。",
        p3: "2. 在辅助运行过程中又开启了手机自带录屏。很多手机自带录屏会占用画面采集权限，导致辅助无法继续识别画面，因此无法正常绘制辅助线。建议退出后重新授权，再重新启动辅助。",
        p4: "3. 图像识别参数选择不正确。不同游戏可能对应不同的识别方案，如果参数不匹配，就可能导致无法正确识别桌面和球体。如果不确定某款游戏对应哪套参数，可以咨询作者。",
        p5: "4. 微信小程序在 Android 16 系统下的兼容问题。如果你使用的是微信小程序，并且手机系统为 Android 16，可能还需要关闭“共享防护”，否则也会影响正常识别和画线。"
      },
      item3: {
        q: "为什么翻袋不准？",
        p1: "首先请确认当前选择的翻袋方案是否正确。",
        p2: "需要注意的是，翻袋线路只能作为辅助参考，不能完全替代实战判断，真正决定效果的仍然是实战经验，包括加塞、力度和出杆控制。",
        p3: "另外，有些游戏的物理引擎较为细致，反射结果不只取决于入射角，还会受到白球分离角的影响。",
        p4: "这种情况下，需要根据实时角度、力度和塞位灵活调整，不能完全照着辅助线机械执行。"
      },
      item4: {
        q: "为什么开着开着辅助会闪退？",
        p1: "这种情况大多数是因为手机性能较低，同时后台运行的应用过多，导致系统负载过高，进而自动清理后台进程，造成辅助闪退。",
        p2: "建议清理手机内存，关闭不必要的后台应用，并在系统耗电管理或电池设置中，将该软件设置为“无限制”或“不受限制”。"
      },
      item5: {
        q: "为什么辅助线会闪烁或抖动？",
        p1: "这种情况通常是因为手机 CPU 性能不足，导致画面识别和实时绘线不够稳定。",
        p2: "建议尽量使用性能更好的设备，优先选择 Android 15 及以上系统机型，同时尽量减少后台运行应用，给辅助功能留出更多性能空间。"
      }
    },
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
      intro: "Follow the order of launching the game first, then opening the assistant, choosing the entry mode, granting permissions, and finally aligning the table cloth for a smoother first-time setup.",
      step0: {
        title: "Launch the game first and leave it in the background",
        text: "Open the game first and keep it running in the background before starting the assistant. This makes the later authorization and screen recognition process more stable and reduces the chance of choosing the wrong app."
      },
      step1: {
        title: "Choose the entry mode based on screen orientation",
        text: "Select the matching landscape or portrait entry option based on the game's current orientation so the overlay layout stays aligned.",
        alt: "Landscape and portrait entry screen",
        caption: "Choose the matching entry mode for the current game orientation."
      },
      step2: {
        title: "Enable floating window and screen capture permissions",
        text: "Before launching the floating window, grant overlay permission first. When screen recording starts, choose the single-app authorization option if the system provides it so unrelated content is not captured.",
        alt: "Single-app screen recording authorization dialog",
        caption: "When prompted, single-app authorization is the recommended choice."
      },
      step3: {
        title: "Align the table cloth after entering the game",
        text: "After entering the game, align the table cloth first. Use the inner edge of the pool table as the reference and tap Save only after the position looks correct.",
        alt: "Table alignment and save screen",
        caption: "Use the inner edge of the table as the alignment reference, then tap Save."
      }
    },
    features: {
      kicker: "Feature Guide",
      title: "Features",
      intro: "This section follows the actual order of the toolbar buttons so users can read the description while comparing it with the screenshots.",
      item1: {
        title: "Toolbar move icon",
        text: "Tap to expand or collapse the toolbar menu. Press and hold to drag the toolbar so it stays in a more comfortable position.",
        b1: "Tap to expand or collapse the toolbar",
        b2: "Long press to drag the toolbar",
        b3: "Useful for adjusting the toolbar to your preferred hand position"
      },
      item2: {
        title: "Guide line visibility icon",
        text: "Controls whether the guide line is shown. Tap to quickly hide or show the line when switching between assisted view and the original game screen.",
        b1: "Quickly hides or shows the guide line",
        b2: "Makes it easier to inspect the original game screen",
        b3: "Useful for switching between observation and assisted aiming"
      },
      item3: {
        title: "Guide line mode switch",
        text: "Tap to cycle through three guide line modes, each suited to a different type of shot judgment.",
        b1: "Spider mode: generates a straight reference line toward all 6 pockets so users can quickly inspect overall potting options.",
        b2: "Manual bank mode: the red marker snaps to the target ball center, while the blue marker is used to adjust the bank direction.",
        b3: "Straight mode: recommends routes based on the current target ball position and cue angle, including direct and one-cushion bank options; the one-cushion route is affected by the selected reflection mode in settings."
      },
      item4: {
        title: "General settings",
        text: "This panel controls cloth presets, reflection behavior, and the appearance of the guide line. It is the most frequently used settings panel.",
        b1: "Supports up to 3 saved cloth presets for quick switching between games",
        b2: "Mirror reflection is usually recommended, but reflection compensation can be tuned when needed",
        b3: "Lets users adjust guide line color, thickness, ant-line style, debug mode, or exit the app"
      },
      item5: {
        title: "Image recognition settings",
        text: "Used to switch recognition presets for different games and fine-tune the P1 and P2 thresholds for better detection accuracy.",
        b1: "Includes 8 built-in recognition presets from 01 to 08. If you are unsure which preset a specific game should use, contact the author for guidance",
        b2: "The default recommended values are P1:80 and P2:30",
        b3: "If balls are missed during detection, try lowering the P2 value slightly"
      },
      item6: {
        title: "Canvas settings debug",
        text: "Tap this button to bring up the current cloth display again so the user can recheck and adjust the current cloth configuration.",
        b1: "Reopens the current cloth debug view",
        b2: "Useful after moving the device or rechecking the table boundary",
        b3: "After adjustments, confirm and save again"
      },
      media: {
        toolbar: {
          alt: "Toolbar function reference screenshot",
          caption: "Toolbar button positions and labels."
        },
        general: {
          alt: "General settings panel screenshot",
          caption: "General settings example, including cloth presets, reflection mode, colors, and debug controls."
        },
        recognition: {
          alt: "Image recognition settings panel screenshot",
          caption: "Image recognition preset selection and P1/P2 threshold controls."
        }
      }
    },
    notices: {
      title: "Important Notes",
      item1: {
        title: "Friendly Reminder",
        p1: "This guide line tool is best understood as a ruler for judging direction.",
        p2: "As long as the chosen pocketing direction is correct, the reference path it provides is generally reliable. Whether the ball actually drops, however, still depends on your control of power, timing, and cue technique.",
        p3: "In other words, the tool helps confirm direction, while the final shot quality still depends on your touch and real gameplay experience.",
        p4: "Use the guide line as a reference rather than a full replacement for your own judgment. This is especially important for difficult bank shots, which require repeated practice and adjustment. The best results come from combining direction, power, and cue control through real training."
      },
      item2: {
        title: "Friendly Reminder",
        p1: "Product nature: this product is a general-purpose guide line tool based purely on image recognition. It is not a cheat tool, does not modify game data, does not inject into game processes, and is not built for any single game. Its main purpose is route reference and practice support for billiards.",
        p2: "Platform rules: some game platforms, such as Tiantian Billiards, may strictly forbid assistive tools. To protect account safety, do not use this product on such platforms, and make sure you fully understand and follow the relevant platform rules before use.",
        p3: "Usage suggestion: for better safety during use, it is recommended to hide the tool interface when appropriate and avoid granting unnecessary privacy permissions such as access to the app list.",
        p4: "Liability statement: if an account is restricted or banned because the user violated platform rules or used the product improperly, it is not covered by this product's responsibility or refund policy."
      }
    },
    faq: {
      title: "FAQ",
      item1: {
        q: "Why can't the table cloth be saved?",
        p1: "This usually happens because the wrong entry mode was selected.",
        p2: "If a portrait game is opened with landscape entry, or a landscape game is opened with portrait entry, the cloth may fail to save.",
        p3: "Check the actual game orientation and choose the matching entry option before trying again."
      },
      item2: {
        q: "Why can't I see the guide line?",
        p1: "This issue is usually caused by one of the following reasons:",
        p2: "1. The wrong app was selected during screen-capture authorization. If the system asks you to choose a single app, make sure you select the current game, not another screen. Open the game first, then launch the assistant; if the wrong app was selected earlier, exit and authorize again.",
        p3: "2. The phone's built-in screen recorder was started while the assistant was already running. On many phones, the built-in recorder takes over screen capture, which prevents the assistant from recognizing the screen and drawing the guide line. Exit and authorize again before restarting the assistant.",
        p4: "3. The image recognition preset is incorrect. Different games may require different presets, and a mismatch can prevent correct table or ball recognition. If you are unsure which preset a specific game needs, contact the author.",
        p5: "4. WeChat mini-program compatibility on Android 16. If you are using a WeChat mini-program on Android 16, you may also need to disable sharing protection, otherwise recognition and guide-line rendering may still fail."
      },
      item3: {
        q: "Why is bank shot guidance inaccurate?",
        p1: "First confirm that the correct bank reflection mode is selected.",
        p2: "Bank routes should only be treated as reference guidance and cannot fully replace real gameplay judgment. In practice, the result still depends on spin, power, and cue control.",
        p3: "Some games use more detailed physics engines, where the rebound is affected not only by the incoming angle but also by the cue-ball separation angle.",
        p4: "In those cases, power and spin must be adjusted dynamically instead of following the line mechanically."
      },
      item4: {
        q: "Why does the assistant suddenly crash while running?",
        p1: "In most cases, this happens because the phone has limited performance and too many apps are running in the background. When system load becomes too high, Android may kill background apps automatically, including the assistant.",
        p2: "Try clearing memory, closing unnecessary background apps, and changing the app's battery setting to unrestricted."
      },
      item5: {
        q: "Why does the guide line flicker or shake?",
        p1: "This usually means the phone's CPU performance is not strong enough for stable real-time recognition and line rendering.",
        p2: "A better-performing device is recommended, ideally running Android 15 or above. Also try reducing background activity so more resources remain available for the assistant."
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
  const mainContent = document.querySelector(".main-content");
  if (!mainContent) {
    return;
  }

  if (!noResultsNode) {
    noResultsNode = document.createElement("div");
    noResultsNode.className = "no-results hidden-by-search";
    mainContent.appendChild(noResultsNode);
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

  if (searchInput) {
    ensureNoResultsNode();
    applySearch(searchInput.value);
  }
}

function applySearch(keyword) {
  if (!searchInput) {
    return;
  }

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

if (searchInput) {
  searchInput.addEventListener("input", (event) => {
    applySearch(event.target.value);
  });
}

if (clearButton && searchInput) {
  clearButton.addEventListener("click", () => {
    searchInput.value = "";
    applySearch("");
    searchInput.focus();
  });
}

if (searchInput) {
  tagButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const keyword = currentLanguage === "zh"
        ? button.dataset.keywordZh || ""
        : button.dataset.keywordEn || "";

      searchInput.value = keyword;
      applySearch(keyword);
    });
  });
}

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
