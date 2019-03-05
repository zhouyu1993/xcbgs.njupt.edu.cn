function RJzerofill (input) {
  var num = Number(input)

  return num < 10 ? '0' + num : num
}

function RJsplitTime (ms) {
  ms = Number(ms)

  var time = ms ? new Date(ms) : new Date()

  var week = time.getDay()

  var weekFormate = ''
  if (week === 0) {
    weekFormate = '日'
  } else if (week === 1) {
    weekFormate = '一'
  } else if (week === 2) {
    weekFormate = '二'
  } else if (week === 3) {
    weekFormate = '三'
  } else if (week === 4) {
    weekFormate = '四'
  } else if (week === 5) {
    weekFormate = '五'
  } else if (week === 6) {
    weekFormate = '六'
  }

  return {
    year: time.getFullYear(),
    month: RJzerofill(time.getMonth() + 1),
    day: RJzerofill(time.getDate()),
    week: week,
    weekFormate: weekFormate,
    hour: RJzerofill(time.getHours()),
    minute: RJzerofill(time.getMinutes()),
    second: RJzerofill(time.getSeconds())
  }
}

function RJdateFormate (ms, format) {
  var formater = format || 'YY-MM-DD hh:mm:ss'
  var t = RJsplitTime(ms)
  return formater.replace('YY', t.year)
    .replace('MM', t.month)
    .replace('DD', t.day)
    .replace('weekFormate', t.weekFormate)
    .replace('hh', t.hour)
    .replace('mm', t.minute)
    .replace('ss', t.second)
}

// 获取导航列表
function RJgetNav (id, className) {
  if (!$(id)) return

  var list = $(id + ' .wp_nav').children().children('a')
  var listArr = Array.prototype.slice.call(list)

  var html = ''
  for (var i = 0; i < listArr.length; i ++) {
    var a = $(listArr[i])
    var href = a.attr('href')
    var text = a.attr('title')

    html += '<a href="' + href + '">' + text + '</a>'
  }

  $(className + ' .list').html(html)
}

// 获取文章列表
function RJgetArticles (id, className) {
  if (!$(id)) return

  var href = $(id + ' .more-link').attr('href')
  if (href) {
    $(className + ' h1 a').attr('href', href)
  } else {
    $(className + ' h1 a').hide()
  }

  var list = $(id + ' .list_item')
  var listArr = Array.prototype.slice.call(list)

  var html = ''
  for (var i = 0; i < listArr.length; i ++) {
    var a = $(listArr[i]).find('a')
    var href = a.attr('href')
    var text = a.attr('title')

    html += '<a href="' + href + '"><p><i></i>' + text + '</p></a>'
  }

  $(className + ' .list').html(html)
}

// 获取图片列表
function RJgetPics (imgJsons, className) {
  var html = ''
  var spans = ''
  for (var i = 0; i < imgJsons.length; i ++) {
    html += '<a href="' + imgJsons[i].url + '"><img src="' + imgJsons[i].src + '"></a>'
    spans += i === 0 ? ('<span class="hover">' + (i + 1) + '</span>') : ('<span>' + (i + 1) + '</span>')
  }

  $(className + ' .list').html(html)
  $(className + ' .num').html(spans)
}

// 获取图片列表
function RJgetPics2 (imgJsons, className, id) {
  var titleArr = []

  if (id && $(id)) {
    var list = $(id + ' .list_item')
    var listArr = Array.prototype.slice.call(list)

    for (var i = 0; i < listArr.length; i ++) {
      var a = $(listArr[i]).find('a')
      var text = a.attr('title')

      titleArr.push(text)
    }
  }

  var html = ''
  var spans = ''
  for (var i = 0; i < imgJsons.length; i ++) {
    var phtml = titleArr[i] ? '<p>' + titleArr[i] + '</p>' : ''

    html += '<a href="' + imgJsons[i].url + '"><img src="' + imgJsons[i].src + '">' + phtml + '</a>'

    spans += i === 0 ? ('<span class="hover">' + (i + 1) + '</span>') : ('<span>' + (i + 1) + '</span>')
  }

  $(className + ' .list').html(html)
  $(className + ' .num').html(spans)
}

// 图片轮播
function RJswipe (imgJsons, className, time) {
  var reder = function (hover) {
    $(className + ' a').hide()
    $(className + ' a').eq(hover).css({
      display: 'block'
    })

    $(className + ' span').removeClass('hover')
    $(className + ' span').eq(hover).addClass('hover')
  }

  var hover = 0
  var flag = setInterval(function () {
    hover++

    if (hover === imgJsons.length) {
      hover = 0
    }

    reder(hover)
  }, time || 5000)

  $(className + ' span').on('click', function () {
    hover = $(this).text() - 1

    reder(hover)
  })
}

// 搜索功能
function RJsearch () {
  var searchInput = $('.nav .search input')
  var searchButton = $('.nav .search button')

  var toSearch = function () {
    $('.webplus form #keyword').val(searchInput.val());
    $('.webplus form').submit()
  }

  searchInput.on('keypress', function (event) {
    if (event.keyCode === 13) {
      toSearch()
    }
  })

  searchButton.on('click', function (event) {
    toSearch()
  })
}

(function() {
  try {
    if (!window.$ || !window.$.ajax) return alert('jquery error! 请升级浏览器或使用主流浏览器！')

    $('.nav .todayTime').html(RJdateFormate('', '今天是' + 'YY年MM月DD日星期weekFormate'))

    RJgetNav('#wp_nav_w1', '.nav')

    RJgetArticles('#wp_news_w2', '.notice-info')
    RJgetArticles('#wp_news_w3', '.dynamic-info')
    RJgetArticles('#wp_news_w4', '.file-info')
    RJgetArticles('#wp_news_w5', '.school-info')

    if (window.w6imgJsons) {
      RJgetPics2(window.w6imgJsons, '.pic-link', '#wp_news_w9')

      RJswipe(window.w6imgJsons, '.pic-link')
    }

    if (window.w7imgJsons) {
      RJgetPics(window.w7imgJsons, '.friendship-link')
    }

    RJsearch()

    $('#app').show()
  } catch (e) {
    console.log(e)

    alert(e)
  }

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
