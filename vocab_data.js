const vocabData = [
  {
    word: "literacy",
    meaning: "识字；文化修养",
    sentence: "Improving literacy rates is essential for economic development in developing countries.",
    sentenceCn: "提高识字率对发展中国家的经济发展至关重要。"
  },
  {
    word: "notary",
    meaning: "公证人",
    sentence: "A notary public is authorized to witness and certify legal documents.",
    sentenceCn: "公证人被授权见证和认证法律文件。"
  },
  {
    word: "offend",
    actualWord: "offended",
    meaning: "冒犯；违反",
    sentence: "His insensitive comments offended many people at the meeting.",
    sentenceCn: "他不敏感的言论冒犯了会议上的许多人。"
  },
  {
    word: "ointment",
    meaning: "软膏",
    sentence: "The doctor prescribed a special ointment to treat the skin infection.",
    sentenceCn: "医生开了一种特殊的药膏来治疗皮肤感染。"
  },
  {
    word: "ominous",
    meaning: "不祥的",
    sentence: "The dark clouds and strong winds were ominous signs of an approaching storm.",
    sentenceCn: "乌云和狂风是暴风雨即将来临的不祥之兆。"
  },
  {
    word: "omission",
    meaning: "遗漏；忽略",
    sentence: "The omission of key evidence weakened the prosecution's case significantly.",
    sentenceCn: "遗漏关键证据严重削弱了控方的案件。"
  },
  {
    word: "onerous",
    meaning: "繁重的；艰巨的",
    sentence: "The onerous task of organizing the conference fell on her shoulders.",
    sentenceCn: "组织会议这项繁重的任务落在了她的肩上。"
  },
  {
    word: "onlooker",
    actualWord: "Onlookers",
    meaning: "旁观者",
    sentence: "Onlookers gathered at the scene of the accident to see what had happened.",
    sentenceCn: "旁观者聚集在事故现场查看发生了什么。"
  },
  {
    word: "opaque",
    meaning: "不透明的；晦涩的",
    sentence: "The opaque glass provided privacy while still allowing light to pass through.",
    sentenceCn: "不透明玻璃提供了隐私，同时仍然允许光线通过。"
  },
  {
    word: "limelight",
    meaning: "聚光灯；公众瞩目的中心",
    sentence: "After years of hard work, she finally stepped into the limelight with her breakthrough performance.",
    sentenceCn: "经过多年的努力，她终于凭借突破性表演进入聚光灯下。"
  },
  {
    word: "lineage",
    meaning: "血统；世系",
    sentence: "The royal family traces its lineage back several centuries to the founding of the dynasty.",
    sentenceCn: "王室将其血统追溯到几个世纪前王朝的建立。"
  },
  {
    word: "mastery",
    meaning: "掌握；精通",
    sentence: "Achieving mastery in any field requires dedication, practice, and patience.",
    sentenceCn: "在任何领域达到精通都需要奉献、练习和耐心。"
  },
  {
    word: "materialism",
    meaning: "唯物主义；享乐主义",
    sentence: "Some critics argue that modern society is too focused on materialism and consumerism.",
    sentenceCn: "一些批评者认为现代社会过于注重物质主义和消费主义。"
  },
  {
    word: "meager",
    meaning: "贫乏的；瘦的",
    sentence: "The family survived on a meager income, barely covering their basic needs.",
    sentenceCn: "这个家庭靠微薄的收入维持生计，勉强支付基本需求。"
  },
  {
    word: "measurable",
    meaning: "可测量的；显著的",
    sentence: "The project has made measurable progress toward its goals over the past year.",
    sentenceCn: "该项目在过去一年中朝着其目标取得了可衡量的进展。"
  },
  {
    word: "medieval",
    meaning: "中世纪的",
    sentence: "The medieval castle attracts thousands of tourists every year with its rich history.",
    sentenceCn: "这座中世纪城堡以其丰富的历史每年吸引成千上万的游客。"
  },
  {
    word: "mediocre",
    meaning: "平庸的",
    sentence: "The restaurant received mediocre reviews, with critics noting inconsistent food quality.",
    sentenceCn: "这家餐厅收到了平庸的评价，评论家指出食物质量不稳定。"
  },
  {
    word: "menace",
    meaning: "威胁",
    sentence: "Pollution continues to be a menace to marine life and ecosystems worldwide.",
    sentenceCn: "污染继续威胁着全世界的海洋生物和生态系统。"
  },
  {
    word: "merciful",
    meaning: "仁慈的",
    sentence: "The judge was merciful and granted the defendant a reduced sentence.",
    sentenceCn: "法官仁慈，给予被告减轻判决。"
  },
  {
    word: "merit",
    meaning: "优点；功劳",
    sentence: "The proposal has considerable merit and deserves serious consideration.",
    sentenceCn: "该提议具有相当大的优点，值得认真考虑。"
  },
  {
    word: "metaphor",
    meaning: "暗喻",
    sentence: "The poet used a beautiful metaphor to describe the passage of time.",
    sentenceCn: "诗人用了一个美丽的隐喻来描述时间的流逝。"
  },
  {
    word: "meticulous",
    meaning: "细心的；极注意细节的",
    sentence: "The scientist was meticulous in recording every detail of the experiment.",
    sentenceCn: "科学家一丝不苟地记录实验的每一个细节。"
  },
  {
    word: "metropolis",
    meaning: "大都市",
    sentence: "New York City is a bustling metropolis that never sleeps, attracting millions of visitors annually.",
    sentenceCn: "纽约是一个从不睡眠的繁华大都市，每年吸引数百万游客。"
  },
  {
    word: "migrate",
    meaning: "迁移；移居",
    sentence: "Many birds migrate south during winter to escape the cold weather and find food.",
    sentenceCn: "许多鸟类在冬季迁徙南方以躲避寒冷天气并寻找食物。"
  },
  {
    word: "millennium",
    meaning: "一千年",
    sentence: "The new millennium brought significant technological advancements and cultural changes.",
    sentenceCn: "新千年带来了重大的技术进步和文化变革。"
  },
  {
    word: "misery",
    meaning: "苦难",
    sentence: "The war brought misery to millions of people, destroying homes and lives.",
    sentenceCn: "战争给数百万人带来了痛苦，摧毁了家园和生命。"
  },
  {
    word: "missionary",
    meaning: "传教士",
    sentence: "The missionary traveled to remote areas to spread religious teachings.",
    sentenceCn: "传教士前往偏远地区传播宗教教义。"
  },
  {
    word: "mobilize",
    meaning: "动员",
    sentence: "The government worked to mobilize resources for disaster relief efforts.",
    sentenceCn: "政府努力调动资源进行灾害救援工作。"
  },
  {
    word: "modest",
    meaning: "谦虚的；适度的",
    sentence: "Despite his wealth, he lived a modest lifestyle and donated generously to charity.",
    sentenceCn: "尽管富有，他过着朴素的生活方式，并慷慨地向慈善机构捐款。"
  },
  {
    word: "modesty",
    meaning: "谦虚",
    sentence: "Modesty is considered a virtue in many cultures around the world.",
    sentenceCn: "在世界许多文化中，谦逊被视为一种美德。"
  },
  {
    word: "momentary",
    meaning: "瞬间的",
    sentence: "The momentary distraction caused him to lose his train of thought.",
    sentenceCn: "瞬间的分心使他失去了思路。"
  },
  {
    word: "morale",
    meaning: "士气",
    sentence: "High morale among employees is essential for maintaining productivity in the workplace.",
    sentenceCn: "员工高昂的士气对于维持工作场所的生产力至关重要。"
  },
  {
    word: "mortal",
    meaning: "致命的；凡人",
    sentence: "All human beings are mortal and must eventually face death.",
    sentenceCn: "所有人类都是凡人，最终都必须面对死亡。"
  },
  {
    word: "motif",
    meaning: "主题；动机",
    sentence: "The recurring motif in the novel symbolizes the protagonist's inner struggle.",
    sentenceCn: "小说中反复出现的主题象征着主人公的内心挣扎。"
  },
  {
    word: "mourn",
    meaning: "哀悼",
    sentence: "The community gathered to mourn the loss of their beloved leader.",
    sentenceCn: "社区聚集在一起悼念他们敬爱的领导人。"
  },
  {
    word: "myriad",
    meaning: "无数的",
    sentence: "There are myriad reasons why people choose to immigrate to other countries.",
    sentenceCn: "人们选择移民到其他国家有无数原因。"
  },
  {
    word: "nasty",
    meaning: "令人厌恶的；下流的",
    sentence: "The nasty weather conditions made driving extremely dangerous.",
    sentenceCn: "恶劣的天气条件使驾驶变得极其危险。"
  },
  {
    word: "transient",
    meaning: "短暂的；转瞬即逝的",
    sentence: "The transient nature of fashion trends makes them difficult to predict.",
    sentenceCn: "时尚潮流的短暂性使它们难以预测。"
  },
  {
    word: "treacherous",
    meaning: "背叛的；危险的",
    sentence: "The mountain path was treacherous and required careful navigation.",
    sentenceCn: "山路危险,需要小心导航。"
  },
  {
    word: "turbulent",
    meaning: "动荡的；狂暴的",
    sentence: "The turbulent period in the country's history saw many political changes.",
    sentenceCn: "该国历史上的动荡时期见证了许多政治变革。"
  },
  {
    word: "unanimous",
    meaning: "全体一致的",
    sentence: "The committee reached a unanimous decision after hours of discussion.",
    sentenceCn: "经过数小时的讨论,委员会达成了一致决定。"
  },
  {
    word: "underestimate",
    meaning: "低估",
    sentence: "It would be a mistake to underestimate the difficulty of this task.",
    sentenceCn: "低估这项任务的难度将是一个错误。"
  },
  {
    word: "undermine",
    meaning: "暗中破坏；逐渐削弱",
    sentence: "Constant criticism can undermine a child's self-confidence.",
    sentenceCn: "不断的批评会逐渐削弱孩子的自信心。"
  },
  {
    word: "urge",
    actualWord: "urged",
    meaning: "催促；强烈要求",
    sentence: "The doctor urged the patient to quit smoking for better health.",
    sentenceCn: "医生强烈要求病人戒烟以改善健康。"
  },
  {
    word: "utensil",
    actualWord: "utensils",
    meaning: "器皿；用具",
    sentence: "Kitchen utensils should be cleaned thoroughly after each use.",
    sentenceCn: "厨房用具应在每次使用后彻底清洗。"
  },
  {
    word: "utilize",
    actualWord: "utilizes",
    meaning: "利用",
    sentence: "The company utilizes advanced technology to improve production efficiency.",
    sentenceCn: "该公司利用先进技术提高生产效率。"
  },
  {
    word: "vacant",
    meaning: "空着的；茫然的",
    sentence: "The vacant house had been empty for years before being renovated.",
    sentenceCn: "这座空着的房子在翻新之前已经空置多年了。"
  },
  {
    word: "velocity",
    meaning: "速度",
    sentence: "The velocity of the wind increased as the storm approached.",
    sentenceCn: "随着暴风雨的临近,风速增加了。"
  },
  {
    word: "verify",
    meaning: "核实；证明",
    sentence: "Scientists need to verify the results of the experiment before publishing.",
    sentenceCn: "科学家需要在发表前核实实验结果。"
  },
  {
    word: "waive",
    meaning: "放弃；豁免",
    sentence: "The bank decided to waive the late payment fee as a courtesy.",
    sentenceCn: "银行决定作为一项礼遇豁免逾期付款费。"
  }
];
