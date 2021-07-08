// mathsSpan = document.getElementsByClassName("mjx-chtml");

// for (var i = 0; i < mathsSpan.length; i++)
//     mathsSpan[i].style.textAlign = "left";

//https重定向
//redictToHttps();
console.log("窗口加载完成")

//Valine评论系统
// try{
//     newValine();
// }
// catch(e){
//     console.log('当前页面未开启评论系统...');
// }

//补全链接地址和隐藏来源
HidenValine();
//运行网站时间
setInterval("createtime()", 250);
rainbow();
//运行一句格言
//hitokoto();

//底部运行时间设置
function createtime() {
  var now = new Date();
  var grt = new Date("02/05/2020 15:30:00");//此处修改你的建站时间或者网站上线时间
  now.setTime(now.getTime() + 250);
  days = (now - grt) / 1000 / 60 / 60 / 24; dnum = Math.floor(days);
  hours = (now - grt) / 1000 / 60 / 60 - (24 * dnum); hnum = Math.floor(hours);
  if (String(hnum).length == 1) { hnum = "0" + hnum; } minutes = (now - grt) / 1000 / 60 - (24 * 60 * dnum) - (60 * hnum);
  mnum = Math.floor(minutes); if (String(mnum).length == 1) { mnum = "0" + mnum; }
  seconds = (now - grt) / 1000 - (24 * 60 * 60 * dnum) - (60 * 60 * hnum) - (60 * mnum);
  snum = Math.round(seconds); if (String(snum).length == 1) { snum = "0" + snum; }
  document.getElementById("timeDate").innerHTML = dnum;
  document.getElementById("times").innerHTML = hnum + " 小时 " + mnum + " 分 " + snum + " 秒";
}

//一句格言
function hitokoto() {
  fetch('https://v1.hitokoto.cn')
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      var hitokoto = document.getElementById('hitokoto');
      hitokoto.innerText = data.hitokoto;
      //hitokoto.href = 'https://hitokoto.cn/?id=' + data.id;
    })
    .catch(function (err) {
      console.error(err);
    });
}

//一朵彩虹
function rainbow() {
  fetch('https://api.eatrice.top')
    .then(response => response.json())
    .then(data => {
      var rainbow = document.getElementById('rainbow');
      rainbow.innerHTML = data.Content;
      rainbow.href = "https://rainbow.eatrice.top/?ID=" + data.ID;
    })
    .catch(console.error)
}

// 运行一朵彩虹
// rainbow();

function redictToHttps() {
  var host = document.location.hostname;
  if (host.indexOf('localhost') < 0) {
    var protocol = document.location.protocol;
    if (protocol == 'http:')
      window.location.href = window.location.href.replace('http', 'https');
  }
}

function HidenValine() {
  let infobox = document.getElementsByClassName('vpower')[0];
  if (infobox)
    infobox.innerHTML = "";

  let linkboxs = document.getElementsByName("link")[0];
  if (linkboxs) {
    //linkboxs.placeholder = "你的飞船地址咯";
    linkboxs.addEventListener("blur", function (e) {
      var uri = this.value;
      if (uri.indexOf("https://") < 0 && uri.indexOf("http://") < 0) {
        uri = "http://" + uri;
        console.log("尝试补全地址");
      }
      this.value = uri;
    }, true);
  }
}

// 浏览器搞笑标题
// 只改标题,不改图标
var OriginTitle = document.title;
var titleTime;
document.addEventListener('visibilitychange', function () {
  if (document.hidden) {
    //$('[rel="icon"]').attr('href', "img/funny.ico");
    document.title = '╭(°A°`)╮ 页面崩溃啦 ~';
    clearTimeout(titleTime);
  }
  else {
    //$('[rel="icon"]').attr('href', "img/favicon.png");
    document.title = '(ฅ>ω<*ฅ) 噫又好啦 ~' + OriginTitle;
    titleTime = setTimeout(function () {
      document.title = OriginTitle;
    }, 2000);
  }
});

// 鼠标点击小爱心
!function (e, t, a) { function r() { for (var e = 0; e < s.length; e++) s[e].alpha <= 0 ? (t.body.removeChild(s[e].el), s.splice(e, 1)) : (s[e].y--, s[e].scale += .004, s[e].alpha -= .013, s[e].el.style.cssText = "left:" + s[e].x + "px;top:" + s[e].y + "px;opacity:" + s[e].alpha + ";transform:scale(" + s[e].scale + "," + s[e].scale + ") rotate(45deg);background:" + s[e].color + ";z-index:99999"); requestAnimationFrame(r) } function n() { var t = "function" == typeof e.onclick && e.onclick; e.onclick = function (e) { t && t(), o(e) } } function o(e) { var a = t.createElement("div"); a.className = "heart", s.push({ el: a, x: e.clientX - 5, y: e.clientY - 5, scale: 1, alpha: 1, color: c() }), t.body.appendChild(a) } function i(e) { var a = t.createElement("style"); a.type = "text/css"; try { a.appendChild(t.createTextNode(e)) } catch (t) { a.styleSheet.cssText = e } t.getElementsByTagName("head")[0].appendChild(a) } function c() { return "rgb(" + ~~(255 * Math.random()) + "," + ~~(255 * Math.random()) + "," + ~~(255 * Math.random()) + ")" } var s = []; e.requestAnimationFrame = e.requestAnimationFrame || e.webkitRequestAnimationFrame || e.mozRequestAnimationFrame || e.oRequestAnimationFrame || e.msRequestAnimationFrame || function (e) { setTimeout(e, 1e3 / 60) }, i(".heart{width: 10px;height: 10px;position: fixed;background: #f00;transform: rotate(45deg);-webkit-transform: rotate(45deg);-moz-transform: rotate(45deg);}.heart:after,.heart:before{content: '';width: inherit;height: inherit;background: inherit;border-radius: 50%;-webkit-border-radius: 50%;-moz-border-radius: 50%;position: fixed;}.heart:after{top: -5px;}.heart:before{left: -5px;}"), n(), r() }(window, document);


/** 静止彩色丝带bynote.cn **/
/*jshint -W030 */
!function () {
  function attr(node, attr, default_value) {
    return Number(node.getAttribute(attr)) || default_value;
  }

  // get user config
  var scripts = document.getElementsByTagName('script'),
    script = scripts[scripts.length - 1]; // 当前加载的script
  config = {
    z: attr(script, "zIndex", -1), // z-index
    a: attr(script, "alpha", 0.6), // alpha
    s: attr(script, "size", 90), // size
  };

  var canvas = document.createElement('canvas'),
    g2d = canvas.getContext('2d'),
    pr = window.devicePixelRatio || 1,
    width = window.innerWidth,
    height = window.innerHeight,
    f = config.s,
    q, t,
    m = Math,
    r = 0,
    pi = m.PI * 2,
    cos = m.cos,
    random = m.random;
  canvas.width = width * pr;
  canvas.height = height * pr;
  g2d.scale(pr, pr);
  g2d.globalAlpha = config.a;
  canvas.style.cssText = 'opacity: ' + config.a + ';position:fixed;top:0;left:0;z-index: ' + config.z + ';width:100%;height:100%;pointer-events:none;';
  // create canvas
  document.getElementsByTagName('body')[0].appendChild(canvas);

  function redraw() {
    g2d.clearRect(0, 0, width, height);
    q = [{ x: 0, y: height * 0.7 + f }, { x: 0, y: height * 0.7 - f }];
    while (q[1].x < width + f) draw(q[0], q[1]);
  }
  function draw(i, j) {
    g2d.beginPath();
    g2d.moveTo(i.x, i.y);
    g2d.lineTo(j.x, j.y);
    var k = j.x + (random() * 2 - 0.25) * f, n = line(j.y);
    g2d.lineTo(k, n);
    g2d.closePath();
    r -= pi / -50;
    g2d.fillStyle = '#' + (cos(r) * 127 + 128 << 16 | cos(r + pi / 3) * 127 + 128 << 8 | cos(r + pi / 3 * 2) * 127 + 128).toString(16);
    g2d.fill();
    q[0] = q[1];
    q[1] = { x: k, y: n };
  }
  function line(p) {
    t = p + (random() * 2 - 1.1) * f;
    return (t > height || t < 0) ? line(p) : t;
  }

  document.onclick = redraw;
  document.ontouchstart = redraw;
  redraw();
}();
// //好哦弹窗
// function haoOO(){
//     $.dialog.setting.zIndex = getzIndex();
//     $.dialog({
//         content: '好哦好哦!', 
//         zIndex: getzIndex(),
//         title: '我会说:',
//         lock: true,
//         width: '600px', 
//         height: '400px',
//         opacity: 0.4,
//     }).zindex();
// }

//以下代码来源于七夏浅笑的博客

/* Sidebar
var toggleSidebar = function(){
    $("#sidebar").toggleClass('sidebar-hide');
    $("#toggle-sidebar").toggleClass('sidebar-button-shift');
  }
  var hideSidebar = function(){
    $("#sidebar").addClass('sidebar-hide');
    $("#toggle-sidebar").addClass('sidebar-button-shift');
  }
  $("#toggle-sidebar").on("click",toggleSidebar);
  $("header").on("click",hideSidebar);
  $("#mainContent").on("click",hideSidebar);
  $("#footerContent").on("click",hideSidebar);
*/