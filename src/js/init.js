var elem = document.querySelector('.grid');
var msnry = new Masonry(elem, {
    itemSelector: '.grid-item',
    gutter: 10,
});

var msnry = new Masonry('.grid', {
    horizontalOrder: true
});