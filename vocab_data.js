// 英语单词测验题库 - 第4轮
// 包含50个单词：21个错上加错 + 29个答对单词
// 注意：部分单词有词形变化（actualWord字段）

const vocabData = [
    // ===== 错上加错（21个）=====
    {
        word: "carrier",
        pos: "n.",
        meaning: "搬运者；载体；航空母舰",
        example: "Aircraft carriers play a vital role in modern naval warfare and power projection.",
        exampleCn: "航空母舰在现代海战和力量投射中发挥着至关重要的作用。",
        actualWord: "carriers"
    },
    {
        word: "deceive",
        pos: "v.",
        meaning: "欺骗；蒙蔽",
        example: "The company deceived consumers by making false claims about their product's benefits.",
        exampleCn: "该公司通过对其产品功效的虚假宣传欺骗消费者。"
    },
    {
        word: "decent",
        pos: "adj.",
        meaning: "体面的；正派的；像样的",
        example: "Every citizen deserves a decent standard of living and access to basic healthcare.",
        exampleCn: "每个公民都应享有体面的生活水平和基本医疗服务。"
    },
    {
        word: "deduce",
        pos: "v.",
        meaning: "推断；演绎",
        example: "From the available evidence, we can deduce that the suspect was present at the scene.",
        exampleCn: "从现有证据，我们可以推断嫌疑人当时在现场。"
    },
    {
        word: "deliberate",
        pos: "adj.",
        meaning: "故意的；深思熟虑的",
        example: "The jury concluded that the defendant's actions were deliberate and premeditated.",
        exampleCn: "陪审团认定被告的行为是蓄意且有预谋的。"
    },
    {
        word: "depict",
        pos: "v.",
        meaning: "描绘；描述",
        example: "The novel vividly depicts the harsh reality of life during the Great Depression.",
        exampleCn: "这部小说生动地描绘了大萧条时期生活的残酷现实。"
    },
    {
        word: "dialect",
        pos: "n.",
        meaning: "方言",
        example: "Linguists study how dialects vary across different regions and social groups.",
        exampleCn: "语言学家研究方言在不同地区和社会群体中的差异。"
    },
    {
        word: "discharge",
        pos: "v./n.",
        meaning: "释放；排出；解雇",
        example: "The factory was fined for illegally discharging toxic waste into the river.",
        exampleCn: "这家工厂因非法向河流排放有毒废物而被罚款。",
        actualWord: "discharging"
    },
    {
        word: "divert",
        pos: "v.",
        meaning: "转移；使转向；娱乐",
        example: "The government decided to divert funds from defense to education programs.",
        exampleCn: "政府决定将资金从国防转向教育项目。"
    },
    {
        word: "divide",
        pos: "v.",
        meaning: "划分；分开；除",
        example: "The issue of immigration has deeply divided public opinion in the country.",
        exampleCn: "移民问题在该国深刻地分裂了公众舆论。"
    },
    {
        word: "doom",
        pos: "n./v.",
        meaning: "厄运；注定",
        example: "The project was doomed to fail from the start due to insufficient funding.",
        exampleCn: "由于资金不足，该项目从一开始就注定要失败。"
    },
    {
        word: "earnest",
        pos: "adj.",
        meaning: "认真的；诚挚的",
        example: "She made an earnest attempt to reconcile with her estranged family members.",
        exampleCn: "她真诚地尝试与疏远的家庭成员和解。"
    },
    {
        word: "elevate",
        pos: "v.",
        meaning: "提高；抬起；提拔",
        example: "Education has the power to elevate individuals from poverty to prosperity.",
        exampleCn: "教育有能力使个人从贫困提升到富裕。"
    },
    {
        word: "embody",
        pos: "v.",
        meaning: "体现；包含",
        example: "The statue embodies the spirit of freedom that the nation was founded upon.",
        exampleCn: "这座雕像体现了国家建立时的自由精神。"
    },
    {
        word: "encounter",
        pos: "v./n.",
        meaning: "遭遇；遇到",
        example: "Researchers often encounter unexpected challenges when conducting field studies.",
        exampleCn: "研究人员进行实地研究时经常遇到意想不到的挑战。"
    },
    {
        word: "endorse",
        pos: "v.",
        meaning: "背书；赞同；代言",
        example: "Several celebrities endorsed the new environmental protection campaign.",
        exampleCn: "几位名人为这项新的环境保护运动代言。"
    },
    {
        word: "entail",
        pos: "v.",
        meaning: "牵涉；必然导致",
        example: "The project will entail significant investment and long-term commitment from all parties.",
        exampleCn: "该项目将需要各方的重大投资和长期承诺。"
    },
    {
        word: "enumerate",
        pos: "v.",
        meaning: "列举",
        example: "The report enumerates the various factors contributing to climate change.",
        exampleCn: "报告列举了导致气候变化的各种因素。"
    },
    {
        word: "epoch",
        pos: "n.",
        meaning: "时代；纪元",
        example: "The Renaissance was an epoch of great cultural and artistic achievement.",
        exampleCn: "文艺复兴是一个伟大的文化和艺术成就的时代。"
    },
    {
        word: "errand",
        pos: "n.",
        meaning: "差使；杂事",
        example: "She went to the post office to run an errand for her elderly neighbor.",
        exampleCn: "她去邮局为她的年迈邻居办一件差事。"
    },
    {
        word: "escort",
        pos: "v./n.",
        meaning: "护送；护卫",
        example: "The security team escorted the visiting dignitary to the conference venue.",
        exampleCn: "安保团队护送来访的贵宾前往会议地点。"
    },
    
    // ===== 答对单词（29个）=====
    {
        word: "accommodate",
        pos: "v.",
        meaning: "容纳；提供住宿；适应；顺应",
        example: "The hotel can accommodate up to 500 guests during the peak season.",
        exampleCn: "这家酒店在旺季可以容纳多达500名客人。"
    },
    {
        word: "accomplish",
        pos: "v.",
        meaning: "完成；实现；达到",
        example: "Through hard work and determination, she accomplished her goal of becoming a doctor.",
        exampleCn: "通过努力工作和坚定的决心，她实现了成为医生的目标。"
    },
    {
        word: "accurate",
        pos: "adj.",
        meaning: "准确的；精确的；正确无误的",
        example: "It is crucial to provide accurate information when filling out official documents.",
        exampleCn: "填写正式文件时提供准确信息至关重要。"
    },
    {
        word: "Abide by",
        pos: "v.",
        meaning: "遵守",
        example: "Citizens must abide by the law to maintain social order and stability.",
        exampleCn: "公民必须遵守法律以维护社会秩序和稳定。"
    },
    {
        word: "Carry out",
        pos: "v.",
        meaning: "贯彻；执行；实现",
        example: "The government decided to carry out a comprehensive survey on public health issues.",
        exampleCn: "政府决定开展一项关于公共卫生问题的全面调查。"
    },
    {
        word: "decay",
        pos: "v./n.",
        meaning: "腐烂；衰退",
        example: "Without proper maintenance, the ancient building began to decay rapidly.",
        exampleCn: "没有适当的维护，这座古建筑开始迅速衰败。"
    },
    {
        word: "defy",
        pos: "v.",
        meaning: "挑衅；违抗；藐视",
        example: "The rebels continued to defy the government's authority despite severe consequences.",
        exampleCn: "尽管面临严重后果，叛乱分子继续蔑视政府的权威。"
    },
    {
        word: "denote",
        pos: "v.",
        meaning: "象征；表示",
        example: "In this context, the color red denotes danger and requires immediate attention.",
        exampleCn: "在这种语境下，红色表示危险，需要立即关注。"
    },
    {
        word: "denounce",
        pos: "v.",
        meaning: "谴责；告发",
        example: "Many countries denounced the military coup as a violation of democratic principles.",
        exampleCn: "许多国家谴责这次军事政变违反了民主原则。"
    },
    {
        word: "deprive",
        pos: "v.",
        meaning: "剥夺；使丧失",
        example: "No one should be deprived of their basic human rights under any circumstances.",
        exampleCn: "在任何情况下，任何人都不应被剥夺基本人权。"
    },
    {
        word: "detach",
        pos: "v.",
        meaning: "分离；拆开",
        example: "The surgeon carefully detached the infected tissue from the healthy organ.",
        exampleCn: "外科医生小心翼翼地将感染组织与健康器官分离。"
    },
    {
        word: "deteriorate",
        pos: "v.",
        meaning: "恶化；变坏",
        example: "His health condition began to deteriorate rapidly after he stopped taking medication.",
        exampleCn: "停止服药后，他的健康状况开始迅速恶化。"
    },
    {
        word: "determine",
        pos: "v.",
        meaning: "决定；确定；决心",
        example: "Genetic factors determine to a large extent how individuals respond to certain medications.",
        exampleCn: "遗传因素在很大程度上决定了个个体对某些药物的反应。"
    },
    {
        word: "dilute",
        pos: "v.",
        meaning: "稀释；变淡",
        example: "Adding water will dilute the concentration of the solution and reduce its effectiveness.",
        exampleCn: "加水会稀释溶液的浓度并降低其效果。"
    },
    {
        word: "diplomat",
        pos: "n.",
        meaning: "外交官",
        example: "The diplomat successfully negotiated a peace treaty between the two warring nations.",
        exampleCn: "这位外交官成功地在两个交战国之间谈判达成了和平条约。"
    },
    {
        word: "disguise",
        pos: "v./n.",
        meaning: "伪装；掩饰",
        example: "The spy disguised himself as a journalist to gain access to the restricted area.",
        exampleCn: "间谍伪装成记者以进入限制区域。"
    },
    {
        word: "dispel",
        pos: "v.",
        meaning: "驱散；消除",
        example: "The new evidence helped dispel doubts about the defendant's innocence.",
        exampleCn: "新证据有助于消除对被告清白的疑虑。"
    },
    {
        word: "dispense",
        pos: "v.",
        meaning: "分配；分发；免除",
        example: "Pharmacists are authorized to dispense prescription medications to patients.",
        exampleCn: "药剂师有权向患者配发处方药物。"
    },
    {
        word: "dispute",
        pos: "n./v.",
        meaning: "争论；纠纷",
        example: "The two countries have been in a long-standing dispute over territorial boundaries.",
        exampleCn: "两国在领土边界问题上长期存在争议。"
    },
    {
        word: "disturb",
        pos: "v.",
        meaning: "打扰；弄乱",
        example: "Please do not disturb the experiment while it is in progress.",
        exampleCn: "实验进行期间请不要打扰。"
    },
    {
        word: "downright",
        pos: "adj./adv.",
        meaning: "彻底的；十足地",
        example: "His behavior at the meeting was downright rude and completely unacceptable.",
        exampleCn: "他在会议上的行为简直粗鲁，完全不可接受。"
    },
    {
        word: "dread",
        pos: "v./n.",
        meaning: "恐惧；担心",
        example: "Students often dread the thought of taking final examinations.",
        exampleCn: "学生们经常害怕期末考试的想法。"
    },
    {
        word: "dubious",
        pos: "adj.",
        meaning: "可疑的；怀疑的",
        example: "Many consumers remain dubious about the safety of genetically modified foods.",
        exampleCn: "许多消费者对转基因食品的安全性仍持怀疑态度。"
    },
    {
        word: "editorial",
        pos: "adj./n.",
        meaning: "编辑的；社论",
        example: "The newspaper published an editorial criticizing the government's economic policies.",
        exampleCn: "该报纸发表了一篇批评政府经济政策的社论。"
    },
    {
        word: "eligible",
        pos: "adj.",
        meaning: "有资格的；合格的",
        example: "Only citizens over the age of 18 are eligible to vote in national elections.",
        exampleCn: "只有18岁以上的公民才有资格在全国选举中投票。"
    },
    {
        word: "eminent",
        pos: "adj.",
        meaning: "卓越的；著名的",
        example: "The conference was attended by eminent scientists from around the world.",
        exampleCn: "会议吸引了来自世界各地的杰出科学家参加。"
    },
    {
        word: "erect",
        pos: "v.",
        meaning: "竖立；建立",
        example: "The city decided to erect a monument in honor of the fallen soldiers.",
        exampleCn: "城市决定建立一座纪念碑以纪念阵亡士兵。"
    },
    {
        word: "eternal",
        pos: "adj.",
        meaning: "永恒的",
        example: "The concept of eternal life is central to many religious beliefs.",
        exampleCn: "永恒生命的概念是许多宗教信仰的核心。"
    },
    {
        word: "flesh",
        pos: "n.",
        meaning: "肉；肉体",
        example: "The wound healed slowly, but the flesh gradually regenerated over time.",
        exampleCn: "伤口愈合缓慢，但肉体随着时间逐渐再生。"
    }
];
