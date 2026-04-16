const vocabData = [
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
    word: "measurable",
    meaning: "可测量的；显著的",
    sentence: "The project has made measurable progress toward its goals over the past year.",
    sentenceCn: "该项目在过去一年中朝着其目标取得了可衡量的进展。"
  },
  {
    word: "missionary",
    meaning: "传教士",
    sentence: "The missionary traveled to remote areas to spread religious teachings.",
    sentenceCn: "传教士前往偏远地区传播宗教教义。"
  },
  {
    word: "morale",
    meaning: "士气",
    sentence: "High morale among employees is essential for maintaining productivity in the workplace.",
    sentenceCn: "员工高昂的士气对于维持工作场所的生产力至关重要。"
  },
  {
    word: "wavering",
    meaning: "犹豫不决的；动摇的",
    sentence: "His wavering commitment to the project concerned his teammates.",
    sentenceCn: "他对项目犹豫不决的承诺让队友们担心。"
  },
  {
    word: "weary",
    meaning: "疲倦的；厌烦的",
    sentence: "The long journey made the travelers weary and in need of rest.",
    sentenceCn: "漫长的旅程使旅行者们疲倦，需要休息。"
  },
  {
    word: "welfare",
    meaning: "福利",
    sentence: "The government introduced new welfare programs to support low-income families.",
    sentenceCn: "政府推出了新的福利计划以支持低收入家庭。"
  },
  {
    word: "withstand",
    meaning: "经受；抵挡",
    sentence: "The ancient walls were built to withstand attacks from invaders.",
    sentenceCn: "古老的墙壁是为了抵挡入侵者的攻击而建造的。"
  },
  {
    word: "wreck",
    actualWord: "wrecked",
    meaning: "失事车/船；破坏",
    sentence: "The storm wrecked several boats in the harbor.",
    sentenceCn: "暴风雨在港口造成几艘船只失事。"
  },
  {
    word: "wretched",
    meaning: "极可怜的；卑鄙的",
    sentence: "The wretched living conditions in the slums demand immediate attention.",
    sentenceCn: "贫民窟中极其可怜的生活条件需要立即关注。"
  },
  {
    word: "yearn",
    meaning: "渴望",
    sentence: "She yearned for the peaceful days of her childhood in the countryside.",
    sentenceCn: "她渴望在乡下的童年那平静的日子。"
  },
  {
    word: "yield",
    meaning: "产生；产量",
    sentence: "The investment yielded high returns for the shareholders.",
    sentenceCn: "这项投资为股东产生了高额回报。"
  },
  {
    word: "yield to",
    meaning: "向……屈服",
    sentence: "The government refused to yield to the protesters' demands for immediate reform.",
    sentenceCn: "政府拒绝向抗议者立即改革的要求屈服。"
  },
  {
    word: "predicament",
    meaning: "困境",
    sentence: "She found herself in a difficult predicament with no easy way out.",
    sentenceCn: "她发现自己处于一个没有轻松出路的困境中。"
  },
  {
    word: "preeminent",
    meaning: "卓越的；杰出的",
    sentence: "The professor is a preeminent scholar in the field of environmental science.",
    sentenceCn: "这位教授是环境科学领域的杰出学者。"
  },
  {
    word: "preliminary",
    meaning: "初步的",
    sentence: "The preliminary results of the study show promising findings.",
    sentenceCn: "研究的初步结果显示了有希望的发现。"
  },
  {
    word: "preposterous",
    meaning: "荒谬的",
    sentence: "The idea that the earth is flat is completely preposterous.",
    sentenceCn: "地球是平的想法是完全荒谬的。"
  },
  {
    word: "presidency",
    meaning: "总统任期",
    sentence: "During his presidency, the country experienced significant economic growth.",
    sentenceCn: "在他担任总统期间，该国经历了显著的经济增长。"
  },
  {
    word: "presumption",
    meaning: "假定；放肆",
    sentence: "There is a presumption of innocence until proven guilty in a court of law.",
    sentenceCn: "在法庭证明有罪之前，存在无罪推定。"
  },
  {
    word: "pretentious",
    meaning: "自命不凡的",
    sentence: "His pretentious behavior annoyed his colleagues at the office.",
    sentenceCn: "他自命不凡的行为惹恼了办公室的同事。"
  },
  {
    word: "pretext",
    meaning: "借口",
    sentence: "He used the meeting as a pretext to avoid attending the party.",
    sentenceCn: "他以开会为借口避免参加聚会。"
  },
  {
    word: "primate",
    meaning: "灵长类",
    sentence: "Humans and other primates share many genetic similarities.",
    sentenceCn: "人类和其他灵长类动物有许多基因相似之处。"
  },
  {
    word: "princely",
    meaning: "豪华的",
    sentence: "The company made a princely donation to the new hospital.",
    sentenceCn: "这家公司向新医院捐赠了一笔巨款。"
  },
  {
    word: "proactive",
    meaning: "积极主动的；先发制人的",
    sentence: "The proactive approach to environmental protection helps prevent problems before they occur.",
    sentenceCn: "积极主动的环保方法有助于在问题发生前加以预防。"
  },
  {
    word: "probation",
    meaning: "缓刑；见习期",
    sentence: "The new employee is still on probation and needs to prove his worth to the company.",
    sentenceCn: "新员工仍在试用期，需要向公司证明自己的价值。"
  },
  {
    word: "problematic",
    meaning: "成问题的；存疑的",
    sentence: "The implementation of the new policy has proven to be problematic.",
    sentenceCn: "新政策的实施被证明是有问题的。"
  },
  {
    word: "process",
    meaning: "过程；处理",
    sentence: "The process of learning a new language requires patience and persistence.",
    sentenceCn: "学习一门新语言的过程需要耐心和毅力。"
  },
  {
    word: "procession",
    meaning: "队伍",
    sentence: "The wedding procession moved slowly through the streets of the old town.",
    sentenceCn: "婚礼队伍缓慢地穿过老城的街道。"
  },
  {
    word: "procrastinate",
    meaning: "拖延",
    sentence: "People who procrastinate often miss important deadlines and opportunities.",
    sentenceCn: "拖延的人经常错过重要的截止日期和机会。"
  },
  {
    word: "profane",
    meaning: "世俗的；亵渎的",
    sentence: "The profane language used in the film led to its being banned in several countries.",
    sentenceCn: "影片中使用的亵渎语言导致其在多个国家被禁止。"
  },
  {
    word: "proficiency",
    meaning: "熟练",
    sentence: "Language proficiency is essential for success in international business.",
    sentenceCn: "语言熟练程度对于国际商务的成功至关重要。"
  },
  {
    word: "profuse",
    meaning: "丰富的",
    sentence: "The garden was filled with profuse blooms of colorful flowers.",
    sentenceCn: "花园里开满了丰富的五颜六色的花朵。"
  },
  {
    word: "prognosis",
    meaning: "预测；预后",
    sentence: "The doctor's prognosis for the patient's recovery was very positive.",
    sentenceCn: "医生对病人康复的预后非常积极。"
  },
  {
    word: "progressive",
    meaning: "进步的",
    sentence: "The progressive education system emphasizes critical thinking over memorization.",
    sentenceCn: "进步的教育系统强调批判性思维而非死记硬背。"
  },
  {
    word: "prohibitive",
    meaning: "禁止性的；昂贵的",
    sentence: "The prohibitive cost of housing in the city forces many people to live in suburbs.",
    sentenceCn: "城市中住房的昂贵价格迫使许多人住在郊区。"
  },
  {
    word: "proliferate",
    meaning: "激增；繁殖",
    sentence: "Social media has proliferated rapidly over the past decade, transforming communication.",
    sentenceCn: "社交媒体在过去十年中迅速激增，改变了沟通方式。"
  },
  {
    word: "prolific",
    meaning: "多产的",
    sentence: "The prolific author has written more than fifty books in her career.",
    sentenceCn: "这位多产的作家在她的事业中已经写了五十多本书。"
  },
  {
    word: "prologue",
    meaning: "序言",
    sentence: "The prologue provides essential background information for understanding the novel.",
    sentenceCn: "序言为理解小说提供了重要的背景信息。"
  },
  {
    word: "promising",
    meaning: "有前途的",
    sentence: "The young musician shows promising talent that could lead to a successful career.",
    sentenceCn: "这位年轻的音乐家展现了有前途的才能，这可能会带来成功的事业。"
  },
  {
    word: "promote",
    meaning: "提升；促进；促销",
    sentence: "Regular exercise can promote better physical and mental health.",
    sentenceCn: "经常锻炼可以促进更好的身心健康。"
  },
  {
    word: "promotion",
    meaning: "提升；促销",
    sentence: "Her promotion to manager was a result of her hard work and dedication.",
    sentenceCn: "她晋升为经理是她辛勤工作和奉献的结果。"
  },
  {
    word: "prone",
    meaning: "易于……的；俯卧的",
    sentence: "Elderly people are more prone to falls and fractures than younger adults.",
    sentenceCn: "老年人比年轻人更容易摔倒和骨折。"
  },
  {
    word: "pronounced",
    meaning: "显著的",
    sentence: "There has been a pronounced improvement in the company's financial performance.",
    sentenceCn: "公司的财务表现有了显著的改善。"
  },
  {
    word: "propellant",
    meaning: "推进剂",
    sentence: "The rocket uses a solid propellant to generate the necessary thrust.",
    sentenceCn: "火箭使用固体推进剂产生必要的推力。"
  },
  {
    word: "propensity",
    meaning: "倾向",
    sentence: "Children have a natural propensity for learning languages quickly.",
    sentenceCn: "孩子们天生有快速学习语言的倾向。"
  },
  {
    word: "property",
    meaning: "财产；属性",
    sentence: "Intellectual property rights protect the creations of inventors and artists.",
    sentenceCn: "知识产权保护发明家和艺术家的创作。"
  },
  {
    word: "prophecy",
    meaning: "预言",
    sentence: "The prophecy predicted that a great leader would arise to save the nation.",
    sentenceCn: "预言预言一位伟大的领袖将出现来拯救国家。"
  },
  {
    word: "prophesy",
    meaning: "预言",
    sentence: "The ancient oracle was believed to prophesy the future with great accuracy.",
    sentenceCn: "古代的神谕被认为能够非常准确地预言未来。"
  },
  {
    word: "prophetic",
    meaning: "预言的",
    sentence: "His prophetic warnings about climate change have proven to be accurate.",
    sentenceCn: "他关于气候变化的预言性警告已被证明是准确的。"
  }
];
