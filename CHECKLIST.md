# 英语单词Quiz生成检查清单

> ⚠️ 每次生成quiz前必须查阅此文件！

---

## 一、生成前必读

### 1. 查阅最近教训

生成前，必须查阅 `memory/learnings/LRN-*.md` 最新教训。

### 2. 推送前检查 .agent 目录

**⚠️ 必须检查（每次都要查！）**：
```bash
git ls-files | grep agent
```
如果有任何输出，执行：
```bash
git rm -r --cached .agent
git commit -m "Remove .agent from tracking"
git push origin main
```

### 2. 已知问题清单

| ID | 问题 | 解决方案 | 状态 |
|----|------|----------|------|
| LRN-20260412-002 | 词形变化导致挖空失败 | 检查例句词形，添加actualWord字段 | ✅ 已解决 |
| LRN-20260412-003 | 答案页选项不一致 | 使用currentOptions保存选项，不要重新生成 | ✅ 已解决 |
| LRN-20260412-004 | 题目页显示中文翻译 | 使用lastIndexOf('.')提取英文部分 | ✅ 已解决 |

---

## 二、生成时检查

### 1. 词形变化检查（LRN-20260412-002, LRN-20260413-001）

**⚠️ 强制要求：逐个检查每个单词！**

**步骤**：
1. **逐个检查**每个例句中目标单词的实际词形
2. 如果例句中的词形与词根不同，**必须**添加 `actualWord` 字段
3. **禁止**只抽查部分单词

**常见词形变化**：
- 动词：-ing, -ed, -s
- 名词：复数-s/-es
- 被动语态：-ed
- **⚠️ 不规则动词**：fling→flung, cling→clung, swing→swung 等

**示例**：
```javascript
{
  word: "discharge",
  actualWord: "discharging", // ✅ 添加实际词形
  meaning: "释放；排出",
  sentence: "The factory was fined for illegally discharging toxic waste."
}
```

**第19轮漏掉的问题**（共5个）：
- `forge` → 例句中 `forged` → 缺少 `actualWord: "forged"`
- `flicker` → 例句中 `flickered` → 缺少 `actualWord: "flickered"`
- `fling` → 例句中 `flung` → 缺少 `actualWord: "flung"`（不规则变化！）
- `deceive` → 例句中 `deceived` → 缺少 `actualWord: "deceived"`
- `enumerate` → 例句中 `enumerates` → 缺少 `actualWord: "enumerates"`

**具体词形变化表**：

| 单词 | 原形 | 例句形式 | 过去式 | 过去分词 | 现在分词 | 变化类型 |
|------|------|---------|--------|---------|---------|---------|
| forge | forge | forged | forged | forged | forging | 规则 |
| flicker | flicker | flickered | flickered | flickered | flickering | 规则 |
| **fling** | fling | **flung** | **flung** | **flung** | flinging | **不规则** |
| deceive | deceive | deceived | deceived | deceived | deceiving | 规则 |
| enumerate | enumerate | enumerates | enumerated | enumerated | enumerating | 规则 |

**强制检查流程**：
- [ ] 检查第1个单词
- [ ] 检查第10个单词
- [ ] 检查第20个单词
- [ ] 检查第30个单词
- [ ] 检查第40个单词
- [ ] 检查第50个单词
- [ ] **逐个检查所有动词**（pos 包含 v.）

### 2. 选项一致性检查（LRN-20260412-003）

**必须使用**：
```javascript
let currentOptions = []; // 全局变量保存选项

function createQuestion() {
    const options = [...distractors, current].sort(() => Math.random() - 0.5);
    currentOptions = options; // ✅ 保存选项
}

function showResult() {
    const allOptions = currentOptions; // ✅ 使用保存的选项
}
```

**绝对禁止**：
```javascript
// ❌ 错误！每次都重新生成
function showResult() {
    const distractors = getDistractors(target);
    const allOptions = [...distractors, target].sort(() => Math.random() - 0.5);
}
```

---

## 三、生成后验证

### 1. 浏览器验证

打开网页，检查：
- [ ] 第1题有横线标记
- [ ] 第10题有横线标记
- [ ] 第20题有横线标记
- [ ] 第30题有横线标记
- [ ] 第40题有横线标记
- [ ] 第50题有横线标记

### 2. 选项一致性验证

- [ ] 做第1题，记住选项
- [ ] 看答案页，确认显示的选项和做题时一致
- [ ] 做第10题，验证选项一致

### 3. 题目页翻译检查（LRN-20260412-004）

- [ ] 检查第1题题目页：只显示英文，无中文翻译
- [ ] 检查第10题题目页：只显示英文，无中文翻译
- [ ] 检查结果页：显示中文翻译（通过exampleCn字段）

### 4. 结果码验证

- [ ] 完成50题后，确认生成结果码
- [ ] 格式：`轮次|答对数|错误数|开始时间|结束时间|单词1:true,...`

---

## 四、标准代码模板

### 1. HTML核心代码

```html
<script>
    let currentIndex = 0;
    let correctCount = 0;
    let wrongCount = 0;
    let startTime;
    let endTime;
    let results = [];
    let answered = false;
    let currentOptions = []; // ⚠️ 必须保存选项
    
    // 创建题目
    function createQuestion() {
        const current = vocabData[currentIndex];
        
        // 挖空（支持词形变化）
        const wordToBlank = current.actualWord || current.word;
        const blankSentence = sentence.replace(new RegExp(wordToBlank, 'gi'), '<span class="blank">_______</span>');
        
        // 生成选项
        const distractors = getDistractors(current);
        const options = [...distractors, current].sort(() => Math.random() - 0.5);
        currentOptions = options; // ⚠️ 必须保存选项
    }
    
    // 显示结果
    function showResult(selected, target, isCorrect) {
        // ⚠️ 必须使用保存的选项，不要重新生成
        const allOptions = currentOptions;
        
        // 显示所有选项
        resultDetail.innerHTML = allOptions.map(option => `
            <div>${option.word} ${option.pos}: ${option.meaning}</div>
        `).join('');
    }
</script>
```

### 2. vocab_data.js格式

```javascript
const vocabData = [
  {
    word: "discharge",      // 词根
    actualWord: "discharging", // 实际词形（如有变化）
    meaning: "释放；排出",
    pos: "v./n.",
    sentence: "The factory was fined for illegally discharging toxic waste.",
    sentenceCn: "这家工厂因非法向河流排放有毒废物而被罚款。"
  }
];
```

---

## 五、错误记录

每次发现新问题，必须：
1. 记录到 LEARNINGS.md
2. 更新此检查清单
3. 更新 MEMORY.md

---

**最后更新**：2026-04-12 16:40
**维护者**：飞书新虾🦐
