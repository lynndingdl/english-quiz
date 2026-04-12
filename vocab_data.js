// 英语单词测验数据 - 第2轮
// 包含50个重点单词（按下次复习时间和字母排序）

const vocabData = [
  {
    word: "etiquette",
    meaning: "礼节；礼仪",
    pos: "n.",
    sentence: "Understanding proper business etiquette is essential for successful professional interactions.",
    sentenceCn: "了解正确的商务礼仪对于成功的职业交往至关重要。"
  },
  {
    word: "evacuate",
    meaning: "撤离；疏散",
    pos: "v.",
    sentence: "Residents were ordered to evacuate the area due to the approaching hurricane.",
    sentenceCn: "居民被命令撤离该地区，因为飓风正在逼近。"
  },
  {
    word: "evade",
    meaning: "逃避；避开",
    pos: "v.",
    sentence: "The suspect tried to evade the police by fleeing through the back alley.",
    sentenceCn: "嫌疑人试图通过后巷逃跑来躲避警察。"
  },
  {
    word: "evaporate",
    meaning: "蒸发；消失",
    pos: "v.",
    sentence: "The water in the shallow pond quickly evaporated under the scorching sun.",
    sentenceCn: "浅池塘里的水在烈日下迅速蒸发。",
    actualWord: "evaporated"
  },
  {
    word: "evident",
    meaning: "明显的",
    pos: "adj.",
    sentence: "It was evident from his expression that he was deeply concerned about the situation.",
    sentenceCn: "从他的表情可以明显看出他对局势深感忧虑。"
  },
  {
    word: "expertise",
    meaning: "专业知识；专长",
    pos: "n.",
    sentence: "The company hired a consultant with extensive expertise in international marketing.",
    sentenceCn: "公司聘请了一位在国际营销方面有丰富专业知识的顾问。"
  },
  {
    word: "extravagant",
    meaning: "奢侈的；铺张的",
    pos: "adj.",
    sentence: "The celebrity's extravagant lifestyle was often featured in tabloid magazines.",
    sentenceCn: "这位名人的奢侈生活方式经常出现在八卦杂志上。"
  },
  {
    word: "faculty",
    meaning: "全体教员；能力",
    pos: "n.",
    sentence: "The university faculty held a meeting to discuss the new curriculum changes.",
    sentenceCn: "大学全体教员召开会议讨论新的课程改革。"
  },
  {
    word: "famine",
    meaning: "饥荒",
    pos: "n.",
    sentence: "The prolonged drought led to a severe famine affecting millions of people.",
    sentenceCn: "持续的干旱导致了严重的饥荒，影响了数百万人。"
  },
  {
    word: "hostage",
    meaning: "人质",
    pos: "n.",
    sentence: "The negotiations focused on securing the safe release of the hostages.",
    sentenceCn: "谈判的重点是确保人质安全获释。"
  },
  {
    word: "household",
    meaning: "家庭的；家务",
    pos: "n./adj.",
    sentence: "Household appliances have become increasingly smart and energy-efficient.",
    sentenceCn: "家用电器变得越来越智能和节能。"
  },
  {
    word: "ignite",
    meaning: "点燃；引发",
    pos: "v.",
    sentence: "The controversial policy ignited a heated debate among citizens.",
    sentenceCn: "这项有争议的政策引发了市民之间的激烈辩论。"
  },
  {
    word: "immediate",
    meaning: "立即的；直接的",
    pos: "adj.",
    sentence: "The situation required immediate attention from the emergency response team.",
    sentenceCn: "这种情况需要紧急反应小组立即关注。"
  },
  {
    word: "immense",
    meaning: "巨大的；无限的",
    pos: "adj.",
    sentence: "The project had an immense impact on the local community's economic development.",
    sentenceCn: "该项目对当地社区的经济发展产生了巨大影响。"
  },
  {
    word: "impart",
    meaning: "传授；告知",
    pos: "v.",
    sentence: "Experienced teachers impart valuable knowledge and skills to their students.",
    sentenceCn: "经验丰富的教师向学生传授宝贵的知识和技能。"
  },
  {
    word: "impeach",
    meaning: "弹劾；控告",
    pos: "v.",
    sentence: "The opposition party attempted to impeach the president over corruption allegations.",
    sentenceCn: "反对党试图因腐败指控弹劾总统。"
  },
  {
    word: "impetus",
    meaning: "动力；推动力",
    pos: "n.",
    sentence: "The government's new policy provided the impetus for renewable energy development.",
    sentenceCn: "政府的新政策为可再生能源发展提供了动力。"
  },
  {
    word: "impose",
    meaning: "强加；征收",
    pos: "v.",
    sentence: "The government decided to impose stricter regulations on environmental protection.",
    sentenceCn: "政府决定对环境保护实施更严格的法规。"
  },
  {
    word: "impoverish",
    meaning: "使贫困；使枯竭",
    pos: "v.",
    sentence: "Continuous natural disasters can impoverish an entire region's economy.",
    sentenceCn: "持续的自然灾害可能使整个地区的经济陷入贫困。"
  },
  {
    word: "inaccessible",
    meaning: "达不到的；难接近的",
    pos: "adj.",
    sentence: "The remote mountain village remained inaccessible during the winter months.",
    sentenceCn: "这个偏远的山村在冬季仍然无法到达。"
  },
  {
    word: "inaugurate",
    meaning: "就职；开创",
    pos: "v.",
    sentence: "The newly elected president will inaugurate a series of reforms next month.",
    sentenceCn: "新当选的总统下个月将开启一系列改革。"
  },
  {
    word: "incentive",
    meaning: "激励；动机",
    pos: "n.",
    sentence: "The company offered financial incentives to encourage employee innovation.",
    sentenceCn: "公司提供经济激励以鼓励员工创新。"
  },
  {
    word: "incidentally",
    meaning: "顺便提一句；偶然地",
    pos: "adv.",
    sentence: "Incidentally, I ran into our former colleague at the conference yesterday.",
    sentenceCn: "顺便说一句，我昨天在会议上遇到了我们以前的同事。"
  },
  {
    word: "incompatible",
    meaning: "不兼容的；不相容的",
    pos: "adj.",
    sentence: "The two software systems were incompatible and could not share data.",
    sentenceCn: "这两个软件系统不兼容，无法共享数据。"
  },
  {
    word: "incur",
    meaning: "招致；遭受",
    pos: "v.",
    sentence: "The company incurred significant losses due to the market downturn.",
    sentenceCn: "由于市场低迷，公司遭受了重大损失。"
  },
  {
    word: "indefinite",
    meaning: "不确定的；无限期的",
    pos: "adj.",
    sentence: "The committee postponed the decision for an indefinite period.",
    sentenceCn: "委员会将决定无限期推迟。"
  },
  {
    word: "indigenous",
    meaning: "本土的；土著的",
    pos: "adj.",
    sentence: "Many indigenous communities work to preserve their traditional cultures.",
    sentenceCn: "许多土著社区致力于保护他们的传统文化。"
  },
  {
    word: "indignant",
    meaning: "愤慨的；义愤的",
    pos: "adj.",
    sentence: "The citizens became indignant when they learned about the unfair treatment.",
    sentenceCn: "当市民们得知不公平待遇时，他们感到愤慨。"
  },
  {
    word: "indispensable",
    meaning: "不可缺少的",
    pos: "adj.",
    sentence: "Smartphones have become indispensable tools in modern daily life.",
    sentenceCn: "智能手机已成为现代日常生活中不可缺少的工具。"
  },
  {
    word: "induce",
    meaning: "诱导；引起",
    pos: "v.",
    sentence: "Certain medications can induce sleep as a side effect.",
    sentenceCn: "某些药物可能会引起嗜睡作为副作用。"
  },
  {
    word: "indulge",
    meaning: "纵容；沉迷",
    pos: "v.",
    sentence: "She occasionally indulges in chocolate despite her strict diet.",
    sentenceCn: "尽管严格控制饮食，她偶尔还是会沉迷于巧克力。"
  },
  {
    word: "inevitable",
    meaning: "不可避免的",
    pos: "adj.",
    sentence: "Change is inevitable in any organization's development process.",
    sentenceCn: "在任何组织的发展过程中，变化都是不可避免的。"
  },
  {
    word: "inflict",
    meaning: "造成；施加",
    pos: "v.",
    sentence: "The severe storm inflicted extensive damage on coastal communities.",
    sentenceCn: "严重的风暴给沿海社区造成了广泛破坏。"
  },
  {
    word: "infringe",
    meaning: "侵犯；违反",
    pos: "v.",
    sentence: "The company was sued for allegedly infringing on another's patent rights.",
    sentenceCn: "该公司因涉嫌侵犯他人的专利权而被起诉。",
    actualWord: "infringing"
  },
  {
    word: "ingenious",
    meaning: " ingenious独创的；精巧的",
    pos: "adj.",
    sentence: "The engineer came up with an ingenious solution to the complex problem.",
    sentenceCn: "工程师想出了一个巧妙的解决方案来解决这个复杂问题。"
  },
  {
    word: "inhibit",
    meaning: "抑制；阻止",
    pos: "v.",
    sentence: "High interest rates can inhibit consumer spending and economic growth.",
    sentenceCn: "高利率可能会抑制消费者支出和经济增长。"
  },
  {
    word: "initiative",
    meaning: "主动性；倡议",
    pos: "n.",
    sentence: "The government launched a new initiative to reduce carbon emissions.",
    sentenceCn: "政府发起了一项减少碳排放的新倡议。"
  },
  {
    word: "innumerable",
    meaning: "无数的；数不清的",
    pos: "adj.",
    sentence: "There are innumerable stars visible in the night sky from rural areas.",
    sentenceCn: "从农村地区可以看到夜空中无数的星星。"
  },
  {
    word: "inscribe",
    meaning: "刻写；题写",
    pos: "v.",
    sentence: "The author inscribed a personal message on the title page of the book.",
    sentenceCn: "作者在书的扉页上题写了个人信息。"
  },
  {
    word: "insomnia",
    meaning: "失眠症",
    pos: "n.",
    sentence: "Chronic insomnia can have serious effects on both physical and mental health.",
    sentenceCn: "慢性失眠症会对身心健康产生严重影响。"
  },
  {
    word: "insult",
    meaning: "侮辱；冒犯",
    pos: "n./v.",
    sentence: "Making derogatory comments about someone's appearance is an insult.",
    sentenceCn: "对某人的外表发表贬损言论是一种侮辱。"
  },
  {
    word: "intact",
    meaning: "完整的；完好无损的",
    pos: "adj.",
    sentence: "Despite the earthquake, the historic building remained largely intact.",
    sentenceCn: "尽管发生了地震，这座历史建筑仍然基本完好无损。"
  },
  {
    word: "eccentric",
    meaning: "古怪的；异乎寻常的",
    pos: "adj.",
    sentence: "The eccentric artist was known for his unconventional lifestyle and bizarre paintings.",
    sentenceCn: "这位古怪的艺术家以其非传统的生活方式和奇异的画作而闻名。"
  },
  {
    word: "fatigue",
    meaning: "疲劳；疲乏",
    pos: "n.",
    sentence: "Prolonged work without adequate rest can lead to severe fatigue.",
    sentenceCn: "长时间工作而没有适当休息会导致严重疲劳。"
  },
  {
    word: "feat",
    meaning: "壮举；功绩",
    pos: "n.",
    sentence: "Completing the marathon in under three hours was an impressive feat.",
    sentenceCn: "在三个小时内完成马拉松是一项令人印象深刻的壮举。"
  },
  {
    word: "feeble",
    meaning: "虚弱的；无力的",
    pos: "adj.",
    sentence: "The patient made a feeble attempt to sit up in bed.",
    sentenceCn: "病人虚弱地试图从床上坐起来。"
  },
  {
    word: "feminine",
    meaning: "女性的；女性化的",
    pos: "adj.",
    sentence: "Many cultures have different expectations for feminine behavior.",
    sentenceCn: "许多文化对女性化的行为有不同的期望。"
  },
  {
    word: "fiscal",
    meaning: "财政的；会计的",
    pos: "adj.",
    sentence: "The government announced new fiscal policies to stimulate economic growth.",
    sentenceCn: "政府宣布了新的财政政策以刺激经济增长。"
  },
  {
    word: "fixture",
    meaning: "固定装置；固定设施",
    pos: "n.",
    sentence: "Lighting fixtures can significantly affect the ambiance of a room.",
    sentenceCn: "照明设备可以显著影响房间的氛围。"
  },
  {
    word: "flatter",
    meaning: "奉承；使高兴",
    pos: "v.",
    sentence: "Some people flatter others to gain favor or advantage.",
    sentenceCn: "有些人奉承他人以获得好感或优势。"
  }
];
