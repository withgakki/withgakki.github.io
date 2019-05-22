const ap = new APlayer({
    container: document.getElementById('aplayer'),
    // fixed: true,
    mini: true,
    autoplay: false,
    audio: [
      {
        name: "像鱼",
        artist: '王贰浪',
        url: 'http://www.ytmp3.cn/down/56782.mp3',
        cover: 'http://p1.music.126.net/ejEPGN6ulPSgCBXGq7dgqw==/109951163720047382.jpg?param=130y130',
      }
    ]
});