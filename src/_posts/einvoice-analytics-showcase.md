---
title: '寫了一個電子發票分析器'
excerpt: '和 ChatGPT 一起用 d3.js + tailwindcss 做一個 Side project.'
coverImage: 'https://cdn.hashnode.com/res/hashnode/image/upload/v1682494929849/f621bc2a-3789-4491-8c19-e2284163cd58.png?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp'
date: '2023-04-26'
keywords: 'Side project, JS, Web, d3.js'
author:
  name: PoYu Chen
  picture: '/avatar.png'
ogImage: 
  url: 'https://cdn.hashnode.com/res/hashnode/image/upload/v1682494929849/f621bc2a-3789-4491-8c19-e2284163cd58.png?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp'
---

先說目的為什麼要寫一個[電子發票分析器](https://einvoice-analytics.web.app/):

* 練習 [D3.js](https://d3js.org/)
    
* 練習 [tailwindcss](https://tailwindcss.com/)
    
* 和 chatGPT 一起寫一個 Side Project
    
* 證明電子發票可以知道很多細節，請下載財政部的 APP \[[Andoid](https://play.google.com/store/apps/details?id=tw.gov.invoice&hl=zh_TW&gl=US)\] \[[iOS](https://apps.apple.com/us/app/%E7%B5%B1%E4%B8%80%E7%99%BC%E7%A5%A8%E5%85%8C%E7%8D%8E/id1445981329?l=zh&ls=1)\] 就好
    

最近剛好有一些時間，想撿一些以前想做的事，但沒做到的。 D3.js這個工具就出現在我的腦中，又加上去年有一場面試，和面試官討論起 tailwindcss，他聽過 b2g 這個 project ，也理解為什麼我沒有用過，他花了很長的時間跟我討論(這關也沒有因此被刷掉，還順利的過關呢 )，所以這東西也一直放在我的學習清單裡。

目前我先把 [電子發票分析器](https://einvoice-analytics.web.app/) 發佈在 Firebase 上， 附上兩個由 ChatGPT 幫我產生的測試檔。

> D3.js是一個使用動態圖形進行資料視覺化的JavaScript程式庫。與W3C標準相容，並且利用廣泛實現的SVG、JavaScript和CSS標準，改良自早期的Protovis程式庫。與其他的程式庫相比，D3對視圖結果有很大的可控性。 wikipedia

先說說使用 ChatGPT 的心得，這次寫side project 大部分的程式都是我獨立完成的(也許以後寫程式都要有這個宣言)。我使用到 ChatGPT 的時機就是，這個 function 太簡單，我懶的自己動作，比如處理字串的正規表示式 (Regular expression)。

這裡順便靠盃一下，財政部的 cvs 是格式是天殺的奇怪，大家的 csv 都是用 "," 但財政部確是用 "|"，如下圖:

![資料圖示](https://cdn.hashnode.com/res/hashnode/image/upload/v1682496089759/93cd2c45-e621-4a2f-88ae-1ee53a065263.png)

另外就是有時候碰到 Typescript 某些我搞不種的錯誤時，我也會丟到 ChatGPT 去找靈感。

最後最後，就是我覺得最好用的地方了，產生假資料。以這個 project 來說，電子發票的資料就非常重要，但我又不太想把個人的消費行為當作是 test case ，所以我就和 ChatGPT 描述一下，他就開開心心的幫我產生了，真開心。

> Tailwind CSS是一個開放原始碼CSS框架。這個工具庫的主要特點是，與 Bootstrap 等其他 CSS 框架不同，沒有為按鈕或表格等元素提供一系列預定義類。相對的，會創建一個「工具程式型」CSS 類別列表，這些類別可用於通過混搭和媒合來設定每個元素的樣式。 wikipedia

至於，D3 跟 TailwindCSS 的心得呢？我覺得就是好用，很輕鬆的可以產生報用的圖像們。Tailwind CSS 則是照文件上，無腦的加上class name，就可以得到一些輕裝潢了。推推~
