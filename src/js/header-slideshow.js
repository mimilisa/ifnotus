/**********************************/
/* JavaScript and jQuery */
/**********************************/
$(document).ready(function() {
    let imageClassArray = new Array("bee", "tractor", "meadow");
    let imageClassIndex = 1;

    let headerContainer = $("#hero-container");
    let headerOverlay = $("#hero-container .overlay");

    if ((headerContainer !== null) && (headerOverlay !== null)) {
        setInterval(function() {
            headerOverlay.fadeIn(2000, 'swing', function() {
                headerContainer.removeClass();
                headerContainer.addClass(imageClassArray[imageClassIndex]);
                imageClassIndex = (imageClassIndex + 1) % imageClassArray.length;
                headerOverlay.delay(100).fadeOut(2000);
            });
        },
        10000);
    }
});
