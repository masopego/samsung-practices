"use strict";

const featuredVideo = document.querySelector("#featuredVideo");

const handleLoadFiles = (ev) => {
  const videoBox = document.querySelector(".videoContainer-js");
  const videoUpload = ev.target.files[0];
  const videoType = "video.*";

  if (!videoUpload.type.match(videoType)) {
    videoBox.innerHTML = `<p class="videoMessage">
        El archivo seleccionado no es un vídeo. <span>Por favor, escoge otro archivo
        en formato vídeo.</span>
      </p>`;
  } else {
    const reader = new FileReader();
    reader.addEventListener("load", (ev) => {
      const result = ev.target.result;
      videoBox.innerHTML = `<video src=${result} id="video" class="video" controls>
          Lo sentimos, pero tu vídeo no ha podido reproducirse
        </video>`;
    });
    reader.addEventListener("progress", (ev) => {
      if (ev.loaded && ev.total) {
        const percent = (ev.loaded / ev.total) * 100;
        videoBox.innerHTML = `<p class="videoMessage">Cargando: <span>${Math.round(
          percent
        )}</span></p>`;
      }
    });
    reader.readAsDataURL(videoUpload);
    activeButtons();
  }
};

const activeButtons = () => {
  document.querySelector("#play").addEventListener("click", () => {
    document.querySelector("#video").play();
  });

  document.querySelector("#pause").addEventListener("click", () => {
    document.querySelector("#video").pause();
  });

  document.querySelector("#upVol").addEventListener("click", () => {
    const upVol = document.querySelector("#video");
    upVol.volume < 1 ? (upVol.volume += 0.1) : upVol.volume;
  });
  document.querySelector("#lowVol").addEventListener("click", () => {
    const lowVol = document.querySelector("#video");
    lowVol.volume >= 0.1 ? (lowVol.volume -= 0.1) : lowVol.volume;
  });
};

featuredVideo.addEventListener("change", handleLoadFiles);
