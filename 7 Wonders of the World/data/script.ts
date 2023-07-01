const img : NodeListOf<HTMLImageElement> = document.querySelectorAll('.img'),
mod: HTMLImageElement = document.getElementById('modale-img') as HTMLImageElement,
overlay : HTMLElement = document.getElementById('overlay'),
closeButton : HTMLElement = document.getElementById('closeButton');
let active : boolean = false, hovered = false, double = false, ndouble = false;

img.forEach((img : HTMLImageElement) => {
    img.addEventListener('click', (event : Event) => {
        const currImg: HTMLImageElement = event.target as HTMLImageElement;
        // if (!active){
        //     img.style.transform = 'scale(2)';
        //     img.style.zIndex = '2';
        //     active = true;
        //     ndouble = true;
        // }

        if (!active){
            overlay.style.display = 'flex';
            mod.src = currImg.src;
        }

        else if (active && ndouble && !double){
            img.style.transform = 'scale(2.3)';
            ndouble = false;
            double = true;
        }

        else if (active && double && !ndouble){
            img.style.transform = 'scale(2)';
            double = false;
            ndouble = true;
        }
    });

    img.addEventListener('mouseover', (event : Event) => {
        if (!active && !hovered){
            img.style.transform = 'scale(1.05)';
            hovered = true;
        }
    });

    img.addEventListener('mouseout', (event : Event) => {
        if (!active && hovered){
            img.style.transform = '';
            hovered = false;
        }
    })
});

document.addEventListener('click', (event : Event) => {
    const isClicked = Array.prototype.slice.call(img).some((img: HTMLElement) => img.contains(event.target as Node));
  
    if (!isClicked && active){
        img.forEach((img: HTMLElement) => {
            img.style.transform = 'scale(1)';
            img.style.zIndex = '1';
        });
        active = false;
        hovered = false;
        ndouble = false;
        double = false;
    } 
});

closeButton.addEventListener('click', () => {
    overlay.style.display = 'none';
});
