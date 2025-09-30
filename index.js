import { arr } from "./database.js";

const videoContainer = document.querySelector(".video-div");
const searchBar = document.querySelector(".search-bar");

function iterateVideos(arr) {
  videoContainer.innerHTML = "";

  for(const db of arr) {

    const videoPreview = document.createElement("div");
    videoPreview.classList.add("video-preview");
    videoContainer.appendChild(videoPreview)

    const thumbnailRow = document.createElement("div");
    thumbnailRow.classList.add("thumbnail-row");
    videoPreview.appendChild(thumbnailRow);

    const thumbnail = document.createElement("img");
    thumbnail.classList.add("thumbnail");
    thumbnail.setAttribute("src", db.thumbnail);
    thumbnailRow.appendChild(thumbnail);
    thumbnail.addEventListener("click", () => {
      window.location = "video.html";
    })

    const videoDuration = document.createElement("div");
    videoDuration.classList.add("video-time");
    videoDuration.innerText = db.duration;
    thumbnailRow.appendChild(videoDuration);


    const videoInfoGrid = document.createElement("div");
    videoInfoGrid.classList.add("video-info-grid");
    videoPreview.appendChild(videoInfoGrid);

    const channelPicture = document.createElement("div");
    channelPicture.classList.add("channel-picture");
    videoInfoGrid.appendChild(channelPicture);

    const profilePicture = document.createElement("img");
    profilePicture.classList.add("profile-picture");
    profilePicture.setAttribute("src", db.channelIcon);
    channelPicture.appendChild(profilePicture);

    const videoInfo = document.createElement("div");
    videoInfo.classList.add("video-info");
    videoInfoGrid.appendChild(videoInfo);

    const videoTitle = document.createElement("p");
    videoTitle.classList.add("video-title");
    videoTitle.innerText = db.videoCaption;
    videoInfo.appendChild(videoTitle);
    

    const channelName = document.createElement("p");
    channelName.classList.add("video-author");
    channelName.innerText = db.channel;
    videoInfo.appendChild(channelName);

    const videoStats = document.createElement("div");
    videoStats.classList.add("video-stats");
    videoStats.innerText = db.views;
    videoInfo.appendChild(videoStats);
  }
}
iterateVideos(arr);

searchBar.addEventListener("input", () => {
  const videoToSearch = searchBar.value.toLowerCase();
  const filteredVideos = arr.filter((video) => video.videoCaption.toLowerCase().includes(videoToSearch) || video.channel.toLowerCase().includes(videoToSearch));
  iterateVideos(filteredVideos);
});


const hamburger = document.querySelector(".hamburger-menu");
const sidebar = document.querySelector(".sidebar");
const overlay = document.querySelector(".sidebar-overlay");

hamburger.addEventListener("click", () => {
  sidebar.classList.toggle("active");
  overlay.classList.toggle("active");
});

overlay.addEventListener("click", () => {
  sidebar.classList.remove("active");
  overlay.classList.remove("active");
});

