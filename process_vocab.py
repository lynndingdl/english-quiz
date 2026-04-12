#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
从多维表格数据生成第2轮vocab_data.js
"""
import json
import re

# 目标单词列表
TARGET_WORDS = [
    "etiquette", "evacuate", "evade", "evaporate", "evident", "expertise", 
    "extravagant", "faculty", "famine", "hostage", "household", "ignite", 
    "immediate", "immense", "impart", "impeach", "impetus", "impose", 
    "impoverish", "inaccessible", "inaugurate", "incentive", "incidentally", 
    "incompatible", "incur", "indefinite", "indigenous", "indignant", 
    "indispensable", "induce", "indulge", "inevitable", "inflict", 
    "infringe", "ingenious", "inhibit", "initiative", "innumerable", 
    "inscribe", "insomnia", "insult", "intact", "eccentric", "fatigue", 
    "feat", "feeble", "feminine", "fiscal", "fixture", "flatter"
]

# 从多维表格获取的原始数据（这里需要填入实际数据）
# 格式: {"单词": {"中文": "...", "词性": "...", "例句": "..."}}
raw_data = {}

def parse_sentence(example_text):
    """
    解析例句字段，分离英文和中文
    格式: "English sentence. 中文翻译。"
    """
    if not example_text:
        return "", ""
    
    # 尝试找到最后一个英文句号后的中文开始位置
    # 常见模式: "English. 中文。"
    match = re.match(r'^(.+?\.)\s*(.+)$', example_text.strip())
    if match:
        sentence = match.group(1).strip()
        sentence_cn = match.group(2).strip()
        return sentence, sentence_cn
    
    # 如果没有匹配到，返回原文
    return example_text, ""

def check_word_form(word, sentence):
    """
    检查例句中单词的实际词形
    返回: (actualWord, hasFormChange)
    """
    if not sentence:
        return word, False
    
    # 常见词形变化规则
    patterns = [
        # -ing 形式
        (f'{word}ing', word + 'ing'),
        # -ed 形式
        (f'{word}ed', word + 'ed'),
        # -s 形式
        (f'{word}s', word + 's'),
        # -es 形式
        (f'{word}es', word + 'es'),
        # 不规则变化（需要手动处理）
    ]
    
    # 检查句子中是否存在词形变化
    sentence_lower = sentence.lower()
    word_lower = word.lower()
    
    # 先检查原词是否存在
    if word_lower in sentence_lower:
        return word, False
    
    # 检查常见词形变化
    for pattern, form in patterns:
        if form.lower() in sentence_lower:
            return form, True
    
    # 检查其他可能的变化（如复数、过去式等）
    # 这里添加一些常见的词形变化检测
    
    return word, False

def generate_vocab_data():
    """生成vocab_data.js内容"""
    vocab_data = []
    
    for word in TARGET_WORDS:
        if word not in raw_data:
            print(f"⚠️  单词 '{word}' 不在数据中，跳过")
            continue
        
        data = raw_data[word]
        sentence, sentence_cn = parse_sentence(data.get("例句", ""))
        
        if not sentence:
            print(f"⚠️  单词 '{word}' 没有例句，跳过")
            continue
        
        # 检查词形变化
        actual_word, has_change = check_word_form(word, sentence)
        
        entry = {
            "word": word,
            "meaning": data.get("中文", ""),
            "pos": data.get("词性", ""),
            "sentence": sentence,
            "sentenceCn": sentence_cn
        }
        
        if has_change:
            entry["actualWord"] = actual_word
            print(f"📝 词形变化: {word} → {actual_word}")
        
        vocab_data.append(entry)
    
    return vocab_data

def write_vocab_js(vocab_data, output_path):
    """写入vocab_data.js文件"""
    with open(output_path, 'w', encoding='utf-8') as f:
        f.write("// 英语单词测验数据 - 第2轮\n")
        f.write("// 包含50个重点单词（按下次复习时间和字母排序）\n\n")
        f.write("const vocabData = ")
        json.dump(vocab_data, f, ensure_ascii=False, indent=2)
        f.write(";\n")

if __name__ == "__main__":
    # 这里需要填入从多维表格获取的实际数据
    print("请提供多维表格数据...")
    # vocab_data = generate_vocab_data()
    # write_vocab_js(vocab_data, "vocab_data.js")
