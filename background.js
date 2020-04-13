function copyCurrentTabURL() {
  chrome.tabs.getSelected(null, function (tab) {
    copyTextToClipboard(tab.url);
  });
}

function copyCurrentTabTitle() {
  chrome.tabs.getSelected(null, function (tab) {
    copyTextToClipboard(tab.title);
  });
}

function copyTextToClipboard(text) {
  // Source - https://stackoverflow.com/questions/3436102/copy-to-clipboard-in-chrome-extension/59695008#59695008
  var copyFrom = document.createElement("textarea");
  copyFrom.textContent = text;
  document.body.appendChild(copyFrom);
  copyFrom.select();
  document.execCommand("copy");
  copyFrom.blur();
  document.body.removeChild(copyFrom);
}

copyTitle = document.getElementById("copyTitle");
copyURL = document.getElementById("copyURL");
credits = document.getElementById("credits");

copyTitle.addEventListener("click", function () {
  copyCurrentTabTitle();
});

copyURL.addEventListener("click", function () {
  copyCurrentTabURL();
});

credits.addEventListener("click", function () {
  chrome.tabs.create({ active: true, url: this.href });
});
