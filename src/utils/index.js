function getCirlPoint(x0, y0, r, angle) {
  const x1 = x0 + r * Math.cos(angle * Math.PI / 180);
  const y1 = y0 + r * Math.sin(angle * Math.PI / 180);
  return { x: x1, y: y1 };
}

const displayApp = {
  fullScreen() {
    const requestMethod = document.body.requestFullScreen
      || document.body.webkitRequestFullScreen
      || document.body.mozRequestFullScreen
      || document.body.msRequestFullScreen;
    if (requestMethod) {
      requestMethod.call(document.body);
    } else if (typeof window.ActiveXObject !== 'undefined') {
      const wscript = new window.ActiveXObject('WScript.Shell');
      if (wscript !== null) {
        wscript.SendKeys('{F11}');
      }
    }
  },
  exitFullScreen() {
    const exitMethod = document.exitFullscreen
      || document.mozCancelFullScreen
      || document.webkitExitFullscreen
      || document.webkitExitFullscreen;
    if (exitMethod) {
      exitMethod.call(document);
    } else if (typeof window.ActiveXObject !== 'undefined') {
      const wscript = new window.ActiveXObject('WScript.Shell');
      if (wscript !== null) {
        wscript.SendKeys('{F11}');
      }
    }
  },
  isFullScreen() {
    return !!(
      document.fullscreenElement
      || document.msFullscreenElement
      || document.mozFullScreenElement
      || document.webkitFullscreenElement
      || false
    );
  },
};

export { getCirlPoint, displayApp };
