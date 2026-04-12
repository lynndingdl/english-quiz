#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
从飞书多维表格获取第2轮单词数据
"""
import subprocess
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

def parse_sentence(example_text):
    """解析例句字段，分离英文和中文"""
    if not example_text:
        return "", ""
    
    # 尝试匹配 "English. 中文。" 格式
    match = re.match(r'^(.+?\.)\s*(.+)$', example_text.strip())
    if match:
        sentence = match.group(1).strip()
        sentence_cn = match.group(2).strip()
        return sentence, sentence_cn
    
    return example_text, ""

def check_word_form(word, sentence):
    """检查例句中单词的实际词形"""
    if not sentence:
        return word, False
    
    sentence_lower = sentence.lower()
    word_lower = word.lower()
    
    # 先检查原词是否存在
    if word_lower in sentence_lower:
        return word, False
    
    # 检查常见词形变化
    forms = [
        word + 'ing',  # -ing
        word + 'ed',   # -ed
        word + 's',    # -s
        word + 'es',   # -es
        word + 'd',    # -d (如 evoke->evoked)
        word.rstrip('e') + 'ing',  # 去e加ing
        word.rstrip('e') + 'ed',   # 去e加ed
        word + 'ly',   # -ly (副词)
    ]
    
    for form in forms:
        if form.lower() in sentence_lower:
            return form, True
    
    return word, False

# 单词数据字典
word_data = {}

# 这里存储从多维表格获取的数据
# 我会手动填充这些数据

print("目标单词数量:", len(TARGET_WORDS))
print("单词列表:", ", ".join(TARGET_WORDS))
