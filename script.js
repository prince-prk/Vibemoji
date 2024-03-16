console.log("Made with love by Prince");
let term = "";

//fetching songs
let totalsong = [];
let temptotalsong = [];

// starting footer songs
let defaultsong = [
  {
    song: 'Sooraj Dooba Hain (From "Roy")',
    img: "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/2d/11/b9/2d11b994-b4fa-19eb-953d-70b472165e95/8903431566911_cover.jpg/100x100bb.jpg",
    audio:
      "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/0b/c0/8c/0bc08c58-274a-67d6-cab5-e5c72d1f1f34/mzaf_2846157791679155895.plus.aac.p.m4a",
  },
  {
    song: 'Mast Magan (From "2 States)',
    img: "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/28/4a/41/284a41a8-2141-2d04-51c7-8daef8f16d00/8903431615541_cover.jpg/100x100bb.jpg",
    audio:
      "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/24/c7/36/24c736c8-8d63-e313-31f9-dfb549c046e3/mzaf_3592883741768558734.plus.aac.p.m4a",
  },
  {
    song: "Gerua",
    img: "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/f5/13/34/f51334f2-5e97-d82b-8fff-c935106d6450/mzm.joekxfas.jpg/100x100bb.jpg",
    audio:
      "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview126/v4/f5/74/c5/f574c51e-7cbf-4ff3-fc5f-404cbd9bae50/mzaf_12220913612769375461.plus.aac.p.m4a",
  },
  {
    song: "Samjhawan",
    img: "https://is1-ssl.mzstatic.com/image/thumb/Music114/v4/c7/75/e0/c775e0e3-797a-0a52-c2df-8784c0fb2a21/886444676540.jpg/100x100bb.jpg",
    audio:
      "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview116/v4/4d/77/b8/4d77b863-1f6a-9b33-11b8-4b4f31f17db2/mzaf_13093273124638510784.plus.aac.p.m4a",
  },
  {
    song: 'Sooraj Dooba Hain (From "Roy")',
    img: "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/78/48/4e/78484e74-5f55-aace-829b-b3b17540f906/8903431648433_cover.jpg/100x100bb.jpg",
    audio:
      "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/83/80/45/83804587-813d-25ef-2ed3-62cb9edb6221/mzaf_6278637584353094413.plus.aac.p.m4a",
  },
  {
    song: "Janam Janam",
    img: "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/f5/13/34/f51334f2-5e97-d82b-8fff-c935106d6450/mzm.joekxfas.jpg/100x100bb.jpg",
    audio:
      "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview116/v4/0d/55/22/0d552241-3dc5-88c8-9912-aeb00056a0b1/mzaf_3746055420904322653.plus.aac.p.m4a",
  },
  {
    song: "Bekhayali (Arijit Singh Version)",
    img: "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/f6/70/84/f6708434-0123-ff36-0ac3-7401e8cf0f94/8902894360807_cover.jpg/100x100bb.jpg",
    audio:
      "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview126/v4/8f/4b/06/8f4b061d-f196-b330-84a4-200931566648/mzaf_5126103461070847350.plus.aac.p.m4a",
  },
  {
    song: "Cosmos",
    img: "https://is1-ssl.mzstatic.com/image/thumb/Video123/v4/10/1e/d4/101ed4c1-d958-7adf-e2af-a76a1f4e0f54/pr_source.jpg/100x100bb.jpg",
    audio:
      "https://video-ssl.itunes.apple.com/itunes-assets/Video116/v4/98/09/61/980961b6-74de-b666-9863-ee7d9ebe1cb1/mzvf_2652702372589770135.640x354.h264lc.U.p.m4v",
  },
  {
    song: "Channa Mereya",
    img: "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/68/f3/c6/68f3c645-1b25-3d44-af6f-ebe4aea3df08/886446201597.jpg/100x100bb.jpg",
    audio:
      "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview113/v4/5c/c2/c9/5cc2c932-e065-e99d-8721-e0eac4e31872/mzaf_17529033236526534532.plus.aac.p.m4a",
  },
  {
    audio:
      "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview116/v4/64/1f/29/641f29a3-b7f7-53e8-d491-7b609cb2df9c/mzaf_14950875121270388946.plus.aac.p.m4a",
    img: "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/f5/13/34/f51334f2-5e97-d82b-8fff-c935106d6450/mzm.joekxfas.jpg/100x100bb.jpg",
    song: "Tukur Tukur",
  },
];

let currsong = { value: 0 };
const play = document.getElementById("play-icon");
const songs = document.getElementById("songs");
const child = songs.children;
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const playsong = document.getElementById("play-song");
const playaudio = document.getElementById("play-audio"),
  // audioSource = document.createElement('source'),
  playimg = document.getElementById("play-img");
var defaultsongs = true;
let loader = document.getElementById("loader");

//starting songs
let spotify = [
  {
    topic: "Vibemoji Playlists",
    data: [
      {
        song: "Today's Top Hits",
        img: "./img/img1.jfif",
        subheading: "Peggu Gou is on top of the Hottest 50! ",
      },
      {
        song: "RapCaviar",
        img: "./img/img2.jfif",
        subheading: "New Songs from &nbsp; Quavo, Polo G and Li...",
      },
      {
        song: "All Out 2010",
        img: "./img/img3.jfif",
        subheading: "The biggest songs of the 2010s.",
      },
      {
        song: "Rock Classic",
        img: "./img/img4.jfif",
        subheading: "Rock legends & epic songs that continue t...",
      },
      {
        song: "Chill Hits",
        img: "./img/img5.jfif",
        subheading: "Kick back to the best new and recent chill...",
      },
    ],
  },
  {
    topic: "Focus",
    data: [
      {
        song: "Peaceful Plane",
        img: "./img/img6.jfif",
        subheading: "Peaceful plano to help you slow down... ",
      },
      {
        song: "Deep Focus",
        img: "./img/img7.jfif",
        subheading: "keep calm and focus &nbsp; with amblent and...",
      },
      {
        song: "Instrumental Study",
        img: "./img/img8.jfif",
        subheading: "Focus with soft study music in the...",
      },
      {
        song: "Focus Flow",
        img: "./img/img9.jfif",
        subheading: "Uptempo Instrumental hip hop beats.",
      },
      {
        song: "Beats to think to",
        img: "./img/img10.jfif",
        subheading: "Focus with deep techno and tech...",
      },
    ],
  },
  {
    topic: "Sound of India",
    data: [
      {
        song: "The Sound of Mu...",
        img: "./img/img11.jfif",
        subheading: "The songs that define, unite and distinguish... ",
      },
      {
        song: "The Sound of Del...",
        img: "./img/img12.jfif",
        subheading: "The songs that define, unite and distinguish...",
      },
      {
        song: "The Sound of Ben...",
        img: "./img/img13.jfif",
        subheading: "The songs that define, unite and distinguish...",
      },
      {
        song: "The Sound of Ch...",
        img: "./img/img14.jfif",
        subheading: "The songs that define, unite and distinguish...",
      },
      {
        song: "The Sound of Hy...",
        img: "./img/img15.jfif",
        subheading: "The songs that define, unite and distinguish...",
      },
    ],
  },
  {
    topic: "Prince Playlists",
    data: [
      {
        song: "Songs of Lord Shiva",
        img: "./img/img16.jfif",
        subheading: "Compilation by Various Artists... ",
      },
      {
        song: "Ganpati Bappa Moreya",
        img: "./img/img17.jfif",
        subheading: "Sweet songs of devotion to praise...",
      },
      {
        song: "Mata Ka Darbaar",
        img: "./img/img18.jfif",
        subheading: "Worship the Goddess of love and devotion...",
      },
      {
        song: "Shri Rama Jai Rama",
        img: "./img/img19.jfif",
        subheading: "Jai Sita Ramayya!",
      },
      {
        song: "Lord Hanuman Devotional Songs",
        img: "./img/img20.jfif",
        subheading: "Album by Kumar Vishu...",
      },
    ],
  },
];
let prevPlayesSong = [];
let searchtermArray = [];
let playlistSong = {};
let playlistSongs = [];
let firstPlaylist = true;
let a = 0;
let playlist = false;
let currPlayname;
let playliston = false;
let numberofPlaylist = 1;
let height = songs.getBoundingClientRect().top;

let scrollUp = () => {
  let lastscrollheight = 0;
  var interval = setInterval(() => {
    const currheight = songs.getBoundingClientRect().top;
    if (lastscrollheight !== 0) {
      if (lastscrollheight > currheight) {
        clearInterval(interval);
        return;
      }
    }
    if (currheight >= height) {
      clearInterval(interval);
      return;
    }
    main.scrollBy(0, -50);
    lastscrollheight = currheight;
  }, 20);
};
function start() {
  document.getElementById("searchTerm").value = "";
  document.getElementById("searchTerm").style.border = "0.1rem solid #3c3c3c";
  defaultsongs = true;
  while (songs.firstChild) {
    songs.removeChild(songs.firstChild);
  }
  spotify.map((topic) => {
    const div = document.createElement("div");
    div.innerHTML = `<div style="font-size:1.7rem;">${topic.topic}</div>`;
    div.setAttribute("id", "spotify");
    // div.style.marginTop="5rem";

    songs.appendChild(div);
    topic.data.map((data) => {
      const article = document.createElement("article"),
        artists = document.createElement("p"),
        song = document.createElement("h4"),
        img = document.createElement("img");

      song.style.marginTop = "0.7rem";

      article.classList.add("top-list");
      article.classList.add("mainSong");
      artists.innerHTML = data.subheading;
      song.innerHTML = data.song;
      img.src = data.img;

      article.appendChild(img);
      article.appendChild(song);
      article.appendChild(artists);
      // prince kosta is great person
      songs.appendChild(article);
      songs.style.justifyContent = "space-evenly";
    });
    scrollUp();
  });
  for (let i = 0; i < child.length; i++) {
    if (i % 6 !== 0) {
      child[i].addEventListener("click", (event) => {
        // defaultsongs=true;
        if (child[i].childNodes[1].innerText)
          term = child[i].childNodes[1].innerText;
        loader.style.display = "unset";
        searchBtnClicked = true;
        updateTerm();
      });
    }
  }
  a = prevPlayesSong.length - 1;
}
start();

//extra info
const comingsoon = document.querySelectorAll(".comingsoon");
comingsoon.forEach((ele) => {
  ele.addEventListener("click", () => {
    songs.innerText = "";
    const temp = document.createElement("div");
    temp.style.textAlign = "center";
    temp.innerText = ele.innerText;
    const div = document.createElement("div");
    div.style.marginTop = "2rem";
    const temp1 = document.createElement("div");
    temp1.innerText = "Coming Soon";
    temp1.style.textAlign = "center";
    temp1.style.color = "grey";
    temp1.style.marginTop = "0.8rem";
    temp1.style.fontSize = "0.8rem";
    if (ele.innerText === "About") {
      temp.innerText = "Made only for the learning purpose not for daily use";
      temp1.innerHTML =
        '<a href="https://open.spotify.com/" class="cursor" style="color: grey;">Inspired by Spotify</a><div class="cursor" style="margin-top:4rem; color:white;">Contact Us</div>';
      const contactus = temp1.lastChild;
      // contactus.marginTop="5rem";
      contactus.addEventListener("click", () => {
        window.open("mailto:princekosta01@gmail.com");
      });
    }

    div.appendChild(temp);
    div.appendChild(temp1);
    div.style.padding = "1rem";
    songs.appendChild(div);
  });
});

function sidebarOpen() {
  const sidebar = document.getElementById("sr");
  sidebar.style.display = "unset";
  sidebar.style.position = "relative";
  sidebar.style.width = "100vw";
  sidebar.style.zIndex = "11";
  sidebar.style.backgroundColor = "black";
  const cross = document.getElementById("cutsidebar");
  cross.style.display = "unset";
  // cross.style.right='0';
  cross.addEventListener(
    "click",
    () => {
      cross, (sidebar.style.display = "none");
    },
    { once: true }
  );
  const closesideBar = document.querySelectorAll(".closesideBar");
  closesideBar.forEach((ele) => {
    ele.addEventListener(
      "click",
      () => {
        cross, (sidebar.style.display = "none");
      },
      { once: true }
    );
  });
}
playimg.style.height = "3.8rem";
playimg.style.width = "3.8rem";
next.style.marginLeft = "-1.1rem";
next.style.marginRight = "1rem";
prev.style.marginLeft = "0.7rem";
prev.style.marginRight = "0.7rem";
playaudio.style.width = "70%";
playaudio.style.height = "0.2rem";
playaudio.style.height = "2rem";
playaudio.style.outline = "none";
play.style.gap = "1.7rem";
play.style.cssText = "padding:1rem ;";

const audio = document.getElementsByTagName("audio");
let n = defaultsong.length;
let searchBtnClicked = false,
  first = true;
let m = 0;
let playlistsongPlayed = [];

function playNextSong(tempSong, curr) {
  if (first) curr.value = curr.value + 1;
  console.log(currsongP.value);
  a = prevPlayesSong.length - 1;
  let k = curr.value;
  console.log(k);
  k = k % tempSong.length;
  curr.value = k;
  first = true;
  if (tempSong[k].song.length >= 15)
    playsong.innerHTML = tempSong[k].song.substring(0, 15) + "...";
  else playsong.innerHTML = tempSong[k].song;
  playaudio.src = tempSong[k].audio;
  playimg.src = tempSong[k].img;
  const audio = document.getElementsByTagName("audio");
  for (let i = 0; i < audio.length; i++) {
    if (audio[k] != audio[i]) audio[i].pause();

    // currsong+=1;
  }
  prevPlayesSong.push({
    song: tempSong[k].song,
    img: tempSong[k].img,
    audio: tempSong[k].audio,
  });
  m++;
  a = prevPlayesSong.length - 1;
  playaudio.play();
}
var prevBtnPressed = false;
let currsongP = { value: 0 };
let j = 0;

function playPrevSong() {
  a -= 1;
  let k = prevPlayesSong.length - 1;
  if (first) {
    k = prevPlayesSong.length - 1;
  } else {
    k = a;
    if (k <= 0) {
      k = 0;
    }
  }
  prevBtnPressed = true;
  first = false;
  if (prevPlayesSong[k].song.length >= 15)
    playsong.innerHTML = prevPlayesSong[k].song.substring(0, 15) + "...";
  else playsong.innerHTML = prevPlayesSong[k].song;
  playaudio.src = prevPlayesSong[k].audio;
  // audioSource.src = totalsong[k].audio;
  playimg.src = prevPlayesSong[k].img;

  for (let i = 0; i < audio.length; i++) {
    if (audio[k] != audio[i]) audio[i].pause();

    // currsong+=1;
  }
  playaudio.play();
}
prev.addEventListener("click", () => {
  if (prevPlayesSong.length >= 1) {
    playPrevSong();
  }
});
let currsongD = { value: 0 };
next.addEventListener(
  "click",
  () => {
    if (searchBtnClicked) {
      currsong.value = 0;
      playNextSong(temptotalsong, currsongD);
    } else if (playliston) {
      currsong.value = 0;
      playNextSong(playlistsongPlayed, currsongP);
    } else {
      playNextSong(defaultsong, currsong);
    }
  },
  true
);

//song ended
playaudio.addEventListener("ended", () => {
  if (searchBtnClicked) {
    currsong.value = 0;
    playNextSong(temptotalsong, currsongD);
  } else if (playliston) {
    currsong.value = 0;
    playNextSong(playlistsongPlayed, currsongP);
  } else playNextSong(defaultsong, currsong);
});
let emojies = [
  "Songs",
  "Romantic Hindi Songs",
  "Most Liked Hindi Songs",
  "Sad Hindi Songs",
  "Bhajan",
];

//emoji-container
const funemoji = () => {
  const emoji_container = document.getElementById("emoji-container");
  const cut = document.getElementById("cross");
  const emoji = document.getElementsByClassName("emoji");
  const page = document.querySelector(".page");
  page.style.display="none";
  emoji_container.style.display = "flex";
  for (let i = 0; i < emoji.length; i++) {
    emoji[i].addEventListener("click", () => {
      term = emojies[i];
      defaultsongs = true;
      emoji_container.style.display = "none";
      page.style.display="flex";
      loader.style.display = "unset";
      updateTerm();
    });
  }
  cut.addEventListener("click", () => {
    emoji_container.style.display = "none";
    page.style.display="flex";
  });
};
const emojiPicker = document.getElementById("emoimg");
emojiPicker.addEventListener("click", funemoji);
emojiPicker.addEventListener("mouseenter", () => {
  const emojiexplainer = document.getElementById("emoji-explainer");
  emojiexplainer.style.display = "unset";
});
emojiPicker.addEventListener("mouseleave", () => {
  const emojiexplainer = document.getElementById("emoji-explainer");
  emojiexplainer.style.display = "none";
});
document.getElementById("cross1").addEventListener("click", () => {
  document.getElementById("emojiPicker").style.display = "none";
});

//footer songs 
const songPlay = (img, song, audio) => {
  if (song.length >= 15) playsong.innerHTML = song.substring(0, 15) + "...";
  else playsong.innerHTML = song;
  let cacheBuster = Date.now();
  playaudio.src = audio + "?timestamp=" + cacheBuster;
  playaudio.controls = true;
  // const icon1 = document.createElement('i');
  //   console.log(playsong.innerText);
  playimg.src = img;
  fetch(playaudio.src).then((response) => {
    if (response.ok) {
      playaudio.play();
      a = prevPlayesSong.length - 1;
      prevPlayesSong.push({
        song: playsong.innerText,
        img: playimg.src,
        audio: playaudio.src,
      });
      a = prevPlayesSong.length - 1;
      // playimg.style.height = "3.8rem";
      // playimg.style.aspectRatio = "1:1";

      // // playaudio.style.width = "70%";
      // // playaudio.style.height = "0.2rem";
      // // playaudio.style.height = "2rem";
      // // playaudio.style.outline = "none";
      // playaudio.add.classList('playaudio');
      // // play.style.gap="1.7rem"
      // play.style.cssText = "padding:1rem ;";
      playaudio.play();
    } else {
      alert("Audio is not Available");
    }
  });

  document.addEventListener(
    "play",
    (event) => {
      const audio = document.getElementsByTagName("audio");

      for (let i = 0; i < audio.length; i++) {
        if (audio[i] != event.target) {
          audio[i].pause();
        }
      }
    },
    true
  );
};

const playPlaylist = (items) => {
  j = parseInt(items[13]);
  j -= 1;

  songs.innerHTML = "";
  songs.style.justifyContent = "start !important";
  // console.log("jai shiv sambhuji maharaj");
  for (let i in playlistSongs[j]) {
    // console.log("Prince");
    // console.log(playlistSongs[j][i]);
    const article = document.createElement("articles"),
      artists = document.createElement("p"),
      song = document.createElement("h4"),
      img = document.createElement("img"),
      audio = document.createElement("audio"),
      audioSource = document.createElement("source");

    // song.style.marginTop="0.7rem";

    article.classList.add("playPlaylist");
    artists.innerHTML = playlistSongs[j][i].name;
    song.innerHTML = playlistSongs[j][i].song;
    img.src = playlistSongs[j][i].img;
    audioSource.src = playlistSongs[j][i].audio;
    audio.controls = true;

    article.appendChild(img);
    article.appendChild(song);
    article.appendChild(artists);

    audio.appendChild(audioSource);
    article.appendChild(audio);
    // audio.style.display="unset";
    // prince kosta is great person
    // console.log(article);
    songs.appendChild(article);
  }
  for (let i = 0; i < child.length; i++) {
    child[i].addEventListener("click", (event) => {
      currsongP.value = i;

      //songPlay(img.src,song.innerText,audioSource.src);
      songPlay(
        child[i].childNodes[0].getAttribute("src"),
        child[i].children[1].innerHTML,
        child[i].childNodes[3].childNodes[0].getAttribute("src")
      );
      playliston = true;
    });
  }
  // article.addEventListener('click',()=>{
  // })
};
// playPlaylist();
async function playlistDiv(item) {
  const pldiv = Array.from(document.getElementsByClassName("pldiv"));

  pldiv.map((it) => {
    it.addEventListener("click", () => {
      playlistsongPlayed = [];
      // console.log(child);

      playPlaylist(it.innerText);

      for (let i = 0; i < child.length; i++) {
        if (child[0].childNodes[1].innerText) {
          playlistsongPlayed.push({
            img: child[i].childNodes[0].getAttribute("src"),
            song: child[i].childNodes[1].innerText,
            audio: child[i].childNodes[3].childNodes[0].getAttribute("src"),
          });
        }
      }
    });
  });
}
let searchterm = false;
function emptyPlaylist() {
  const temp = document.getElementById("playlist");
  const div1 = document.createElement("div");
  const div2 = document.createElement("div");
  div1.innerText = "Create your first playlist";
  div2.innerText = "Its easy, we'll help you";
  const btn = document.createElement("button");
  btn.innerText = "Create playlist";
  div1.setAttribute("id", "plus1");
  div2.setAttribute("id", "p2");
  btn.setAttribute("id", "but");
  btn.classList.add("but", "cursor");
  temp.appendChild(div1);
  temp.appendChild(div2);
  temp.appendChild(btn);
}
if (playlistSongs.length == 0) {
  emptyPlaylist();
}

//focusing on playlist
document.getElementById("left1").addEventListener("click", () => {
  const temp = document.getElementById("playlist");
  temp.style.backgroundColor = "#4a4a4a";
  setTimeout(() => {
    temp.style.backgroundColor = "#242323";
  }, 2000);
});
let currterm = 0;
let enterkeyPress = false;
let updateTerm = () => {
  if (defaultsongs != true && searchterm !== true && enterkeyPress !== true)
    term = document.getElementById("searchTerm").value;
  if (!term || term === "") {
    alert("Please enter a seach term");
  } else {
    const url = `https://itunes.apple.com/search?term=${term}`;
    term = term.toUpperCase();
    const songContainer = document.getElementById("songs");
    document.getElementById("searchTerm").blur();
    while (songContainer.firstChild) {
      songContainer.removeChild(songContainer.firstChild);
    }
    enterkeyPress = false;

    fetch(url)
      .then((Response) => Response.json())
      .then((data) => {
        if (searchterm === false) {
          searchtermArray.push(term);
          currterm = searchtermArray.length - 1;
        } else {
          searchterm = false;
        }

        const artists = data.results;
        //        IMP
        // if (defaultsongs == true) {
        //     const mainHeading = document.createElement("div");
        //     mainHeading.innerHTML = `<div style="font-size:1.7rem;">${term}</div>`;
        //     songContainer.appendChild(mainHeading);
        //     mainHeading.setAttribute("id", "spotify");
        // }
        // div.style.marginTop="5rem";
        if (prevBtnPressed) {
          if (prevPlayesSong.length - 1 != a) {
            console.log(prevPlayesSong.length);
            prevPlayesSong.splice(a + 1);
            console.log(prevPlayesSong.length);
          }
        }
        prevBtnPressed = false;
        // wrong
        temptotalsong = totalsong;
        totalsong = [];
        first = true;
        return artists.map((result) => {
          const article = document.createElement("article"),
            artists = document.createElement("p"),
            song = document.createElement("h4"),
            img = document.createElement("img"),
            audio = document.createElement("audio"),
            audioSource = document.createElement("source");

          song.style.marginTop = "0.7rem";

          article.classList.add("top-list");
          article.classList.add("temp");
          if (result.artistName.length < 20)
            artists.innerHTML = result.artistName;
          else artists.innerText = result.artistName.substring(0, 19) + "...";
          if (result.trackName) {
            if (result.trackName.length < 35) song.innerHTML = result.trackName;
            else song.innerText = result.trackName.substring(0, 34) + "...";
          } else {
            song.innerHTML = result.trackName;
          }
          img.src = result.artworkUrl100;
          audioSource.src = result.previewUrl;
          audio.controls = true;

          article.appendChild(img);
          article.appendChild(song);
          article.appendChild(artists);

          article.appendChild(audio);
          audio.appendChild(audioSource);
          // prince kosta is great person

          songContainer.appendChild(article);
          const main = document.getElementById("songs");
          main.style.display = "flex";
          main.style.flex = "wrap !important";
          songContainer.style.display = "flex";
          songContainer.style.flex = "wrap";
          songContainer.style.justifyContent = "space-evenly";

          totalsong.push({
            song: result.trackName,
            img: result.artworkUrl100,
            audio: result.previewUrl,
          });
        });
      })
      .then(() => {
        let firstTime = true;
        scrollUp();
        for (let i = 0; i < child.length; i++) {
          child[i].addEventListener(
            "click",
            (event) => {
              if (firstTime) temptotalsong = totalsong;

              // while (play.firstChild) {
              //     play.removeChild(play.firstChild);
              // }

              currsongD.value = i;
              if (playlist != true) {
                playliston = false;
                // let cacheBuster=Date.now();

                // console.log(i);
                // const audio = document.getElementsByTagName('audio');
                // play.innerHTML="";
                songPlay(
                  child[i].childNodes[0].getAttribute("src"),
                  child[i].children[1].innerHTML,
                  child[i].childNodes[3].childNodes[0].getAttribute("src")
                );
              } else {
                create_playlist.innerText = "Save";
                const temp = document.getElementById("playlist");
                if (numberofPlaylist == 1 && firstTime) {
                  while (temp.firstChild) {
                    temp.removeChild(temp.firstChild);
                  }
                }
                if (firstTime) {
                  const div = document.createElement("div");
                  const div1 = document.createElement("div");
                  div.innerText = ` My Playlist @${numberofPlaylist}`;

                  const btn1 = document.createElement("button");
                  btn1.innerText = "Save";
                  btn1.setAttribute("class", "but");
                  btn1.style.width = "5rem";
                  const btn2 = document.createElement("button");
                  btn2.innerText = "Cancel";
                  btn2.style.width = "5rem";
                  btn2.setAttribute("class", "but");
                  btn2.style.marginLeft = "0.8rem";
                  div.style.cursor = "pointer";
                  div1.appendChild(div);
                  div1.appendChild(btn1);
                  div1.appendChild(btn2);
                  div.setAttribute("class", "pldiv");
                  div1.style.padding = "0.8rem";
                  div1.style.backgroundColor = "#363434";
                  div1.style.borderRadius = "10px";
                  temp.appendChild(div1);
                  btn2.addEventListener("click", () => {
                    playlistSong = {};
                    playlist = false;
                    temp.removeChild(div1);
                    start();
                    if (playlistSongs.length == 0) emptyPlaylist();
                  });
                  btn1.addEventListener("click", () => {
                    searchBtnClicked = false;
                    if (Object.keys(playlistSong).length !== 0) {
                      playlistSongs.push(playlistSong);

                      playlistSong = {};
                      playlist = false;
                      div1.removeChild(btn1);
                      div1.removeChild(btn2);
                      div1.setAttribute("id", "currPlaylist");
                      numberofPlaylist += 1;
                      playlistDiv(div.innerText);
                      start();
                      const a = document.getElementById("temp");
                    } else {
                      alert("Select atleast one song");
                    }
                  });
                }
              }

              if (playlist != true) {
              } else {
                if (child[i].children[1].innerText in playlistSong) {
                  child[i].style.backgroundColor = "#181616";
                  delete playlistSong[child[i].children[1].innerText];
                } else {
                  const cacheBuster = Date.now();
                  console.log(child[i].children[1].innerHTML);
                  if (firstTime) currPlayname = child[i].children[1].innerHTML;
                  playlistSong[child[i].children[1].innerText] = {
                    img: child[i].childNodes[0].getAttribute("src"),
                    song: child[i].children[1].innerHTML,
                    audio:
                      child[i].childNodes[3].childNodes[0].getAttribute("src") +
                      "?timestamp=" +
                      cacheBuster,
                    name: child[i].children[2].innerText,
                  };
                  // playlistSong.push({
                  //     img:playimg.src,
                  //     song:playsong.innerHTML,
                  //     audio:playaudio.src,
                  //     name:child[i].children[2].innerHTML
                  // })
                  child[i].style.backgroundColor = "rgb(64,64,64)";
                }
              }
              firstTime = false;
            },
            // else{
            //     alert("Audio is not Available");
            //     }
            // })
            // }
            true
          );
        }
      })
      .then(() => {
        if (child.length === 0) {
          window.alert("Enter full name or songs not found");
          searchBtnClicked = false;
          start();
        }
        loader.style.display = "none";
      });
  }
  document.getElementById("searchTerm").value = "";
};

//prev page btn
document.getElementById("prevbtn").addEventListener("click", () => {
  if (
    currterm <= 0 ||
    searchtermArray.length == 0 ||
    searchtermArray.length == 1
  ) {
    start();
    currterm = 0;
  } else {
    // console.log("nikal")
    searchterm = true;
    currterm = currterm - 1;
    term = searchtermArray[currterm];
    updateTerm();
  }
});

document.getElementById("nextbtn").addEventListener("click", () => {
  if (searchtermArray.length == 0 || searchtermArray.length == 1) {
    start();
    currterm = 0;
  } else {
    searchterm = true;
    currterm += 1;
    currterm = currterm % searchtermArray.length;
    term = searchtermArray[currterm];
    updateTerm();
  }
});

document.getElementById("searchTerm").addEventListener("keydown", (event) => {
  if (event.keyCode === 13) {
    loader.style.display = "unset";
    enterkeyPress = true;
    searchBtnClicked = true;
    term = document.getElementById("searchTerm").value;
    updateTerm();
  }
});


const searchBtn = document.getElementById("searchTermBtn");
const smallSearch = document.getElementById("search");
smallSearch.addEventListener("click", () => {
  const searchTerm = document.getElementById("searchTerm");
  searchTerm.style.border = "0.2rem solid white";
  setTimeout(() => {
    searchTerm.style.border = "0.1rem solid #3c3c3c";
  }, 2000);
});
// function smallSearchClicked(){
// }
searchBtn.addEventListener("click", () => {
  searchBtnClicked = true;
  defaultsongs = false;
  loader.style.display = "unset";
  updateTerm();
});

const heading = document.createElement("h4");
heading.innerText = document.getElementById("searchTerm").value;
songs.appendChild(heading);
// let arry = Array.from(songs);

const playlistsave = () => {
  while (songs.firstChild) {
    songs.removeChild(songs.firstChild);
  }
  playlist = true;
  const div = document.createElement("h2");
  div.innerText = "Search Songs";
  div.style.marginTop = "2rem";
  document.getElementById("searchTerm").style.border = "0.2rem solid white";
  document.getElementById("searchTerm").addEventListener(
    "click",
    () => {
      searchTerm.style.border = "0.1rem solid #3c3c3c";
    },
    { once: true }
  );
  songs.appendChild(div);
};
const create_playlist = document.getElementById("but");
create_playlist.addEventListener("click", playlistsave);
const plus = document.getElementById("plus");
plus.addEventListener("click", playlistsave);
