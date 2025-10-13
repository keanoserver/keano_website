// lang-redirect.js

function setCookie(name, value, days) {
  const d = new Date();
  d.setTime(d.getTime() + (days*24*60*60*1000));
  const expires = "expires=" + d.toUTCString();
  document.cookie = name + "=" + value + ";" + expires + ";path=/";
}

function getCookie(name) {
  const value = "; " + document.cookie;
  const parts = value.split("; " + name + "=");
  if (parts.length === 2) return parts.pop().split(";").shift();
}

document.addEventListener("DOMContentLoaded", function () {
  const savedLang = getCookie("language");
  const userLang = navigator.language || navigator.userLanguage; // e.g. "nl-NL" or "en-US"

  if (savedLang) {
    window.location.href = "/" + savedLang + "/";
  } else {
    if (userLang.startsWith("nl")) {
      setCookie("language", "nl", 365);
      window.location.href = "/nl/";
    } else {
      setCookie("language", "en", 365);
      window.location.href = "/en/";
    }
  }
});
// lang-switcher.js