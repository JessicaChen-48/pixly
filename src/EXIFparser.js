window.onload=getExif;

function getExif(imgState = {}) {
    var img1 = document.getElementById("image");
    EXIF.getData(img1, function() {
        var make = EXIF.getTag(this, "Make");
        var model = EXIF.getTag(this, "Model");
        var makeAndModel = document.getElementById("makeAndModel");
        makeAndModel.innerHTML = `${make} ${model}`;
    });

    var img2 = document.getElementById("image");
    EXIF.getData(img2, function() {
        var allMetaData = EXIF.getAllTags(this);
        var allMetaDataSpan = document.getElementById("allMetaDataSpan");
        allMetaDataSpan.innerHTML = JSON.stringify(allMetaData, null, "\t");
    });
}