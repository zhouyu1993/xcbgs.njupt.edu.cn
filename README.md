# gulp

不支持 ES6

# dev

``` bash
npm run dev
```

open `localhost:8080/main.htm`

# build

``` bash
npm run build

npm run zip
```

# 适应移动端

``` js
(function () {
  var screenWidth = window.screen.width
  var htmlWidth = 1100
  // 比较屏幕宽度与页面宽度大小
  if (screenWidth < htmlWidth) {
    var meta = document.createElement('meta');
    meta.setAttribute('name', 'viewport');
    meta.setAttribute('content', 'width=device-width, initial-scale=' + (screenWidth / htmlWidth) + ', user-scalable=no, viewport-fit=cover');
    document.head.insertBefore(meta, document.querySelector('title'));
  }
})()
```

# 思考

  * 改稿：0，1，2
  * 兼容性问题

# webplus

一般首页绑定频道

如果列表页、详情页也想绑定频道，如导航、搜索，也需要如首页一样写+配置

模版配置那边可以切换首页、列表页、详情页

## 频道1-导航-固定频道

栏目类 -> 导航菜单

网站发布后，首页链接由 http://202.119.224.70/_s332/main.psp 改成 http://xcbgs.njupt.edu.cn

网站建设 -> 栏目管理 -> 右侧栏目树，选中巡察工作领导小组办公室 -> 选中首页 -> 修改 -> 高级属性 -> 外链

外链替换

## 频道2-通知公告-新闻频道

新闻类 -> 新闻列表

显示：2 条 1 列

显示字段：标题

标题：长度 30 字符

More图标：显示

## 频道3-巡察要闻-新闻频道

新闻类 -> 新闻列表

显示：3 条 1 列

显示字段：标题

标题：长度 30 字符

More图标：显示

## 频道4-上级文件-新闻频道

新闻类 -> 新闻列表

显示：2 条 1 列

显示字段：标题

标题：长度 30 字符

More图标：显示

## 频道5-校内规章-新闻频道

新闻类 -> 新闻列表

显示：3 条 1 列

显示字段：标题

标题：长度 30 字符

More图标：显示

## 频道6-图片新闻-图片频道

图片类 -> 多图交替2（只带索引）

首页显示图片大小：430*275

## 频道7-友情链接-图片频道

图片类 -> 多图交替2（只带索引）

首页显示图片大小：200*45

友情链接的访问链接，修改方式：

内容管理 -> 文档管理 -> 右侧栏目树，选中友情链接 -> 选中对应文章 -> 修改 -> 外链

外链替换

## 巡察动态

http://202.119.224.70/_s332/xcdt/list.psp

http://202.119.224.70/_s332/dsjdwxczt/list.psp

以上两个分别对应 PPT 第 4、5 页，都是文章内容，需要在后台自行排版

建议可以切成图片排版
