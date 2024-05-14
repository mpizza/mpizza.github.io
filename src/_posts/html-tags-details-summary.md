---
title: '不用 JS 就可以有開合功能'
excerpt: '居然有一組 html tags，不需要 js 的幫助，就可以實作出開合的功能'
coverImage: '/post_photos/html-tags-details-summary/main.png'
date: '2024-05-09'
keywords: 'JS, Web, W3C'
author:
  name: PoYu Chen
  picture: '/avatar.png'
ogImage: 
  url: '/post_photos/html-tags-details-summary/main.png'
---


最近在建置自己的網站時，發現一個各大 browser 早就支援的 Tags。

```css
details {
  border: 1px solid #aaa;
  border-radius: 4px;
  padding: 0.5em 0.5em 0;
}

summary {
  font-weight: bold;
  margin: -0.5em -0.5em 0;
  padding: 0.5em;
}

details[open] {
  padding: 0.5em;
}

details[open] summary {
  border-bottom: 1px solid #aaa;
  margin-bottom: 0.5em;
}
```

``` html
<details>
	<summary> 填上一些 摘要 </summary> 
	想收合的內容們, 想收合的內容們 想收合的內容們 想收合的內容們 
</details>
```

![簡單的範例](/post_photos/html-tags-details-summary/1.png)

![簡單的範例，開](/post_photos/html-tags-details-summary/2.png)

簡簡單單，不需要靠 JS 就可以做出可以收合的 UI 了。
當發現這個新大陸的時候，一定會想說，那個三角形好醜，可以換嗎？
你想的到的，當初定義的人也都想的到。

> 從上面的 css，可以發現 details 有一個屬性是 open
> open 是一個 bolean 設為 true ，就是開反之就是合
## 第一步，先來隱藏三角形

簡單的把 list-style 設定成 none 就好了。
這邊我還加上 cursor: pointer; 的原因是，少了三角形，很難知道整個文字是可以被按的

```css
summary {
  font-weight: bold;
  margin: -0.5em -0.5em 0;
  padding: 0.5em;
  cursor: pointer;
  list-style: none;
}

```

## 第二步，自制按鈕
我在 summary 這裡多加了一個 svg 的 icon, 然後當 details tag 是 open 的時候，就讓這個 svg 旋轉 45度。

```html
<details>
	<summary> 
      <svg
           xmlns="http://www.w3.org/2000/svg"
           width=20
           height=20
           viewBox="0 0 20 20"
           fill="currentColor"
           >
        <path
          fillRule="evenodd"
          d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
          clipRule="evenodd"
         />
      </svg>
       這裡寫摘要 
  </summary> 
	想收合的內容們, 想收合的內容們 想收合的內容們 想收合的內容們 
</details>

```

``` css
details[open] summary svg{
  transform: rotate(45deg);
}
```

![十字指示](/post_photos/html-tags-details-summary/4.png)

![十字指示，內文開](/post_photos/html-tags-details-summary/3.png)

有沒有很酷呢!!以下是參考文獻
- [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/details)
- [W3C Spec](https://html.spec.whatwg.org/multipage/interactive-elements.html)