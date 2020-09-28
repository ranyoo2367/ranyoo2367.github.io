function copyEmail() {
  var copyText = document.getElementById("email");
  var range = document.createRange();
  range.selectNode(copyText);
  window.getSelection().addRange(range);
  document.execCommand("copy");
  window.getSelection().removeAllRanges();
}
