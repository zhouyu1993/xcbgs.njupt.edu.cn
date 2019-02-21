// 获取导航列表
function RJgetNav (id, className) {
  if (!$(id)) return

  var html = ''
  var list = $(id + ' .wp_nav').children().children('a')
  Array.prototype.slice.call(list).forEach(function (v) {
    var a = $(v)
    var href = a.attr('href')
    var text = a.attr('title')
    html += '<a href="' + href + '">' + text + '</a>'
  })
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
  var html = ''
  var list = $(id + ' .list_item')
  Array.prototype.slice.call(list).forEach(function (v) {
    var a = $(v).find('a')
    var href = a.attr('href')
    var text = a.attr('title')
    var time = $(v).find('.Article_PublishDate').text()
    html += '<a href="' + href + '"><p><i></i>' + text + '</p><span>' + time + '</span></a>'
  })
  $(className + ' .list').html(html)
}

// 获取图片列表
function RJgetPics (imgJsons, className) {
  var html = ''
  imgJsons.forEach(function (v, i) {
    html += '<a href="' + v.url + '"><img src="' + v.src + '"></a>'
  })
  $(className + ' .list').html(html)
}

// 图片轮播
function RJswipe (imgJsons, className, time = 5000) {
  var reder = function (hover) {
    $(className + ' a').hide()
    $(className + ' a').eq(hover).css({
      display: 'block'
    })
  }
  var hover = 0
  var flag = setInterval(function () {
    hover++
    if (hover === imgJsons.length) {
      hover = 0
    }
    reder(hover)
  }, time)
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
    if (!$ || !$.ajax) return

    RJgetNav('#wp_nav_w1', '.nav')

    RJgetArticles('#wp_news_w2', '.notice-info')
    RJgetArticles('#wp_news_w3', '.dynamic-info')
    RJgetArticles('#wp_news_w4', '.file-info')
    RJgetArticles('#wp_news_w5', '.school-info')

    if (window.w6imgJsons) {
      RJgetPics(window.w6imgJsons, '.pic-link')

      RJswipe(window.w6imgJsons, '.pic-link')
    }

    if (window.w7imgJsons) {
      RJgetPics(window.w7imgJsons, '.friendship-link')
    }

    RJsearch()

    $('#app').show()
  } catch (e) {
    console.log(e)
  }

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
