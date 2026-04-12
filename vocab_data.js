// 英语单词测验数据 - 第3轮
// 包含50个重点单词（按下次复习时间和字母排序）

const vocabData = [
  {
    word: "flesh",
    meaning: "肉；肉体",
    pos: "n.",
    sentence: "The wound healed quickly, and new flesh began to form around the edges.",
    sentenceCn: "伤口很快愈合，新的肉开始从边缘生长。"
  },
  {
    word: "flicker",
    meaning: "闪烁；摇曳",
    pos: "v.",
    sentence: "The candle flame flickered in the gentle breeze.",
    sentenceCn: "烛光在微风中轻轻摇曳。"
  },
  {
    word: "fling",
    meaning: "扔；抛；猛冲",
    pos: "v.",
    sentence: "She flung the door open and rushed out.",
    sentenceCn: "她猛地推开门冲了出去。",
    actualWord: "flung"
  },
  {
    word: "flush",
    meaning: "冲洗；脸红",
    pos: "v.",
    sentence: "Please flush the toilet after use.",
    sentenceCn: "使用后请冲厕所。"
  },
  {
    word: "forge",
    meaning: "锻造；伪造",
    pos: "v.",
    sentence: "The blacksmith forged a beautiful sword from raw steel.",
    sentenceCn: "铁匠用生铁锻造了一把美丽的剑。"
  },
  {
    word: "fragrance",
    meaning: "香味；香气",
    pos: "n.",
    sentence: "The fragrance of fresh flowers filled the room.",
    sentenceCn: "新鲜花朵的香气弥漫了整个房间。"
  },
  {
    word: "fringe",
    meaning: "边缘；刘海",
    pos: "n.",
    sentence: "The fringe benefits include health insurance and paid vacation.",
    sentenceCn: "附加福利包括健康保险和带薪假期。"
  },
  {
    word: "fumble",
    meaning: "摸索；笨拙地做",
    pos: "v.",
    sentence: "He fumbled in his pocket for the keys.",
    sentenceCn: "他在口袋里摸索着找钥匙。"
  },
  {
    word: "fume",
    meaning: "冒烟；发怒",
    pos: "v.",
    sentence: "She was fuming with anger at his rude remarks.",
    sentenceCn: "她对他的粗鲁言论怒不可遏。",
    actualWord: "fuming"
  },
  {
    word: "fuse",
    meaning: "熔化；保险丝；融合",
    pos: "n./v.",
    sentence: "The two metals fused together under extreme heat.",
    sentenceCn: "这两种金属在极端高温下融合在一起。"
  },
  {
    word: "fuss",
    meaning: "大惊小怪；忙乱",
    pos: "n./v.",
    sentence: "Don't make such a fuss over a small mistake.",
    sentenceCn: "不要为一个小错误大惊小怪。"
  },
  {
    word: "futile",
    meaning: "无用的；徒劳的",
    pos: "adj.",
    sentence: "All their efforts proved futile in the end.",
    sentenceCn: "他们的所有努力最终都证明是徒劳的。"
  },
  {
    word: "garment",
    meaning: "服装；衣服",
    pos: "n.",
    sentence: "The garment industry is a major employer in this region.",
    sentenceCn: "服装业是该地区的主要雇主。"
  },
  {
    word: "gracious",
    meaning: "亲切的；优雅的",
    pos: "adj.",
    sentence: "She was gracious enough to host the party at her home.",
    sentenceCn: "她很亲切地在她家举办了派对。"
  },
  {
    word: "grand",
    meaning: "宏伟的；重大的",
    pos: "adj.",
    sentence: "The grand opening ceremony attracted thousands of visitors.",
    sentenceCn: "盛大的开幕式吸引了数千名游客。"
  },
  {
    word: "Dwell on",
    meaning: "细想；详述；居住在",
    pos: "v.",
    sentence: "Don't dwell on past mistakes; focus on the future.",
    sentenceCn: "不要纠结于过去的错误；关注未来。"
  },
  {
    word: "grill",
    meaning: "烤架；烧烤；盘问",
    pos: "n./v.",
    sentence: "They grilled the suspect for hours about his whereabouts.",
    sentenceCn: "他们盘问了嫌疑人几个小时关于他的下落。"
  },
  {
    word: "grin",
    meaning: "露齿笑；咧嘴笑",
    pos: "v./n.",
    sentence: "He grinned with satisfaction when he saw the results.",
    sentenceCn: "看到结果时，他满意地咧嘴笑了。"
  },
  {
    word: "grind",
    meaning: "磨碎；摩擦；苦差事",
    pos: "v./n.",
    sentence: "The daily grind of office work can be exhausting.",
    sentenceCn: "办公室日常工作的苦差事可能令人筋疲力尽。"
  },
  {
    word: "grip",
    meaning: "紧握；掌握；把手",
    pos: "n./v.",
    sentence: "She kept a firm grip on the steering wheel.",
    sentenceCn: "她紧紧握住方向盘。"
  },
  {
    word: "guidance",
    meaning: "指导；引导",
    pos: "n.",
    sentence: "Students need proper guidance to choose their career paths.",
    sentenceCn: "学生需要适当的指导来选择他们的职业道路。"
  },
  {
    word: "halt",
    meaning: "停止；暂停",
    pos: "v./n.",
    sentence: "The project came to a halt due to lack of funding.",
    sentenceCn: "由于缺乏资金，项目停滞了。"
  },
  {
    word: "hamper",
    meaning: "妨碍；阻碍",
    pos: "v.",
    sentence: "Bad weather hampered the rescue operations.",
    sentenceCn: "恶劣天气阻碍了救援行动。"
  },
  {
    word: "hatch",
    meaning: "孵化；策划",
    pos: "v.",
    sentence: "The eggs will hatch in about two weeks.",
    sentenceCn: "蛋大约两周后会孵化。"
  },
  {
    word: "haul",
    meaning: "拖运；用力拉",
    pos: "v.",
    sentence: "They hauled the heavy boxes up the stairs.",
    sentenceCn: "他们把沉重的箱子拖上了楼梯。"
  },
  {
    word: "haunt",
    meaning: "萦绕；常去的地方",
    pos: "v./n.",
    sentence: "The memory of that day still haunts her.",
    sentenceCn: "那天的记忆仍然萦绕在她心头。"
  },
  {
    word: "hazard",
    meaning: "危险；危害",
    pos: "n.",
    sentence: "Smoking is a serious health hazard.",
    sentenceCn: "吸烟是一个严重的健康危害。"
  },
  {
    word: "hedge",
    meaning: "树篱；对冲",
    pos: "n./v.",
    sentence: "Investors use hedging strategies to minimize risk.",
    sentenceCn: "投资者使用对冲策略来最小化风险。",
    actualWord: "hedging"
  },
  {
    word: "herald",
    meaning: "预示；先驱",
    pos: "v./n.",
    sentence: "The swallows' arrival heralds the beginning of spring.",
    sentenceCn: "燕子的到来预示着春天的开始。"
  },
  {
    word: "hierarchy",
    meaning: "等级制度；层次结构",
    pos: "n.",
    sentence: "The company has a strict hierarchy of management.",
    sentenceCn: "公司有严格的管理等级制度。"
  },
  {
    word: "hollow",
    meaning: "空的；空洞的",
    pos: "adj.",
    sentence: "The tree trunk was completely hollow inside.",
    sentenceCn: "树干内部完全空了。"
  },
  {
    word: "homogeneous",
    meaning: "同质的；均匀的",
    pos: "adj.",
    sentence: "The population of this small town is quite homogeneous.",
    sentenceCn: "这个小镇的人口相当同质化。"
  },
  {
    word: "honorary",
    meaning: "荣誉的；名誉的",
    pos: "adj.",
    sentence: "She received an honorary degree from the university.",
    sentenceCn: "她获得了大学的荣誉学位。"
  },
  {
    word: "intellectual",
    meaning: "智力的；知识分子",
    pos: "adj./n.",
    sentence: "The intellectual property rights must be protected.",
    sentenceCn: "知识产权必须受到保护。"
  },
  {
    word: "intermittent",
    meaning: "间歇的；断断续续的",
    pos: "adj.",
    sentence: "The intermittent rain made it difficult to plan outdoor activities.",
    sentenceCn: "断断续续的雨使户外活动难以计划。"
  },
  {
    word: "intervene",
    meaning: "干预；介入",
    pos: "v.",
    sentence: "The government decided to intervene in the economic crisis.",
    sentenceCn: "政府决定干预经济危机。"
  },
  {
    word: "intimidate",
    meaning: "恐吓；威胁",
    pos: "v.",
    sentence: "He tried to intimidate the witness into silence.",
    sentenceCn: "他试图恐吓证人使其保持沉默。"
  },
  {
    word: "intricate",
    meaning: "复杂的；错综复杂的",
    pos: "adj.",
    sentence: "The intricate design required months of careful work.",
    sentenceCn: "这个复杂的设计需要数月的精心制作。"
  },
  {
    word: "intrigue",
    meaning: "激起兴趣；密谋",
    pos: "v./n.",
    sentence: "The mystery novel intrigued readers with its complex plot.",
    sentenceCn: "这本悬疑小说以其复杂的情节吸引了读者。"
  },
  {
    word: "invade",
    meaning: "入侵；侵略",
    pos: "v.",
    sentence: "The army invaded the neighboring country at dawn.",
    sentenceCn: "军队在黎明时入侵了邻国。"
  },
  {
    word: "invaluable",
    meaning: "无价的；非常宝贵的",
    pos: "adj.",
    sentence: "Her experience proved invaluable to the team.",
    sentenceCn: "她的经验对团队来说证明是无价的。"
  },
  {
    word: "invoice",
    meaning: "发票；清单",
    pos: "n./v.",
    sentence: "Please send the invoice to our accounting department.",
    sentenceCn: "请将发票发送到我们的会计部门。"
  },
  {
    word: "invoke",
    meaning: "援引；调用",
    pos: "v.",
    sentence: "The lawyer invoked the Fifth Amendment in court.",
    sentenceCn: "律师在法庭上援引了第五修正案。"
  },
  {
    word: "involuntary",
    meaning: "非自愿的；无意识的",
    pos: "adj.",
    sentence: "He gave an involuntary shudder when he saw the spider.",
    sentenceCn: "当他看到蜘蛛时，他不自觉地颤抖了一下。"
  },
  {
    word: "irrigate",
    meaning: "灌溉；冲洗",
    pos: "v.",
    sentence: "Farmers irrigate their fields with water from the river.",
    sentenceCn: "农民用河水灌溉他们的田地。"
  },
  {
    word: "irritate",
    meaning: "激怒；刺激",
    pos: "v.",
    sentence: "The harsh chemicals irritated her sensitive skin.",
    sentenceCn: "刺激性化学物质刺激了她敏感的皮肤。"
  },
  {
    word: "jaw",
    meaning: "下巴；颌",
    pos: "n.",
    sentence: "He broke his jaw in a car accident.",
    sentenceCn: "他在车祸中摔断了下巴。"
  },
  {
    word: "jerk",
    meaning: "猛拉；急拉",
    pos: "v./n.",
    sentence: "He jerked the steering wheel to avoid the obstacle.",
    sentenceCn: "他猛拉方向盘以避开障碍物。"
  },
  {
    word: "judicious",
    meaning: "明智的；审慎的",
    pos: "adj.",
    sentence: "A judicious decision requires careful consideration.",
    sentenceCn: "明智的决定需要仔细考虑。"
  },
  {
    word: "juncture",
    meaning: "关头；时刻；连接点",
    pos: "n.",
    sentence: "At this critical juncture, we must make the right choice.",
    sentenceCn: "在这个关键时刻，我们必须做出正确的选择。"
  }
];
