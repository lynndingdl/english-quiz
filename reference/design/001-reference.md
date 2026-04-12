# 英语单词第4轮例句式测验HTML

## 功能要求
生成一个单题模式的英语单词测验HTML页面，包含以下功能：

### 1. 基本功能
- 单题模式：每次显示1道题
- 题干：例句中挖空目标单词（用横线"______"标记）
- 选项：四选一（只显示英文，点击即提交）
- 答案解析：显示单词+中文释义、完整句子（答案高亮）、句子中文翻译、所有4个选项的中英对照（正确答案标记✓）

### 2. 语音播放功能（新增）
- 在结果页自动播放正确答案单词的发音
- 使用浏览器原生的 Web Speech API (SpeechSynthesis)
- 点击提交后，结果页显示时自动朗读正确答案单词
- 实现方式：
  ```javascript
  function speakWord(word) {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(word);
      utterance.lang = 'en-US';
      utterance.rate = 0.8;
      window.speechSynthesis.speak(utterance);
    }
  }
  ```

### 3. 结果码格式
结果码格式：`4|答对数|错误数|开始时间|结束时间|单词1:true,单词2:false,...`

### 4. ⚠️ 强制检查
1. 检查词形变化：如果例句中的词形与词根不同，添加 actualWord 字段
2. HTML代码使用 `actualWord || word` 进行匹配
3. 生成后验证：第1、10、20、30、40、50题是否有横线

## 单词数据
已保存到 `/home/gem/workspace/agent/workspace/english-quiz/round4_vocab_data.json`

包含50个单词，每个单词包含：
- word: 单词
- pos: 词性
- chinese: 中文释义
- sentence: 例句（包含中英文）
- actualWord: 词形变化（如果有）

## 技术要求
- 纯HTML + JavaScript
- 使用Web Speech API实现语音播放
- 响应式设计，移动端友好
- 简洁美观的UI