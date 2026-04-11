#!/bin/bash
# 英语单词题库更新脚本
# 使用方法：./update_vocab.sh "轮次号"

set -e  # 任何命令失败则退出

ROUND_NUM=$1

if [ -z "$ROUND_NUM" ]; then
    echo "❌ 错误：请提供轮次号"
    echo "使用方法：./update_vocab.sh 15"
    exit 1
fi

WORK_DIR="/home/gem/workspace/agent/workspace/english-quiz"
cd "$WORK_DIR"

echo "=========================================="
echo "英语单词题库更新流程 - 第${ROUND_NUM}轮"
echo "=========================================="
echo ""

# 步骤1：检查 vocab_data.js 第一个单词
echo "【步骤1/6】检查 vocab_data.js 内容..."
FIRST_WORD=$(head -2 vocab_data.js | grep -o '"word": "[^"]*"' | head -1 | cut -d'"' -f4)
echo "  ✓ 第一个单词: $FIRST_WORD"

if [ -z "$FIRST_WORD" ]; then
    echo "  ❌ 错误：vocab_data.js 为空或格式错误！"
    exit 1
fi

# 步骤2：检查 index.html 文件引用
echo ""
echo "【步骤2/6】检查 index.html 文件引用..."
REF_LINE=$(grep "vocab_data" index.html)
echo "  当前引用: $REF_LINE"

if echo "$REF_LINE" | grep -q "vocab_data_round"; then
    echo "  ❌ 错误：引用了错误的文件！"
    echo "  修复中..."
    sed -i 's/vocab_data_round[0-9]*\.js/vocab_data.js/g' index.html
    echo "  ✓ 已修复为 vocab_data.js"
fi

# 步骤3：更新版本号
echo ""
echo "【步骤3/6】更新版本号..."
sed -i "s/vocab_data\.js?v=[0-9]*/vocab_data.js?v=${ROUND_NUM}/g" index.html
echo "  ✓ 版本号已更新为 ?v=${ROUND_NUM}"

# 步骤4：更新标题
echo ""
echo "【步骤4/6】更新标题..."
sed -i "s/第[0-9]*轮/第${ROUND_NUM}轮/g" index.html
echo "  ✓ 标题已更新为 第${ROUND_NUM}轮"

# 步骤5：验证修改
echo ""
echo "【步骤5/6】验证修改结果..."
echo "  文件引用: $(grep "vocab_data" index.html)"
echo "  页面标题: $(grep "<title>" index.html)"

# 步骤6：Git 提交
echo ""
echo "【步骤6/6】Git 提交..."
git add .
git commit -m "Round ${ROUND_NUM}: Update vocab data" || echo "  ⚠️ 没有变更需要提交"
git push

echo ""
echo "=========================================="
echo "✅ 更新完成！"
echo "=========================================="
echo ""
echo "验证命令："
echo "  curl -s 'https://raw.githubusercontent.com/lynndingdl/english-quiz/main/vocab_data.js' | head -5"
echo ""
echo "访问链接："
echo "  https://lynndingdl.github.io/english-quiz/"
