# HC_banner
js輪播圖

# 範例
https://kyriehavegoodday.github.io/HC_banner/

# 使用說明

## CDN

## 架構
```
        <!-- data-slider-duration 自動撥放時間 -->
        <div id="kyrie-slider" data-slider-duration="3000">

            <!-- 輪播圖項目：根據需求複製貼上 active 只有一組 -->
            <!-- 新增圖片也要新增按鈕item  按鈕item依照順序給 -->
            <div class="kyrie-item kyrie-active" >
                <img src="..." alt="phone">
                <h1>iPhone12 超快速，超越新境界。</h1>
            </div>
            <div class="kyrie-item">
                <img src="..." alt="phone">
                <h1>超瓷晶盾，一眼看透，比任何智慧型手機的玻璃更堅固。</h1>
            </div>
            <div class="kyrie-item">
                <img src="..." alt="phone">
                <h1>兆次、運算、執行 一秒做到!</h1>
            </div>


            <div id="kyrie-prev"></div>
            <div id="kyrie-next"></div>


            <!-- 小顆按扭區塊：根據需求複製貼上 active 只有一組 -->
            <!-- 新增圖片也要新增按鈕item  按鈕item依照順序給 -->
            <div id="kyrie-buttons">
                <div class="kyrie-button kyrie-button-active" data-slider-item="1"></div>
                <div class="kyrie-button" data-slider-item="2"></div>
                <div class="kyrie-button" data-slider-item="3"></div>
            </div>
        </div>

```