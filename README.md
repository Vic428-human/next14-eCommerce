## Getting Started

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


## 專案中各分支用途
scssBase/main 這個分支
- **scssBase/main**: 該分支會根據 main分支(tailwindcss)的基礎，改以 scss 的情況去改寫
- **功能 2**: 描述功能 2 的作用。
- **功能 3**: 描述功能 3 的作用。
```
