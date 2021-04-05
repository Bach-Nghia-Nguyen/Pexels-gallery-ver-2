// const API_KEY = "563492ad6f91700001000001c2f2503f84dd4f78bfd1c5e0d6ce9653";
const API_KEY = "563492ad6f917000010000017e95324e49094d6d84bbce34fa6d31da";
// let url = "https://api.pexels.com/v1/search?query=computer&page=4&per_page=10";//

let images = [];
let videos = [];
let endpoint = "curated";
const urlOptions = {
  query: "",
  page: 1,
};

let endpointVideo = "popular";
const urlOptionsVideo = {
  query: "",
  page: 1,
};

const getURL = (urlOptions) => {
  let url = Object.keys(urlOptions).reduce((url, option) => {
    if (urlOptions[option]) {
      url += `${option}=${urlOptions[option]}&`;
    }
    return url;
  }, `https://api.pexels.com/v1/${endpoint}?`);
  url += `per_page=15`;
  return url;
};

const getVURL = (urlOptionsVideo) => {
  let url = Object.keys(urlOptionsVideo).reduce((url, option) => {
    if (urlOptionsVideo[option]) {
      url += `${option}=${urlOptionsVideo[option]}&`;
    }
    return url;
  }, `https://api.pexels.com/videos/${endpointVideo}?`);
  url += `per_page=10`;
  return url;
};

const getVideo = async (loadMoreVideo = false) => {
  if (!loadMoreVideo) {
    videos = [];
  }
  let baseURL = getVURL(urlOptionsVideo);
  const response = await fetch(baseURL, {
    method: "GET",
    headers: {
      Accept: "application/json",
      Authorization: API_KEY,
    },
  });
  const dataVideo = await response.json();
  videos = [...videos, ...dataVideo.videos];
  renderDataVideo(videos);
};

const getImage = async (loadMoreImage = false) => {
  if (!loadMoreImage) {
    images = [];
  }
  let baseURL = getURL(urlOptions);
  const response = await fetch(baseURL, {
    method: "GET",
    headers: {
      Accept: "application/json",
      Authorization: API_KEY,
    },
  });
  const data = await response.json();
  images = [...images, ...data.photos];
  renderDataImage(images);
};

// RENDER ------------------->//
function renderDataVideo(videos) {
  const listvideoHTML = videos
    .map((video) => {
      return `
      <a class="video-item" target="_blank" href="${video.video_files[3].link}">
        <img class="videoThumb" src="${video.image}" width="300">
        <h3>${video.user.name}</h3>
      </a>
      `;
    })
    .join("");
  document.getElementById("getVD").innerHTML = listvideoHTML;
}

function renderDataImage(images) {
  const listImagesHTML = images
    .map((image) => {
      return `
      <a class="image-item" target="_blank" href="${image.url}">
        <img src="${image.src.large2x}">
        <h3>${image.photographer}</h3>
      </a>
      `;
    })
    .join("");
  document.getElementById("getImg").innerHTML = listImagesHTML;
}

// CLICK FUNCTION -------->///
const handleSearchClick = () => {
  let input = document.getElementById("search").value;
  endpoint = "search";
  urlOptions.page = 2;
  urlOptions.query = input;
  endpointVideo = "search";
  urlOptionsVideo.page = 2;
  urlOptionsVideo.query = input;
  getVideo();
  getImage();
};

const handleLoadMoreClick = () => {
  urlOptions.page++;
  getImage(true);
};

const handleLoadMoreVDClick = () => {
  urlOptionsVideo.page++;
  getVideo(true);
};

const handleBusinessTrendingSearch = () => {
  let trendingTopic = document.querySelector(".search-trending").innerText;
  endpoint = "search";
  urlOptions.page = 2;
  urlOptions.query = trendingTopic;
  console.log(trendingTopic);
  getImage();
};

const handleTechnologyTrendingSearch = () => {
  let trendingTopic = document.querySelector(".search-trending-technology")
    .innerText;
  endpoint = "search";
  urlOptions.page = 2;
  urlOptions.query = trendingTopic;
  console.log(trendingTopic);
  getImage();
};

const handleNatureTrendingSearch = () => {
  let trendingTopic = document.querySelector(".search-trending-nature")
    .innerText;
  endpoint = "search";
  urlOptions.page = 2;
  urlOptions.query = trendingTopic;
  console.log(trendingTopic);
  getImage();
};

const handleFamilyTrendingSearch = () => {
  let trendingTopic = document.querySelector(".search-trending-family")
    .innerText;
  endpoint = "search";
  urlOptions.page = 2;
  urlOptions.query = trendingTopic;
  console.log(trendingTopic);
  getImage();
};

const handleHealthTrendingSearch = () => {
  let trendingTopic = document.querySelector(".search-trending-health")
    .innerText;
  endpoint = "search";
  urlOptions.page = 2;
  urlOptions.query = trendingTopic;
  console.log(trendingTopic);
  getImage();
};

const handleWallpaperTrendingSearch = () => {
  let trendingTopic = document.querySelector(".search-trending-wallpaper")
    .innerText;
  endpoint = "search";
  urlOptions.page = 2;
  urlOptions.query = trendingTopic;
  console.log(trendingTopic);
  getImage();
};

const handleLoveTrendingSearch = () => {
  let trendingTopic = document.querySelector(".search-trending-love").innerText;
  endpoint = "search";
  urlOptions.page = 2;
  urlOptions.query = trendingTopic;
  console.log(trendingTopic);
  getImage();
};

const handleFoodTrendingSearch = () => {
  let trendingTopic = document.querySelector(".search-trending-food").innerText;
  endpoint = "search";
  urlOptions.page = 2;
  urlOptions.query = trendingTopic;
  console.log(trendingTopic);
  getImage();
};
// RUN ------->////
getImage();
getVideo();

// function onclickinsearch() {
//   document.getElementById("search-more-bottom").innerHTML = `
//   <div class="nav-search-bottom">
//   <div class="motherbox1">
//   <button class="btn btn-outline-light" type="submit" id="button-topic">City</button>
//   <button class="btn btn-outline-light" type="submit" id="button-topic">Holi</button>
//   <button class="btn btn-outline-light" type="submit" id="button-topic">Pretty</button>
//   </div>
//   <div class="motherbox2">
//   <button class="btn btn-outline-light" type="submit" id="button-topic">Natural</button>
//   <button class="btn btn-outline-light" type="submit" id="button-topic">Plant</button>
//   <button class="btn btn-outline-light" type="submit" id="button-topic">People</button>
//   </div>
//   <div class="motherbox3">
//   <button class="btn btn-outline-light" type="submit" id="button-topic">Animal</button>
//   <button class="btn btn-outline-light" type="submit" id="button-topic">Special</button>
//   <button class="btn btn-outline-light" type="submit" id="button-topic">Miracle</button>
//   </div>
//   <div class="motherbox4">
//   <button class="btn btn-outline-light" type="submit" id="button-topic">Ocean</button>
//   <button class="btn btn-outline-light" type="submit" id="button-topic">House</button>
//   <button class="btn btn-outline-light" type="submit" id="button-topic">Environment</button>
//   </div>
//   </div>
//    `;
//   document.getElementById("search-more-bottom").focus;
// }
