export class App {
  init() {
    this.Workingslider();
  }

Workingslider(){

$('.working-slick').slick({
  dots: true,
  infinite: true,  
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,

});
}

}
