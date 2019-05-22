const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    // mini: true,
    autoplay: false,
    audio: [
      {
        name: "像鱼",
        artist: '王贰浪',
        url: 'http://www.ytmp3.cn/down/56782.mp3',
        cover: 'http://p1.music.126.net/ejEPGN6ulPSgCBXGq7dgqw==/109951163720047382.jpg?param=130y130',
      },
      {
        name: "天空之城",
        artist: '李志',
        url: 'http://www.ytmp3.cn/down/47726.mp3',
        cover: 'http://p2.music.126.net/xIonZ9I4YtnljJmQzv32hA==/109951163214060584.jpg?param=130y130',
      },
      {
        name: "借我",
        artist: '谢春花',
        url: 'http://www.ytmp3.cn/down/34511.mp3',
        cover: 'http://p2.music.126.net/Eg4cy0_HIF2nrX2gMCsWkQ==/17967119509636556.jpg?param=130y130',
      }
    ]
});
