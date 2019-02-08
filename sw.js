/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.0.0-rc.0/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404/index.html",
    "revision": "d6828577aea20421c5fe1f1bda1565e5"
  },
  {
    "url": "about/index.html",
    "revision": "a16aff07be0bb640249e3e44bd0751b9"
  },
  {
    "url": "assets/fonts/font-awesome/css/font-awesome.css",
    "revision": "4bb3dd721c4652feee0953261d329710"
  },
  {
    "url": "assets/fonts/font-awesome/css/font-awesome.min.css",
    "revision": "a0e784c4ca94c271b0338dfb02055be6"
  },
  {
    "url": "assets/images/favicon.ico",
    "revision": "527a4118d4e0c8c92d314b7dd7e4f161"
  },
  {
    "url": "assets/images/ic_votre-ami144.png",
    "revision": "43d4855472d9f95a746c502698337f6e"
  },
  {
    "url": "assets/images/ic_votre-ami192.png",
    "revision": "ac6b6649cbfb43565b5f07eb45f42c1f"
  },
  {
    "url": "assets/images/ic_votre-ami48.png",
    "revision": "1cc7d9d0d32c6e1b3a4a57138e05815e"
  },
  {
    "url": "assets/images/ic_votre-ami512.png",
    "revision": "a731036668975c3d3e8acc062f58d7b8"
  },
  {
    "url": "assets/images/ic_votre-ami72.png",
    "revision": "cc125d02f4c17a22da89b6d2c8f3aa1f"
  },
  {
    "url": "assets/images/ic_votre-ami96.png",
    "revision": "5047a8d703a8d7c578c6ae34aadf69e2"
  },
  {
    "url": "assets/images/jekyll-poster.png",
    "revision": "eda8db67f3bb8628247680dbab0f5595"
  },
  {
    "url": "assets/images/posts/jekyll-poster.png",
    "revision": "eda8db67f3bb8628247680dbab0f5595"
  },
  {
    "url": "assets/js/main.js",
    "revision": "fb584d9131ba5947cab7c9b0d0f0cc3a"
  },
  {
    "url": "assets/js/min/main-min.js",
    "revision": "ec67b75da08d5be81745a318de570e0f"
  },
  {
    "url": "assets/js/vendor/jquery-3.1.1.min.js",
    "revision": "5b5a269bd363e0886c17d855c2aab241"
  },
  {
    "url": "assets/main.css",
    "revision": "d1c64cfd220fa0f136f033995e84fb2d"
  },
  {
    "url": "assets/style.css",
    "revision": "668308b1254b87368058f1d280fc760d"
  },
  {
    "url": "index.html",
    "revision": "cf41f101bd65ace95888278cdc51328f"
  },
  {
    "url": "live/index.html",
    "revision": "99d85eee34d4a30c4ece0f940f08e0f4"
  },
  {
    "url": "manifest.json",
    "revision": "988121760789a63c16b3ee6f671a22fa"
  },
  {
    "url": "proba/index.html",
    "revision": "deca541152cf70d70aaaaa244f4d920a"
  },
  {
    "url": "prosto-masha-1/index.html",
    "revision": "c81d4fe2f2e96fc930e992dc93390455"
  },
  {
    "url": "prosto-masha-3.1/index.html",
    "revision": "79de954a2ee11367fb8d30944b32fd33"
  },
  {
    "url": "prosto-masha-4.1/index.html",
    "revision": "3709b1ce20af52431637eed94d3907bd"
  },
  {
    "url": "prosto-masha-4/index.html",
    "revision": "ae81a532a4e8b5acb1db433974c80f47"
  },
  {
    "url": "prosto-masha-5/index.html",
    "revision": "6e47454e504b62b911e054fb81249f06"
  },
  {
    "url": "psrosto-masha-0/index.html",
    "revision": "af89f0869993a485bc9de770fea21a74"
  },
  {
    "url": "psrosto-masha-2/index.html",
    "revision": "01fa8ca4642f537419abdf312b8dfee2"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
