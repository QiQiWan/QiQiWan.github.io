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
        url: '0bf2bmaaoaaaraaexf26ljpfac6da4fqabya.f10002.mp4',
        thumbnails: '1.png',
        type: 'auto',
    }
});