const vocabData = [
  {
    word: "prototype",
    meaning: "原型",
    sentence: "The prototype of the new electric car was unveiled at the auto show.",
    sentenceCn: "新电动汽车的原型车在车展上亮相。"
  },
  {
    word: "protract",
    actualWord: "protracted",
    meaning: "延长",
    sentence: "The negotiations were protracted for months without reaching an agreement.",
    sentenceCn: "谈判被拖延了好几个月而没有达成协议。"
  },
  {
    word: "protrude",
    meaning: "突出",
    sentence: "The broken bone began to protrude through the skin after the accident.",
    sentenceCn: "事故发生后，断裂的骨头开始从皮肤中突出。"
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
    word: "punctuation",
    meaning: "标点符号",
    sentence: "Proper punctuation is crucial for clear written communication.",
    sentenceCn: "正确的标点符号对于清晰的书面交流至关重要。"
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
    word: "quiver",
    meaning: "颤抖；震动",
    sentence: "The leaves quivered in the gentle breeze of the autumn wind.",
    sentenceCn: "树叶在秋风的微风中颤抖。"
  },
  {
    word: "reciprocal",
    meaning: "互惠的；倒数的",
    sentence: "International trade should be based on reciprocal agreements between countries.",
    sentenceCn: "国际贸易应基于国家之间的互惠协议。"
  },
  {
    word: "secular",
    meaning: "世俗的",
    sentence: "The secular state ensures freedom of religion for all citizens.",
    sentenceCn: "世俗国家确保所有公民的宗教自由。"
  },
  {
    word: "shun",
    meaning: "避开；避免",
    sentence: "Health-conscious people shun processed foods high in sugar and fat.",
    sentenceCn: "注重健康的人避免食用高糖和高脂肪的加工食品。"
  },
  {
    word: "sinister",
    meaning: "凶兆的；邪恶的",
    sentence: "The sinister plot was discovered before it could be carried out.",
    sentenceCn: "邪恶的阴谋在实施之前就被发现了。"
  },
  {
    word: "slaughter",
    meaning: "屠宰；屠杀",
    sentence: "The war resulted in the slaughter of thousands of innocent civilians.",
    sentenceCn: "战争导致了数以千计无辜平民的屠杀。"
  },
  {
    word: "slender",
    meaning: "苗条的；微薄的",
    sentence: "She maintained a slender figure through regular exercise and healthy eating.",
    sentenceCn: "她通过经常锻炼和健康饮食保持了苗条的身材。"
  },
  {
    word: "slum",
    meaning: "贫民窟",
    sentence: "The government launched programs to improve living conditions in urban slums.",
    sentenceCn: "政府推出了改善城市贫民窟生活条件的计划。"
  },
  {
    word: "smuggle",
    meaning: "走私",
    sentence: "The criminals attempted to smuggle illegal goods across the border.",
    sentenceCn: "罪犯试图将非法物品走私过境。"
  },
  {
    word: "sober",
    meaning: "清醒的；严肃的",
    sentence: "The sober analysis revealed serious flaws in the proposed plan.",
    sentenceCn: "严肃的分析揭示了提议计划中的严重缺陷。"
  },
  {
    word: "solemn",
    meaning: "庄严的；严肃的",
    sentence: "The judge delivered a solemn verdict in the high-profile case.",
    sentenceCn: "法官在这个备受关注的案件中作出了庄严的判决。"
  },
  {
    word: "solicit",
    meaning: "请求；恳求",
    sentence: "The organization solicits donations from the public to fund its programs.",
    sentenceCn: "该组织向公众募集捐款以资助其项目。"
  },
  {
    word: "spacious",
    meaning: "宽敞的",
    sentence: "The new house features a spacious living room with large windows.",
    sentenceCn: "新房子有一个宽敞的客厅,配有大窗户。"
  },
  {
    word: "stale",
    meaning: "陈腐的；不新鲜的",
    sentence: "The bread became stale after being left out for several days.",
    sentenceCn: "面包在放了好几天后变得不新鲜了。"
  },
  {
    word: "sterile",
    meaning: "不育的；无菌的",
    sentence: "The laboratory maintained a sterile environment for the experiments.",
    sentenceCn: "实验室为实验保持了无菌环境。"
  },
  {
    word: "stipulate",
    meaning: "规定；约定",
    sentence: "The contract stipulates that the work must be completed within six months.",
    sentenceCn: "合同规定工作必须在六个月内完成。"
  },
  {
    word: "subpoena",
    meaning: "传票；传唤",
    sentence: "The court issued a subpoena requiring the witness to testify.",
    sentenceCn: "法院发出了传票,要求证人作证。"
  },
  {
    word: "succinct",
    meaning: "简洁的",
    sentence: "The professor provided a succinct summary of the complex theory.",
    sentenceCn: "教授对复杂理论提供了简洁的总结。"
  },
  {
    word: "succumb",
    meaning: "屈服；死于",
    sentence: "The patient succumbed to the illness after a long battle.",
    sentenceCn: "病人在长期抗争后屈服于疾病。"
  },
  {
    word: "synthetic",
    meaning: "合成的；人造的",
    sentence: "Many modern products are made from synthetic materials.",
    sentenceCn: "许多现代产品是由合成材料制成的。"
  },
  {
    word: "tedious",
    meaning: "乏味的；单调的",
    sentence: "The tedious task of sorting through thousands of documents took weeks.",
    sentenceCn: "整理数千份文件的乏味工作花了几周时间。"
  },
  {
    word: "temperament",
    meaning: "气质；性格",
    sentence: "Her artistic temperament made her sensitive to criticism.",
    sentenceCn: "她的艺术气质使她对批评很敏感。"
  },
  {
    word: "tenure",
    meaning: "任期；终身职位",
    sentence: "The professor was granted tenure after years of excellent teaching and research.",
    sentenceCn: "经过多年的优秀教学和研究,这位教授获得了终身职位。"
  },
  {
    word: "terminology",
    meaning: "术语",
    sentence: "Medical terminology can be difficult for patients to understand.",
    sentenceCn: "医学术语可能让患者难以理解。"
  },
  {
    word: "testify",
    meaning: "作证；表明",
    sentence: "Several witnesses testified about what they saw on the night of the crime.",
    sentenceCn: "几名证人就他们在犯罪当晚看到的情况作了证。"
  },
  {
    word: "threshold",
    meaning: "门槛；开端",
    sentence: "Crossing the threshold into adulthood brings new responsibilities.",
    sentenceCn: "跨入成年门槛带来了新的责任。"
  },
  {
    word: "thrift",
    meaning: "节俭",
    sentence: "Thrift is considered a virtue in many cultures around the world.",
    sentenceCn: "节俭在世界许多文化中被视为一种美德。"
  },
  {
    word: "toll",
    meaning: "通行费；伤亡人数",
    sentence: "The toll of the accident included several injured passengers.",
    sentenceCn: "事故的伤亡人数包括几名受伤的乘客。"
  },
  {
    word: "optical",
    meaning: "光学的；视觉的",
    sentence: "The optical illusion made the stationary object appear to be moving.",
    sentenceCn: "视觉错觉使静止的物体看起来在移动。"
  },
  {
    word: "opulence",
    meaning: "富裕；丰富",
    sentence: "The palace was a symbol of opulence and royal power.",
    sentenceCn: "这座宫殿是富裕和王权的象征。"
  },
  {
    word: "ordeal",
    meaning: "严峻考验",
    sentence: "Surviving the ordeal required immense courage and determination.",
    sentenceCn: "度过这场磨难需要巨大的勇气和决心。"
  },
  {
    word: "ornamental",
    meaning: "装饰性的",
    sentence: "The garden features both functional and ornamental plants.",
    sentenceCn: "花园里有功能性植物和观赏性植物。"
  },
  {
    word: "oscillation",
    meaning: "振荡；波动",
    sentence: "The oscillation of the pendulum demonstrates the principles of harmonic motion.",
    sentenceCn: "摆的振荡演示了简谐运动的原理。"
  },
  {
    word: "osmosis",
    meaning: "渗透",
    sentence: "Osmosis is a natural process by which water moves through cell membranes.",
    sentenceCn: "渗透是水通过细胞膜移动的自然过程。"
  },
  {
    word: "oust",
    meaning: "驱逐；罢免",
    sentence: "The board voted to oust the CEO due to poor performance and ethical concerns.",
    sentenceCn: "董事会投票罢免了CEO，原因是他表现不佳和存在道德问题。"
  },
  {
    word: "outbreak",
    meaning: "战争、病爆发",
    sentence: "The outbreak of the disease prompted immediate public health measures.",
    sentenceCn: "疾病的爆发引发了立即的公共卫生措施。"
  },
  {
    word: "outcry",
    meaning: "大声疾呼",
    sentence: "The new tax policy sparked a public outcry from citizens across the country.",
    sentenceCn: "新税收政策引发了全国公民的强烈抗议。"
  },
  {
    word: "outfit",
    meaning: "全套装备",
    sentence: "The team purchased new outfits for the upcoming competition.",
    sentenceCn: "团队为即将到来的比赛购买了新装备。"
  },
  {
    word: "outlaw",
    meaning: "歹徒；宣布非法",
    sentence: "The new legislation outlaws discrimination in the workplace based on gender or age.",
    sentenceCn: "新立法宣布基于性别或年龄的职场歧视为非法。"
  },
  {
    word: "outlying",
    meaning: "偏远的",
    sentence: "The outlying villages were the last to receive electricity and running water.",
    sentenceCn: "偏远的村庄是最后通电和自来水的。"
  },
  {
    word: "outnumber",
    meaning: "在数量上超过",
    sentence: "In many urban areas, cars outnumber people, leading to severe traffic congestion.",
    sentenceCn: "在许多城市地区，汽车数量超过人口数量，导致严重的交通拥堵。"
  },
  {
    word: "outrage",
    meaning: "义愤；激怒",
    sentence: "The government's decision to cut education funding sparked public outrage across the country.",
    sentenceCn: "政府削减教育经费的决定在全国范围内引发了公众愤怒。"
  }
];
