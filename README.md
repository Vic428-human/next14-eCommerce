# 專案中各分支用途

- scssBase/main: 該分支會根據 main 分支(tailwindcss)的基礎，改以 scss 的情況去改寫
- int-tailwindcss : 從 main 拉出來的，優先以此進行開發，有時間才同步更新 scssBase/main 分支。
- **功能 3**: 描述功能 3 的作用。

# main 分支 Readme 備份

## 備忘

2025/01/31 更新
嘗試切版的部分都只用 v0.dev 切版，然後再微調

2025/01/29 更新
目前在做 [e-commerce](https://github.com/Vic428-human/next14-eCommerce) 的 side project。

```版本

node -v
v20.12.2

```

# scssBase/main 分支 Readme 備份

```bash
pnpm dev
# or
yarn dev
# or
pnpm dev
```

## 筆記

px 轉換成 vim：
用途: 因為在縮放 desktop 跟 mobile 的過程，如果不配置 pxToVmin()，
會產生排版偏移的情況，但實際在使用者觀看下，padding left 也應該要是等比例的縮放。
而不應該產生偏移。

```javascript
@function pxToVmin($targetPx, $baseWidth: $baseDesktopWindowWidth) {
  // 計算 1% 的寬度是多少像素
  $onePercentWidth: ($baseWidth / 100) * 1px;

  // 判斷 目標像素 在基礎寬度中的百分比
  $percentageOfBaseWidth: math.div($targetPx, $onePercentWidth);

  @return $percentageOfBaseWidth * 1vmin;
}

```
