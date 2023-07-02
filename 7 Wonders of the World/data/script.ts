const img : NodeListOf<HTMLImageElement> = document.querySelectorAll('.img'),
modalIm: HTMLImageElement = document.getElementById('modal-img') as HTMLImageElement,
overlay : HTMLDivElement = document.getElementById('overlay') as HTMLDivElement,
modal: HTMLDivElement = document.getElementById('modal') as HTMLDivElement,
closeButton : HTMLElement = document.getElementById('closeButton') as HTMLButtonElement;
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
    const isClickedIm = Array.prototype.slice.call(img).some((img: HTMLElement) => img.contains(event.target as Node));
    const isClicked = modal.contains(event.target as HTMLDivElement);

    if (!isClickedIm && !isClicked && active){
        overlay.style.visibility = 'hidden'
        overlay.style.opacity = '0';
        modal.style.transform = 'scale(0)';
        document.body.style.overflow = 'auto';
        active = false;
        hovered = false;
        ndouble = false;
        double = false;
    } 
});

modalIm.addEventListener('click', (event : Event) => {
    if (active && !double && ndouble){

    }

    if (active && double && !ndouble){

    }
})