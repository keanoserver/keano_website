function loadGoogleAnalytics() {
  const script = document.createElement('script');
  script.async = true;
  script.src = "https://www.googletagmanager.com/gtag/js?id=G-GLBZSCC0QJ";
  document.head.appendChild(script);

  script.onload = function() {
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    window.gtag = gtag;
    gtag('js', new Date());
    gtag('config', 'G-GLBZSCC0QJ');
  };
}

// Handle consent
const banner = document.getElementById("cookie-banner");
const consent = localStorage.getItem("cookies-consent");

if(consent === "accepted") {
  loadGoogleAnalytics();
  banner.style.display = "none";
} else if(consent === "rejected") {
  banner.style.display = "none";
}

document.getElementById("accept-cookies").onclick = function() {
  localStorage.setItem("cookies-consent", "accepted");
  loadGoogleAnalytics();
  banner.style.display = "none";
};

document.getElementById("reject-cookies").onclick = function() {
  localStorage.setItem("cookies-consent", "rejected");
  banner.style.display = "none";
};
