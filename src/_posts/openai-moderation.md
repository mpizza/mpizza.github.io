---
title: 保護 LLM app，防止被惡搞的工具：OpenAI moderation API
date: '2024-08-16'
excerpt: 使用 moderation API 來保護 LLM 專案，或是網路交群平台上的安全守門員審查工具
coverImage: '/post_photos/moderation-api/moderation-api-1.jpg'
keywords: LLM, AI, OpenAi, moderation
author: 
  name: PoYu Chen
  picture: /avatar.png
ogImage: 
  url: '/post_photos/moderation-api/moderation-api-1.jpg'
---
## 什麼是 Moderation ?
Moderation 通常應用於社交媒體、論壇、聊天應用和客戶支持等場景，用來防止用戶生成的內容違反平台政策或法律法規。我第一次接觸這個名詞是在公司從事廣告平台工作時，我們當時實作了一個 Moderation Dashboard 的後台，主要是用來讓用戶回報不適當的廣告內容，如色情、詐騙或暴力等。

## OpenAI 提供的 Moderation API
OpenAI 提供的 Moderation API 十分簡單。開發者只需要將想要審查的文字提交給 moderations.create 方法，API 會在回傳的回應中告訴你該內容是否違反了各類規範，並且還會給出相關類別的評分，讓你自行判斷。不過，截止到目前（2024-08-16），我還沒找到關於這些分數的門檻值的具體資料

```python
from openai import OpenAI
client = OpenAI()

response = client.moderations.create(input="I want to kill them.")

output = response.results[0]
```

```
```json
{
    "id": "modr-XXXXX",
    "model": "text-moderation-007",
    "results": [
        {
            "flagged": true,
            "categories": {
                "sexual": false,
                "hate": false,
                "harassment": false,
                "self-harm": false,
                "sexual/minors": false,
                "hate/threatening": false,
                "violence/graphic": false,
                "self-harm/intent": false,
                "self-harm/instructions": false,
                "harassment/threatening": true,
                "violence": true
            },
            "category_scores": {
                "sexual": 1.2282071e-6,
                "hate": 0.010696256,
                "harassment": 0.29842457,
                "self-harm": 1.5236925e-8,
                "sexual/minors": 5.7246268e-8,
                "hate/threatening": 0.0060676364,
                "violence/graphic": 4.435014e-6,
                "self-harm/intent": 8.098441e-10,
                "self-harm/instructions": 2.8498655e-11,
                "harassment/threatening": 0.63055265,
                "violence": 0.99011886
            }
        }
    ]
}
```

##  Moderation API 的使用情境
- 最基本的應用場景，就是審查使用者輸入的內容是否包含不適當的指令，這可以避免不當內容影響你的 LLM（大型語言模型）。使用 Moderation API 還能節省成本，因為如果直接丟到 LLM 去判斷內容是否不妥，就會消耗一次運算資源。撰寫本文時，我查到的資訊顯示，Moderation API 目前是免費使用的【1】。不過，文件中提醒到，非英文語系的審查還在改進中，且建議將文字切成 2000 字元以內的片段。

```
       +----------------+
       |   Start        |
       +----------------+
               |
               v
       +----------------+
       |  1. User input |
       +----------------+
               |
               v
       +------------------+
       |  2. Check input  |
       |    moderation    |
       +------------------+
               |
               |
        +------+----------+
        |                 |
        v                 v
+----------------+  +-----------------+
| 3.a. Run LLM   |  | 3.b. Reject user|
|                |  |    request      |
+----------------+  +-----------------+
        |               ^    |
        |               |    |
        |               |    |
        v               |    |
                        |    |
+------------------+    |    |
|  4. Check LLM    |    |    |
| output moderation|  - -    |
|    moderation    |         |
+------------------+         v     
        |             +-----------------+
        |             |      End        |
        |             +-----------------+
        v 
+----------------+ 
|      End        |  
+----------------+ 
```

- 幻覺（hallucination）是 LLM 的通病，極少數情況下，如果有專業用戶刻意去 hack LLM，生成的文字也可能是不恰當的。因此，你也可以對 LLM 生成的內容進行自我審查。
- 另外，這個工具還可以用來檢查網友的留言是否不當，為社群管理者提供參考依據。或者，可以考慮用於學生聊天室，防止兒童和青少年接觸到不良的內容，但這樣做時需要權衡隱私權的問題。

## 保護 LLM 的其它方式
在我上 Deeplearning.ai 的課程時【2】學到，除了使用 Moderation API，還有一些提示詞（prompt）可以避免 LLM 出現不可預期的輸出。舉例來說，可以用一個提示詞來檢查使用者的輸入是否符合該專案的範疇。不過，這種方式較為客製化，而 Moderation API 更像是一道守門員，能夠提前過濾掉不適宜的內容。

## 參考資料
###### [1] [OpenAI](https://platform.openai.com/docs/guides/moderation/overview)
###### [2] [Deeplearning.ai](https://learn.deeplearning.ai/courses/chatgpt-building-system/lesson/4/moderation)
