const bodyScrollLock = require("body-scroll-lock");
const enableBodyScroll = bodyScrollLock.enableBodyScroll;
const disableBodyScroll = bodyScrollLock.disableBodyScroll;

const scrollLock = {
  target: document.querySelector("body"),
  disableBodyScroll: function () {
    const bodyWidth = document.body.clientWidth;
    this.target.style.width = bodyWidth + "px";
    disableBodyScroll(this.target);
  },
  enableBodyScrolling: function () {
    enableBodyScroll(this.target);
  },
  removeBodyFixedWidth: function () {
    this.target.style.width = "";
  },
};

export default scrollLock;
