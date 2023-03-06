document.addEventListener("DOMContentLoaded", async () => {
  setVersion();
});

const setVersion = () => {
  const version = chrome.runtime.getManifest().version;
  document.getElementById("chrome-ex-ver")!.textContent = `ver ${version}`;
}