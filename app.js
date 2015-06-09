var slideFunction = function(){
    // use JS way to get the div
    // get the total number of images that will rotate later
    var slideShow = document.getElementById("slideshow");
    var imageNum = slideShow.children.length;

    // assign id for later reference
    for(var i = 0; i < imageNum; i++){
        slideShow.children[i].id = "slide-" + i;
    }

    var current = 0;
    var rotataImage = function(){
        // get the current image slide, hide it
        currentSlide = document.getElementById("slide-" + current);
        currentSlide.style.display = "none";
        // increment for next slide, check if current is over 4
        current++;
        if(current > 4){
            current -= 5;
        }
        // show the next slide
        currentSlide = document.getElementById("slide-" + current);
        currentSlide.style.display = "block";
    };

    setInterval(rotataImage, 1000);
};
