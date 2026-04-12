const vocabData = [
    {
        word: "carrier",
        pos: "n.",
        meaning: "搬运者；载体；航空母舰",
        example: "Aircraft carriers play a vital role in modern naval warfare and power projection. 航空母舰在现代海战和力量投射中发挥着至关重要的作用。",
        exampleCn: "航空母舰在现代海战和力量投射中发挥着至关重要的作用。",
        actualWord: "carriers"
    },
    {
        word: "deceive",
        pos: "v.",
        meaning: "欺骗；蒙蔽",
        example: "The company deceived consumers by making false claims about their product's benefits. 该公司通过对其产品功效的虚假宣传欺骗消费者。",
        exampleCn: "该公司通过对其产品功效的虚假宣传欺骗消费者。",
        actualWord: "deceived"
    },
    {
        word: "decent",
        pos: "adj.",
        meaning: "体面的；正派的；像样的",
        example: "Every citizen deserves a decent standard of living and access to basic healthcare. 每个公民都应享有体面的生活水平和基本医疗服务。",
        exampleCn: "每个公民都应享有体面的生活水平和基本医疗服务。"
    },
    {
        word: "deduce",
        pos: "v.",
        meaning: "推断；演绎",
        example: "From the available evidence, we can deduce that the suspect was present at the scene. 从现有证据，我们可以推断嫌疑人当时在现场。",
        exampleCn: "从现有证据，我们可以推断嫌疑人当时在现场。"
    },
    {
        word: "deliberate",
        pos: "adj.",
        meaning: "故意的；深思熟虑的",
        example: "The jury concluded that the defendant's actions were deliberate and premeditated. 陪审团认定被告的行为是蓄意且有预谋的。",
        exampleCn: "陪审团认定被告的行为是蓄意且有预谋的。"
    },
    {
        word: "depict",
        pos: "v.",
        meaning: "描绘；描述",
        example: "The novel vividly depicts the harsh reality of life during the Great Depression. 这部小说生动地描绘了大萧条时期生活的残酷现实。",
        exampleCn: "这部小说生动地描绘了大萧条时期生活的残酷现实。",
        actualWord: "depicts"
    },
    {
        word: "dialect",
        pos: "n.",
        meaning: "方言",
        example: "Linguists study how dialects vary across different regions and social groups. 语言学家研究方言在不同地区和社会群体中的差异。",
        exampleCn: "语言学家研究方言在不同地区和社会群体中的差异。",
        actualWord: "dialects"
    },
    {
        word: "discharge",
        pos: "v./n.",
        meaning: "释放；排出；解雇",
        example: "The factory was fined for illegally discharging toxic waste into the river. 这家工厂因非法向河流排放有毒废物而被罚款。",
        exampleCn: "这家工厂因非法向河流排放有毒废物而被罚款。",
        actualWord: "discharging"
    },
    {
        word: "divert",
        pos: "v.",
        meaning: "转移；使转向；娱乐",
        example: "The government decided to divert funds from defense to education programs. 政府决定将资金从国防转向教育项目。",
        exampleCn: "政府决定将资金从国防转向教育项目。"
    },
    {
        word: "divide",
        pos: "v.",
        meaning: "划分；分开；除",
        example: "The issue of immigration has deeply divided public opinion in the country. 移民问题在该国深刻地分裂了公众舆论。",
        exampleCn: "移民问题在该国深刻地分裂了公众舆论。",
        actualWord: "divided"
    },
    {
        word: "doom",
        pos: "n./v.",
        meaning: "厄运；注定",
        example: "The project was doomed to fail from the start due to insufficient funding. 由于资金不足，该项目从一开始就注定要失败。",
        exampleCn: "由于资金不足，该项目从一开始就注定要失败。",
        actualWord: "doomed"
    },
    {
        word: "earnest",
        pos: "adj.",
        meaning: "认真的；诚挚的",
        example: "She made an earnest attempt to reconcile with her estranged family members. 她真诚地尝试与疏远的家庭成员和解。",
        exampleCn: "她真诚地尝试与疏远的家庭成员和解。"
    },
    {
        word: "elevate",
        pos: "v.",
        meaning: "提高；抬起；提拔",
        example: "Education has the power to elevate individuals from poverty to prosperity. 教育有能力使个人从贫困提升到富裕。",
        exampleCn: "教育有能力使个人从贫困提升到富裕。"
    },
    {
        word: "embody",
        pos: "v.",
        meaning: "体现；包含",
        example: "The statue embodies the spirit of freedom that the nation was founded upon. 这座雕像体现了国家建立时的自由精神。",
        exampleCn: "这座雕像体现了国家建立时的自由精神。",
        actualWord: "embodies"
    },
    {
        word: "encounter",
        pos: "v./n.",
        meaning: "遭遇；遇到",
        example: "Researchers often encounter unexpected challenges when conducting field studies. 研究人员进行实地研究时经常遇到意想不到的挑战。",
        exampleCn: "研究人员进行实地研究时经常遇到意想不到的挑战。"
    },
    {
        word: "endorse",
        pos: "v.",
        meaning: "背书；赞同；代言",
        example: "Several celebrities endorsed the new environmental protection campaign. 几位名人为这项新的环境保护运动代言。",
        exampleCn: "几位名人为这项新的环境保护运动代言。",
        actualWord: "endorsed"
    },
    {
        word: "entail",
        pos: "v.",
        meaning: "牵涉；必然导致",
        example: "The project will entail significant investment and long-term commitment from all parties. 该项目将需要各方的重大投资和长期承诺。",
        exampleCn: "该项目将需要各方的重大投资和长期承诺。"
    },
    {
        word: "enumerate",
        pos: "v.",
        meaning: "列举",
        example: "The report enumerates the various factors contributing to climate change. 报告列举了导致气候变化的各种因素。",
        exampleCn: "报告列举了导致气候变化的各种因素。",
        actualWord: "enumerates"
    },
    {
        word: "epoch",
        pos: "n.",
        meaning: "时代；纪元",
        example: "The Renaissance was an epoch of great cultural and artistic achievement. 文艺复兴是一个伟大的文化和艺术成就的时代。",
        exampleCn: "文艺复兴是一个伟大的文化和艺术成就的时代。"
    },
    {
        word: "errand",
        pos: "n.",
        meaning: "差使；杂事",
        example: "She went to the post office to run an errand for her elderly neighbor. 她去邮局为她的年迈邻居办一件差事。",
        exampleCn: "她去邮局为她的年迈邻居办一件差事。"
    },
    {
        word: "escort",
        pos: "v./n.",
        meaning: "护送；护卫",
        example: "The security team escorted the visiting dignitary to the conference venue. 安保团队护送来访的贵宾前往会议地点。",
        exampleCn: "安保团队护送来访的贵宾前往会议地点。",
        actualWord: "escorted"
    },
    {
        word: "waive",
        pos: "v.",
        meaning: "放弃；豁免",
        example: "The bank decided to waive the late payment fee as a courtesy. 银行决定作为一项礼遇豁免逾期付款费。",
        exampleCn: "银行决定作为一项礼遇豁免逾期付款费。"
    },
    {
        word: "wavering",
        pos: "adj.",
        meaning: "犹豫不决的；动摇的",
        example: "His wavering commitment to the project concerned his teammates. 他对项目犹豫不决的承诺让队友们担心。",
        exampleCn: "他对项目犹豫不决的承诺让队友们担心。"
    },
    {
        word: "weary",
        pos: "adj.",
        meaning: "疲倦的；厌烦的",
        example: "The long journey made the travelers weary and in need of rest. 漫长的旅程使旅行者们疲倦,需要休息。",
        exampleCn: "漫长的旅程使旅行者们疲倦,需要休息。"
    },
    {
        word: "welfare",
        pos: "n.",
        meaning: "福利",
        example: "The government introduced new welfare programs to support low-income families. 政府推出了新的福利计划以支持低收入家庭。",
        exampleCn: "政府推出了新的福利计划以支持低收入家庭。"
    },
    {
        word: "withstand",
        pos: "v.",
        meaning: "经受；抵挡",
        example: "The ancient walls were built to withstand attacks from invaders. 古老的墙壁是为了抵挡入侵者的攻击而建造的。",
        exampleCn: "古老的墙壁是为了抵挡入侵者的攻击而建造的。"
    },
    {
        word: "wreck",
        pos: "n./v.",
        meaning: "失事车/船；破坏",
        example: "The storm wrecked several boats in the harbor. 暴风雨在港口造成几艘船只失事。",
        exampleCn: "暴风雨在港口造成几艘船只失事。",
        actualWord: "wrecked"
    },
    {
        word: "wretched",
        pos: "adj.",
        meaning: "极可怜的；卑鄙的",
        example: "The wretched living conditions in the slums demand immediate attention. 贫民窟中极其可怜的生活条件需要立即关注。",
        exampleCn: "贫民窟中极其可怜的生活条件需要立即关注。"
    },
    {
        word: "yearn",
        pos: "v.",
        meaning: "渴望",
        example: "She yearned for the peaceful days of her childhood in the countryside. 她渴望在乡下的童年那平静的日子。",
        exampleCn: "她渴望在乡下的童年那平静的日子。"
    },
    {
        word: "yield",
        pos: "v./n.",
        meaning: "产生；产量",
        example: "The investment yielded high returns for the shareholders. 这项投资为股东产生了高额回报。",
        exampleCn: "这项投资为股东产生了高额回报。",
        actualWord: "yielded"
    },
    {
        word: "resent",
        pos: "v.",
        meaning: "怨恨；愤恨",
        example: "She resented being treated unfairly by her supervisor. 她怨恨受到上司的不公平对待。",
        exampleCn: "她怨恨受到上司的不公平对待。",
        actualWord: "resented"
    },
    {
        word: "reveal",
        pos: "v.",
        meaning: "揭露；显示",
        example: "The investigation revealed widespread corruption in the government. 调查揭露了政府中普遍存在的腐败现象。",
        exampleCn: "调查揭露了政府中普遍存在的腐败现象。",
        actualWord: "revealed"
    },
    {
        word: "revive",
        pos: "v.",
        meaning: "复兴；苏醒",
        example: "Efforts to revive the struggling economy are showing positive results. 复苏挣扎中的经济的努力正在显示出积极的结果。",
        exampleCn: "复苏挣扎中的经济的努力正在显示出积极的结果。"
    },
    {
        word: "salient",
        pos: "a.",
        meaning: "显著的；突出的",
        example: "The salient points of the argument need to be addressed first. 论点的要点需要首先解决。",
        exampleCn: "论点的要点需要首先解决。"
    },
    {
        word: "saturate",
        pos: "v.",
        meaning: "浸透；使饱和",
        example: "The market became saturated with similar products, leading to intense competition. 市场充满了类似的产品，导致激烈的竞争。",
        exampleCn: "市场充满了类似的产品，导致激烈的竞争。",
        actualWord: "saturated"
    },
    {
        word: "scandal",
        pos: "n.",
        meaning: "丑闻",
        example: "The political scandal dominated the news headlines for weeks. 政治丑闻连续几周占据了新闻头条。",
        exampleCn: "政治丑闻连续几周占据了新闻头条。"
    },
    {
        word: "scenic",
        pos: "a.",
        meaning: "风景优美的",
        example: "The scenic route along the coast attracts many tourists every year. 沿海的风景区每年吸引许多游客。",
        exampleCn: "沿海的风景区每年吸引许多游客。"
    },
    {
        word: "sector",
        pos: "n.",
        meaning: "部门；扇形",
        example: "The financial sector plays a crucial role in the national economy. 金融部门在国民经济中发挥着关键作用。",
        exampleCn: "金融部门在国民经济中发挥着关键作用。"
    },
    {
        word: "secular",
        pos: "adj.",
        meaning: "世俗的",
        example: "The secular state ensures freedom of religion for all citizens. 世俗国家确保所有公民的宗教自由。",
        exampleCn: "世俗国家确保所有公民的宗教自由。"
    },
    {
        word: "shun",
        pos: "v.",
        meaning: "避开；避免",
        example: "Health-conscious people shun processed foods high in sugar and fat. 注重健康的人避免食用高糖和高脂肪的加工食品。",
        exampleCn: "注重健康的人避免食用高糖和高脂肪的加工食品。"
    },
    {
        word: "sinister",
        pos: "a.",
        meaning: "凶兆的；邪恶的",
        example: "The sinister plot was discovered before it could be carried out. 邪恶的阴谋在实施之前就被发现了。",
        exampleCn: "邪恶的阴谋在实施之前就被发现了。"
    },
    {
        word: "slaughter",
        pos: "v./n.",
        meaning: "屠宰；屠杀",
        example: "The war resulted in the slaughter of thousands of innocent civilians. 战争导致了数以千计无辜平民的屠杀。",
        exampleCn: "战争导致了数以千计无辜平民的屠杀。"
    },
    {
        word: "slender",
        pos: "a.",
        meaning: "苗条的；微薄的",
        example: "She maintained a slender figure through regular exercise and healthy eating. 她通过经常锻炼和健康饮食保持了苗条的身材。",
        exampleCn: "她通过经常锻炼和健康饮食保持了苗条的身材。"
    },
    {
        word: "slum",
        pos: "n.",
        meaning: "贫民窟",
        example: "The government launched programs to improve living conditions in urban slums. 政府推出了改善城市贫民窟生活条件的计划。",
        exampleCn: "政府推出了改善城市贫民窟生活条件的计划。",
        actualWord: "slums"
    },
    {
        word: "smuggle",
        pos: "v.",
        meaning: "走私",
        example: "The criminals attempted to smuggle illegal goods across the border. 罪犯试图将非法物品走私过境。",
        exampleCn: "罪犯试图将非法物品走私过境。"
    },
    {
        word: "sober",
        pos: "a.",
        meaning: "清醒的；严肃的",
        example: "The sober analysis revealed serious flaws in the proposed plan. 严肃的分析揭示了提议计划中的严重缺陷。",
        exampleCn: "严肃的分析揭示了提议计划中的严重缺陷。"
    },
    {
        word: "solemn",
        pos: "a.",
        meaning: "庄严的；严肃的",
        example: "The judge delivered a solemn verdict in the high-profile case. 法官在这个备受关注的案件中作出了庄严的判决。",
        exampleCn: "法官在这个备受关注的案件中作出了庄严的判决。"
    },
    {
        word: "solicit",
        pos: "v.",
        meaning: "请求；恳求",
        example: "The organization solicits donations from the public to fund its programs. 该组织向公众募集捐款以资助其项目。",
        exampleCn: "该组织向公众募集捐款以资助其项目。",
        actualWord: "solicits"
    },
    {
        word: "spacious",
        pos: "a.",
        meaning: "宽敞的",
        example: "The new house features a spacious living room with large windows. 新房子有一个宽敞的客厅,配有大窗户。",
        exampleCn: "新房子有一个宽敞的客厅,配有大窗户。"
    },
    {
        word: "stale",
        pos: "a.",
        meaning: "陈腐的；不新鲜的",
        example: "The bread became stale after being left out for several days. 面包在放了好几天后变得不新鲜了。",
        exampleCn: "面包在放了好几天后变得不新鲜了。"
    }
];
