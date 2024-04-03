const browserLang = navigator.language;
if(browserLang.startsWith("pt")) {
    window.location.href="/br";
} else {
    window.location.href="/en";
} 