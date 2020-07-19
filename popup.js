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
  navigator.clipboard.writeText(text)
  .then(()=>console.log(`${text} :copied to clipboard`))
  .catch(err=>console.log(err));
}

copyTitle = document.getElementById("copyTitle");
copyURL = document.getElementById("copyURL");


copyTitle.addEventListener("click", function () {
  copyCurrentTabTitle();
});

copyURL.addEventListener("click", function () {
  copyCurrentTabURL();
});


