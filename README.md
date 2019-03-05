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
  try {
    // ie > 8
    if (document.head) {
      var screenWidth = window.screen && window.screen.width
      var htmlWidth = 1100
      // 比较屏幕宽度与页面宽度大小
      if (screenWidth < htmlWidth) {
        var meta = document.createElement('meta');
        meta.setAttribute('name', 'viewport');
        meta.setAttribute('content', 'width=device-width, initial-scale=' + (screenWidth / htmlWidth) + ', user-scalable=no, viewport-fit=cover');
        document.head.insertBefore(meta, document.querySelector('title'));
      }
    }
  } catch (e) {
    console.log(e)

    alert(e)
  }
})()
```

# 兼容性问题

得支持 IE 8 ！

HTML5 标签，如 section 不支持！

`forEach` IE 9

`document.head` IE 9

`函数参数默认值` 不允许！

# webplus

一般首页绑定频道

如果列表页、详情页也想绑定频道，如导航、搜索，也需要如首页一样写+配置

模版配置那边可以切换首页、列表页、详情页

模版上传后，记得引用 jquery 版本，最好选最高版本

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

## 频道(6+9)-图片新闻-图片频道

频道6 - 图片类 -> 多图交替2（带索引）

频道9 - 新闻类 -> 新闻列表

之所以需要 6 + 9 结合，可能是其他图片类频道对低版本游览器兼容性不好

首页滚动的图片频道，显示图片大小：430*275

一般是把文章内第一张图作为封面图

如果图片尺寸太大，尤其是高度太大，需要另传封面图

如果不传封面图，直接在文章内编辑传一张，会压缩模糊掉。可以截取成两张，第一张尺寸尽量保存为 430*275 的比例

举个例子，一张图是：640*4356，我们需要分成两张图：640*410，640*3946，这样第一张图 640*410 就保持了 430*275 的比例

而且后台很变态，编辑文章时，必须上传的第一张图是才能作为图片频道展示，否则需要删除文章，重新编辑

``` html
<p style="text-align:center;">
    <img src="/_upload/article/images/a0/84/3034beeb4a9786c5cb7cac804336/14c85430-e022-4acf-a4a4-cf6c139ce880.jpg" style="vertical-align:middle;" />
</p>
<p style="text-align:center;">
    <img src="/_upload/article/images/a0/84/3034beeb4a9786c5cb7cac804336/5b5a5282-23a1-4826-8661-408520518032.jpg" style="vertical-align:middle;" />
</p>
```

## 频道7-友情链接-图片频道

图片类 -> 多图交替2（只带索引）

首页显示图片大小：200*45

友情链接的访问链接，修改方式：

内容管理 -> 文档管理 -> 右侧栏目树，选中友情链接 -> 选中对应文章 -> 修改 -> 外链

外链替换

## 频道7-搜索频道

## 巡察动态

http://202.119.224.70/_s332/xcdt/list.psp

``` html
<div style="position:relative;z-index:2;height:50px;margin-top:20px;">
    <img src="/_upload/article/images/a8/8b/fcea74ae4ae1aee5a47dfb2312f3/c1ae19aa-f0ba-4112-a7ae-e1dae86c843d.png" style="position:absolute;top:50%;left:50%;z-index:3;width:640px;height:2px;margin-top:-1px;margin-left:-320px;" /><img src="/_upload/article/images/a8/8b/fcea74ae4ae1aee5a47dfb2312f3/5b41b7a9-9f35-4c04-8afa-76c73704d09d.png" style="position:absolute;top:50%;left:50%;z-index:4;width:100px;height:50px;margin-top:-25px;margin-left:-50px;" />
    <div style="position:absolute;top:50%;left:50%;z-index:5;width:100px;height:50px;font-size:16px;font-weight:bold;line-height:50px;color:#af1f25;text-align:center;margin-top:-25px;margin-left:-50px;">
        巡察动态
    </div>
</div>
<div style="position:relative;z-index:2;height:200px;margin-top:30px;">
    <div style="position:absolute;top:0;left:10%;z-index:3;width:300px;height:200px;">
        <a href="http://202.119.224.70/_s332/dsjdwxczt/list.psp"><img src="/_upload/article/images/a8/8b/fcea74ae4ae1aee5a47dfb2312f3/49633c1f-31ac-446c-a706-a790c9e2ede2.jpeg" style="width:300px;height:200px;" />
            <div style="position:absolute;top:50%;left:0;z-index:3;width:300px;height:50px;font-size:20px;font-weight:bold;line-height:50px;color:#af1f25;text-align:center;margin-top:-25px;">
                第三届党委巡察专题
            </div></a>
    </div>
    <div style="position:absolute;top:0;right:10%;z-index:3;width:300px;height:200px;">
        <a href="http://202.119.224.70/_s332/xcjj/list.psp"><img src="/_upload/article/images/a8/8b/fcea74ae4ae1aee5a47dfb2312f3/49633c1f-31ac-446c-a706-a790c9e2ede2.jpeg" style="width:300px;height:200px;" />
            <div style="position:absolute;top:50%;left:0;z-index:3;width:300px;height:50px;font-size:20px;font-weight:bold;line-height:50px;color:#af1f25;text-align:center;margin-top:-25px;">
                巡察聚焦
            </div></a>
    </div>
</div>
```

http://202.119.224.70/_s332/dsjdwxczt/list.psp

``` html
<div style="position:relative;z-index:2;height:60px;margin-top:20px;">
    <img src="/_upload/article/images/a2/35/80a51a6249a79b8ffd07cabb9198/c5b2b7ce-2fb2-4a96-a125-4987740c22fe.png" style="position:absolute;top:50%;left:50%;z-index:3;width:640px;height:2px;margin-top:-1px;margin-left:-320px;" /><img src="/_upload/article/images/a2/35/80a51a6249a79b8ffd07cabb9198/3200c30a-5f80-43c7-bfbf-fe5dba969a15.png" style="position:absolute;top:50%;left:50%;z-index:4;width:200px;height:60px;margin-top:-30px;margin-left:-100px;" />
    <div style="position:absolute;top:50%;left:50%;z-index:5;width:200px;height:60px;font-size:16px;font-weight:bold;line-height:60px;color:#af1f25;text-align:center;margin-top:-30px;margin-left:-100px;">
        第三届党委巡察专题
    </div>
</div>
<div style="position:relative;z-index:2;height:100px;margin-top:30px;">
    <div style="position:absolute;top:0;left:10%;z-index:3;width:150px;height:100px;">
        <a href="http://202.119.224.70/_s332/xcjz/list.psp"><img src="/_upload/article/images/a2/35/80a51a6249a79b8ffd07cabb9198/1ef90bd1-1deb-45a4-bb23-f7d7d61c3c4d.png" style="width:150px;height:100px;" />
            <div style="position:absolute;top:50%;left:0;z-index:3;width:150px;height:50px;font-size:20px;font-weight:bold;line-height:50px;color:#af1f25;text-align:center;margin-top:-25px;">
                巡察进驻
            </div></a>
    </div>
    <div style="position:absolute;top:0;left:50%;z-index:3;width:150px;height:100px;margin-left:-75px;">
        <a href="http://202.119.224.70/_s332/xcfk/list.psp"><img src="/_upload/article/images/a2/35/80a51a6249a79b8ffd07cabb9198/1ef90bd1-1deb-45a4-bb23-f7d7d61c3c4d.png" style="width:150px;height:100px;" />
            <div style="position:absolute;top:50%;left:0;z-index:3;width:150px;height:50px;font-size:20px;font-weight:bold;line-height:50px;color:#af1f25;text-align:center;margin-top:-25px;">
                巡察反馈
            </div></a>
    </div>
    <div style="position:absolute;top:0;right:10%;z-index:3;width:150px;height:100px;">
        <a href="http://202.119.224.70/_s332/xczg/list.psp"><img src="/_upload/article/images/a2/35/80a51a6249a79b8ffd07cabb9198/1ef90bd1-1deb-45a4-bb23-f7d7d61c3c4d.png" style="width:150px;height:100px;" />
            <div style="position:absolute;top:50%;left:0;z-index:3;width:150px;height:50px;font-size:20px;font-weight:bold;line-height:50px;color:#af1f25;text-align:center;margin-top:-25px;">
                巡察整改
            </div></a>
    </div>
</div>
```
