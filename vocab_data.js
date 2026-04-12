// 英语单词测验数据 - 第1轮
// 包含50个重点单词（按下次复习时间和字母排序）

const vocabData = [
  {
    word: "Abide by",
    meaning: "遵守",
    pos: "v.",
    sentence: "Citizens must abide by the law to maintain social order and stability.",
    sentenceCn: "公民必须遵守法律以维护社会秩序和稳定。"
  },
  {
    word: "Carry out",
    meaning: "贯彻；执行；实现",
    pos: "v.",
    sentence: "The government decided to carry out a comprehensive survey on public health issues.",
    sentenceCn: "政府决定开展一项关于公共卫生问题的全面调查。"
  },
  {
    word: "accommodate",
    meaning: "容纳，提供住宿，适应，顺应",
    pos: "v.",
    sentence: "The hotel can accommodate up to 500 guests during the peak season.",
    sentenceCn: "这家酒店在旺季可以容纳多达500名客人。"
  },
  {
    word: "accomplish",
    meaning: "完成，实现，达到",
    pos: "v.",
    sentence: "Through hard work and determination, she accomplished her goal of becoming a doctor.",
    sentenceCn: "通过努力工作和坚定的决心，她实现了成为医生的目标。"
  },
  {
    word: "accurate",
    meaning: "准确的，精确的，正确无误的",
    pos: "adj.",
    sentence: "It is crucial to provide accurate information when filling out official documents.",
    sentenceCn: "填写正式文件时提供准确信息至关重要。"
  },
  {
    word: "carrier",
    actualWord: "carriers",
    meaning: "搬运者；载体；航空母舰",
    pos: "n.",
    sentence: "Aircraft carriers play a vital role in modern naval warfare and power projection.",
    sentenceCn: "航空母舰在现代海战和力量投射中发挥着至关重要的作用。"
  },
  {
    word: "decay",
    meaning: "腐烂；衰退",
    pos: "v./n.",
    sentence: "Without proper maintenance, the ancient building began to decay rapidly.",
    sentenceCn: "没有适当的维护，这座古建筑开始迅速衰败。"
  },
  {
    word: "deceive",
    meaning: "欺骗；蒙蔽",
    pos: "v.",
    sentence: "The company deceived consumers by making false claims about their product's benefits.",
    sentenceCn: "该公司通过对其产品功效的虚假宣传欺骗消费者。"
  },
  {
    word: "decent",
    meaning: "体面的；正派的；像样的",
    pos: "adj.",
    sentence: "Every citizen deserves a decent standard of living and access to basic healthcare.",
    sentenceCn: "每个公民都应享有体面的生活水平和基本医疗服务。"
  },
  {
    word: "deduce",
    meaning: "推断；演绎",
    pos: "v.",
    sentence: "From the available evidence, we can deduce that the suspect was present at the scene.",
    sentenceCn: "从现有证据，我们可以推断嫌疑人当时在现场。"
  },
  {
    word: "defy",
    meaning: "挑衅；违抗；藐视",
    pos: "v.",
    sentence: "The rebels continued to defy the government's authority despite severe consequences.",
    sentenceCn: "尽管面临严重后果，叛乱分子继续蔑视政府的权威。"
  },
  {
    word: "deliberate",
    meaning: "故意的；深思熟虑的",
    pos: "adj.",
    sentence: "The jury concluded that the defendant's actions were deliberate and premeditated.",
    sentenceCn: "陪审团认定被告的行为是蓄意且有预谋的。"
  },
  {
    word: "denote",
    meaning: "象征；表示",
    pos: "v.",
    sentence: "In this context, the color red denotes danger and requires immediate attention.",
    sentenceCn: "在这种语境下，红色表示危险，需要立即关注。"
  },
  {
    word: "denounce",
    actualWord: "denounced",
    meaning: "谴责；告发",
    pos: "v.",
    sentence: "Many countries denounced the military coup as a violation of democratic principles.",
    sentenceCn: "许多国家谴责这次军事政变违反了民主原则。"
  },
  {
    word: "depict",
    actualWord: "depicts",
    meaning: "描绘；描述",
    pos: "v.",
    sentence: "The novel vividly depicts the harsh reality of life during the Great Depression.",
    sentenceCn: "这部小说生动地描绘了大萧条时期生活的残酷现实。"
  },
  {
    word: "deprive",
    actualWord: "deprived",
    meaning: "剥夺；使丧失",
    pos: "v.",
    sentence: "No one should be deprived of their basic human rights under any circumstances.",
    sentenceCn: "在任何情况下，任何人都不应被剥夺基本人权。"
  },
  {
    word: "detach",
    meaning: "分离；拆开",
    pos: "v.",
    sentence: "The surgeon carefully detached the infected tissue from the healthy organ.",
    sentenceCn: "外科医生小心翼翼地将感染组织与健康器官分离。"
  },
  {
    word: "deteriorate",
    meaning: "恶化；变坏",
    pos: "v.",
    sentence: "His health condition began to deteriorate rapidly after he stopped taking medication.",
    sentenceCn: "停止服药后，他的健康状况开始迅速恶化。"
  },
  {
    word: "determine",
    meaning: "决定；确定；决心",
    pos: "v.",
    sentence: "Genetic factors determine to a large extent how individuals respond to certain medications.",
    sentenceCn: "遗传因素在很大程度上决定了个个体对某些药物的反应。"
  },
  {
    word: "dialect",
    meaning: "方言",
    pos: "n.",
    sentence: "Linguists study how dialects vary across different regions and social groups.",
    sentenceCn: "语言学家研究方言在不同地区和社会群体中的差异。"
  },
  {
    word: "dilute",
    meaning: "稀释；变淡",
    pos: "v.",
    sentence: "Adding water will dilute the concentration of the solution and reduce its effectiveness.",
    sentenceCn: "加水会稀释溶液的浓度并降低其效果。"
  },
  {
    word: "diplomat",
    meaning: "外交官",
    pos: "n.",
    sentence: "The diplomat successfully negotiated a peace treaty between the two warring nations.",
    sentenceCn: "这位外交官成功地在两个交战国之间谈判达成了和平条约。"
  },
  {
    word: "discharge",
    actualWord: "discharging",
    meaning: "释放；排出；解雇",
    pos: "v./n.",
    sentence: "The factory was fined for illegally discharging toxic waste into the river.",
    sentenceCn: "这家工厂因非法向河流排放有毒废物而被罚款。"
  },
  {
    word: "disguise",
    meaning: "伪装；掩饰",
    pos: "v./n.",
    sentence: "The spy disguised himself as a journalist to gain access to the restricted area.",
    sentenceCn: "间谍伪装成记者以进入限制区域。"
  },
  {
    word: "dispel",
    meaning: "驱散；消除",
    pos: "v.",
    sentence: "The new evidence helped dispel doubts about the defendant's innocence.",
    sentenceCn: "新证据有助于消除对被告清白的疑虑。"
  },
  {
    word: "dispense",
    meaning: "分配；分发；免除",
    pos: "v.",
    sentence: "Pharmacists are authorized to dispense prescription medications to patients.",
    sentenceCn: "药剂师有权向患者配发处方药物。"
  },
  {
    word: "dispute",
    meaning: "争论；纠纷",
    pos: "n./v.",
    sentence: "The two countries have been in a long-standing dispute over territorial boundaries.",
    sentenceCn: "两国在领土边界问题上长期存在争议。"
  },
  {
    word: "disturb",
    meaning: "打扰；弄乱",
    pos: "v.",
    sentence: "Please do not disturb the experiment while it is in progress.",
    sentenceCn: "实验进行期间请不要打扰。"
  },
  {
    word: "divert",
    meaning: "转移；使转向；娱乐",
    pos: "v.",
    sentence: "The government decided to divert funds from defense to education programs.",
    sentenceCn: "政府决定将资金从国防转向教育项目。"
  },
  {
    word: "divide",
    meaning: "划分；分开；除",
    pos: "v.",
    sentence: "The issue of immigration has deeply divided public opinion in the country.",
    sentenceCn: "移民问题在该国深刻地分裂了公众舆论。"
  },
  {
    word: "donation",
    meaning: "捐赠；捐款",
    pos: "n.",
    sentence: "The charitable organization received a generous donation from an anonymous benefactor.",
    sentenceCn: "该慈善组织收到了一位匿名捐助者的慷慨捐赠。"
  },
  {
    word: "doom",
    meaning: "厄运；注定",
    pos: "n./v.",
    sentence: "The project was doomed to fail from the start due to insufficient funding.",
    sentenceCn: "由于资金不足，该项目从一开始就注定要失败。"
  },
  {
    word: "downright",
    meaning: "彻底的；十足地",
    pos: "adj./adv.",
    sentence: "His behavior at the meeting was downright rude and completely unacceptable.",
    sentenceCn: "他在会议上的行为简直粗鲁，完全不可接受。"
  },
  {
    word: "dread",
    meaning: "恐惧；担心",
    pos: "v./n.",
    sentence: "Students often dread the thought of taking final examinations.",
    sentenceCn: "学生们经常害怕期末考试的想法。"
  },
  {
    word: "dubious",
    meaning: "可疑的；怀疑的",
    pos: "adj.",
    sentence: "Many consumers remain dubious about the safety of genetically modified foods.",
    sentenceCn: "许多消费者对转基因食品的安全性仍持怀疑态度。"
  },
  {
    word: "earnest",
    meaning: "认真的；诚挚的",
    pos: "adj.",
    sentence: "She made an earnest attempt to reconcile with her estranged family members.",
    sentenceCn: "她真诚地尝试与疏远的家庭成员和解。"
  },
  {
    word: "editorial",
    meaning: "编辑的；社论",
    pos: "adj./n.",
    sentence: "The newspaper published an editorial criticizing the government's economic policies.",
    sentenceCn: "该报纸发表了一篇批评政府经济政策的社论。"
  },
  {
    word: "elevate",
    meaning: "提高；抬起；提拔",
    pos: "v.",
    sentence: "Education has the power to elevate individuals from poverty to prosperity.",
    sentenceCn: "教育有能力使个人从贫困提升到富裕。"
  },
  {
    word: "eligible",
    meaning: "有资格的；合格的",
    pos: "adj.",
    sentence: "Only citizens over the age of 18 are eligible to vote in national elections.",
    sentenceCn: "只有18岁以上的公民才有资格在全国选举中投票。"
  },
  {
    word: "embody",
    actualWord: "embodies",
    meaning: "体现；包含",
    pos: "v.",
    sentence: "The statue embodies the spirit of freedom that the nation was founded upon.",
    sentenceCn: "这座雕像体现了国家建立时的自由精神。"
  },
  {
    word: "eminent",
    meaning: "卓越的；著名的",
    pos: "adj.",
    sentence: "The conference was attended by eminent scientists from around the world.",
    sentenceCn: "会议吸引了来自世界各地的杰出科学家参加。"
  },
  {
    word: "encounter",
    meaning: "遭遇；遇到",
    pos: "v./n.",
    sentence: "Researchers often encounter unexpected challenges when conducting field studies.",
    sentenceCn: "研究人员进行实地研究时经常遇到意想不到的挑战。"
  },
  {
    word: "endorse",
    actualWord: "endorsed",
    meaning: "背书；赞同；代言",
    pos: "v.",
    sentence: "Several celebrities endorsed the new environmental protection campaign.",
    sentenceCn: "几位名人为这项新的环境保护运动代言。"
  },
  {
    word: "entail",
    meaning: "牵涉；必然导致",
    pos: "v.",
    sentence: "The project will entail significant investment and long-term commitment from all parties.",
    sentenceCn: "该项目将需要各方的重大投资和长期承诺。"
  },
  {
    word: "enumerate",
    meaning: "列举",
    pos: "v.",
    sentence: "The report enumerates the various factors contributing to climate change.",
    sentenceCn: "报告列举了导致气候变化的各种因素。"
  },
  {
    word: "epoch",
    meaning: "时代；纪元",
    pos: "n.",
    sentence: "The Renaissance was an epoch of great cultural and artistic achievement.",
    sentenceCn: "文艺复兴是一个伟大的文化和艺术成就的时代。"
  },
  {
    word: "erect",
    meaning: "竖立；建立",
    pos: "v.",
    sentence: "The city decided to erect a monument in honor of the fallen soldiers.",
    sentenceCn: "城市决定建立一座纪念碑以纪念阵亡士兵。"
  },
  {
    word: "errand",
    meaning: "差使；杂事",
    pos: "n.",
    sentence: "She went to the post office to run an errand for her elderly neighbor.",
    sentenceCn: "她去邮局为她的年迈邻居办一件差事。"
  },
  {
    word: "escort",
    meaning: "护送；护卫",
    pos: "v./n.",
    sentence: "The security team escorted the visiting dignitary to the conference venue.",
    sentenceCn: "安保团队护送来访的贵宾前往会议地点。"
  },
  {
    word: "eternal",
    meaning: "永恒的",
    pos: "adj.",
    sentence: "The concept of eternal life is central to many religious beliefs.",
    sentenceCn: "永恒生命的概念是许多宗教信仰的核心。"
  }
];
