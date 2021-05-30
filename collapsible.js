var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

var coll = document.getElementsByClassName("collapsible2");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}
document.addEventListener("DOMContentLoaded", function () {
        if ("IntersectionObserver" in window) {
            var iframes = document.querySelectorAll("iframe.lazy");
            var iframeObserver = new IntersectionObserver(function (entries, observer) {
                entries.forEach(function (entry) {
                    if (entry.isIntersecting && entry.target.src.length == 0) {                    
                        entry.target.src = entry.target.dataset.src;
                        iframeObserver.unobserve(entry.target);
                    }
                });
            });

            iframes.forEach(function (iframe) {
                iframeObserver.observe(iframe);
            });
        } else {
            var iframes = document.querySelector('iframe.lazy');

            for (var i = 0; i < iframes.length; i++) {
                if (lazyVids[i].getAttribute('data-src')) {
                    lazyVids[i].setAttribute('src', lazyVids[i].getAttribute('data-src'));
                }
            }
        }
    })