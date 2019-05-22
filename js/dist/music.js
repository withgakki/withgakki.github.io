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
        name: "消愁",
        artist: '毛不易',
        url: 'http://www.ytmp3.cn/down/48860.mp3',
        cover: 'http://p1.music.126.net/vmCcDvD1H04e9gm97xsCqg==/109951163350929740.jpg?param=130y130',
      },
      {
        name: "借我",
        artist: '谢春花',
        url: 'http://www.ytmp3.cn/down/34511.mp3',
        cover: 'http://p2.music.126.net/Eg4cy0_HIF2nrX2gMCsWkQ==/17967119509636556.jpg?param=130y130',
      }
    ]
});
