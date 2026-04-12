// 第5轮英语单词测验题库
// 生成时间：2026-04-12 19:28
// 筛选条件：第1次复习 = ❌（520个重点单词）
// 排序规则：下次复习时间（升序）> 第2次复习 = ❌（错题优先）

const vocabData = [
    // 1. carrier - 下次复习时间最早，第2次复习=❌
    {
        word: "carrier",
        meaning: "搬运者；载体；航空母舰",
        pos: "n.",
        example: "Aircraft carriers play a vital role in modern naval warfare and power projection.",
        exampleCn: "航空母舰在现代海战和力量投射中发挥着至关重要的作用。",
        actualWord: "carriers"
    },
    
    // 2. deceive
    {
        word: "deceive",
        meaning: "欺骗；蒙蔽",
        pos: "v.",
        example: "The company deceived consumers by making false claims about their product's benefits.",
        exampleCn: "该公司通过对其产品功效的虚假宣传欺骗消费者。"
    },
    
    // 3. decent
    {
        word: "decent",
        meaning: "体面的；正派的；像样的",
        pos: "adj.",
        example: "Every citizen deserves a decent standard of living and access to basic healthcare.",
        exampleCn: "每个公民都应享有体面的生活水平和基本医疗服务。"
    },
    
    // 4. deduce
    {
        word: "deduce",
        meaning: "推断；演绎",
        pos: "v.",
        example: "From the available evidence, we can deduce that the suspect was present at the scene.",
        exampleCn: "从现有证据，我们可以推断嫌疑人当时在现场。"
    },
    
    // 5. deliberate
    {
        word: "deliberate",
        meaning: "故意的；深思熟虑的",
        pos: "adj.",
        example: "The jury concluded that the defendant's actions were deliberate and premeditated.",
        exampleCn: "陪审团认定被告的行为是蓄意且有预谋的。"
    },
    
    // 6. depict
    {
        word: "depict",
        meaning: "描绘；描述",
        pos: "v.",
        example: "The novel vividly depicts the harsh reality of life during the Great Depression.",
        exampleCn: "这部小说生动地描绘了大萧条时期生活的残酷现实。",
        actualWord: "depicts"
    },
    
    // 7. dialect
    {
        word: "dialect",
        meaning: "方言",
        pos: "n.",
        example: "Linguists study how dialects vary across different regions and social groups.",
        exampleCn: "语言学家研究方言在不同地区和社会群体中的差异。",
        actualWord: "dialects"
    },
    
    // 8. discharge
    {
        word: "discharge",
        meaning: "释放；排出；解雇",
        pos: "v./n.",
        example: "The factory was fined for illegally discharging toxic waste into the river.",
        exampleCn: "这家工厂因非法向河流排放有毒废物而被罚款。",
        actualWord: "discharging"
    },
    
    // 9. divert
    {
        word: "divert",
        meaning: "转移；使转向；娱乐",
        pos: "v.",
        example: "The government decided to divert funds from defense to education programs.",
        exampleCn: "政府决定将资金从国防转向教育项目。"
    },
    
    // 10. divide
    {
        word: "divide",
        meaning: "划分；分开；除",
        pos: "v.",
        example: "The issue of immigration has deeply divided public opinion in the country.",
        exampleCn: "移民问题在该国深刻地分裂了公众舆论。",
        actualWord: "divided"
    },
    
    // 11. doom
    {
        word: "doom",
        meaning: "厄运；注定",
        pos: "n./v.",
        example: "The project was doomed to fail from the start due to insufficient funding.",
        exampleCn: "由于资金不足，该项目从一开始就注定要失败。"
    },
    
    // 12. earnest
    {
        word: "earnest",
        meaning: "认真的；诚挚的",
        pos: "adj.",
        example: "She made an earnest attempt to reconcile with her estranged family members.",
        exampleCn: "她真诚地尝试与疏远的家庭成员和解。"
    },
    
    // 13. elevate
    {
        word: "elevate",
        meaning: "提高；抬起；提拔",
        pos: "v.",
        example: "Education has the power to elevate individuals from poverty to prosperity.",
        exampleCn: "教育有能力使个人从贫困提升到富裕。"
    },
    
    // 14. embody
    {
        word: "embody",
        meaning: "体现；包含",
        pos: "v.",
        example: "The statue embodies the spirit of freedom that the nation was founded upon.",
        exampleCn: "这座雕像体现了国家建立时的自由精神。"
    },
    
    // 15. encounter
    {
        word: "encounter",
        meaning: "遭遇；遇到",
        pos: "v./n.",
        example: "Researchers often encounter unexpected challenges when conducting field studies.",
        exampleCn: "研究人员进行实地研究时经常遇到意想不到的挑战。"
    },
    
    // 16. endorse
    {
        word: "endorse",
        meaning: "背书；赞同；代言",
        pos: "v.",
        example: "Several celebrities endorsed the new environmental protection campaign.",
        exampleCn: "几位名人为这项新的环境保护运动代言。",
        actualWord: "endorsed"
    },
    
    // 17. entail
    {
        word: "entail",
        meaning: "牵涉；必然导致",
        pos: "v.",
        example: "The project will entail significant investment and long-term commitment from all parties.",
        exampleCn: "该项目将需要各方的重大投资和长期承诺。"
    },
    
    // 18. enumerate
    {
        word: "enumerate",
        meaning: "列举",
        pos: "v.",
        example: "The report enumerates the various factors contributing to climate change.",
        exampleCn: "报告列举了导致气候变化的各种因素。"
    },
    
    // 19. epoch
    {
        word: "epoch",
        meaning: "时代；纪元",
        pos: "n.",
        example: "The Renaissance was an epoch of great cultural and artistic achievement.",
        exampleCn: "文艺复兴是一个伟大的文化和艺术成就的时代。"
    },
    
    // 20. errand
    {
        word: "errand",
        meaning: "差使；杂事",
        pos: "n.",
        example: "She went to the post office to run an errand for her elderly neighbor.",
        exampleCn: "她去邮局为她的年迈邻居办一件差事。"
    },
    
    // 21. escort
    {
        word: "escort",
        meaning: "护送；护卫",
        pos: "v./n.",
        example: "The security team escorted the visiting dignitary to the conference venue.",
        exampleCn: "安保团队护送来访的贵宾前往会议地点。"
    },
    
    // 22. accommodate - 第2次复习=✅
    {
        word: "accommodate",
        meaning: "容纳，提供住宿，适应，顺应",
        pos: "v.",
        example: "The hotel can accommodate up to 500 guests during the peak season.",
        exampleCn: "这家酒店在旺季可以容纳多达500名客人。"
    },
    
    // 23. accomplish
    {
        word: "accomplish",
        meaning: "完成，实现，达到",
        pos: "v.",
        example: "Through hard work and determination, she accomplished her goal of becoming a doctor.",
        exampleCn: "通过努力工作和坚定的决心，她实现了成为医生的目标。"
    },
    
    // 24. accurate
    {
        word: "accurate",
        meaning: "准确的，精确的，正确无误的",
        pos: "adj.",
        example: "It is crucial to provide accurate information when filling out official documents.",
        exampleCn: "填写正式文件时提供准确信息至关重要。"
    },
    
    // 25. Abide by
    {
        word: "Abide by",
        meaning: "遵守",
        pos: "v.",
        example: "Citizens must abide by the law to maintain social order and stability.",
        exampleCn: "公民必须遵守法律以维护社会秩序和稳定。"
    },
    
    // 26. Carry out
    {
        word: "Carry out",
        meaning: "贯彻；执行；实现",
        pos: "v.",
        example: "The government decided to carry out a comprehensive survey on public health issues.",
        exampleCn: "政府决定开展一项关于公共卫生问题的全面调查。"
    },
    
    // 27. decay
    {
        word: "decay",
        meaning: "腐烂；衰退",
        pos: "v./n.",
        example: "Without proper maintenance, the ancient building began to decay rapidly.",
        exampleCn: "没有适当的维护，这座古建筑开始迅速衰败。"
    },
    
    // 28. defy
    {
        word: "defy",
        meaning: "挑衅；违抗；藐视",
        pos: "v.",
        example: "The rebels continued to defy the government's authority despite severe consequences.",
        exampleCn: "尽管面临严重后果，叛乱分子继续蔑视政府的权威。"
    },
    
    // 29. denote
    {
        word: "denote",
        meaning: "象征；表示",
        pos: "v.",
        example: "In this context, the color red denotes danger and requires immediate attention.",
        exampleCn: "在这种语境下，红色表示危险，需要立即关注。"
    },
    
    // 30. denounce
    {
        word: "denounce",
        meaning: "谴责；告发",
        pos: "v.",
        example: "Many countries denounced the military coup as a violation of democratic principles.",
        exampleCn: "许多国家谴责这次军事政变违反了民主原则。",
        actualWord: "denounced"
    },
    
    // 31. deprive
    {
        word: "deprive",
        meaning: "剥夺；使丧失",
        pos: "v.",
        example: "No one should be deprived of their basic human rights under any circumstances.",
        exampleCn: "在任何情况下，任何人都不应被剥夺基本人权。",
        actualWord: "deprived"
    },
    
    // 32. detach
    {
        word: "detach",
        meaning: "分离；拆开",
        pos: "v.",
        example: "The surgeon carefully detached the infected tissue from the healthy organ.",
        exampleCn: "外科医生小心翼翼地将感染组织与健康器官分离。"
    },
    
    // 33. deteriorate
    {
        word: "deteriorate",
        meaning: "恶化；变坏",
        pos: "v.",
        example: "His health condition began to deteriorate rapidly after he stopped taking medication.",
        exampleCn: "停止服药后，他的健康状况开始迅速恶化。"
    },
    
    // 34. determine
    {
        word: "determine",
        meaning: "决定；确定；决心",
        pos: "v.",
        example: "Genetic factors determine to a large extent how individuals respond to certain medications.",
        exampleCn: "遗传因素在很大程度上决定了个个体对某些药物的反应。"
    },
    
    // 35. dilute
    {
        word: "dilute",
        meaning: "稀释；变淡",
        pos: "v.",
        example: "Adding water will dilute the concentration of the solution and reduce its effectiveness.",
        exampleCn: "加水会稀释溶液的浓度并降低其效果。"
    },
    
    // 36. diplomat
    {
        word: "diplomat",
        meaning: "外交官",
        pos: "n.",
        example: "The diplomat successfully negotiated a peace treaty between the two warring nations.",
        exampleCn: "这位外交官成功地在两个交战国之间谈判达成了和平条约。"
    },
    
    // 37. disguise
    {
        word: "disguise",
        meaning: "伪装；掩饰",
        pos: "v./n.",
        example: "The spy disguised himself as a journalist to gain access to the restricted area.",
        exampleCn: "间谍伪装成记者以进入限制区域。"
    },
    
    // 38. dispel
    {
        word: "dispel",
        meaning: "驱散；消除",
        pos: "v.",
        example: "The new evidence helped dispel doubts about the defendant's innocence.",
        exampleCn: "新证据有助于消除对被告清白的疑虑。"
    },
    
    // 39. dispense
    {
        word: "dispense",
        meaning: "分配；分发；免除",
        pos: "v.",
        example: "Pharmacists are authorized to dispense prescription medications to patients.",
        exampleCn: "药剂师有权向患者配发处方药物。"
    },
    
    // 40. dispute
    {
        word: "dispute",
        meaning: "争论；纠纷",
        pos: "n./v.",
        example: "The two countries have been in a long-standing dispute over territorial boundaries.",
        exampleCn: "两国在领土边界问题上长期存在争议。"
    },
    
    // 41. disturb
    {
        word: "disturb",
        meaning: "打扰；弄乱",
        pos: "v.",
        example: "Please do not disturb the experiment while it is in progress.",
        exampleCn: "实验进行期间请不要打扰。"
    },
    
    // 42. downright
    {
        word: "downright",
        meaning: "彻底的；十足地",
        pos: "adj./adv.",
        example: "His behavior at the meeting was downright rude and completely unacceptable.",
        exampleCn: "他在会议上的行为简直粗鲁，完全不可接受。"
    },
    
    // 43. dread
    {
        word: "dread",
        meaning: "恐惧；担心",
        pos: "v./n.",
        example: "Students often dread the thought of taking final examinations.",
        exampleCn: "学生们经常害怕期末考试的想法。"
    },
    
    // 44. dubious
    {
        word: "dubious",
        meaning: "可疑的；怀疑的",
        pos: "adj.",
        example: "Many consumers remain dubious about the safety of genetically modified foods.",
        exampleCn: "许多消费者对转基因食品的安全性仍持怀疑态度。"
    },
    
    // 45. editorial
    {
        word: "editorial",
        meaning: "编辑的；社论",
        pos: "adj./n.",
        example: "The newspaper published an editorial criticizing the government's economic policies.",
        exampleCn: "该报纸发表了一篇批评政府经济政策的社论。"
    },
    
    // 46. eligible
    {
        word: "eligible",
        meaning: "有资格的；合格的",
        pos: "adj.",
        example: "Only citizens over the age of 18 are eligible to vote in national elections.",
        exampleCn: "只有18岁以上的公民才有资格在全国选举中投票。"
    },
    
    // 47. eminent
    {
        word: "eminent",
        meaning: "卓越的；著名的",
        pos: "adj.",
        example: "The conference was attended by eminent scientists from around the world.",
        exampleCn: "会议吸引了来自世界各地的杰出科学家参加。"
    },
    
    // 48. erect
    {
        word: "erect",
        meaning: "竖立；建立",
        pos: "v.",
        example: "The city decided to erect a monument in honor of the fallen soldiers.",
        exampleCn: "城市决定建立一座纪念碑以纪念阵亡士兵。"
    },
    
    // 49. eternal
    {
        word: "eternal",
        meaning: "永恒的",
        pos: "adj.",
        example: "The concept of eternal life is central to many religious beliefs.",
        exampleCn: "永恒生命的概念是许多宗教信仰的核心。"
    },
    
    // 50. flesh - 下一个时间点
    {
        word: "flesh",
        meaning: "肉；肉体",
        pos: "n.",
        example: "The wound healed quickly, and new flesh began to form around the edges.",
        exampleCn: "伤口很快愈合，新的肉开始从边缘生长。"
    }
];
