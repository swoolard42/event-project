<script src= "https://unpkg.com/flickity@2/dist/flickity.pkgd.min.js"></script>

var elem = document.querySelector('.main-carousel');
var flkty = new Flickity( elem, {
  // options
  cellAlign: 'left',
  contain: true,
  freeScroll: true,
  wrapAround: true,
});

// element argument can be a selector string
//   for an individual element
var flkty = new Flickity( '.main-carousel', {
  // options
});