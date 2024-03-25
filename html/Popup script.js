document.getElementById("usps button").addEventListener("click", function () {
    browser.tabs.create({ url: "/html/domestic.html" });
  });

  document.getElementById("Source code").addEventListener("click", function () {
    browser.tabs.create({ url: "https://github.com/Tre-brock/Replacements-and-workarounds-for-nonfree-js/archive/refs/heads/main.zip" });
  });

  document.getElementById("Install libreJS").addEventListener("click", function () {
    browser.tabs.create({ url: "https://ftp.gnu.org/gnu/librejs/librejs-7.21.1.xpi" });
  });

  