const vocabData = [
  {
    word: "wreck",
    actualWord: "wrecked",
    meaning: "失事车/船；破坏",
    sentence: "The storm wrecked several boats in the harbor.",
    sentenceCn: "暴风雨在港口造成几艘船只失事。"
  },
  {
    word: "prophylactic",
    meaning: "预防性的",
    sentence: "Vaccination is a prophylactic measure against many infectious diseases.",
    sentenceCn: "接种疫苗是预防许多传染病的预防措施。"
  },
  {
    word: "proprietary",
    meaning: "专有的",
    sentence: "The proprietary software can only be used with permission from the company.",
    sentenceCn: "专有软件只能在获得公司许可的情况下使用。"
  },
  {
    word: "propriety",
    meaning: "得体；礼节",
    sentence: "The guests behaved with great propriety at the formal dinner party.",
    sentenceCn: "客人们在正式的晚宴上举止得体。"
  },
  {
    word: "propulsion",
    meaning: "推进力",
    sentence: "Jet propulsion revolutionized air travel in the twentieth century.",
    sentenceCn: "喷气推进在二十世纪彻底改变了航空旅行。"
  },
  {
    word: "prosaic",
    meaning: "平淡的；乏味的",
    sentence: "The prosaic explanation for the phenomenon disappointed the excited students.",
    sentenceCn: "对这种现象平淡的解释让兴奋的学生们失望了。"
  },
  {
    word: "proscribe",
    meaning: "禁止；放逐",
    sentence: "The government decided to proscribe certain harmful chemicals from industrial use.",
    sentenceCn: "政府决定禁止某些有害化学品的工业用途。"
  },
  {
    word: "prosecutor",
    meaning: "检察官",
    sentence: "The prosecutor presented strong evidence against the defendant in court.",
    sentenceCn: "检察官在法庭上出示了对被告的有力证据。"
  },
  {
    word: "prospectus",
    meaning: "内容说明书",
    sentence: "The university's prospectus provides detailed information about its academic programs.",
    sentenceCn: "大学的招生简章提供了有关其学术课程的详细信息。"
  },
  {
    word: "prosper",
    meaning: "繁荣",
    sentence: "With hard work and determination, the business began to prosper.",
    sentenceCn: "凭借努力和决心，企业开始繁荣起来。"
  },
  {
    word: "prostrate",
    meaning: "俯卧的；精疲力竭的",
    sentence: "The exhausted hikers lay prostrate on the ground after reaching the summit.",
    sentenceCn: "精疲力竭的徒步者在到达山顶后俯卧在地上。"
  },
  {
    word: "protagonist",
    meaning: "主角",
    sentence: "The protagonist of the novel struggles to find her place in society.",
    sentenceCn: "小说的主角努力在社会中找到自己的位置。"
  },
  {
    word: "protocol",
    meaning: "礼仪；草案",
    sentence: "Diplomatic protocol requires that certain procedures be followed during official visits.",
    sentenceCn: "外交礼仪要求在正式访问期间遵循某些程序。"
  },
  {
    word: "prototype",
    meaning: "原型",
    sentence: "The prototype of the new electric car was unveiled at the auto show.",
    sentenceCn: "新电动汽车的原型车在车展上亮相。"
  },
  {
    word: "protrude",
    meaning: "突出",
    sentence: "The broken bone began to protrude through the skin after the accident.",
    sentenceCn: "事故发生后，断裂的骨头开始从皮肤中突出。"
  },
  {
    word: "proverb",
    meaning: "谚语",
    sentence: "Don't judge a book by its cover is a well-known proverb.",
    sentenceCn: "不要以貌取人是一个众所周知的谚语。"
  },
  {
    word: "provisional",
    meaning: "临时的",
    sentence: "The provisional government will manage the country until elections can be held.",
    sentenceCn: "临时政府将管理国家，直到能够举行选举。"
  },
  {
    word: "provocation",
    meaning: "挑衅",
    sentence: "The country's military response was seen as a provocation by its neighbors.",
    sentenceCn: "该国的军事回应被其邻国视为挑衅。"
  },
  {
    word: "prudential",
    meaning: "谨慎的",
    sentence: "Prudential management of finances is essential for long-term stability.",
    sentenceCn: "审慎的财务管理对于长期稳定至关重要。"
  },
  {
    word: "pseudonym",
    meaning: "假名；笔名",
    sentence: "The famous author writes under a pseudonym to maintain privacy.",
    sentenceCn: "这位著名作家用笔名写作以保持隐私。"
  },
  {
    word: "psychiatry",
    meaning: "精神病学",
    sentence: "Psychiatry has made significant advances in treating mental health disorders.",
    sentenceCn: "精神病学在治疗心理健康障碍方面取得了重大进展。"
  },
  {
    word: "punctuate",
    meaning: "加标点；强调",
    sentence: "Her speech was punctuated by frequent pauses for emphasis.",
    sentenceCn: "她的演讲经常停顿以加强语气。"
  },
  {
    word: "punctuation",
    meaning: "标点符号",
    sentence: "Proper punctuation is crucial for clear written communication.",
    sentenceCn: "正确的标点符号对于清晰的书面交流至关重要。"
  },
  {
    word: "punitive",
    meaning: "惩罚性的",
    sentence: "The punitive measures were designed to deter future violations of the law.",
    sentenceCn: "这些惩罚性措施旨在威慑未来的违法行为。"
  },
  {
    word: "purification",
    meaning: "净化",
    sentence: "The water purification system removes harmful bacteria and chemicals.",
    sentenceCn: "水净化系统去除有害细菌和化学物质。"
  },
  {
    word: "quarrel",
    meaning: "争吵；不和",
    sentence: "The two friends had a quarrel over a minor misunderstanding.",
    sentenceCn: "两个朋友因一个小误会而争吵。"
  },
  {
    word: "quench",
    meaning: "熄灭；解渴",
    sentence: "Cold water can help quench your thirst after a long run.",
    sentenceCn: "长跑后冷水可以帮你解渴。"
  },
  {
    word: "quiver",
    meaning: "颤抖；震动",
    sentence: "The leaves quivered in the gentle breeze of the autumn wind.",
    sentenceCn: "树叶在秋风的微风中颤抖。"
  },
  {
    word: "radioactive",
    meaning: "放射性的",
    sentence: "Radioactive waste from nuclear power plants requires careful handling and storage.",
    sentenceCn: "核电站产生的放射性废物需要小心处理和储存。"
  },
  {
    word: "reassure",
    meaning: "使安心；使放心",
    sentence: "The teacher reassured the nervous student before the important exam.",
    sentenceCn: "老师在重要考试前让紧张的学生安心。"
  },
  {
    word: "recipient",
    meaning: "接受者",
    sentence: "The recipient of the award gave an emotional acceptance speech.",
    sentenceCn: "奖项的接受者发表了感人的获奖感言。"
  },
  {
    word: "reciprocal",
    meaning: "互惠的；倒数的",
    sentence: "International trade should be based on reciprocal agreements between countries.",
    sentenceCn: "国际贸易应基于国家之间的互惠协议。"
  },
  {
    word: "recommend",
    meaning: "推荐；建议",
    sentence: "I recommend that you read this book before making a decision.",
    sentenceCn: "我建议你在做决定之前读读这本书。"
  },
  {
    word: "recount",
    meaning: "详细叙述；重计",
    sentence: "The witness recounted the events of that fateful night in detail.",
    sentenceCn: "证人详细叙述了那个命运攸关的夜晚的事件。"
  },
  {
    word: "recover",
    meaning: "恢复；痊愈；收回",
    sentence: "It took months for the patient to fully recover from the surgery.",
    sentenceCn: "病人花了数月时间才从手术中完全康复。"
  },
  {
    word: "rectify",
    meaning: "纠正；整顿",
    sentence: "The company needs to rectify the errors in its financial reports.",
    sentenceCn: "公司需要纠正财务报告中的错误。"
  },
  {
    word: "recur",
    meaning: "再发生；重现",
    sentence: "Old memories tend to recur when we visit places from our childhood.",
    sentenceCn: "当我们参观童年时代的地方时，旧的记忆往往会重现。"
  },
  {
    word: "refrain",
    meaning: "节制；克制",
    sentence: "Please refrain from smoking in the hospital's waiting room.",
    sentenceCn: "请不要在医院候诊室吸烟。"
  },
  {
    word: "refreshment",
    meaning: "茶点；精神振作",
    sentence: "Light refreshments will be provided during the conference break.",
    sentenceCn: "会议休息期间将提供简单的茶点。"
  },
  {
    word: "rehabilitation",
    meaning: "康复；复兴",
    sentence: "Rehabilitation programs help prisoners reintegrate into society after release.",
    sentenceCn: "康复计划帮助囚犯在获释后重新融入社会。"
  },
  {
    word: "resent",
    meaning: "怨恨；愤恨",
    sentence: "She resented being treated unfairly by her supervisor.",
    sentenceCn: "她怨恨受到上司的不公平对待。"
  },
  {
    word: "reveal",
    meaning: "揭露；显示",
    sentence: "The investigation revealed widespread corruption in the government.",
    sentenceCn: "调查揭露了政府中普遍存在的腐败现象。"
  },
  {
    word: "revive",
    meaning: "复兴；苏醒",
    sentence: "Efforts to revive the struggling economy are showing positive results.",
    sentenceCn: "复苏挣扎中的经济的努力正在显示出积极的结果。"
  },
  {
    word: "salient",
    meaning: "显著的；突出的",
    sentence: "The salient points of the argument need to be addressed first.",
    sentenceCn: "论点的要点需要首先解决。"
  },
  {
    word: "saturate",
    meaning: "浸透；使饱和",
    sentence: "The market became saturated with similar products, leading to intense competition.",
    sentenceCn: "市场充满了类似的产品，导致激烈的竞争。"
  },
  {
    word: "scandal",
    meaning: "丑闻",
    sentence: "The political scandal dominated the news headlines for weeks.",
    sentenceCn: "政治丑闻连续几周占据了新闻头条。"
  },
  {
    word: "scenic",
    meaning: "风景优美的",
    sentence: "The scenic route along the coast attracts many tourists every year.",
    sentenceCn: "沿海的风景区每年吸引许多游客。"
  },
  {
    word: "sector",
    meaning: "部门；扇形",
    sentence: "The financial sector plays a crucial role in the national economy.",
    sentenceCn: "金融部门在国民经济中发挥着关键作用。"
  },
  {
    word: "secular",
    meaning: "世俗的",
    sentence: "The secular state ensures freedom of religion for all citizens.",
    sentenceCn: "世俗国家确保所有公民的宗教自由。"
  }
];
