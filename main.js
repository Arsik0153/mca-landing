import "normalize.css";
import "./scss/global.scss";
import "./scss/style.scss";

// replace all img.img-svg with svg elements
document.querySelectorAll("img.img-svg").forEach(function (img) {
    var imgID = img.getAttribute("id");
    var imgClass = img.getAttribute("class");
    var imgURL = img.getAttribute("src");
    fetch(imgURL)
        .then(function (response) {
            return response.text();
        })
        .then(function (data) {
            var parser = new DOMParser();
            var xmlDoc = parser.parseFromString(data, "text/xml");
            var $svg = xmlDoc.querySelector("svg");
            if (imgID) {
                $svg.setAttribute("id", imgID);
            }
            if (imgClass) {
                $svg.setAttribute("class", imgClass + " replaced-svg");
            }
            $svg.removeAttribute("xmlns:a");
            img.parentNode.replaceChild($svg, img);
        });
});
