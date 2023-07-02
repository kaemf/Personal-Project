var img = document.querySelectorAll('.img'), modalIm = document.getElementById('modal-img'), overlay = document.getElementById('overlay'), modal = document.getElementById('modal'), closeButton = document.getElementById('closeButton');
var active = false, hovered = false, double = false, ndouble = false;
img.forEach(function (img) {
    img.addEventListener('click', function (event) {
        var currImg = event.target;
        // if (!active){
        //     img.style.transform = 'scale(2)';
        //     img.style.zIndex = '2';
        //     active = true;
        //     ndouble = true;
        // }
        if (!active) {
            overlay.style.visibility = 'visible';
            overlay.style.opacity = '1';
            overlay.style.width = '100%';
            overlay.style.height = '100%';
            modal.style.transform = 'scale(1)';
            modalIm.src = currImg.src;
            active = true;
            document.body.style.overflow = 'hidden';
        }
        // else if (active && ndouble && !double){
        //     img.style.transform = 'scale(2.3)';
        //     ndouble = false;
        //     double = true;
        // }
        // else if (active && double && !ndouble){
        //     img.style.transform = 'scale(2)';
        //     double = false;
        //     ndouble = true;
        // }
    });
    img.addEventListener('mouseover', function (event) {
        if (!active && !hovered) {
            img.style.transform = 'scale(1.05)';
            hovered = true;
        }
    });
    img.addEventListener('mouseout', function (event) {
        if (!active && hovered) {
            img.style.transform = '';
            hovered = false;
        }
    });
});
document.addEventListener('click', function (event) {
    var isClickedIm = Array.prototype.slice.call(img).some(function (img) { return img.contains(event.target); });
    var isClicked = modal.contains(event.target);
    if (!isClickedIm && !isClicked && active) {
        overlay.style.visibility = 'hidden';
        overlay.style.opacity = '0';
        modal.style.transform = 'scale(0)';
        document.body.style.overflow = 'auto';
        active = false;
        hovered = false;
        ndouble = false;
        double = false;
    }
});
modalIm.addEventListener('click', function (event) {
    if (active && !double && ndouble) {
    }
    if (active && double && !ndouble) {
    }
});
