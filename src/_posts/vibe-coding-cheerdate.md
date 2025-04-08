---
title: 利用 Vibe Coding 建構 Cheerdate：中職啦啦隊女孩班表查詢系統
date: '2025-04-09'
excerpt: 這是我第一次使用 Svelte，學一個新框架最快的方式，就是快速做一個 Side project, 結合我愛看棒球的興趣，中職啦啦隊女孩班表查詢系統就出來了!!!
coverImage: '/post_photos/vibe-coding-cheersdate/main_image.jpg'
keywords: LLM, AI, OpenAI, Vibe coding, Cheerdate, 啦啦隊班表, svelte, MVP, Tailwind
author: 
  name: PoYu Chen
  picture: /avatar.png
ogImage: 
  url: '/post_photos/vibe-coding-cheersdate/og_image.jpg'
---

## 什麼是 Vibe Coding？

根據[維基百科](https://zh.wikipedia.org/zh-tw/Vibe_coding)的定義，Vibe coding 是一種使用AI的程式設計技術，開發者會用幾句話描述要處理的問題，將這些文字作為提示，提供給開發軟體專用的大型語言模型（LLM），應用程式的原始碼是由大型語言模型產生，開發者的工作從原來的撰寫程式碼，改為指導AI產生程式碼，測試及優化程式碼

Vibe coding 通常伴隨著邊寫邊部署、快速上線、快速迭代的節奏，特別適合開發 prototype、小工具、side project，或是學習新技術時使用。

## 技術選擇：第一次用 Svelte

這是我第一次使用 Svelte 框架。Svelte 是一種以編譯為核心的前端框架，與傳統的虛擬 DOM 不同，它會在建置階段將應用轉換成高度最佳化的原生 JavaScript。這種設計讓網頁反應更快、程式碼更精簡，也降低了執行時的效能負擔，非常適合用於需要輕量與高效率的前端應用。

學習新技術時，單看文件會讓人覺得枯燥乏味。這時我想起 Yuren Ju 的建議：結合自己的技能與興趣來練習。剛好我平常就愛看棒球，靈光一閃，「啦啦隊班表查詢系統」的 Side project 就這樣誕生了。

剛好時下流行的 vibe coding 也很適合這樣的實驗型專案，正好助我一臂之力。

## 專案背景：Cheerdate 啦啦隊班表查詢系統

雖然身為一個本質球迷，但在這個世代下，還是會常常朋友認為，棒球迷就應該熟知啦啦隊的所有問題。看來現在棒球場上，啦啦隊女孩也是看球體驗中不可或缺的一部分。過去我常常想知道哪一場比賽有哪些啦啦隊成員會出場，但網路上的資訊零散。於是我決定自己動手做一個班表查詢系統——這就是 Cheerdate 的誕生契機。

[👉 點我進入 Cheerdate 網站](https://mpizza.github.io/cheerdate/)

## 透過 Vibe Coding 快速完成 MVP 並獲得使用者回饋

在這個專案中，我利用 vibe coding 的方式，在短短一天內就完成了 MVP 並上線。我可以立刻把產品推向真實世界，馬上獲得回饋。

上線之後，我隨即在 PTT 的 [CheerGirlsTW 板](https://www.ptt.cc/bbs/CheerGirlsTW/M.1743583924.A.02A.html) 分享了這個工具，獲得了一些真實使用者的反饋，不僅幫助我釐清後續可以改善的地方，也讓我知道這個工具真的對啦啦隊迷有幫助。

這種快速構建、即時發佈、馬上收到意見的開發模式，正是 vibe coding 帶來的巨大優勢之一。

## Vibe Coding 的流程

這次我在 Cheerdate 專案中實際體驗了 vibe coding 的開發流程，大致可以分為以下三個階段：

1. **溝通需求與技術拆解**：首先我會向 AI 描述我想完成的基本功能，例如「查詢指定場次的啦啦隊成員」，並請它幫我分析實作這些功能所需要的技術與資料結構。

2. **指定開發技術與環境**：我接著會告訴 AI 我想使用的 framework。在這個案例中，我指定了使用 Svelte 與 Tailwind CSS，並希望這個網站能在行動裝置上順暢運作。

3. **測試與部署計畫**：功能初步完成後，我會撰寫簡單的 unit test 確保核心功能穩定，接著規劃部署流程，將網站上線測試，並根據實際效果調整程式碼，或請 AI 協助優化細節。

## 結語

Vibe coding 不是取代正式開發流程的萬靈丹，但對於一個想實現想法、快速嘗試原型的個人開發者來說，它是一種非常自由且充滿成就感的方式。透過 Cheerdate 的開發，我不但完成了一個實用的小工具，也更加熟悉了 Svelte，並重新體會到寫程式的樂趣。

如果你也有想做的小專案，不妨試試 vibe coding 的方式，讓感覺帶你走一段旅程。

## 後記

這個專案最難的就是把各隊班表從圖片的轉成文字，原本以為可以透過 AI 的方式做 OCR, 但中文對 AI 來說還是太難了，所以後期完全放棄 OCR，純手工的方式 key 上資料。
小抱怨一下，喵隊的行程表，與眾不同，真的好難 key 資料啊!!!! 
