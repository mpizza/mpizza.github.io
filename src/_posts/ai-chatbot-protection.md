---
title: 動手實作 AI 客服的保護機制
date: '2024-11-28'
excerpt: 用 LangGraph 試試將不相關的問題導流到不同的 node, 防止 AI 客服被亂問問題
coverImage: '/post_photos/chatbot-protection/metro-tpe.jpg'
keywords: LLM, AI, OpenAi, Chatbot, 客服, 台北捷運, 保護, LangGraph
author: 
  name: PoYu Chen
  picture: /avatar.png
ogImage: 
  url: '/post_photos/chatbot-protection/code-result.jpg'
---
## AI智慧客服被濫用 ?
前幾天看到一則新聞大意是，台北捷運的 AI 智慧客服[1][2]被大家試出可以幫忙寫程式，然後在某些圈子內就看到有人評論 AI 智慧客服就有這類的風險，會被大家拿來惡搞濫用。
思考了一下，應該加上一個 prompt 就可以了阻止這件事了吧？

## 試著用 LangGraph 來實作心中的 idea
剛好最近在學 LangGraph，滿適合用在這個例子上的，在不同的 node 上處理細小的事，而且每個 node 產出不同的狀態後，根據不同條件，往不同的 Node 走。以下是我想像中的 graph. 

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
       |  2. ChatBot      |
       |   分類器          |
       +------------------+
               |
               |
        +------+----------+
        |                 |
        v                 v
+----------------+  +-----------------+
| 3.a. 和該公司相關|  | 3.b.和該公司無相關 |
| 的問題處理 node  |  |   的處理 node    |
+----------------+  +-----------------+
        |                    |
        |                    |
        |                    |
        v                    |
                             |
+------------------+         |
|  4. 處理各小事的   |         |
| tools            |         |
+------------------+         v     
        |             +-----------------+
        |             |      End        |
        |             +-----------------+
        v 
+----------------+ 
|      End       |  
+----------------+ 
```

## 還要再加上一點神奇的咒語 (prompt) 才行啊!!
我一開始的構想就是只加上這個 prompt 應該就可以了，先給這個 AI 客服限制幾個主題，以下幾個主題是想像中，客服應該要回答的主題。利用 LLM 可以分類問題的小功能，將使用者的問題分類，把不相關的主題設定一個 false flag。 Prompt 的範例如下：

``` python
intent_prompt = """
  你是一個專業的捷運客服意圖分類助手。請根據用戶的問題判斷其意圖和是否與捷運相關。
  捷運相關的問題類別包括：
  1. 售票問題
  2. 路線問題
  3. 捷運站設施問題
  4. 營運時間問題

  請按以下格式回覆：
  is_metro_related: [true/false]
  intent: [intent_category]
  
  如果不是捷運相關問題，則 is_metro_related 為 false，intent 可以是 "不相關"
  """
```
透過這個 prompt 就可以得到一個 json object

``` json
{
  'is_metro_related': boolean, //true or false,
  'intent': ['topic'] // 分類好的主題 
}
```

## 實驗結果
以下是我測試的問題，跑出來的結果算是不錯。
* "請問捷運票價是多少？",
* "我想知道從A站到B站要怎麼走",
* "捷運站裡有無廁所？",
* "今天天氣不錯",
* "捷運幾點開始營運？",
* "可以幫我寫一段河內塔的C++ code 嗎？"

跑出來的結果截圖如下:
![output](/post_photos/chatbot-protection/code-result.jpg)

這個小程式沒有做到的事，就是對應的 Topic 還可以再附加上 node，再用 AI 去處理更細節的回答，比如提借完整的路線圖、票價的規則。但手邊也沒有這些資料，就沒做下去了。

快速的寫了一支小程式([GitHub Repo 再此](https://github.com/mpizza/chatbot-graph))
歡迎大家給一些 feedback 在 github 上。

## 保護 AI Chatbot 的其它方式
之前也有寫一篇[文章]((/post/openai-moderation))是用 open-ai 的 moderation API，防止使用者問一些壞壞的問題，也可以套在一起使用。

## 後記
在實作這個 AI 客服的時候，突然覺得把 AI 當成一個真正的員工去理解：每個 AI 都需要有員工訓練後，再上線比較妥當，就像是現實生活中，真實的客服，也不可能回答不相關的問題。因此定義規則非常重要。

## 參考資料
###### [1] [北捷AI客服遭網友測試發現可代寫程式碼，北捷緊急斷開Azure Open AI回應功能](https://www.ithome.com.tw/news/166191)
###### [2] [台北捷運 Metro Taipei](https://www.facebook.com/metro.taipei/posts/pfbid0gC2BnKAFatdxzek815Cpi9MdV85G6N3uaoyUu52q1Kx7uJF9KXRqE6GTcvhi8Txtl)
###### [3] [LangGraph](https://www.langchain.com/langgraph)