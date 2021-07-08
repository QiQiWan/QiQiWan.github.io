const dp1 = new DPlayer({
    container: document.getElementById('dplayer'),
    autoplay: false,
    theme: '#FADFA3',
    loop: true,
    lang: 'zh-cn',
    screenshot: true,
    hotkey: true,
    preload: 'auto',
    logo: 'https://eatrice.cn/img/favcion.png',
    volume: 0.7,
    mutex: true,
    video: {
        url: '/about/index/week_me_up.webm',
        pic: '/about/index/1.png',
        thumbnails: 'index/1.png',
        type: 'auto',
    }
});