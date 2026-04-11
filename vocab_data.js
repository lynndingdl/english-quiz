const vocabData = [
  {
    "word": "limelight",
    "meaning": "聚光灯；公众瞩目的中心",
    "pos": "n.",
    "sentence": "The limelight is important."
  },
  {
    "word": "lineage",
    "meaning": "血统；世系",
    "pos": "n.",
    "sentence": "The lineage is important."
  },
  {
    "word": "mastery",
    "meaning": "掌握；精通",
    "pos": "n.",
    "sentence": "The mastery is important."
  },
  {
    "word": "materialism",
    "meaning": "唯物主义；享乐主义",
    "pos": "n.",
    "sentence": "The materialism is important."
  },
  {
    "word": "meager",
    "meaning": "贫乏的；瘦的",
    "pos": "adj.",
    "sentence": "This is a meager example."
  },
  {
    "word": "measurable",
    "meaning": "可测量的；显著的",
    "pos": "adj.",
    "sentence": "This is a measurable example."
  },
  {
    "word": "medieval",
    "meaning": "中世纪的",
    "pos": "adj.",
    "sentence": "This is a medieval example."
  },
  {
    "word": "mediocre",
    "meaning": "平庸的",
    "pos": "adj.",
    "sentence": "This is a mediocre example."
  },
  {
    "word": "menace",
    "meaning": "威胁",
    "pos": "v./n.",
    "sentence": "The menace is important."
  },
  {
    "word": "merciful",
    "meaning": "仁慈的",
    "pos": "adj.",
    "sentence": "This is a merciful example."
  },
  {
    "word": "merit",
    "meaning": "优点；功劳",
    "pos": "n./v.",
    "sentence": "The merit is important."
  },
  {
    "word": "metaphor",
    "meaning": "暗喻",
    "pos": "n.",
    "sentence": "The metaphor is important."
  },
  {
    "word": "meticulous",
    "meaning": "细心的；极注意细节的",
    "pos": "adj.",
    "sentence": "This is a meticulous example."
  },
  {
    "word": "metropolis",
    "meaning": "大都市",
    "pos": "n.",
    "sentence": "The metropolis is important."
  },
  {
    "word": "migrate",
    "meaning": "迁移；移居",
    "pos": "v.",
    "sentence": "We need to migrate carefully."
  },
  {
    "word": "millennium",
    "meaning": "一千年",
    "pos": "n.",
    "sentence": "The millennium is important."
  },
  {
    "word": "misery",
    "meaning": "苦难",
    "pos": "n.",
    "sentence": "The misery is important."
  },
  {
    "word": "missionary",
    "meaning": "传教士",
    "pos": "n.",
    "sentence": "The missionary is important."
  },
  {
    "word": "mobilize",
    "meaning": "动员",
    "pos": "v.",
    "sentence": "We need to mobilize carefully."
  },
  {
    "word": "modest",
    "meaning": "谦虚的；适度的",
    "pos": "adj.",
    "sentence": "This is a modest example."
  },
  {
    "word": "modesty",
    "meaning": "谦虚",
    "pos": "n.",
    "sentence": "The modesty is important."
  },
  {
    "word": "momentary",
    "meaning": "瞬间的",
    "pos": "adj.",
    "sentence": "This is a momentary example."
  },
  {
    "word": "morale",
    "meaning": "士气",
    "pos": "n.",
    "sentence": "The morale is important."
  },
  {
    "word": "mortal",
    "meaning": "致命的；凡人",
    "pos": "adj./n.",
    "sentence": "The mortal is important."
  },
  {
    "word": "motif",
    "meaning": "主题；动机",
    "pos": "n.",
    "sentence": "The motif is important."
  },
  {
    "word": "mourn",
    "meaning": "哀悼",
    "pos": "v.",
    "sentence": "We need to mourn carefully."
  },
  {
    "word": "myriad",
    "meaning": "无数的",
    "pos": "adj.",
    "sentence": "This is a myriad example."
  },
  {
    "word": "nasty",
    "meaning": "令人厌恶的；下流的",
    "pos": "adj.",
    "sentence": "This is a nasty example."
  },
  {
    "word": "patriot",
    "meaning": "爱国者",
    "pos": "n.",
    "sentence": "The patriot is important."
  },
  {
    "word": "patriotic",
    "meaning": "爱国者的",
    "pos": "adj.",
    "sentence": "This is a patriotic example."
  },
  {
    "word": "patrol",
    "meaning": "巡逻",
    "pos": "v./n.",
    "sentence": "The patrol is important."
  },
  {
    "word": "patronage",
    "meaning": "资助；光顾",
    "pos": "n.",
    "sentence": "The patronage is important."
  },
  {
    "word": "paucity",
    "meaning": "缺乏",
    "pos": "n.",
    "sentence": "The paucity is important."
  },
  {
    "word": "pavement",
    "meaning": "人行道",
    "pos": "n.",
    "sentence": "The pavement is important."
  },
  {
    "word": "pedal",
    "meaning": "踏板；骑自行车",
    "pos": "n./v.",
    "sentence": "The pedal is important."
  },
  {
    "word": "pedant",
    "meaning": "迂腐的人；学究",
    "pos": "n.",
    "sentence": "The pedant is important."
  },
  {
    "word": "pedestrian",
    "meaning": "行人；徒步的；乏味的",
    "pos": "n./adj.",
    "sentence": "The pedestrian is important."
  },
  {
    "word": "pedigree",
    "meaning": "血统；家谱",
    "pos": "n.",
    "sentence": "The pedigree is important."
  },
  {
    "word": "predicament",
    "meaning": "困境",
    "pos": "n.",
    "sentence": "The predicament is important."
  },
  {
    "word": "preeminent",
    "meaning": "卓越的；杰出的",
    "pos": "adj.",
    "sentence": "This is a preeminent example."
  },
  {
    "word": "preliminary",
    "meaning": "初步的",
    "pos": "adj.",
    "sentence": "This is a preliminary example."
  },
  {
    "word": "preposterous",
    "meaning": "荒谬的",
    "pos": "adj.",
    "sentence": "This is a preposterous example."
  },
  {
    "word": "preservative",
    "meaning": "防腐剂",
    "pos": "n.",
    "sentence": "The preservative is important."
  },
  {
    "word": "presidency",
    "meaning": "总统任期",
    "pos": "n.",
    "sentence": "The presidency is important."
  },
  {
    "word": "presumption",
    "meaning": "假定；放肆",
    "pos": "n.",
    "sentence": "The presumption is important."
  },
  {
    "word": "pretentious",
    "meaning": "自命不凡的",
    "pos": "adj.",
    "sentence": "This is a pretentious example."
  },
  {
    "word": "pretext",
    "meaning": "借口",
    "pos": "n.",
    "sentence": "The pretext is important."
  },
  {
    "word": "primate",
    "meaning": "灵长类",
    "pos": "n.",
    "sentence": "The primate is important."
  },
  {
    "word": "princely",
    "meaning": "豪华的",
    "pos": "adj.",
    "sentence": "This is a princely example."
  },
  {
    "word": "proactive",
    "meaning": "积极主动的；先发制人的",
    "pos": "adj.",
    "sentence": "This is a proactive example."
  },
  {
    "word": "probation",
    "meaning": "缓刑；见习期",
    "pos": "n.",
    "sentence": "The probation is important."
  },
  {
    "word": "problematic",
    "meaning": "成问题的；存疑的",
    "pos": "adj.",
    "sentence": "This is a problematic example."
  },
  {
    "word": "process",
    "meaning": "过程；处理",
    "pos": "n./v.",
    "sentence": "The process is important."
  },
  {
    "word": "procession",
    "meaning": "队伍",
    "pos": "n.",
    "sentence": "The procession is important."
  },
  {
    "word": "procrastinate",
    "meaning": "拖延",
    "pos": "v.",
    "sentence": "We need to procrastinate carefully."
  },
  {
    "word": "profane",
    "meaning": "世俗的；亵渎的",
    "pos": "adj.",
    "sentence": "This is a profane example."
  },
  {
    "word": "proficiency",
    "meaning": "熟练",
    "pos": "n.",
    "sentence": "The proficiency is important."
  },
  {
    "word": "profuse",
    "meaning": "丰富的",
    "pos": "adj.",
    "sentence": "This is a profuse example."
  },
  {
    "word": "prognosis",
    "meaning": "预测；预后",
    "pos": "n.",
    "sentence": "The prognosis is important."
  },
  {
    "word": "progressive",
    "meaning": "进步的",
    "pos": "adj.",
    "sentence": "This is a progressive example."
  },
  {
    "word": "prohibitive",
    "meaning": "禁止性的；昂贵的",
    "pos": "adj.",
    "sentence": "This is a prohibitive example."
  },
  {
    "word": "proliferate",
    "meaning": "激增；繁殖",
    "pos": "v.",
    "sentence": "We need to proliferate carefully."
  },
  {
    "word": "prolific",
    "meaning": "多产的",
    "pos": "adj.",
    "sentence": "This is a prolific example."
  },
  {
    "word": "prologue",
    "meaning": "序言",
    "pos": "n.",
    "sentence": "The prologue is important."
  },
  {
    "word": "promising",
    "meaning": "有前途的",
    "pos": "adj.",
    "sentence": "This is a promising example."
  },
  {
    "word": "promote",
    "meaning": "提升；促进；促销",
    "pos": "v.",
    "sentence": "We need to promote carefully."
  },
  {
    "word": "promotion",
    "meaning": "提升；促销",
    "pos": "n.",
    "sentence": "The promotion is important."
  },
  {
    "word": "prone",
    "meaning": "易于……的；俯卧的",
    "pos": "adj.",
    "sentence": "This is a prone example."
  },
  {
    "word": "pronounced",
    "meaning": "显著的",
    "pos": "adj.",
    "sentence": "This is a pronounced example."
  },
  {
    "word": "propellant",
    "meaning": "推进剂",
    "pos": "n.",
    "sentence": "The propellant is important."
  },
  {
    "word": "propensity",
    "meaning": "倾向",
    "pos": "n.",
    "sentence": "The propensity is important."
  },
  {
    "word": "property",
    "meaning": "财产；属性",
    "pos": "n.",
    "sentence": "The property is important."
  },
  {
    "word": "prophecy",
    "meaning": "预言",
    "pos": "n.",
    "sentence": "The prophecy is important."
  },
  {
    "word": "prophesy",
    "meaning": "预言",
    "pos": "v.",
    "sentence": "We need to prophesy carefully."
  },
  {
    "word": "prophetic",
    "meaning": "预言的",
    "pos": "adj.",
    "sentence": "This is a prophetic example."
  },
  {
    "word": "prophylactic",
    "meaning": "预防性的",
    "pos": "adj.",
    "sentence": "This is a prophylactic example."
  },
  {
    "word": "proprietary",
    "meaning": "专有的",
    "pos": "adj.",
    "sentence": "This is a proprietary example."
  },
  {
    "word": "propriety",
    "meaning": "得体；礼节",
    "pos": "n.",
    "sentence": "The propriety is important."
  },
  {
    "word": "propulsion",
    "meaning": "推进力",
    "pos": "n.",
    "sentence": "The propulsion is important."
  },
  {
    "word": "prosaic",
    "meaning": "平淡的；乏味的",
    "pos": "adj.",
    "sentence": "This is a prosaic example."
  },
  {
    "word": "masterpiece",
    "meaning": "杰作",
    "pos": "n.",
    "sentence": "The masterpiece is important."
  },
  {
    "word": "maturity",
    "meaning": "成熟",
    "pos": "n.",
    "sentence": "The maturity is important."
  },
  {
    "word": "mechanic",
    "meaning": "技工",
    "pos": "n.",
    "sentence": "The mechanic is important."
  },
  {
    "word": "mediate",
    "meaning": "调解；居中",
    "pos": "v.",
    "sentence": "We need to mediate carefully."
  },
  {
    "word": "medication",
    "meaning": "药物治疗；药物",
    "pos": "n.",
    "sentence": "The medication is important."
  },
  {
    "word": "medicine",
    "meaning": "医学；内服药",
    "pos": "n.",
    "sentence": "The medicine is important."
  },
  {
    "word": "meditate",
    "meaning": "沉思；冥想",
    "pos": "v.",
    "sentence": "We need to meditate carefully."
  },
  {
    "word": "membrane",
    "meaning": "膜",
    "pos": "n.",
    "sentence": "The membrane is important."
  },
  {
    "word": "memorable",
    "meaning": "值得纪念的",
    "pos": "adj.",
    "sentence": "This is a memorable example."
  },
  {
    "word": "memorandum",
    "meaning": "备忘录",
    "pos": "n.",
    "sentence": "The memorandum is important."
  },
  {
    "word": "memorial",
    "meaning": "纪念碑；纪念的",
    "pos": "n./adj.",
    "sentence": "The memorial is important."
  },
  {
    "word": "mentality",
    "meaning": "心理；心态",
    "pos": "n.",
    "sentence": "The mentality is important."
  },
  {
    "word": "merchandise",
    "meaning": "商品；买卖",
    "pos": "n./v.",
    "sentence": "The merchandise is important."
  },
  {
    "word": "merely",
    "meaning": "仅仅",
    "pos": "adv.",
    "sentence": "We need to merely carefully."
  },
  {
    "word": "merge",
    "meaning": "合并",
    "pos": "v.",
    "sentence": "We need to merge carefully."
  },
  {
    "word": "messenger",
    "meaning": "信使",
    "pos": "n.",
    "sentence": "The messenger is important."
  },
  {
    "word": "metallic",
    "meaning": "金属的",
    "pos": "adj.",
    "sentence": "This is a metallic example."
  },
  {
    "word": "metric",
    "meaning": "公制的",
    "pos": "adj.",
    "sentence": "This is a metric example."
  },
  {
    "word": "microscope",
    "meaning": "显微镜",
    "pos": "n.",
    "sentence": "The microscope is important."
  },
  {
    "word": "midst",
    "meaning": "中间",
    "pos": "n.",
    "sentence": "The midst is important."
  }
];