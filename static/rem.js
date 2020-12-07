; (function () {
  let doc = document.documentElement;
  let resize = 'onorientationchange' in window ? 'orientationchange' : 'resize';
  let resizeEvent = function () {
    // 获取设备宽度
    var WIDTH = doc.clientWidth;
    // 设置宽度
    doc.style.fontSize = 100 * WIDTH / 750 + "px";
  };
  window.addEventListener('DOMContentLoaded', resizeEvent);
  window.addEventListener(resize, resizeEvent);
}());
