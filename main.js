function selectImage() {
    var img = document.getElementById("image");
    var imgurl = document.getElementById("url");
    var imgurlval = imgurl.value;
    if (imgurlval.length !== 0) {
        img.src = imgurlval;
    }
    document.getElementById("url").value = null;
}

for (var i = 0; i <= inputrange.length - 1; i++) {
    inputrange.addEventListener("input", editImage);
}

function editImage() {
    var image = document.getElementById("image");
    var gs = document.getElementById("gs");
    var br = document.getElementById("br");
    var hr = document.getElementById("hr");
    var sa = document.getElementById("sa");

    var gsval = gs.value;
    var brval = br.value;
    var hrval = hr.value;
    var saval = sa.value;

    image.style.filter = 'grayscale(' + gsval + '%) blur(' + brval + 'px) hue-rotate(' + hrval + 'deg) sepia(' + saval + '%)';
}

function hide() {
    var sec = document.getElementById("sec");
    var SEC = document.getElementById("SEC");
    sec.innerHTML = "";
    SEC.innerHTML = "";
    document.body.style.backgroundImage = "url(null)";
}
