const ap = new APlayer({
    container: document.getElementById('aplayer'),
    // fixed: true,
    // mini: true,
    listFolded: true,
    autoplay: false,
    audio: [
      {
        name: "Canon",
        artist: 'Trace Bundy',
        url: 'http://sc1.111ttt.cn:8282/2015/1/02m/20/95202025178.m4a?tflag=1546606800&pin=97bb2268ae26c20fe093fd5b0f04be80#.mp3',
        cover: 'http://p2.music.126.net/heAYqigsLfLnv0Dd3yxHCA==/6647647302511150.jpg?param=130y130',
      },
      {
        name: "像鱼",
        artist: '王贰浪',
        url: 'http://music.163.com/song/media/outer/url?id=1331819951.mp3',
        cover: 'http://p1.music.126.net/ejEPGN6ulPSgCBXGq7dgqw==/109951163720047382.jpg?param=130y130',
      },
      {
        name: "Shoot to Thrill",
        artist: 'AC/DC',
        url: 'http://music.163.com/song/media/outer/url?id=3879500.mp3',
        cover: 'http://p3.music.126.net/9fddDm8I82c3wAXXiqo60A==/347445674377258.jpg?param=640y300',
      },
      {
        name: "借我",
        artist: '谢春花',
        url: 'http://music.163.com/song/media/outer/url?id=408814900.mp3',
        cover: 'http://p2.music.126.net/Eg4cy0_HIF2nrX2gMCsWkQ==/17967119509636556.jpg?param=130y130',
      }
    ]
});
