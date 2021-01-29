  function Slider() {
    this.prevBut = null; 
    this.nextBut = null; 
    this.carImg = null; 
    this.changeInd = 0;
    this.carArey = [];
    this.start = function (element){
        // add event   
        this.prevBut = element.querySelector('.prev');
        this.nextBut = element.querySelector('.next');
        this.carImg = element.querySelector('.car');
        this.prevBut.addEventListener('click', onPrev = (e) => {
            this.changeInd--;
            this.carImg.src = this.carArey[this.changeInd];
            if (this.changeInd === 0) {
                this.prevBut.disabled = true;
            };
            }
        );
        this.nextBut.addEventListener('click', onNext = (e) => {
            this.changeInd++;
            this.carImg.src = this.carArey[this.changeInd];
            this.prevBut.disabled = false;
            if (this.changeInd === this.carArey.length-1) {
                this.nextBut.disabled = true;
            };
        } );
        this.carArey.push('https://www.ford.co.nz/content/dam/Ford/website-assets/ap/nz/Cars/Mustang-Desktop.jpg/_jcr_content/renditions/small.jpeg');
        this.carArey.push('https://www.autocar.co.uk/sites/autocar.co.uk/files/styles/gallery_slide/public/images/car-reviews/first-drives/legacy/98_-_fastest_accelerating_road_cars_-_ferrari_f8_tributo.jpg?itok=cK2YYgq2');
        this.carArey.push('https://img.etimg.com/thumb/width-1200,height-900,imgsize-65522,resizemode-1,msid-67102461/wealth/spend/best-cars-to-buy-in-different-price-ranges-2019.jpg');
        this.carArey.push('https://cdn.jdpower.com/JDPA_2020%20Audi%20A3%20Dark%20Gray%20Front%20View.jpg');
        this.carImg.src = this.carArey[this.changeInd];
        //off disabled
        if (this.changeInd === 0) {
            this.prevBut.disabled = true;
        }    
    }
}


// const sliderFatory = {
//     callSlider : () => {
//         let slider = new Slider();
//         return slider;
//     }
// }



   