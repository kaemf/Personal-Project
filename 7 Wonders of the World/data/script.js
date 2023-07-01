var img = document.querySelectorAll('.img'), mod = document.getElementById('modale-img'), overlay = document.getElementById('overlay'), closeButton = document.getElementById('closeButton');
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
            overlay.style.display = 'flex';
            mod.src = currImg.src;
        }
        else if (active && ndouble && !double) {
            img.style.transform = 'scale(2.3)';
            ndouble = false;
            double = true;
        }
        else if (active && double && !ndouble) {
            img.style.transform = 'scale(2)';
            double = false;
            ndouble = true;
        }
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
    var isClicked = Array.prototype.slice.call(img).some(function (img) { return img.contains(event.target); });
    if (!isClicked && active) {
        img.forEach(function (img) {
            img.style.transform = 'scale(1)';
            img.style.zIndex = '1';
        });
        active = false;
        hovered = false;
        ndouble = false;
        double = false;
    }
});
closeButton.addEventListener('click', function () {
    overlay.style.display = 'none';
});
