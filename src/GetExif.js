window.onload=getExif;

function GetExif() {
    function getExif() {    
        var img2 = document.getElementById("image");
        EXIF.getData(img2, function() {
            var allMetaData = EXIF.getAllTags(this);
            var allMetaDataSpan = document.getElementById("allMetaDataSpan");
            allMetaDataSpan.innerHTML = JSON.stringify(allMetaData, null, "\t");
        });

    }

}

export default GetExif;