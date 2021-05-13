// demo
const dp = new DPlayer({
    container: document.getElementById('dplayer1'),
    autoplay: false,
    theme: '#FADFA3',
    loop: true,
    lang: 'zh-cn',
    screenshot: true,
    hotkey: true,
    preload: 'auto',
    logo: 'https://eatrice.top/img/favcion.png',
    volume: 0.7,
    mutex: true,
    video: {
        url: '//http://mpvideo.qpic.cn/0bf2k4aagaaakaadqrsxlzpfav6danlqaaya.f10002.mp4?dis_k=30e5afffaf63aeb46426771a80736de8&dis_t=1582978527',
        pic: '//http://mmbiz.qpic.cn/mmbiz_jpg/D97Qdriclbw2GhfKGiadUbfhlFZmCj0LsfKld4qW3qltl5tUU6icjuYlr9hMrZ9sVRRsPJeOazL5CtWAYmU4yMSxQ/0?wx_fmt=jpeg',
        thumbnails: 'thumbnails.jpg',
        type: 'auto',
    },
    subtitle: {
        url: '动态图标宣传视频',
        type: 'webvtt',
        fontSize: '25px',
        bottom: '10%',
        color: '#b7daff',
    },
    danmaku: {
        id: '9E2E3368B56CDBB4',
        api: 'https://api.prprpr.me/dplayer/',
        token: 'tokendemo',
        maximum: 1000,
        user: '吃白饭的休伯利安号',
        bottom: '15%',
        unlimited: true,
    }
});