// 第3轮例句式测验 - 50个单词（第1次❌ + 第2次为空）
const vocabData = [
  {
    word: "resent",
    meaning: "怨恨；愤恨",
    pos: "v.",
    sentence: "She resented being treated unfairly by her supervisor.",
    sentenceCn: "她怨恨受到上司的不公平对待。",
    actualWord: "resented"
  },
  {
    word: "resonance",
    meaning: "共鸣；反响",
    pos: "n.",
    sentence: "The speech had a deep resonance with the audience's concerns.",
    sentenceCn: "演讲深深引起了观众关注问题的共鸣。"
  },
  {
    word: "respective",
    meaning: "各自的",
    pos: "adj.",
    sentence: "The three companies have their respective strengths in different markets.",
    sentenceCn: "这三家公司各自在不同的市场上有自己的优势。"
  },
  {
    word: "retort",
    meaning: "反驳；回嘴",
    pos: "n./v.",
    sentence: "He gave a sharp retort to his opponent's criticism.",
    sentenceCn: "他对对手的批评作出了尖锐的反驳。"
  },
  {
    word: "reveal",
    meaning: "揭露；显示",
    pos: "v.",
    sentence: "The investigation revealed widespread corruption in the government.",
    sentenceCn: "调查揭露了政府中普遍存在的腐败现象。",
    actualWord: "revealed"
  },
  {
    word: "revive",
    meaning: "复兴；苏醒",
    pos: "v.",
    sentence: "Efforts to revive the struggling economy are showing positive results.",
    sentenceCn: "复苏挣扎中的经济的努力正在显示出积极的结果。"
  },
  {
    word: "salient",
    meaning: "显著的；突出的",
    pos: "adj.",
    sentence: "The salient points of the argument need to be addressed first.",
    sentenceCn: "论点的要点需要首先解决。"
  },
  {
    word: "saturate",
    meaning: "浸透；使饱和",
    pos: "v.",
    sentence: "The market became saturated with similar products, leading to intense competition.",
    sentenceCn: "市场充满了类似的产品，导致激烈的竞争。",
    actualWord: "saturated"
  },
  {
    word: "scandal",
    meaning: "丑闻",
    pos: "n.",
    sentence: "The political scandal dominated the news headlines for weeks.",
    sentenceCn: "政治丑闻连续几周占据了新闻头条。"
  },
  {
    word: "scenic",
    meaning: "风景优美的",
    pos: "adj.",
    sentence: "The scenic route along the coast attracts many tourists every year.",
    sentenceCn: "沿海的风景区每年吸引许多游客。"
  },
  {
    word: "scrutiny",
    meaning: "详细检查；监视",
    pos: "n.",
    sentence: "The candidate's background underwent careful scrutiny before the election.",
    sentenceCn: "候选人的背景在选举前接受了仔细的审查。"
  },
  {
    word: "sector",
    meaning: "部门；扇形",
    pos: "n.",
    sentence: "The financial sector plays a crucial role in the national economy.",
    sentenceCn: "金融部门在国民经济中发挥着关键作用。"
  },
  {
    word: "secular",
    meaning: "世俗的",
    pos: "adj.",
    sentence: "The secular state ensures freedom of religion for all citizens.",
    sentenceCn: "世俗国家确保所有公民的宗教自由。"
  },
  {
    word: "shun",
    meaning: "避开；避免",
    pos: "v.",
    sentence: "Health-conscious people shun processed foods high in sugar and fat.",
    sentenceCn: "注重健康的人避免食用高糖和高脂肪的加工食品。"
  },
  {
    word: "sinister",
    meaning: "凶兆的；邪恶的",
    pos: "adj.",
    sentence: "The sinister plot was discovered before it could be carried out.",
    sentenceCn: "邪恶的阴谋在实施之前就被发现了。"
  },
  {
    word: "skim",
    meaning: "撇去；略读",
    pos: "v.",
    sentence: "He skimmed through the report to find the most important information.",
    sentenceCn: "他略读了报告以找到最重要的信息。",
    actualWord: "skimmed"
  },
  {
    word: "slaughter",
    meaning: "屠宰；屠杀",
    pos: "n./v.",
    sentence: "The war resulted in the slaughter of thousands of innocent civilians.",
    sentenceCn: "战争导致了数以千计无辜平民的屠杀。"
  },
  {
    word: "slender",
    meaning: "苗条的；微薄的",
    pos: "adj.",
    sentence: "She maintained a slender figure through regular exercise and healthy eating.",
    sentenceCn: "她通过经常锻炼和健康饮食保持了苗条的身材。"
  },
  {
    word: "slum",
    meaning: "贫民窟",
    pos: "n.",
    sentence: "The government launched programs to improve living conditions in urban slums.",
    sentenceCn: "政府推出了改善城市贫民窟生活条件的计划。",
    actualWord: "slums"
  },
  {
    word: "slump",
    meaning: "暴跌；萧条",
    pos: "n./v.",
    sentence: "The economy experienced a slump after the global financial crisis.",
    sentenceCn: "全球金融危机后经济经历了萧条。"
  },
  {
    word: "smart",
    meaning: "聪明的；时髦的",
    pos: "adj.",
    sentence: "The smart student always came up with innovative solutions to problems.",
    sentenceCn: "聪明的学生总能想出创新的问题解决方案。"
  },
  {
    word: "smuggle",
    meaning: "走私",
    pos: "v.",
    sentence: "The criminals attempted to smuggle illegal goods across the border.",
    sentenceCn: "罪犯试图将非法物品走私过境。"
  },
  {
    word: "sober",
    meaning: "清醒的；严肃的",
    pos: "adj.",
    sentence: "The sober analysis revealed serious flaws in the proposed plan.",
    sentenceCn: "严肃的分析揭示了提议计划中的严重缺陷。"
  },
  {
    word: "solemn",
    meaning: "庄严的；严肃的",
    pos: "adj.",
    sentence: "The judge delivered a solemn verdict in the high-profile case.",
    sentenceCn: "法官在这个备受关注的案件中作出了庄严的判决。"
  },
  {
    word: "solicit",
    meaning: "请求；恳求",
    pos: "v.",
    sentence: "The organization solicits donations from the public to fund its programs.",
    sentenceCn: "该组织向公众募集捐款以资助其项目。",
    actualWord: "solicits"
  },
  {
    word: "solitary",
    meaning: "孤独的；唯一的",
    pos: "adj.",
    sentence: "The solitary hiker enjoyed the peace and quiet of the wilderness.",
    sentenceCn: "孤独的徒步者享受着荒野的宁静和安静。"
  },
  {
    word: "spacious",
    meaning: "宽敞的",
    pos: "adj.",
    sentence: "The new house features a spacious living room with large windows.",
    sentenceCn: "新房子有一个宽敞的客厅，配有大窗户。"
  },
  {
    word: "specialize",
    meaning: "专门研究；专攻",
    pos: "v.",
    sentence: "The doctor decided to specialize in pediatric medicine after medical school.",
    sentenceCn: "医学院毕业后，这位医生决定专攻儿科医学。"
  },
  {
    word: "stagger",
    meaning: "蹒跚；使吃惊",
    pos: "v.",
    sentence: "The shocking news made him stagger backward in disbelief.",
    sentenceCn: "震惊的消息让他难以置信地蹒跚后退。"
  },
  {
    word: "stale",
    meaning: "陈腐的；不新鲜的",
    pos: "adj.",
    sentence: "The bread became stale after being left out for several days.",
    sentenceCn: "面包在放了好几天后变得不新鲜了。"
  },
  {
    word: "steer",
    meaning: "驾驶；引导",
    pos: "v.",
    sentence: "The captain steered the ship carefully through the narrow channel.",
    sentenceCn: "船长小心翼翼地驾驶船只通过狭窄的航道。",
    actualWord: "steered"
  },
  {
    word: "sterile",
    meaning: "不育的；无菌的",
    pos: "adj.",
    sentence: "The laboratory maintained a sterile environment for the experiments.",
    sentenceCn: "实验室为实验保持了无菌环境。"
  },
  {
    word: "stipulate",
    meaning: "规定；约定",
    pos: "v.",
    sentence: "The contract stipulates that the work must be completed within six months.",
    sentenceCn: "合同规定工作必须在六个月内完成。",
    actualWord: "stipulates"
  },
  {
    word: "strife",
    meaning: "冲突；争吵",
    pos: "n.",
    sentence: "The country has experienced years of internal strife and political instability.",
    sentenceCn: "该国经历了多年的内部冲突和政治不稳定。"
  },
  {
    word: "subpoena",
    meaning: "传票；传唤",
    pos: "n./v.",
    sentence: "The court issued a subpoena requiring the witness to testify.",
    sentenceCn: "法院发出了传票，要求证人作证。"
  },
  {
    word: "succinct",
    meaning: "简洁的",
    pos: "adj.",
    sentence: "The professor provided a succinct summary of the complex theory.",
    sentenceCn: "教授对复杂理论提供了简洁的总结。"
  },
  {
    word: "succumb",
    meaning: "屈服；死于",
    pos: "v.",
    sentence: "The patient succumbed to the illness after a long battle.",
    sentenceCn: "病人在长期抗争后屈服于疾病。",
    actualWord: "succumbed"
  },
  {
    word: "superstition",
    meaning: "迷信",
    pos: "n.",
    sentence: "Many ancient superstitions have been replaced by scientific understanding.",
    sentenceCn: "许多古代迷信已被科学理解所取代。",
    actualWord: "superstitions"
  },
  {
    word: "sustain",
    meaning: "维持；支撑；遭受",
    pos: "v.",
    sentence: "The organization works to sustain the livelihoods of rural communities.",
    sentenceCn: "该组织致力于维持农村社区的生计。"
  },
  {
    word: "synthetic",
    meaning: "合成的；人造的",
    pos: "adj.",
    sentence: "Many modern products are made from synthetic materials.",
    sentenceCn: "许多现代产品是由合成材料制成的。"
  },
  {
    word: "tariff",
    meaning: "关税；价目表",
    pos: "n.",
    sentence: "The government imposed high tariffs on imported goods to protect domestic industries.",
    sentenceCn: "政府对进口商品征收高关税以保护国内产业。",
    actualWord: "tariffs"
  },
  {
    word: "tedious",
    meaning: "乏味的；单调的",
    pos: "adj.",
    sentence: "The tedious task of sorting through thousands of documents took weeks.",
    sentenceCn: "整理数千份文件的乏味工作花了几周时间。"
  },
  {
    word: "temperament",
    meaning: "气质；性格",
    pos: "n.",
    sentence: "Her artistic temperament made her sensitive to criticism.",
    sentenceCn: "她的艺术气质使她对批评很敏感。"
  },
  {
    word: "tenure",
    meaning: "任期；终身职位",
    pos: "n.",
    sentence: "The professor was granted tenure after years of excellent teaching and research.",
    sentenceCn: "经过多年的优秀教学和研究，这位教授获得了终身职位。"
  },
  {
    word: "terminology",
    meaning: "术语",
    pos: "n.",
    sentence: "Medical terminology can be difficult for patients to understand.",
    sentenceCn: "医学术语可能让患者难以理解。"
  },
  {
    word: "territory",
    meaning: "领土；领域",
    pos: "n.",
    sentence: "The country expanded its territory through peaceful negotiations.",
    sentenceCn: "该国通过和平谈判扩大了其领土。"
  },
  {
    word: "testify",
    meaning: "作证；表明",
    pos: "v.",
    sentence: "Several witnesses testified about what they saw on the night of the crime.",
    sentenceCn: "几名证人就他们在犯罪当晚看到的情况作了证。",
    actualWord: "testified"
  },
  {
    word: "threshold",
    meaning: "门槛；开端",
    pos: "n.",
    sentence: "Crossing the threshold into adulthood brings new responsibilities.",
    sentenceCn: "跨入成年门槛带来了新的责任。"
  },
  {
    word: "thrift",
    meaning: "节俭",
    pos: "n.",
    sentence: "Thrift is considered a virtue in many cultures around the world.",
    sentenceCn: "节俭在世界许多文化中被视为一种美德。"
  },
  {
    word: "toll",
    meaning: "通行费；伤亡人数",
    pos: "n.",
    sentence: "The toll of the accident included several injured passengers.",
    sentenceCn: "事故的伤亡人数包括几名受伤的乘客。"
  }
];
