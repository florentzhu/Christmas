# 🎵 音乐文件夹

## 如何添加背景音乐

### 方法 1：使用本地音乐文件
1. 将你的音乐文件命名为 `bgm.mp3`
2. 放到这个 `music` 文件夹中
3. 刷新页面，点击右上角的音乐按钮即可播放

### 方法 2：使用网络音乐链接
修改 `index.html` 中的这一行：
```html
<source src="music/bgm.mp3" type="audio/mpeg">
```
改成：
```html
<source src="你的音乐链接.mp3" type="audio/mpeg">
```

## 支持的音频格式
- MP3 (推荐)
- OGG
- WAV
- M4A

## 获取音乐的建议
由于版权原因，请确保你有权使用该音乐。建议：
1. 使用无版权音乐（如 YouTube Audio Library）
2. 使用你自己创作的音乐
3. 使用有授权的音乐

## 推荐的圣诞音乐（无版权）
- Jingle Bells (Public Domain)
- Silent Night (Public Domain)
- We Wish You a Merry Christmas (Public Domain)

## 音乐控制说明
- 🎵 红色按钮：音乐未播放
- 🎵 绿色按钮：音乐正在播放
- 按钮会有动画效果和发光效果
- 音乐会自动循环播放
